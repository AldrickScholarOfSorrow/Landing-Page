from flask import Blueprint, jsonify, request
from models.conflito_model import ConflictsModel


# Cria o Blueprint do Flask
conflito_bp = Blueprint("conflicts_bp", __name__, url_prefix="/conflicts")

# Instancia o modelo
conflicts_model = ConflictsModel()

# Rota para listar todos os conflitos
@conflito_bp.route("/", methods=["GET"])
def listar_conflitos():
    all_conflicts = conflicts_model.get_all_conflicts()
    return jsonify(all_conflicts)

# Rota para buscar um conflito específico
@conflito_bp.route("/<int:conflict_id>", methods=["GET"])
def obter_conflito(conflict_id):
    conflict = conflicts_model.get_conflict_by_id(conflict_id)
    if conflict:
        return jsonify(conflict)
    return jsonify({"erro": "Conflito não encontrado"}), 404

# Rota para criar um novo conflito
@conflito_bp.route("/", methods=["POST"])
def criar_conflito():
    data = request.get_json()
    # Cria um novo conflito usando os dados do formulário e salva no arquivo JSON
    new_conflict = conflicts_model.create_conflict_mock(data)
    return jsonify(new_conflict), 201

# Rota para deletar um conflito
@conflito_bp.route("/<int:conflict_id>", methods=["DELETE"])
def deletar_conflito(conflict_id):
    success = conflicts_model.delete_conflict(conflict_id)
    if success:
        return jsonify({"message": "Conflito deletado com sucesso"}), 200
    return jsonify({"erro": "Conflito não encontrado"}), 404

# Rota para atualizar um conflito
@conflito_bp.route("/<int:conflict_id>", methods=["PUT"])
def atualizar_conflito(conflict_id):
    data = request.get_json()
    updated_conflict = conflicts_model.update_conflict(conflict_id, data)
    if updated_conflict:
        return jsonify(updated_conflict), 200
    return jsonify({"erro": "Conflito não encontrado"}), 404
