import Axios from 'axios';
import { useState } from 'react';

function Update(){
    //update ISBN
    const [updateISBN, setUpdateISBN] = useState("");
    const [updateResult, setUpdateResult] = useState("");
    //update title
    const [updateTitle, setUpdateTitle] = useState("");
    const [titleResult, setTitleResult] = useState("");
    //update author
    const [updateAuthor, setUpdateAuthor] = useState("");
    const [authorResult, setAuthorResult] = useState("");
    //update description
    const [updateDescription, setUpdateDescription] = useState("");
    const [descriptionResult, setDescriptionResult] = useState("");

    const Patch = async () => {
      const response = await  Axios.patch("http://localhost:45030/books/" + updateISBN, {
           "title": updateTitle,
           "author": updateAuthor,
           "description": updateDescription
        })
        console.log(response.data);
    }

    return (
        <div>
            <input type= "text" onChange={(event) => setUpdateISBN(event.target.value)} />
            <button onClick= {() => Patch()}>Update Book By ISBN</button>
            <p>{updateISBN}</p>
            <input type= "text" onChange={(event) => setUpdateTitle(event.target.value)} />
            <button onClick= {() => Patch()}>Update Book By Title</button>
            <p>{updateTitle}</p>
            <input type= "text" onChange={(event) => setUpdateAuthor(event.target.value)} />
            <button onClick= {() => Patch()}>Update Book By Author</button>
            <p>{updateAuthor}</p>
            <input type= "text" onChange={(event) => setUpdateDescription(event.target.value)} />
            <button onClick= {() => Patch()}>Update Book By Description</button>
            <p>{updateDescription}</p>
        </div>
    )
}

export default Update;