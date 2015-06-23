function isDescendant(parent, child) {
	var node = child.parentNode
	while (node != null) {
	  if (node == parent) {
      return true
	  }
	  node = node.parentNode
	}
	return false
}

function isOutsideElement(elem, targetElem) {
	return elem != targetElem &&
				 !isDescendant(elem, targetElem)
}

(function() {
	var integrations = document.getElementById('integrations')
	var showing = false

	function showHide(e) {
		e.preventDefault()
		e.stopPropagation()

		var menu = integrations.parentNode.querySelector('ul')
		if (showing) {
			animate({
				el: menu,
				scaleX: [1, 0.5],
				scaleY: [1, 0.5],
				easing: 'easeInOutQuart',
				duration: 200,
				complete: function() {
					menu.style.display = 'none'
				}
			})
		} else {
			menu.style.display = 'block'
			animate({
				el: menu,
				scaleX: [1.1, 1],
				scaleY: [1.1, 1],
				easing: 'easeInOutQuart',
				duration: 200
			})
		}
		showing = !showing 
	}

	function hideOnly(e) {
		if (showing && isOutsideElement(integrations, e.target)) {
			setTimeout(function() {
				showHide(e)
			}, 0)
		}
	}

	integrations.addEventListener('click', showHide)
	integrations.addEventListener('touchend', showHide)

	document.addEventListener('click', hideOnly)
	document.addEventListener('touchend', hideOnly)

}())