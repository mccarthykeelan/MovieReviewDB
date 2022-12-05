/* Get 'home' page */
const movieList = function(req, res){
  res.render('index', { 
    title: 'Home',
    popular: {
      title: 'Whats Popular',
      movies: [
        {
          title: 'The Avengers',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        },
        {
          title: 'The Incredibles',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        },
        {
          title: 'The Dark Knight',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        },
        {
          title: 'Star Wars',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        }
      ]
    },
    trending: {
      title: 'Whats Trending',
      movies: [
        {
          title: 'The Avengers',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        },
        {
          title: 'The Incredibles',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        },
        {
          title: 'The Dark Knight',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        },
        {
          title: 'Star Wars',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        }
      ]
    },
    freeWatch: {
      title: 'Free To Watch',
      movies: [
        {
          title: 'The Avengers',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        },
        {
          title: 'The Incredibles',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        },
        {
          title: 'The Dark Knight',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        },
        {
          title: 'Star Wars',
          releaseDate: '25 Sep 2012',
          rating: 97,
          poster: './images/breaking-bad-cover.jpg'
        }
      ]
    }
  });
  };

/* Get 'movie info' page */
const movieInfo = function(req, res){
  res.render('movie', { 
    title: 'Movie',
    movie: {
      title: 'Breaking Bad',
      year: '2008',
      rating: 97,
      poster: './images/breaking-bad.jpg',
      certification: 'TV-MA',
      genre: 'Crime, Drama, Thriller',
      runtime: '49 min',
      tagline: 'Remember my name',
      overview: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
      people: [
        {
          name: 'Vince Gilligan',
          role: 'Creator',
        }
      ],
    },
    reviews: [
      {
        title: 'Best show ever',
        rating: 10,
        author: 'John Doe',
        date: '25 Sep 2012',
        reviewText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatibus deleniti vel excepturi quidem nulla, ipsa ipsum quisquam numquam laborum?'
      },
      {
        title: 'Best show ever',
        rating: 10,
        username: 'John Doe',
        date: '25 Sep 2012',
        reviewText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatibus deleniti vel excepturi quidem nulla, ipsa ipsum quisquam numquam laborum?'
      },
      {
        title: 'Best show ever',
        rating: 10,
        username: 'John Doe',
        date: '25 Sep 2012',
        reviewText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatibus deleniti vel excepturi quidem nulla, ipsa ipsum quisquam numquam laborum?'
      }
    ]
  });
  };

module.exports = { 
movieList,
movieInfo 
};


  