import { MongoC, MongoClient } from 'mongodb'

//  /api/new-meetup
// POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const { title, image, address, description } = data;
    // must add error handling here!! (try catch block)
    const client = await MongoClient.connect('mongodb+srv://nikog:3JHfHiG8lCEvOVpr@cluster0.l8voow3.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
  }
}