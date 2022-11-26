const express = require('express');
const router = express.Router();

const ctrlMovie = require('../controllers/movie');
const ctrlAccount = require('../controllers/account');
const ctrlSearch = require('../controllers/search');

/* Movie Pages */
router.get('/', ctrlMovie.movieList); 
router.get('/movie', ctrlMovie.movieInfo);

/* Search Pages */
router.get('/search', ctrlSearch.searchResults);


/* Account Pages */
router.get('/register', ctrlAccount.register);
router.get('/login', ctrlAccount.login);


module.exports = router;