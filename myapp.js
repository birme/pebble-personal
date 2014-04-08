simply.scrollable(true);
simply.title('Welcome!');
simply.body('I am your personal Pebble assistant', true);
navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
  ajax({ url: weatherUrl, type: 'json' }, function(data) {
  	simply.title('Jonas, ');
  	simply.subtitle(data.name);
    simply.body('Temperature at your location is ' + data.main.temp, false);
  });
});