const express=require('express');
const path=require('path');
const hbs=require('hbs');  //to use partials
const app=express();
const port= process.env.port || 8000;
const templatepath=path.join(__dirname,"../DynamicWebsite/templates/views");
const partialpath=path.join(__dirname,"../DynamicWebsite/templates/partials");
// const staticpath=path.join(__dirname,"../DynamicWebsite/public");    //path of static webpage
app.set("view engine","hbs");  //to use view engine
app.set("views",templatepath);   //to use partials
hbs.registerPartials(partialpath); //to use partials
// app.use(express.static(staticpath));  //for only static page rendering   static filkes will be in public folder

app.get("https://backendweatherapp-tau.vercel.app/",(req,res)=>{
   res.render("index");
})
 app.get('https://backendweatherapp-tau.vercel.app/about',(req,res)=>{
   res.render('about')  //page will be under views folder
})

 app.get('https://backendweatherapp-tau.vercel.app/weather',(req,res)=>{
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