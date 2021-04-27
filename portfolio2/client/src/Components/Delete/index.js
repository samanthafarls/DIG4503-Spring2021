import Axios from 'axios';
import { useState } from 'react';

function Delete(){
    const [removeISBN, setRemoveISBN] = useState("");
    const [removeResults, setRemoveResults] = useState("");

    const Remove = async () => {
      const response = await  Axios.delete("http://localhost:45030/books/" + removeISBN, {
          params: {
              "books": removeISBN
          }
            
        })
        console.log(response.data);
    }

    return (
        <div>
            <input type= "text" onChange={(event) => setRemoveISBN(event.target.value)} />
            <button onClick= {() => Remove()}>Remove Book By ISBN</button>
            <p>Deleted:{removeISBN}</p>
        </div>
    )

}

export default Delete;