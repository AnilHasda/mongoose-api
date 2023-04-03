const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/register");
const schema=new mongoose.schema({
  name:string,
  class:string,
  age:number,
  address:string
});
const delete=async ()=>{
  let model=mongoose.model("student",schema);
 let result=await model.deleteOne({name:"Anil"});
 console.log(result);
}
delete();