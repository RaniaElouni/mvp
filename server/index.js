const express = require("express");
const {get,posst,delete1,update}=require("./database-mongo/index.js")




const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/items", async(req,res)=>{
  try{
    const got= await get()
    res.json(got)
  }catch(err){
    console.log(err);
  }
} );
app.post("/api/items", async(req,res)=>{
  try{
    const mem={imageUrl:req.body.imageUrl,
    title: req.body.title,
    description: req.body.description,
    location:req.body.location}
    const got= await posst(mem)
    res.json(got)
  }catch(err){
    console.log(err);
  }
} )


app.delete("/api/items",async(req,res)=> {
  try{
      const del1={
          title:req.body.title
      }
 const dell = await delete1(del1)
 res.json(dell)
  }catch(err){
      console.log(err);
  }
})


app.put("/api/items/:title",async(req,res)=> {
  try{
  const up={title:req.params.title}
  const up1={description:req.body.description}
  const updated=await update(up,up1)
  res.json(updated)
  }catch(err){
      console.log(err);
  }
})

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
