// in this the common function common connection is stored to use multiply
// or multiple operations
const {MongoClient} = require ('mongodb');
//  const {MongoClient} = require ('mongodb').MongoClient;//same thing
const url='mongodb://localhost:27017'; 
const database='youthwood-pictures';
const Client = new MongoClient(url); 

async function dbConnect(){
    let result =await Client.connect();
    let db = result.db(database); 
    return db.collection('content'); // simply returning connection
}

module.exports=dbConnect;