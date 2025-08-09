import express from 'express';

let articleInfo =[{
    name: 'First-Article',
    upvoted: 0,
    comment: [],
},{
    name: 'Second-Article',
    upvoted: 0,
    comment: [],
},{
    name: 'Third-Article',
    upvoted: 0,
    comment: [],
},{
    name: 'Learn-React',
    upvoted: 0,
    comment: [],
}]


const app = express();
app.use(express.json());
app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articleInfo.find(a => a.name === name);
    if(!article){
    article.upvoted += 1;
    res.send(`The article "${name}" now has ${article.upvoted} upvotes.`);
    }else{
        res.status('the article does not exist');
    }
});
app.post('/api/articles/:name/comment', (req, res) => {
    const { name } = req.params;
    const {postBy, text} = req.body;

    const article = articleInfo.find(a => a.name === name);
    if(article){
        article.comment.push({ postBy, text })
        res.send(article.comment);
    }else{
        res.send ('that article no exist')
    }
        
});

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});