const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/register");
const schema=new mongoose.schema({
  name:string,
  class:string,
  age:number,
  address:string
});
const read=async ()=>{
  let model=mongoose.model("student",schema);
  let qry=await model.find({});
  console.log(qry);
}
read();