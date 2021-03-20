import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get("/people/:person", (req, res) => {

    let result = {name: "Not found"}

    names.forEach((name) => {
        if(req.params.person == name){
            result = {name: name}
        }
    })

    res.json(result);
})

App.put("/people/:person", (req, res) => {
     let person = req.params.person;
     names.push(person);
     res.json({name: req.params.person});
})

App.get("/search/:name", (req, res) => {

    let result = {search: ["Not found!"]}

    let namesResult = [];

    names.forEach((value) => {
        if(value.includes(req.params.name)){
           namesResult.push(value);
        }
    })

    if(namesResult.length > 0){
        result = {search: [namesResult]};
    }

    res.json(result);
})

App.listen(port, () => {
    console.log("Server running!");
});