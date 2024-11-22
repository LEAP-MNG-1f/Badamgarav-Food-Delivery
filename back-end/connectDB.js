import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/";

const connectDb = async () => {
  const client = new MongoClient(connectionString); //Tanoulj bui heseg
  let connection;
  try {
    connection = await client.connect(); //TUHAIN clustertai holbogdoj bna
  } catch (error) {
    console.error("failed to connetc db");
  }
  let db = connection.db("sample_mflix"); //DB ruu holbogdoj bna
  return db;
};

export default connectDb;

// ("mongodb+srv://badamaa312:uZuDbfFT9UrqWqE7@cluster0.i47sl.mongodb.net/");
