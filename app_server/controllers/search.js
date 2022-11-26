/* GET 'search-results' page */
const searchResults = function(req, res){
  res.render('search-results', { title: 'Search Results' });
  };

module.exports = {
  searchResults
};