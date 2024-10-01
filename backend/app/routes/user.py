from flask import Blueprint , jsonify ,request ,session
from app import mongo
from werkzeug.security import generate_password_hash,check_password_hash
import jwt
from datetime import datetime ,timedelta
from functools import wraps
import os


user_bp = Blueprint('user' , __name__)

@user_bp.route('/signup' , methods = ['POST'])
def adduser():
    data = request.get_json()
    if not data or 'username' not in data or 'role' not in data:
        return jsonify({"error": "Invalid input"}), 400
    data['password'] = generate_password_hash(data['password'] )
    data.update({"cart" : [] , "time" : datetime.utcnow()})
    try:

        result = mongo.db.users.insert_one(data)
        return jsonify({"message" : f"{data['username']} added successfully "})
        # return jsonify({"message" : data })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@user_bp.route('/login' , methods= ['POST'])
def login():
    data = request.get_json()  # if you're sending JSON from Postman
    username = data.get('username')
    password = data.get('password')
    
    print(f"Username: {username}, Password: {password}")
    user = mongo.db.users.find_one({'username' : username})

    if user:
        if check_password_hash(user['password'] , password):
            session['logged_in'] = True
            token = jwt.encode({
            "user" : username,
            'exp' : str(datetime.utcnow() + timedelta(seconds=10))   
            }, os.getenv('SECRET_KEY'),algorithm="HS256"  )

            return jsonify({"token": token})  # No need for .decode('utf-8') with modern JWT libraries

        else:
             return jsonify({"message"  : "invalid password"}) , 401
    else:
         return jsonify({"message"  : "user not found"}) , 401
        

def token_required(func):
    @wraps(func)
    def decorated(*args ,**kwargs):
        token = request.args.get("token")
        if not token:
            return jsonify({'Alert':"token is missing"}) , 401 #unauthorized
        try:
            data = jwt.decode(token, os.getenv('SECRET_KEY'), algorithms=["HS256"])
        except:
            return jsonify({'Alert' : 'Invalid Token'}) , 403 #forbodden 
        return func(*args , **kwargs)
    return decorated