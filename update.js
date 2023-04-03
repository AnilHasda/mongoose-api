const mongoose=require("mongoose");
mongoose.connet("mongodb://localhost:27017/register");
const schema=new mongoose.schema({
  name:string,
  class:string,
  age:number,
  address:string
});
const update=async ()=>{
  let model=mongoose.model("student",schema);
  let qry=await model.updateOne({name:"Anil"});
  console.log(qry);
}
update();