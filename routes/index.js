var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: "Create Message" })
})

router.post('/new', (req, res, next) => {
  messages.push({text: req.body.text, user: req.body.user, added: new Date()})
  res.redirect('/')
})

module.exports = router;
