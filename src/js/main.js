// services
$(document).ready(function() {
	$('.calc-form-services__item-wrp').click(function() {
		$(this).toggleClass('active');
	});
	$('.calc-options').click(function() {
		$('.steps ul').toggleClass('active');
	});
	$("ul[role='tablist'] a").click(function() {
		let selectText = $(this).prop("innerText");
		$('.calc-options').text(selectText);
		$('.steps ul').removeClass('active');
	});
});

// forms

var form = $("#calc-form");
form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        confirm: {
            equalTo: "#password"
        }
    }
});
form.children("div").steps({
    headerTag: "p",
    bodyTag: "section",
    transitionEffect: "fade",
	transitionEffectSpeed: "400",
	enableAllSteps: true,
	labels: {
	    next: "Дальше",
		previous: "Назад",
		current: ""
	},
    onStepChanging: function (event, currentIndex, newIndex)
    {
    	// Манипуляции с прогресс баром
    	$('.calc-bar-line__point').removeClass('active');
		$(`.calc-bar-line__point:nth-child(${newIndex + 1})`).addClass('active');
		function changeText () {
			$('.calc-options').text($('.calc-tab.current').prop("innerText"));
		}
		setTimeout(changeText, 200);

		$("ul[role='menu']").css('position', 'static')
		$('ul[role="menu"]').css('display', 'flex');

    	if (newIndex == 0) {
			$('.calc-bar-line').css('background', `linear-gradient(90deg, #589bda 8%, #adadad 22%)`);
			$("ul[role='menu']").css('position', 'absolute')
    	}
    	if (newIndex == 1) {
    		$('.calc-bar-line').css('background', `linear-gradient(90deg, #adadad 0%, #589bda 20%, #589bda 28%, #adadad 45%)`);
    	}
    	if (newIndex == 2) {
    		$('.calc-bar-line').css('background', `linear-gradient(90deg, rgb(173, 173, 173) 20%, rgb(88, 155, 218) 50%, rgb(88, 155, 218) 58%, rgb(173, 173, 173) 75%)`);
    	}
    	if (newIndex == 3) {
    		$('.calc-bar-line').css('background', `linear-gradient(90deg, rgb(173, 173, 173) 45%, rgb(88, 155, 218) 80%, rgb(88, 155, 218) 78%, rgb(173, 173, 173) 90%)`);
    	}
    	if (newIndex == 4) {
			$('.calc-bar-line').css('background', `linear-gradient(90deg, #adadad 75%, #589bda 100%)`);
			$('ul[role="menu"]').css('display', 'none');
    	}

        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        alert("Submitted!");
    }
});