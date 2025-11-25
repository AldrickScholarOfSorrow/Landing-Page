from flask import Flask
from flask_cors import CORS
from controllers.conflito_controller import conflito_bp

# Cria a instância da aplicação Flask
app = Flask(__name__)

# Habilita o CORS para todas as origens em todas as rotas.
CORS(app)


# Registra o Blueprint que contém as rotas de conflitos
app.register_blueprint(conflito_bp)

# Executa a aplicação
if __name__ == '__main__':
    # O debug=True reinicia o servidor automaticamente a cada alteração no código.
    # O host="0.0.0.0" torna o servidor acessível na sua rede local.
    app.run(host="0.0.0.0", port=5000, debug=True)
