function Calendar(minimumDate) {
	
	if(minimumDate === undefined) {
	 	minimumDate = new Date();
	 }
	 
	var maximumDate = calculateMaxDate();

	this.minDate = function() {
		return minimumDate;
	}

	this.setMinDate = function(date) {
		minimumDate = date;
	}

	this.maxDate = function() {
		return maximumDate;
	}

	this.setMaxDate = function(date) {
		maximumDate = date;
	}

	function calculateMaxDate() {
		var maxDate = new Date();
		maxDate.setDate(minimumDate.getDate() + 60);
		return maxDate;
	}
}

Calendar.prototype.isDateWeekend = function(date) {
	var dayOfWeek = date.getUTCDay();
	if(dayOfWeek === 0 || dayOfWeek === 6) {
		return true;
	}

	return false;
};

Calendar.prototype.getMinimumDate = function() {
	return this.minDate();
};

Calendar.prototype.setMinimumDate = function(date) {
	this.setMinDate(date);
}

Calendar.prototype.getMaximumDate = function() {
	return this.maxDate();
}