var Countdown = (function() {
	var targetDate, targetElement;
  
	function getTimeRemaining(endTime) {
		var totalSeconds = Math.max(Math.floor((endTime - Date.now()) / 1000), 0),
			days = Math.floor(totalSeconds / (60 * 60 * 24)),
			hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)),
			minutes = Math.floor((totalSeconds % (60 * 60)) / 60),
			seconds = totalSeconds % 60;
		return {
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}
  
	function updateCountdown() {
		var time = getTimeRemaining(targetDate),
			countdownWrap = targetElement.querySelector('.countdown-wrap');

		if (!countdownWrap) {
			countdownWrap = document.createElement('div');
			countdownWrap.className = 'countdown-wrap';
			targetElement.appendChild(countdownWrap);
		}
	
		countdownWrap.innerHTML = `
			<div class="days">${time.days}d</div>
			<div class="hours">${time.hours}h</div>
			<div class="minutes">${time.minutes}m</div>
			<div class="seconds">${time.seconds}s</div>
		`;
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