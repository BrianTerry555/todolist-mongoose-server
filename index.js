let mongoose = require("mongoose");
let Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/todos");

//the structure of the data in your collection
let todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  dateDue: {
    type: Date,
    default: Date.now
  },
  price: Number,

});

//mongoose.model("collection name", schema)
let Blog = mongoose.model("todolist", todoSchema);

// //create a todo
// let newTodo = new Todo({
//   title: "Go buy Grapes",
//   desrciption: "Go to store",
//   price: 4
// });
//
// //save the created todo to the mongodb database
// newTodo.save((err, data)=>{
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Item was saved to database");
//     console.log(data);
//   }
// });
// //end of create

// //read all data
// Todo.find({}, (err, data)=>{
//   if(err) {
//       console.log(err);
//     } else {
//       console.log("Found the data");
//       console.log(data);
//     }
// });

// //read one data
// Todo.findOne({_id: ""}, (err, data)=>{
//   if(err) {
//       console.log(err);
//     } else {
//       console.log("Found the item by id");
//       console.log(data);
//     }
// });

// Todo.findByIdAndRemove("_id#", (err, data)=>{
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Deleted the item by id");
//     console.log(data);
//   }
// });



let newData = {
  title: "updated title",
  description: "updated decription"
}

Todo.findByIdAndUpdate("_id#", newData, {new: true}, (err, data)=>{
  if(err) {
    console.log(err);
  } else {
    console.log({message: "Updated the item by id", data: data});
    // or can be like this
    // console.log("Updated the item by id");
    // console.log(data);
  }
});
