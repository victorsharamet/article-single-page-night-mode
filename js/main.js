$(document).ready(function(){

	$('.buttonNightMode').click(function(){

		$('body').toggleClass('nightmode');

		if ( $('.buttonNightMode').text() == 'Ночной режим' ) {
			$('.buttonNightMode').text('Дневной режим')
		} else {
			$('.buttonNightMode').text('Ночной режим')
		}

	});

});