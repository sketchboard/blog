'use strict';

var app = angular.module('ngApp', []) // , ['ngRoute', 'ngSanitize'])
  // .config(['$routeProvider', function($routeProvider) {
  //   // $routeProvider.when('/account', {templateUrl: 'partials/account.html', controller: 'AccountController'});
  //   // $routeProvider.otherwise({redirectTo: '/'});
  // }]);


app.controller('DummyController', ['$scope', function DummyController($scope) {

}])

app.controller('DemoController', ['$rootScope','$scope', function DemoController($rootScope, $scope) {
	$scope.replay = function() {
		$rootScope.$broadcast('replay')
	}
}])

app.directive('featuresVideo', ['$rootScope', '$timeout', function featuresVideo($rootScope, $timeout) {
	return function(scope, elem, attr) {
		function play(delay) {
			$timeout(function() {
				elem[0].play()
			}, delay)
		}

		elem[0].addEventListener("ended", function() {
			// elem.addClass('hide')
			$rootScope.$broadcast('video-ended-features')
		})

		$rootScope.$on('replay', function() {
			elem.removeClass('hide')
			play(1)
		})

		play(3000)
	}
}])

app.directive('playOn', ['$rootScope', function playOn($rootScope) {
	return function(scope, elem, attr) {
		$rootScope.$on(attr.playOn, function() {
			elem[0].play()
		})

		elem[0].addEventListener("ended", function() {
			$rootScope.$broadcast(attr.endEvent)
		})

		elem[0].addEventListener("play", function() {
			$rootScope.$broadcast(attr.playEvent)
		})
	}
}])

app.directive('shareVideo', ['$rootScope', '$timeout', function shareVideo($rootScope, $timeout) {
	return function(scope, elem, attr) {
		function play(delay) {
			elem[0].play()
		}

		elem[0].addEventListener("ended", function() {
			$rootScope.$broadcast('video-ended-share')
		})

		elem[0].addEventListener("play", function() {
			$rootScope.$broadcast('video-play-share')
		})


		$rootScope.$on('video-ended-features', function() {
			elem.removeClass('hide')
			play(0)
		})
	}
}])

app.directive('showOn', ['$rootScope', '$timeout', function showOn($rootScope, $timeout) {
	return function(scope, elem, attr) {
		$rootScope.$on(attr.showOn, function() {
			elem.removeClass('hide')
		})
	}
}])

app.directive('hideOn', ['$rootScope', function hideOn($rootScope) {
	return function(scope, elem, attr) {
		$rootScope.$on(attr.hideOn, function() {
			elem.addClass('hide')
		})
	}
}])

app.controller('TestimonialsCtrl', ['$scope', '$timeout', function TestimonialsCtrl($scope, $timeout) {
	var currentIndex = 0
	$scope.testimonials = []

	$scope.addTestimonial = function(elem) {
		var testimonial = {
			index: $scope.testimonials.length,
			el:elem
		}
		$scope.testimonials.push(testimonial)
	}

	$scope.show = function(testimonial) {
		testimonial.nav.trigger('active')
		testimonial.el.trigger('active')

		var i = $scope.testimonials.indexOf(testimonial)
		if (i >= 0) {
			currentIndex = i
		}

		for (var i = 0; i < $scope.testimonials.length; ++i) {
			var t = $scope.testimonials[i]
			if (t != testimonial) {
				t.nav.trigger('non-active')
				t.el.trigger('non-active')
			}
		}
	}

	function loop() {
		$timeout(function() {
			var next = ((currentIndex + 1) % $scope.testimonials.length)
			if (next >= 0 && next < $scope.testimonials.length) {
				$scope.show($scope.testimonials[next])
			}
			loop()
		}, 5000)
	}

	loop()
}])

app.directive('testimonial', function testimonial() {
	return function(scope, elem, attr) {
		elem.on('active', function() {
			elem.fadeIn()
		})

		elem.on('non-active', function() {
			elem.hide()
		})
		scope.addTestimonial(elem)
	}
})

app.directive('navigation', ['$compile', function navigation($compile) {
	return function(scope, elem, attr) {
		var iel = elem.find('i')
		var i = parseInt(attr.navigation)
		if (i == 0) {
			iel.addClass("fa-circle")
		} else {
			iel.addClass("fa-circle-thin")
			scope.testimonial.el.addClass("hidden")
		}

		// create mapping
		scope.testimonial.nav = elem

		elem.on('active', function() {
			iel.removeClass("fa-circle-thin")
			iel.addClass("fa-circle")
		})
		elem.on('non-active', function() {
			iel.removeClass("fa-circle")
			iel.addClass("fa-circle-thin")
		})
	}
}])

app.directive('testimonials', ['$compile', function testimonials($compile) {
	return function(scope, elem, attr) {
	}
}])


