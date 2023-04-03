const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/register");
const schema=new mongoose.schema({
  name:string,
  class:string,
  age:number,
  address:string
});
const insert=async ()=>{
let model=mongoose.model("student",schema);
let qry=new model({name:"Anil",class:"Bachelor",age:21,address:"Jhapa"});

//this is optional
let result=await qry.save();
console.log(result);
};
insert();
