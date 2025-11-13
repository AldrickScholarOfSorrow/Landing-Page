from flask import Flask
from flask_cors import CORS
CORS(app)
from controllers.conflito_controller import conflito_bp

# Cria a instância da aplicação Flask
app = Flask(__name__)
# Habilita o CORS para permitir requisições de qualquer origem.
CORS(app)


# Registra o Blueprint que contém as rotas de conflitos
app.register_blueprint(conflito_bp)

# Executa a aplicação
if __name__ == '__main__':
    # O debug=True reinicia o servidor automaticamente a cada alteração no código.
    # Em produção, isso deve ser False.
    app.run(debug=True)
