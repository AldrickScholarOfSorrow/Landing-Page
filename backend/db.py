import os
import psycopg
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return psycopg.connect(os.getenv("DATABASE_URL"))

def init_db():
    """Cria a tabela de conflitos se ela não existir."""
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS conflitos (
                    id SERIAL PRIMARY KEY,
                    nome VARCHAR(255) NOT NULL,
                    descricao TEXT,
                    regiao VARCHAR(100),
                    data_inicio DATE,
                    paises TEXT[]
                );
            """)
            print("Tabela 'conflitos' inicializada com sucesso.")

if __name__ == '__main__':
    # Este bloco só será executado ao rodar o script diretamente (ex: python db.py)
    # para criar a tabela no banco de dados pela primeira vez.
    init_db()