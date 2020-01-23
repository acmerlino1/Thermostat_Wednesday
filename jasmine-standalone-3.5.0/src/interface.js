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

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);

  }
});