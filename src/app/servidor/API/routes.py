from API import app, database


@app.route("/")
def teste():
    return {"teste": "teste"}
