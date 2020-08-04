const express = require('express');
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
app.use(logger);

function logger (req, res, next) {
    console.log('request fired ' + req.url + ' ' + req.method);
    next();
}

let posts = [
    {
        id:'f43f',
        author: 'Nir Fainshtein',
        content: 'Very good post'
    },
    {
        id:'f4g54sdu6',
        author: 'Matan Cohen',
        content: 'Very bad post'
    }
];

app.post('/post', (req, res) =>{
    console.log(req.body);
    posts.push(req.body);
    res.send(req.body);
    debugger;
});


app.delete('/post/:id', (req, res) =>{
    posts.forEach((post, index) =>{
        if(post.id === req.params.id){
            posts.splice(index, 1);
            res.send(req.params.id + ' deleted');
        }
    });
});


app.put('/post/:id', (req, res) =>{
    posts.forEach((post, index) =>{
        if(post.id === req.params.id){
            posts[index] = req.body;
            res.send(req.body);
        }
    });
});


app.get('/post/:id', (req, res) =>{
    for(let post of posts){
        if(post.id === req.params.id){
            res.send(post);
        }
    }
});

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/', (req, res) => {
    res.send('Hello');
});


app.listen(3001);