from flask import Flask
from flask_pymongo import PyMongo
from app.config import DevelopmentConfig
from dotenv import load_dotenv
import os

app = Flask(__name__)

app.secret_key = os.getenv('SECRET_KEY')

app.config.from_object(DevelopmentConfig)
mongo = PyMongo(app)
# Define a route for the home page

from app.routes.courses import courses_bp
app.register_blueprint(courses_bp)
from app.routes.user import user_bp
app.register_blueprint(user_bp)

@app.route('/home')
def home():
    collections = mongo.db._list_collection_names()
    return {"collections": collections}



# Run the Flask server
# if __name__ == '__main__':
#     app.run(debug=True)
