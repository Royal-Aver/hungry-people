$(function () {
	$('.slider').slick({
		dots: true,
		arrows: false,
	})

	// Инициализация
	$('#booking__input').datepicker({
	})

	// Доступ к экземпляру объекта
	$('#booking__input').data('datepicker')

});