from flask import Blueprint , jsonify
from app import mongo

courses_bp = Blueprint('courses' , __name__)

@courses_bp.route('/courses', methods=['GET'])
def get_all_courses():
    # Fetch all courses from the 'development', 'datascience', and 'design' collections
    development_courses = mongo.db.development.find()
    datascience_courses = mongo.db.datascience.find()
    design_courses = mongo.db.design.find()

    # Convert MongoDB cursors to lists and format the output
    development= []
    datascience= []
    design = []

    for course in development_courses:
        course['_id'] = str(course['_id'])  # Convert ObjectId to string
        development.append(course)

    for course in datascience_courses:
        course['_id'] = str(course['_id'])  # Convert ObjectId to string
        datascience.append(course)

    for course in design_courses:
        course['_id'] = str(course['_id'])  # Convert ObjectId to string
        design.append(course)

    return jsonify({"development" : development  , "datascience" : datascience , "design" : design})

@courses_bp.route('/courses/development')
def get_development_courses():  
    courses = mongo.db.development.find()
    course_list = []
    for course in courses:
        course['_id'] = str(course['_id']) 
        course_list.append(course)
    
    return jsonify(course_list), 200


@courses_bp.route('/courses/design')
def get_design_courses():  
    courses = mongo.db.design.find()
    course_list = []
    for course in courses:
        course['_id'] = str(course['_id']) 
        course_list.append(course)
    
    return jsonify(course_list), 200


@courses_bp.route('/courses/datascience')
def get_datascience_courses():  
    courses = mongo.db.data_science.find()
    course_list = []
    for course in courses:
        course['_id'] = str(course['_id']) 
        course_list.append(course)
    
    return jsonify(course_list), 200
