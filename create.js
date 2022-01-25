const { User_Game } = require('./models');

User_Game.create({
 username: 'Hello World',
 password: 'Lorem Ipsum Dolor Sit Amet'
})
.then(User_game => {
 console.log(User_game)
});
