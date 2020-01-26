$(document).ready(function() {
  var thermostat = new Thermostat() 

  $("#temperature").text(thermostat.temperature);

  $("#temperature-up").on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving').on('click', function() {
    thermostat.turnPowerSavingOff();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.currentEnergyUsage())
    }

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=63abe86ee6400ed19d73b5f1916b20ef&units=metric",
    type: "GET",
    dataType : "json",
  })

  .done(function( data ) {
    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +'&APPID=63abe86ee6400ed19d73b5f1916b20ef&units=metric', function(data) {
        $('#current-temperature').text(data.main.temp);
      })
    })
  })

});
