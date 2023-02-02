const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1/memories').then(()=>{ console.log("db connected")}).catch((err)=>{ console.log(err);})

const itemSchema = new mongoose.Schema({
  imageUrl:String,
  title: String,
  description: String,
  
});

const Memory = mongoose.model("memory", itemSchema);

const get=()=>{
  return Memory.find()
}
const posst=(x)=>{
  return Memory.create(x)
}

const delete1=(x)=>{
  return Memory.deleteOne(x)
}

const update=(title,description)=>{
  return Memory.findOneAndUpdate(title,description)
  }




module.exports ={get,posst,delete1,update}