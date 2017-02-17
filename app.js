$(document).ready(()=>{
    $('#tips').hide();
    $('#grocerylist').hide();
    $('#servingsizes').hide();
    $('#liftingtable').hide();
    $('#tables').show();
    $('#quicktips').show();
    $('#diningtips').hide();
    $('#traveltips').hide();
});

// Nav Tags event handler
$('nav').on('click', (event)=>{
	$('#navbar').children().children().removeClass("active");
	
	if (event.target.textContent == 'Diet Plan'){
		$('#tips').hide();
	    $('#grocerylist').hide();
	    $('#servingsizes').hide();
	    $('#tables').show();
	    $('#diettab').addClass('active');
	} else if (event.target.textContent == 'Tips'){
		$('#tables').hide();
	    $('#grocerylist').hide();
	    $('#servingsizes').hide();
	    $('#tips').show();
	    $('#tipstab').addClass('active');
	} else if (event.target.textContent == 'Shopping List') {
		$('#tips').hide();
	    $('#tables').hide();
	    $('#servingsizes').hide();
	    $('#grocerylist').show();
	    $('#shoppingtab').addClass('active');
	} else if (event.target.textContent == 'Serving Sizes') {
		$('#tips').hide();
	    $('#grocerylist').hide();
	    $('#tables').hide();
	    $('#servingsizes').show();
	    $('#servingstab').addClass('active');
	}
});

// table button event handlers
$('#wods').on('click', (event)=>{
	$('#wods').children().removeClass('active btn-primary btn-default');
	if (event.target.textContent == 'Cardio Table'){
		$('#cardiobtn').addClass('active btn-primary');
		$('#cardiotable').show();
		$('#liftingtable').hide();
	} else if (event.target.textContent == 'Weight Lifting Table') {
		$('#liftingbtn').addClass('active btn-primary');
		$('#cardiotable').hide();
		$('#liftingtable').show();
	}
});

$('#listoftips').on('click', (event)=>{
	$('#listoftips').children().children().removeClass('btn-primary');
	if (event.target.textContent == 'Quick Tips') {
		$('#quickbtn').addClass('btn-primary');
		$('#quicktips').show();
		$('#traveltips').hide();
		$('#diningtips').hide();
	} else if (event.target.textContent == 'Travel Tips') {
		$('#travelbtn').addClass('btn-primary');
		$('#quicktips').hide();
		$('#traveltips').show();
		$('#diningtips').hide();
	} else if (event.target.textContent == 'Dining Out Tips'){
		$('#diningbtn').addClass('btn-primary');
		$('#quicktips').hide();
		$('#traveltips').hide();
		$('#diningtips').show();
	}
});