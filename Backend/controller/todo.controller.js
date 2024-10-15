import { Todo } from "../model/todo.model.js";

//Create Todo
export const createTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: req.body.completed || false,
    user: req.user._id,
  });

  try {
    const newTodo = await todo.save();
    res.status(200).json({ message: "Todo Created Successfully :)", newTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error while creating Todo :)", error });
  }
};
//Get Todo
export const getTodo = async (req, res) => {
  try {
    // Fetch todos only for the logged-in user
    const todos = await Todo.find({ user: req.user._id });

    // Send success response with todos
    res.status(200).json({ message: "Todos fetched successfully", todos });
  } catch (error) {
    console.error("Error fetching todos:", error); // Log the error for debugging
    res.status(400).json({ message: "Error occurred while fetching todos" });
  }
};

//Delete Todo
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      res.status(404).json({ message: "Todo Not Found" });
    }
    res.status(200).json({ message: "Todo Deleted Successfully" });
    console.log(todo);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error occuring in deleting Todo" });
  }
};

//Update Todo
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(201).json({ message: "Todo updated Successfully", todo });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error occuring in todo updating" });
  }
};

// try {
//   const allTodos = await Todo.find({ user: req.user._id });
//   if (!allTodos) {
//     return res.status(404).json({ error: "Todo not found" });
//   }
//   res.status(201).json({ message: "Todo Found", allTodos });
// } catch (error) {
//   console.log(error);
//   res.status(400).json({ error: "Error to fetch all todos" });
// }
