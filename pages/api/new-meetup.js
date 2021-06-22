import {MongoClient} from 'mongodb'
//api/new-meetup

//"mongodb+srv://allord:<password>@cluster0.mg81e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

async function handler(req, res){
    if(req.method === "POST"){
        const data = req.body;
        const {title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://allord:allordP@ssw0rd@cluster0.mg81e.mongodb.net/mmsdb?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({
            message: "meetup Inserted ..."
        });
    }
}

export default handler;