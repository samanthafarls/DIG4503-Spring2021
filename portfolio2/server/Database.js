import MongoClient from 'mongodb';

const URL = 'mongodb+srv://SamanthaFarls:e2zNEjbi30JSuwkN@cluster0.yuzwq.mongodb.net';

export default class Database{
   constructor(){
      this.connection = null;
      this.database = null;
      this.collection = null;
   }
   async connect(){
       this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
       this.database = this.connection.db("lab11");
       this.collection = this.database.collection("books");
   }

//put route
   async createOne(books, title, author, description){
     if(this.collection != null){
      let result = await this.collection.insertOne({
          "books": books,
          "title": title,
          "author": author,
          "description": description
      })
       return {"inserted": result.ops};
     }
    }

    //get route
   async readOne(books){
     if(this.collection != null){
         const result = await this.collection.findOne({
            "books": books
         }) 
         return result;
     } else {
          return {book: "not found"}
     }
    }

     //patch route
   async updateOne(books, title, author, description){
     if(this.collection != null){
          await this.collection.updateOne({
             "books": books
         },
         { $set: {
             "title": title,
             "author": author,
             "description": description
         }
            
         })
         return {"books": books, "title": title, "author": author, "description": description};
     } else {
        return {book: "Could not be updated"}
     }
    }
    
    //delete route
   async deleteOne(books){
    if(this.collection != null){
      const result = await this.collection.deleteOne({"books": books})
      return {"deleted": result.deletedCount}
    } else {
       return {"deleted": 0}
    }
    }

   close(){
    if(this.collection != null){
        this.connection.close();
    }
}
}