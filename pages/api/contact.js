import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // Validate the data
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    //Store in the database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    //  "mongodb+srv://poohchayodom:7AFCWLVPnbmj5sLb@cluster0.lpvlv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.lpvlv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
      //Connect to database
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect ot database" });
      return;
    }
    const db = client.db();
    //Insert an object into the database collection
    let result;
    try {
      result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
    client.close();

    // console.log(newMessage);
    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}
