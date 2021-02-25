import Express from 'express';

const App = Express();
const port = 45030;

App.get("/", function(request, response){
    response.send("Hello World!");
});


const me = {
    name: "Samantha",
    color: "red"
}

App.get("/person", function(request, response){
   response.json(me);
});

App.listen(port, function(){
   console.log("Server is running!")
});



