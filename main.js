const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port= process.env.port || 8000;
const templatepath=path.join(__dirname,"../DynamicWebsite/templates/views");
const partialpath=path.join(__dirname,"../DynamicWebsite/templates/partials");
const staticpath=path.join(__dirname,"../DynamicWebsite/public");
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);
// app.use(express.static(staticpath));

app.get("/",(req,res)=>{
   res.render("index");
})
 app.get('/about',(req,res)=>{
   res.render('about')
})

 app.get('/weather',(req,res)=>{
    res.render('weather');
 })

 app.get('*',(req,res)=>{
    res.render('404',{
      errormsg:"Opps! Page Not Found"
    });
 })

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
});