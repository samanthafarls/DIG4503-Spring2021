import Express from 'express';
import Database from './Database.js';
import CORS from 'cors';

const App = Express();
const port = 45030;
const d = new Database();
App.use(Express.json());
App.use(CORS());

d.connect();

App.put('/books/:ISBN', async (req, res) => {
    const books = req.params.ISBN;
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
  let result = await d.createOne(books, title, author, description);
    res.json(result)
})

App.get('/books/:ISBN', async (req, res) => {
    const books = req.params.ISBN;
    const result = await d.readOne(books)
    res.json(result)
})

App.post('/books/search', async (req, res) => {
     const books = req.params.ISBN;
    const result = await d.readMany(books)
     res.json({
         URLParameters: req.query.result
     })
})

App.patch('/books/:ISBN', async (req, res) => {
      const books = req.params.ISBN;
      const title = req.body.title;
      const author = req.body.author;
      const description = req.body.description;
     const result = await d.updateOne(books, title, author, description)
      res.json(result);
})

App.delete('/books/:ISBN', async (req, res) => {
   const books = req.params.ISBN;
const result = await d.deleteOne(books)
   res.json(result);
})

App.listen(port, () => {
    console.log("server running!");
})