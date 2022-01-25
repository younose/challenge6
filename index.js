const express = require("express");
const app = express();
const { User_Game } = require("./models");
const { User_Game_Biodata } = require("./models");
const { User_Game_history } = require("./models");

const port = 4000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.set("view engine", "ejs");

app.get("/delete/:id", (req, res) => {
  User_Game.destroy({
    where: { id: req.params.id },
  }).then((a) => res.redirect("/"));
});

//post
app.post("/", (req, res) => {
  User_Game.create({
    username: req.body.username,
    password: req.body.password,
    //approved: req.body.approved,
  })
    .then((a) => res.redirect("/"))
    .catch((err) => res.status(400).json("can't create article"));
});

//GET ALL DATA
app.get("/", (req, res) => {
  User_Game.findAll().then((a) => res.render("index", { a: a }));
});

//GET BY ID
app.get("/biodata/:id", (req, res) => {
  User_Game.findOne({
    where: { id: req.params.id },
  })
  
  
  .then((a) => res.render("biodata", { a }));
});

app.get("/history/:id", (req, res) => {
  User_Game.findOne({
    where: { id: req.params.id },
  }).then((a) => res.render("history", { a }));
});


app.get("/edit/:id", (req, res) => {
  User_Game.findOne({
    where: { id: req.params.id },
  }).then((a) => res.render("edit", { a }));
});

//POST
app.post("/goedit/:id", (req, res) => {
  User_Game.update({
    username: req.body.username,
    password: req.body.password,
    
  },
  {
    where: { id: req.params.id}
  })
  .then(() => res.redirect("/"))
    
    .catch((err) => res.status(400).json("Can't create article"));
});

//PUT
// app.put("/posts/:id", (req, res) => {
//   User_Game.update(
//     {
//       username: req.body.username,
//       password: req.body.password,
//     },
//     {
//       where: { id: req.params.id },
//     }
//   )
//     .then((a) => res.status(201).json("Berhasil update"))
//     .catch((err) => res.status(400).json("Can't update article"));
// });

app.get("/posts/:postName", function(req, res){
  const requestedTitle = _.lowerCase(req.params.postName);
  

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);

    if(requestedTitle == storedTitle){
      res.render("post", {
        title : post.title,
        content : post.body

      });
    }
  })
});

app.get("/posts/:id", (req, res) => {
  
  User_Game.findOne({
    where: { id: req.params.id },
  }).then((a) => res.render("update", { a }));
});



app.get("/posts/:id", (req, res)=>{
  User_Game.update(
    { username: username },
    { where: { id: req.params.id } }
  )
    .then(result =>
      handleResult(result)
    )
    .catch(err =>
      handleError(err)
    )
})

app.listen(port, () => console.log(`running in ${port}`));
