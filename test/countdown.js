var Countdown = (function() {
	var targetDate, targetElement;
  
	function getTimeRemaining(endTime) {
	  var totalSeconds = Math.max(Math.floor((endTime - Date.now()) / 1000), 0);
	  var days = Math.floor(totalSeconds / (60 * 60 * 24));
	  var hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
	  var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
	  var seconds = totalSeconds % 60;
	  return {
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	  };
	}
  
	function updateCountdown() {
	  var time = getTimeRemaining(targetDate);
	  var countdownText = time.days + 'd ' + time.hours + 'h ' + time.minutes + 'm ' + time.seconds + 's';
	  targetElement.innerHTML = countdownText;
	}
  
	function init(targetDateString, targetElementId) {
	  targetDate = new Date(targetDateString).getTime();
	  targetElement = document.getElementById(targetElementId);
	  if (!targetElement) {
		console.error("Target element not found.");
		return;
	  }
	  updateCountdown();
	  setInterval(updateCountdown, 1000);
	}
  
	return {
	  init: init
	};
  })();
  