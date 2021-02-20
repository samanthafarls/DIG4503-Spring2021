import Axios from 'axios';
import {useState} from 'react';
import Pokemon from '../Pokemon';


function Search(){
    

    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function searchMonsters(){
        
         setLoading(true);
        
      Axios('https://pokeapi.co/api/v2/pokemon/' + search)
      .then(function(response){
        setPokemon(response.data);
         
        
         
        setLoading(false);
      
      })
      .catch(function(error){
        setError("Not Found!");
      })

      }

      return(
            <div>
                <input type="text" onChange={(event) => {
                    setSearch(event.target.value);
                }

                } />
                <button onClick={() => searchMonsters()
                   
                }>Search</button>
                {
                    <p>Searched: {search }</p>
                }

                {
                    (loading === true) ? (
                        <p>{error}</p>
                    ) : (
                        <div>
                            <Pokemon name={pokemon.name}
                            id={pokemon.id}
                            sprites={pokemon.sprites ? pokemon.sprites.front_default : ''} />
                            </div>
                    )
                }
            </div>
    );
}



 export default Search;