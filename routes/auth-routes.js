const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('Çıkış yapılıyor');
});

// auth with google+
router.get('/google',passport.authenticate('google',{
  scope:['profile']
}));

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
  res.send('callback URL')
})

module.exports = router;
