from flask import Flask
from flask_cors import CORS
from controllers.conflito_controller import conflito_bp

# Cria a instância da aplicação Flask
app = Flask(__name__)

# Lista de origens permitidas.
origins = [
    "http://localhost:5173",  # Para desenvolvimento local
    "https://landing-page-sigma-eosin.vercel.app"  # Seu site em produção na Vercel
]

# Habilita o CORS, especificando as origens permitidas para todos os recursos.
CORS(app, resources={r"/*": {"origins": origins}})


# Registra o Blueprint que contém as rotas de conflitos
app.register_blueprint(conflito_bp)

# Executa a aplicação
if __name__ == '__main__':
    # O debug=True reinicia o servidor automaticamente a cada alteração no código.
    # O host="0.0.0.0" torna o servidor acessível na sua rede local.
    app.run(host="0.0.0.0", port=5000, debug=True)
