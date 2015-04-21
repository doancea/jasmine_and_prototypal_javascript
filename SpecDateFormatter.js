describe("DateFormatter", function() {
	var formatter;

	beforeEach(function() {
		formatter = new DateFormatter();
	});

	it("should be able to format a date object to yyyy-mm-dd string", function() {
		var expectedDateString = "2015-04-01";
		var date = new Date(expectedDateString);

		expect(formatter.toCalendarAttrString(date)).toBe(expectedDateString);
	});
});