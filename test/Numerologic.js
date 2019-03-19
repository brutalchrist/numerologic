const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe("mumerologic", function() {
  const numerologic = require('../index.js');

  it("Integrity", function() {
    expect(numerologic).to.be.a('function');
  });

  it("Pythagoras square", function() {
    const pythogorasSquare = numerologic('13.08.1989').pythogorasSquare;

    expect(pythogorasSquare).to.be.a('function');
    expect(pythogorasSquare()).to.be.a('object');
  });

  it("Life way number", function() {
    const lifeWayNumber = numerologic('13.08.1989').lifeWayNumber;

    expect(lifeWayNumber).to.be.a('function');
    expect(lifeWayNumber()).to.be.a('number');
    expect(lifeWayNumber()).to.equal(3);
  });

  it("Biorhythms", function() {
    const bioRhythms = numerologic('13.08.1989').bioRhythms;

    expect(bioRhythms).to.be.a('function');
    expect(bioRhythms()).to.be.a('object');
  });

  it("Zodiac signs", function() {
    const zodiacSign = numerologic('13.08.1989').zodiacSign;
    const zodiacSignData = zodiacSign();

    expect(zodiacSign).to.be.a('function');
    expect(zodiacSignData).to.be.a('object');
    assert.isTrue(zodiacSignData.code_number == 5, 'zodiacal code number must be equals to 5');
    assert.isTrue(zodiacSignData.code_name == 'LEO', 'zodiacal name must be "LEO"');
    assert.isTrue(zodiacSignData.element == 'fire', 'zodiacal element must be a "fire"');
    assert.isTrue(zodiacSignData.planet == 'sun', 'zodiacal planet must be a "sun"');
    assert.isTrue(zodiacSignData.decade == 3, 'zodiacal code number must be equals to 5');
  });

  it("Moon day", function() {
    const moonDay = numerologic('13.08.1989').moonDay;
    const moonDayData = moonDay();

    expect(moonDay).to.be.a('function');
    expect(moonDayData).to.be.a('number');
    assert.isTrue(moonDayData == 12, 'moon day number must be equals to 12');
  });
});
