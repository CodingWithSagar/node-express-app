const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = " ";
const client = new MongoClient(url);

// Database Name
const dbName = 'UsersData';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // Inserting Document
const data = {
    Firstname : "Sagar",
    Lastname : "Kulkarni",
    City : "Mumbai",
    Age : 29
}

  const insertResult = await collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);

// Read
  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


