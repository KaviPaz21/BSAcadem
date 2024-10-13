from flask import Flask, abort ,send_file, request, jsonify
import secrets
from chat import assistent
import pyodbc

from flask_cors import CORS
app = Flask(__name__)
CORS(app , supports_credentials=True )



server = 'tcp:sqlportfoliobyps.database.windows.net,1433'
database = 'bsalms'
username = 'pasikavinda'
password = 'Pasi123@#'  # Replace with your actual password

# Connection string formatted for ODBC Driver 18
connection_string = (
    'DRIVER={ODBC Driver 18 for SQL Server};'
    f'SERVER={server};'
    f'DATABASE={database};'
    f'UID={username};'
    f'PWD={password};'
    'Encrypt=yes;'  # Ensures encryption for secure connection
    'TrustServerCertificate=no;'  # Do not trust server certificates
    'Connection Timeout=30;'  # Timeout for connection attempts
    

)

# Function to connect to the database
def get_db_connection():
    print("Attempting to connect to the database...")
    try:
        # Attempt to establish a connection to the Azure SQL database
        conn = pyodbc.connect(connection_string)
        print("Database connection successful!")
        return conn
    except Exception as e:
        # Log the error if the connection fails
        print(f"Failed to connect to the database: {e}")
        return None

conn =  get_db_connection()

def datastoring( query , data):
    if conn:
        print(data)
        course = conn.cursor()
        course.execute(query , (*data,))
        conn.commit()
        course.close()
        conn.close()
        return True
    return False






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















#=========================================================================================================================================


#*****************************************Administration Routes***************************************************************************
#------------------------------------------------------------------------------------------------------------------------------------------


@app.route("/register_students" , methods =["POST"])
def Register():
    datas = request.get_json()

    fname = datas.get("fname")
    iname = datas.get("iname")
    mail = datas.get("mail")
    mf = datas.get("mf")
    bd = datas.get("bd")
    school = datas.get("school")
    al = datas.get("al")
    add = datas.get("add")
    nic = datas.get("nic")
    cname = datas.get("cname")
    mobile = datas.get("mobile")
    cluster = datas.get("cluster")

    inserting = [fname, iname , mail , mf , bd , al , add , nic , cname , mobile , cluster ]
    query = "INSERT INTO students (fullname , initials , email , gender , birthday , alyear , homeaddress , nic , classname , phone , usercluster ) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
    
    insertionstatus = datastoring(query , inserting)

    if insertionstatus:
        print("insetion sucess")
        return jsonify({"msg":"sucess"}),200
    else:
        print("insetion fail")
        return jsonify({"msg":"fail"}),500




if __name__ == '__main__':
    app.run(port =5000 , debug =True)