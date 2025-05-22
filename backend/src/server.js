import express from 'express';
import { MongoClient } from 'mongodb';
const app = express();
app.use(express.json());

app.get('/api/articles/:name', async (req, res) => {
const { name } = req.params;

const client = new MongoClient('mongodb://127.0.0.1:27017');
await client.connect();

const db = client.db('react-blog-db'); // raect-blog-db is the name of the database

const article = await db.collection('articles').findOne({ name });

if (article) {
  res.json(article);
}else{
  res.status(404).send('Article not found');

}



});

app.put('/api/articles/:name/upvote', async(req, res) => {
  const{ name } = req.params;
  //const article = articlesInfo.find(article => article.name === name);

const client = new MongoClient('mongodb://127.0.0.1:27017');
await client.connect();

const db = client.db('react-blog-db'); // raect-blog-db is the name of the database
await db.collection('articles').updateOne({ name }, { 
  $inc: { upvotes: 1 },
  $set: { upvotes: 100}
 })



  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes????d??`);
  } else {
    res.send('The article doesn\'t exist');
    }
  });

app.post('/api/articles/:name/comment', (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const article = articlesInfo.find(article => article.name === name);
  if(article){
    article.comments.push({ postedBy, text });
    res.send(article.comments);
  }else{
    res.send('The article doesn\'t exist');
  }
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000/hello');
});