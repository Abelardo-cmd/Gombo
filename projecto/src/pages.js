

function index(req, res){
 const filter=req.query
 if (!filter.loc){
    return res.render("index.html")
 }else{
 var axios = require("axios")
 axios.get("https://api.openweathermap.org/data/2.5/weather?q="+filter.loc+"&lang=pt&&units=metric&APPID=6e0fcc1a42fa72c460f7c1ff5d7e7fd1")
 .then(function(response){
 resp=response.data
  resp=response.data
  console.log(resp);
  return res.render("index.html", {resp})
})

.catch((function(error){
 console.warn(error)
 return res.render("index.html", {error})
}))
 }

}

module.exports= {index}