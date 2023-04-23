// import th model
const Todo = require('../models/Todo');

// define route handler

exports.createTodo = async(req,res) =>{
    try{
        // extract title and description from request body
        const {title, description} = req.body;
        // create a new Todo obj and insert in DB
        const response = await Todo.create({title, description});

        // send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Entry successfully created",
            }
        )
    }
    catch(error){
        console.log(error);
        console.error(error.message);
        res.status(500)
        .json({
            success: false,
            data: 'Internal server error',
            message: error.message,
        })
    }
}