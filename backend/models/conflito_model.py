from db import get_connection

class ConflictsModel:
    def _to_dict(self, cursor, row):
        """Converte uma linha do banco de dados em um dicionário."""
        if not row:
            return None
        # Obtém os nomes das colunas da descrição do cursor
        col_names = [desc[0] for desc in cursor.description]
        return dict(zip(col_names, row))

    def get_all_conflicts(self):
        """Busca todos os conflitos do banco de dados."""
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT id, nome, descricao, regiao, to_char(data_inicio, 'DD/MM/YYYY') as data_inicio, paises FROM conflitos ORDER BY id DESC;")
                # Converte cada linha em um dicionário
                return [self._to_dict(cur, row) for row in cur.fetchall()]

    def get_conflict_by_id(self, conflict_id):
        """Busca um conflito específico pelo ID no banco de dados."""
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    "SELECT id, nome, descricao, regiao, to_char(data_inicio, 'DD/MM/YYYY') as data_inicio, paises FROM conflitos WHERE id = %s;",
                    (conflict_id,)
                )
                return self._to_dict(cur, cur.fetchone())

    def create_conflict(self, data):
        """
        Cria um novo conflito no banco de dados.
        Retorna o conflito recém-criado.
        """
        # Extrai os dados, usando None como padrão para campos opcionais
        nome = data.get('nome')
        descricao = data.get('descricao')
        regiao = data.get('regiao')
        data_inicio = data.get('data_inicio') # Espera formato 'DD/MM/YYYY'
        paises = data.get('paises', [])

        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO conflitos (nome, descricao, regiao, data_inicio, paises)
                    VALUES (%s, %s, %s, TO_DATE(%s, 'DD/MM/YYYY'), %s)
                    RETURNING id, nome, descricao, regiao, to_char(data_inicio, 'DD/MM/YYYY') as data_inicio, paises;
                    """,
                    (nome, descricao, regiao, data_inicio, paises)
                )
                new_conflict = self._to_dict(cur, cur.fetchone())
                return new_conflict

    def delete_conflict(self, conflict_id):
        """Deleta um conflito pelo ID no banco de dados."""
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM conflitos WHERE id = %s;", (conflict_id,))
                # rowcount retorna o número de linhas afetadas. Se for > 0, a exclusão funcionou.
                return cur.rowcount > 0

    def update_conflict(self, conflict_id, data):
        """Atualiza um conflito existente pelo ID no banco de dados."""
        # Extrai os dados
        nome = data.get('nome')
        descricao = data.get('descricao')
        regiao = data.get('regiao')
        data_inicio = data.get('data_inicio')
        paises = data.get('paises', [])

        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE conflitos
                    SET nome = %s, descricao = %s, regiao = %s, data_inicio = TO_DATE(%s, 'DD/MM/YYYY'), paises = %s
                    WHERE id = %s
                    RETURNING id, nome, descricao, regiao, to_char(data_inicio, 'DD/MM/YYYY') as data_inicio, paises;
                    """,
                    (nome, descricao, regiao, data_inicio, paises, conflict_id)
                )
                updated_conflict = self._to_dict(cur, cur.fetchone())
                return updated_conflict

    def get_stats(self):
        """Busca estatísticas gerais sobre os conflitos."""
        with get_connection() as conn:
            with conn.cursor() as cur:
                # Consulta 1: Contar o número total de conflitos
                cur.execute("SELECT COUNT(*) FROM conflitos;")
                total_conflitos = cur.fetchone()[0]

                # Consulta 2: Encontrar a região com mais conflitos
                cur.execute("""
                    SELECT regiao, COUNT(id) as count
                    FROM conflitos
                    WHERE regiao IS NOT NULL AND regiao != ''
                    GROUP BY regiao
                    ORDER BY count DESC
                    LIMIT 1;
                """)
                hottest_region_row = cur.fetchone()
                regiao_mais_ativa = hottest_region_row[0] if hottest_region_row else "N/A"

                return {"total_conflitos": total_conflitos, "regiao_mais_ativa": regiao_mais_ativa}
