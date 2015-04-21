function DateFormatter(){}

DateFormatter.prototype.toCalendarAttrString = function(date) {
	var dd = date.getUTCDate();
	var mm = date.getUTCMonth() + 1;
	var yyyy = date.getUTCFullYear();

	return yyyy + "-" + this.formatMonthAndDayString(mm) + "-" + this.formatMonthAndDayString(dd);	
};

DateFormatter.prototype.formatMonthAndDayString = function(number) {
	var padding = "";

	if(number < 10) {
		padding = "0";
	}

	return padding + number; 
}