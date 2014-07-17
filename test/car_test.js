// test/car_test.js

var Car = require('../src/car.js'),
  expect = require('chai').expect;


describe('Car', function(){

  var myCar;

  beforeEach(function(){
    // create a new myCar object each time
    myCar = new Car('jeep', 'liberty', 'burgundy');
  });

  describe('#year', function(){
    it('should be the current year', function(){
      expect(myCar.year).to.equal(new Date().getFullYear());
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal('off');
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previousOwners).to.eql([]);
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).to.equal('manufacturer');
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.eql([]);
    });
  });

  describe('#sale', function(){
    it('should move currentOwner to previousOwners and update currentOwner with the new owner', function(){
      myCar.sale('Cameron');
      expect(myCar.previousOwners).to.eql(['manufacturer']);
      expect(myCar.currentOwner).to.equal('Cameron');
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar.paint('teal');
      expect(myCar.color).to.equal('teal');
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start();
      expect(myCar.state).to.equal('on');
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off();
      expect(myCar.state).to.equal('off');
    });
  });

  describe('#driveTo', function(){
    it('should return undefined', function(){
      myCar.start();
      expect(myCar.driveTo('ikea')).to.equal(undefined);
    });

    it('should return undefined', function(){
      expect(myCar.driveTo('ikea')).to.equal(undefined);
    });
  });

  describe('#park', function(){
    it('should return undefined', function(){
      myCar.off();
      expect(myCar.park()).to.equal(undefined);
    });

    it('should return undefined', function(){
      myCar.start();
      expect(myCar.park()).to.equal(undefined);
    });
  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      myCar.start();
      myCar.pickUp('Bob');
      expect(myCar.passengers).to.eql(['Bob']);
    });

    it('should not modify the passengers array if car is off', function(){
      myCar.off();
      myCar.pickUp('Bob');
      expect(myCar.passengers).to.eql([]);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      myCar.start();
      myCar.pickUp('Bob');
      myCar.dropOff('Bob');
      expect(myCar.passengers).to.eql([]);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      myCar.start();
      myCar.pickUp('Bob');
      myCar.off();
      myCar.dropOff('Bob');
      expect(myCar.passengers).to.eql(['Bob']);
    });
  });

});







