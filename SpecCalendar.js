describe("Calendar", function() {
  var calendar;

  beforeEach(function() {
    calendar = new Calendar();

  });
  
  it("should consider dates which fall on Sunday to be on the weekend", function() {
    var date = new Date('2015-04-19');

    expect(calendar.isDateWeekend(date)).toBe(true);
  });

  it("should consider dates which fall on Saturday to be on the weekend", function() {
    var date = new Date('2015-04-18');

    expect(calendar.isDateWeekend(date)).toBe(true);
  });

  it("should consider all other days not to fall on the weekend", function() {
    var date = new Date('2015-04-21');

    expect(calendar.isDateWeekend(date)).toBe(false);
  });

  it("should have todays date as the minimum date", function() {
      var todaysDate = new Date();

      expect(calendar.getMinimumDate().toDateString()).toBe(todaysDate.toDateString());
  });

  it("should have a maximum date 60 days from the current date", function() {
      var minDate = new Date("2015-04-24");
      var expectedMaxDate = new Date();
      var calendar = new Calendar(minDate);
      
      expectedMaxDate.setDate(minDate.getDate() + 60);

      calendar.setMinimumDate(minDate);
      expect(calendar.getMaximumDate().toDateString()).toBe(expectedMaxDate.toDateString());
  }); 

});