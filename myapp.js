simply.scrollable(false);
simply.text( {title: 'Welcome Jonas!', body: 'I am your personal Pebble assistant' } );

simply.on('singleClick', function(e) {

	navigator.geolocation.getCurrentPosition(function(pos) {
  		var coords = pos.coords;
  		var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      		'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
  		ajax({ url: weatherUrl, type: 'json' }, function(data) {
  			simply.text( {title: 'Jonas, ', subtitle: data.name, body: 'Temperature at your location is ' + data.main.temp + ' degrees (C)'} );
  		});
	});
});
