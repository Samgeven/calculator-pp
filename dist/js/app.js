// services
$(document).ready(function() {
	$('.calc-form-services__item-wrp').click(function() {
		$(this).toggleClass('active');
	});
});

//forms

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
	labels: {
	    next: "Дальше",
	    previous: "Назад"
	},
    onStepChanging: function (event, currentIndex, newIndex)
    {
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