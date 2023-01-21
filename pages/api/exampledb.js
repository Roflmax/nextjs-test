const { MongoClient } = require('mongodb');


export default async function handler(req, res) {

  const uri = 'mongodb://0.0.0.0:27017';
  const client = new MongoClient(uri);

  console.log(req.body.user_info); // это бужет выводится в терминале

  try {
    await client.connect();
    // этот метод получает список баз данных, поэтому замените на то, что требуется вам
    //const result = await client.db().admin().listDatabases();
    const db = client.db('mydatabase');
    const usersCollection = db.collection('users');
    if ((await usersCollection.find({identification_test:(req.body.user_info.identification_test)}).toArray()).length==0){
      await usersCollection.insertOne(req.body.user_info);
    }
    else{
      await usersCollection.findOneAndDelete({identification_test:(req.body.user_info.identification_test)})
      await usersCollection.insertOne(req.body.user_info);
    }
    res.status(200).json({ message: 'User info saved successfully' });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }


}
