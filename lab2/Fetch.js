import axios from 'axios';
import chalk from 'chalk';

class Fetch{
    constructor(pokemon, color){
        this.pokemon = pokemon;
        this.color = color;
    }
    fetch(){

        axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)
        .then((response) =>{
            const api = response.data;
            console.log(chalk.hex(this.color)("This Pokemon's name is" + api.name + "and its id is" + api.id));
        })
        .catch((error) => {
          console.log(chalk.red("Invalid name or ID") + error);
        });
    }   
      
    }


export default Fetch;