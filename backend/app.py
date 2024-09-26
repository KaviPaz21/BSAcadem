from flask import Flask, abort ,send_file, request, jsonify
import secrets
from chat import assistent

from flask_cors import CORS
app = Flask(__name__)
CORS(app , supports_credentials=True )

@app.route("/")
def home():
    #sec = secrets.token_hex(16)
    return "sec"

@app.route("/chatdata" , methods=["POST"])
def chat():
    data = request.get_json()
    prompt = data.get("promt")
    newprompt = f"provide output as HTML tags which can display as inner HTML for {prompt}"
    ass = assistent()
    r = ass.chat(prompt)
    return jsonify({"res":r})





if __name__ == '__main__':
    app.run(port =5000 , debug =True)