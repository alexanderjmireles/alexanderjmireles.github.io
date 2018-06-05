		$(function () { // wait for document ready

// init//// init//// init//// init//// init//// init//

		var controller = new ScrollMagic.Controller();

// define movement of panels//// define movement of panels//// define movement of panels//


		var wipeAnimation = new TimelineMax()
		.fromTo("section.panel.overview", 1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics1", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
		.fromTo("section.panel.graphics2", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics3", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics4", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics5", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics6", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics7", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics8", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics9", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics10", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics11", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics12", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics13", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics14", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.graphics15", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.web", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})  // in from bottom
		.fromTo("section.panel.web1", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
		.fromTo("section.panel.web2", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.web3", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.web4", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.web6", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo("section.panel.about", 1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from bottom
		.fromTo("section.panel.contact", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom

		// create scene to pin and link animation
		var scene1 = new ScrollMagic.Scene({triggerElement: "#pinContainer",triggerHook: "onLeave",duration: "300%"})
							.setPin("#pinContainer")
							.setTween(wipeAnimation)
							.addTo(controller);





// icons effect // icons effect// icons effect// icons effect



var scene2 =	new ScrollMagic.Scene({triggerElement: '.footer'})
		.setClassToggle('#i', 'show')
		.addTo(controller);

var scene3 =		new ScrollMagic.Scene({triggerElement: '.footer'})
		.setClassToggle('#m', 'show')
		.addTo(controller);

var scene4 =		new ScrollMagic.Scene({triggerElement: '.footer'})
		.setClassToggle('#g', 'show')
		.addTo(controller);



var scene5 =	new ScrollMagic.Scene({triggerElement: '.ov'})
		.setClassToggle('#data', 'show')
		.addTo(controller);

var scene6 =	new ScrollMagic.Scene({triggerElement: '.ov'})
		.setClassToggle('#dev', 'show')
		.addTo(controller);

var scene7 =	new ScrollMagic.Scene({triggerElement: '.ov'})
		.setClassToggle('#design', 'show')
		.addTo(controller);



var scene8 =	new ScrollMagic.Scene({triggerElement: '.info'})
		.setClassToggle('#bout', 'show')
		.addTo(controller);

var scene9 =	new ScrollMagic.Scene({triggerElement: '.info'})
		.setClassToggle('#me', 'show')
		.addTo(controller);






//slide writing //slide writing //slide writing//slide writing//


		 function pathPrepare ($el) {
		 		var lineLength = $el[0].getTotalLength();
		 		$el.css("stroke-dasharray", lineLength);
		 		$el.css("stroke-dashoffset", lineLength);
		 	}

		 	var $entrance = $("path.entrance");
			var $special = $("path.special");
			var $graphport = $("path.graphport");
			var $webport = $("path.webport");
			var $abouty = $("path.abouty");
			var $contacty = $("path.contacty");




// prepare SVG//// prepare SVG//// prepare SVG//// prepare SVG//// prepare SVG//


				pathPrepare($entrance);
				pathPrepare($special);
				pathPrepare($graphport);
				pathPrepare($webport);
				pathPrepare($abouty);
				pathPrepare($contacty);




// build tween//// build tween//// build tween//// build tween//


	var tween1 =	new TimelineMax()
		 		.add(TweenMax.to($entrance, 3.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9


		var tween2 = new TimelineMax()
					.add(TweenMax.to($special, .5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9

		var tween3 = new TimelineMax()
					.add(TweenMax.to($graphport, .5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9

		var tween4 = new TimelineMax()
					.add(TweenMax.to($webport, .5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9

		var tween5 = new TimelineMax()
					.add(TweenMax.to($abouty, .5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9

		var tween6 = new TimelineMax()
					.add(TweenMax.to($contacty, .5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9







// build scene//// build scene//// build scene//// build scene//// build scene//



											// intro slide scene//
	var scene10 =	new ScrollMagic.Scene({triggerElement: "#begin", duration: 300, tweenChanges: true})
							.setTween(tween1)
							.addTo(controller);


												// overview slide scene//
	var scene11 =	new ScrollMagic.Scene({triggerElement: "#begin1", duration: 300, tweenChanges: true})
											.setTween(tween2)
											.addTo(controller);

											// gport slide scene//
	var scene12 =	new ScrollMagic.Scene({triggerElement: ".begin2", duration: 300, tweenChanges: true})
											.setTween(tween3)
											.addTo(controller);

											// webport slide scene//
	var scene13 =	new ScrollMagic.Scene({triggerElement: ".begin3", duration: 300, tweenChanges: true})
											.setTween(tween4)
											.addTo(controller);

											// about slide scene//

	var scene14 =	new ScrollMagic.Scene({triggerElement: ".begin4", duration: 300, tweenChanges: true})
											.setTween(tween5)
											.addTo(controller);

											// contact slide scene//

	var scene15 =	new ScrollMagic.Scene({triggerElement: ".begin5", duration: 300, tweenChanges: true})
											.setTween(tween6)
											.addTo(controller);


	});
