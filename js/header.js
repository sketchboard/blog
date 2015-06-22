(function() {
	var integrations = document.getElementById('integrations')
	var showing = false

	function showHide(e) {
		if (!showing) {
			e.preventDefault()
			e.stopPropagation()
		}

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

	function hideOnly(e) {
		if (showing) {
			showHide(e)
		}
	}

	integrations.addEventListener('click', showHide)
	integrations.addEventListener('touchend', showHide)

	document.addEventListener('click', hideOnly)
	document.addEventListener('touchend', hideOnly)

}())