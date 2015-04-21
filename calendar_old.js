var buildDateString = function(month, dayOfMonth, fourDigitYear) {
				
				return fourDigitYear + '-' + getTwoDigitNumberString(month) + '-' + getTwoDigitNumberString(dayOfMonth);
			}

			var isDateWeekend = function(date) {
				var weekday = date.getUTCDay();
				if(weekday === 0 || weekday === 6) {
					return true;
				}
				return false;
			}

			var validateSelectedDate = function() {
				var element = event.target;
				var selectedDate = new Date(element.value);
				if(isDateWeekend(selectedDate)) { alert("Bad Dates");}
			}

			var getTwoDigitNumberString = function(number) {
				
				var padding = "";

				if(number < 10) {
					padding = "0";
				}

				return padding + number;
			}

			var getMinCalendarDate = function() {
				var today = new Date();
				var dd = today.getUTCDate();
				var mm = today.getUTCMonth() + 1;
				var yyyy = today.getUTCFullYear();

				return buildDateString(mm, dd, yyyy);
			}

			var getMaxCalendarDate = function() {
				var maxDate = new Date();
				maxDate.setDate(maxDate.getDate() + 90);

				var dd = maxDate.getUTCDate();
				var mm = maxDate.getUTCMonth() + 1;
				var yyyy = maxDate.getUTCFullYear();

				return buildDateString(mm, dd, yyyy);	
			}

			var setCalendarBoundaries = function(calendarElement) {
				calendarElement.setAttribute("min", getMinCalendarDate());
				calendarElement.setAttribute("max", getMaxCalendarDate());
			}
			
			var calendar = document.getElementById("calendar");
			setCalendarBoundaries(calendar);

			var executeVariableAsFunction = function(myFunc) {
				myFunc("hat");
			}

			var showAlert = function(word) {
				alert(word);
			}

			executeVariableAsFunction(alert);