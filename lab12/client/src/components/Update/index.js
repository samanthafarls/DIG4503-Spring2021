import Axios from 'axios';
import { useState } from 'react';

function Update(){
    //update ISBN
    const [reviseISBN, setReviseISBN] = useState("");
    const [updateResult, setUpdateResult] = useState("");
    //update title
    const [reviseTitle, setReviseTitle] = useState("");
    const [titleResult, setTitleResult] = useState("");
    //update author
    const [reviseAuthor, setReviseAuthor] = useState("");
    const [authorResult, setAuthorResult] = useState("");
    //update description
    const [reviseDescription, setReviseDescription] = useState("");
    const [descriptionResult, setDescriptionResult] = useState("");

    const Patch = async () => {
      const response = await  Axios.patch("http://localhost:45030/books/" + reviseISBN, {
           "title": reviseTitle,
           "author": reviseAuthor,
           "description": reviseDescription
        })
        console.log(response.data);
    }

    return (
        <div>
            <input type= "text" onChange={(event) => setReviseISBN(event.target.value)} />
            <button onClick= {() => Patch()}>Update Book By ISBN</button>
            <p>{reviseISBN}</p>
            <input type= "text" onChange={(event) => setReviseTitle(event.target.value)} />
            <button onClick= {() => Patch()}>Update Book By Title</button>
            <p>{reviseTitle}</p>
            <input type= "text" onChange={(event) => setReviseAuthor(event.target.value)} />
            <button onClick= {() => Patch()}>Update Book By Author</button>
            <p>{reviseAuthor}</p>
            <input type= "text" onChange={(event) => setReviseDescription(event.target.value)} />
            <button onClick= {() => Patch()}>Update Book By Description</button>
            <p>{reviseDescription}</p>
        </div>
    )
}

export default Update;