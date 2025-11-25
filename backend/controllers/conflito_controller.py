from flask import Blueprint, request, jsonify
from models.conflito_model import get_all_conflicts, create_conflict, update_conflict, delete_conflict, get_conflict_stats


# O url_prefix define que todas as rotas neste arquivo começarão com /conflicts
conflito_bp = Blueprint("conflicts_bp", __name__, url_prefix="/conflicts")

@conflito_bp.route("/stats", methods=["GET"])
def stats_conflitos():
    """Endpoint para obter estatísticas dos conflitos."""
    try:
        stats = get_conflict_stats()
        return jsonify(stats)
    except Exception as e:
        # Em um app real, seria bom logar o erro e.
        return jsonify({"erro": "Ocorreu um erro ao buscar as estatísticas."}), 500

@conflito_bp.route("/all", methods=["GET"])
def get_conflitos():
    """Endpoint para listar todos os conflitos."""
    conflicts = get_all_conflicts()
    return jsonify(conflicts)

@conflito_bp.route("/", methods=["POST"])
def post_conflito():
    """Endpoint para criar um novo conflito."""
    data = request.get_json()
    new_conflict = create_conflict(data)
    return jsonify(new_conflict), 201

@conflito_bp.route("/<int:id>", methods=["PUT"])
def put_conflito(id):
    """Endpoint para atualizar um conflito existente."""
    data = request.get_json()
    updated = update_conflict(id, data)
    return jsonify(updated)

@conflito_bp.route("/<int:id>", methods=["DELETE"])
def delete_conflito_by_id(id):
    """Endpoint para deletar um conflito."""
    delete_conflict(id)
    return jsonify({"mensagem": "Conflito deletado com sucesso"}), 200
