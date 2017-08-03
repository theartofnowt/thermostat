'use strict';

// var MINIMUM_TEMPERATURE = 10
// var MAXIMUM_TEMPERATURE = 25
// var MAX_LMT_PSM_ON = 25
// var MAX_LMT_PSM_OFF = 32

function Thermostat() {
  this.powerSavingModeOn = true;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MAXIMUM_TEMPERATURE = 25;
  this.MINIMUM_TEMPERATURE = 10;
  this.MEDIUM_USAGE_LIMIT = 18;
  this.HIGH_USAGE_LIMIT = 25;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if(this.temperature < this.MAXIMUM_TEMPERATURE) {
  return this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if(this.temperature > this.MINIMUM_TEMPERATURE) {
    return this.temperature -= 1;
  }
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingModeOn === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.MAXIMUM_TEMPERATURE = 32;
  this.powerSavingModeOn = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.MAXIMUM_TEMPERATURE = 25;
  this.powerSavingModeOn = true;
};

Thermostat.prototype.resetTemperature = function() {
  return this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_USAGE_LIMIT && this.temperature <= this.HIGH_USAGE_LIMIT) {
    return 'medium-usage';
  }
    return 'high-usage';
}
