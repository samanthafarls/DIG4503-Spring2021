import MongoClient from 'mongodb';

const url = "mongodb+srv://SamanthaFarls:e2zNEjbi30JSuwkN@cluster0.yuzwq.mongodb.net";

export default class Database{
   constructor(){
      this.connection = null;
      this.database = null;
      this.collection = null;
   }
   async connect(){
       this.connection = await MongoClient.connect(url, {useUnifiedTopology: true});
       this.database = this.connection.db("lab10");
       this.collection = this.database.collection("people");
   }

  async createOne(person){

       //adds new person
      await  this.collection.insertOne(
           {"firstName": "Samantha",
             "lastName": "Farls",
             "favoriteColor": "red" 
            }
       )
       return {person: person};
        }

    async readOne(person){
       //searches for person
     let result = await this.collection.findOne(
           {
               "firstName": person,
               "lastName": person,
               "favoriteColor": person
           }
       )
       let result = {person: "not found"};

       return result;
   }


   close(){
       if(this.collection != null){
           this.connection.close();
       }
   }
}