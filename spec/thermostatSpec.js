'use strict';

describe('Thermostat', function() {
  var thermostat;



   beforeEach(function() {
     thermostat = new Thermostat();
   });

     it('starts at 20 degrees', function() {
       expect(thermostat.getCurrentTemperature()).toEqual(20)
     });

     it('increases the temperature with "Up"', function() {
       thermostat.up();
       expect(thermostat.getCurrentTemperature()).toEqual(21)
     });

     it('decreases the temperature with "Down"', function() {
       thermostat.down();
       expect(thermostat.getCurrentTemperature()).toEqual(19)
     });

     it('default minimum of 10 degrees', function() {
       for (var i = 0; i < 11; i++) {
         thermostat.down();
       }
       expect(thermostat.getCurrentTemperature()).toEqual(10)
     });

     it('default maximum of 25 degrees', function() {
       for (var i = 0; i < 6; i++) {
         thermostat.up();
       }
       expect(thermostat.getCurrentTemperature()).toEqual(25)
     });

     describe('when power saving mode is on', function() {
        it('default maximum of 25 degrees', function() {
            for (var i = 0; i < 6; i++) {
              thermostat.up();
            }
          expect(thermostat.getCurrentTemperature()).toEqual(25)
        });
     });

     describe('when power saving mode is off', function() {
       it('it goes over 25 degrees and reaches 32 degrees', function() {
         thermostat.switchPowerSavingModeOff();
         for (var i = 0; i < 6; i++) {
           thermostat.up();
         }
         expect(thermostat.getCurrentTemperature()).toEqual(26)
       });
    });

    describe('when power mode is reset', function() {
      it('reset the thermostat to default temperature', function() {
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        thermostat.resetTemperature();
        expect(thermostat.getCurrentTemperature()).toEqual(20)
      });
   });

     it('powersaving mode is on by default', function() {
       expect(thermostat.isPowerSavingModeOn()).toBe(true);
     });

     it('can switch off powersaving mode', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
     });

     it('can switch powersaving mode on and off', function() {
       thermostat.switchPowerSavingModeOff();
       expect(thermostat.isPowerSavingModeOn()).toBe(false);
       thermostat.switchPowerSavingModeOn();
       expect(thermostat.isPowerSavingModeOn()).toBe(true);
     });

     describe('usage levels', function() {
       describe('When the temperature goes below 18 degrees', function () {
         it('classified as low-usage', function() {
           for (var i = 0; i < 3; i++) {
             thermostat.down();
           }
           expect(thermostat.energyUsage()).toEqual('low-usage')
         });
       });
       describe('when the temperature is between 18 and 25 degrees', function() {
         it('is classified as medium-usage', function() {
           expect(thermostat.energyUsage()).toEqual('medium-usage')
         });
       });
       describe('when the temperature is between 25 and 32 degrees', function() {
         it('classified as high-usage', function() {
           thermostat.switchPowerSavingModeOff()
           for (var i = 0; i < 7; i++) {
             thermostat.up();
           }
           expect(thermostat.energyUsage()).toEqual('high-usage')
         });
       });
     });

 });
