import json
import os
from datetime import datetime

class ConflictsModel:
    def __init__(self):
        base_path = os.path.dirname(__file__)
        self.data_path = os.path.join(base_path, "../temporary_data/conflicts_data.json")

        # Abre o arquivo JSON com os dados dos conflitos
        with open(self.data_path, "r", encoding="utf-8") as file:
            self.conflicts = json.load(file)

    def _save_to_file(self):
        """Salva a lista de conflitos atual no arquivo JSON."""
        with open(self.data_path, "w", encoding="utf-8") as file:
            json.dump(self.conflicts, file, ensure_ascii=False, indent=4)

    def get_all_conflicts(self):
        """Retorna todos os conflitos."""
        return self.conflicts

    def get_conflict_by_id(self, conflict_id):
        """Busca um conflito específico pelo ID."""
        return next((c for c in self.conflicts if c["id"] == conflict_id), None)

    def create_conflict_mock(self, data):
        """
        Simula a criação de um novo conflito.
        Adiciona à lista em memória e retorna o novo conflito com um ID.
        """
        # Encontra o maior ID existente e adiciona 1 para criar um novo ID único
        new_id = max(c["id"] for c in self.conflicts) + 1 if self.conflicts else 1
        # Cria um novo conflito combinando o novo ID com os dados recebidos do formulário
        new_conflict = {"id": new_id, **data}
        self.conflicts.insert(0, new_conflict)  # Adiciona no início da lista
        self._save_to_file()  # Salva a alteração no arquivo
        return new_conflict

    def delete_conflict(self, conflict_id):
        """Deleta um conflito pelo ID."""
        initial_length = len(self.conflicts)
        self.conflicts = [c for c in self.conflicts if c["id"] != conflict_id]
        if len(self.conflicts) < initial_length:
            self._save_to_file()
            return True
        return False

    def update_conflict(self, conflict_id, data):
        """Atualiza um conflito existente pelo ID."""
        for i, conflict in enumerate(self.conflicts):
            if conflict["id"] == conflict_id:
                # Atualiza o dicionário mantendo o ID original
                self.conflicts[i] = {"id": conflict_id, **data}
                self._save_to_file()
                return self.conflicts[i]
        return None
