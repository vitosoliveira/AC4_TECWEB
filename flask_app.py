from flask import Flask, render_template
app = Flask(__name__)

@app.route('/inicio')
def artigos():
    return render_template('artigos.html')


@app.route('/login')
def inicio():
    return render_template('index.html')



## Para rodar o projeto em desenvolvimento

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')