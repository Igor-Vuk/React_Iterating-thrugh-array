// EXAMPLE 1

{/*<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom.min.js"></script>

<div id="container"></div>*/}

var Movies = [
  {
    id: 1,
    name: 'Forest Gump',
    rating: 5
  },
  {
    id: 2,
    name: 'Lion',
    rating: 5
  }
]

var Element = React.createClass({
  getInitialState() {
    return { 
      movies: null
    };
  },
  componentWillMount: function() {
    this.setState({
      movies: Movies
    })
  },
  render: function() {
    return (
      <div>
      { this.state.movies.map(function(item) {
          return (
            <div key={item.id}>
              <div>Name: {item.name}</div>
              <div>Rating: {item.rating}</div>
            </div>
          )
      }) }
      </div>
    );
  }
});
 
ReactDOM.render(
  <Element />, 
  document.getElementById('container'));


// EXAMPLE 2

var response = {
  "movies": [
    {
      "abridged_cast": [
        {
          "characters": [
            "Dominic Toretto"
          ],
          "id": "162652472",
          "name": "Vin Diesel"
        },
        {
          "characters": [
            "Brian O'Conner"
          ],
          "id": "162654234",
          "name": "Paul Walker"
        }
      ],
      "synopsis": "Continuing the global exploits in the unstoppable franchise built on speed, Vin Diesel, Paul Walker and Dwayne Johnson lead the returning cast of Fast & Furious 7. James Wan directs this chapter of the hugely successful series that also welcomes back favorites Michelle Rodriguez, Jordana Brewster, Tyrese Gibson, Chris \"Ludacris\" Bridges, Elsa Pataky and Lucas Black. They are joined by international action stars new to the franchise including Jason Statham, Djimon Hounsou, Tony Jaa, Ronda Rousey and Kurt Russell.",
      "title": "Furious 7",
      "year": 2015
    }
  ],
  "runtime": 140
};

var DataBlock = React.createClass({
  getInitialState:function(){
    return {data: {
      movies: []
    }};
  },

  componentWillMount:function() {
    var a = this;
    $.getJSON(this.props.url, function() {
      a.setState({data: response});
    });
  },
  
  render: function() {
    return (
    <div>
      <h1>Data block</h1>
      {this.state.data.movies.map(function(movie, i) {
        return <h3 key={'movie-'+ i}>{movie.title}</h3>
      })}
    </div>
    );
  }
});

React.render(
  <DataBlock url="https://codepen.io/chriscoyier/pen/EAIJj.js"/>,
  document.body
);


// EXAMPLE 3

var React = require("react");
var movieList = require("movieList");


var Movies = React.createClass({

  getInitialState: function() {
    return {
      list: null 
    };
  },
  componentWillMount: function() {
    var movies = movieList.getMovie();
    this.setState({
      list: movies
    });		
  },
  render: function() {
    return (
      <div>
        {this.state.list.map(function(item) {
          return (
            <div key = {item.id}>
              <div>Name: {item.title}</div>
              <div>Rating: {item.jezici}</div>
            </div>
          )
        })}
      </div>
    );
  }
});

module.exports=Movies;

//movieList Component

var response = [
{
"id": 5164,
"seo_name": "pedeset-nijansi-mracniji",
"title": "Fifty Shades Darker",
"title_hr": "Pedeset nijansi mračniji",
"release_date": "2017-02-10",
"theatre_date": "2017-02-14",
"small_cover": "2-pedeset-nijansi-mracniji.jpg",
"large_cover": "3-pedeset-nijansi-mracniji.jpg",
"image_screenshot": "trenutno-pedeset-nijansi-mracniji.jpg",
"image_poster": "poster-pedeset-nijansi-mracniji.jpg",
"zemlje": "SAD",
"jezici": "Engleski",
"redatelji": "James Foley",
"scenaristi": "E.L. James, Niall Leonard",
"glumci": "Dakota Johnson, Jamie Dornan, Tyler Hoechlin",
"zanrovi": "Drama, Romantika",
"trid": 0,
"imax": 0,
"sinkronizirano": 0,
"image_cover_url": "http://www.moj-film.hr/data/movie/5164/3-pedeset-nijansi-mracniji.jpg",
"image_screenshot_url": "http://www.moj-film.hr/data/movie/5164/trenutno-pedeset-nijansi-mracniji.jpg",
"image_poster_url": "http://www.moj-film.hr/data/movie/5164/poster-pedeset-nijansi-mracniji.jpg"
},
{
"id": 5231,
"seo_name": "lego-batman-film",
"title": "The Lego Batman Movie",
"title_hr": "Lego Batman film",
"release_date": "2017-02-10",
"theatre_date": "2017-02-10",
"small_cover": "2-lego-batman-film.jpg",
"large_cover": "3-lego-batman-film.jpg",
"image_screenshot": "trenutno-lego-batman-film.jpg",
"image_poster": "poster-lego-batman-film.jpg",
"zemlje": "SAD, Danska",
"jezici": "Engleski",
"redatelji": "Chris McKay",
"scenaristi": "Seth Grahame-Smith, Chris McKenna, Erik Sommers",
"glumci": "Ralph Fiennes, Jenny Slate, Rosario Dawson",
"zanrovi": "Akcija, Animirani, Avantura",
"trid": 0,
"imax": 0,
"sinkronizirano": 1,
"image_cover_url": "http://www.moj-film.hr/data/movie/5231/3-lego-batman-film.jpg",
"image_screenshot_url": "http://www.moj-film.hr/data/movie/5231/trenutno-lego-batman-film.jpg",
"image_poster_url": "http://www.moj-film.hr/data/movie/5231/poster-lego-batman-film.jpg"
}
]

module.exports = {
  getMovie: function() {
    return response;
  }
}