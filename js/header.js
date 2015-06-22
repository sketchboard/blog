(function() {
	var integrations = document.getElementById('integrations')
	var showing = false

	function showHide() {
		var menu = integrations.parentNode.querySelector('ul')
		if (showing) {
			menu.style.display = 'none'
		} else {
			menu.style.display = 'block'
		}
		animate({
			el: menu,
			scaleX: [1.1, 1],
			scaleY: [1.1, 1],
			easing: 'easeInOutQuart',
			duration: 200
		})
		showing = !showing 
	}

	integrations.addEventListener('click', function(e) {
		e.stopPropagation()
		showHide()
	})

	document.addEventListener('click', function() {
		if (showing) {
			showHide()
		}
	})

}())