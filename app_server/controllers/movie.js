/* Get 'home' page */
const movieList = function(req, res){
  res.render('index', { title: 'Home' });
  };

/* Get 'movie info' page */
const movieInfo = function(req, res){
  res.render('movie', { title: 'Movie' });
  };

module.exports = { 
movieList,
movieInfo 
};


  