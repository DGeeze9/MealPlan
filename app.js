$(document).ready(()=>{
    $('#tips').hide();
    $('#grocerylist').hide();
    $('#servingsizes').hide();
    $('#tables').show();
});

// Nav Tags event handler
$('nav').on('click', (event)=>{
	
	if (event.target.textContent == 'Diet Plan'){
		$('#tips').hide();
	    $('#grocerylist').hide();
	    $('#servingsizes').hide();
	    $('#tables').show();
	} else if (event.target.textContent == 'Tips'){
		$('#tables').hide();
	    $('#grocerylist').hide();
	    $('#servingsizes').hide();
	    $('#tips').show();
	} else if (event.target.textContent == 'Shopping List') {
		$('#tips').hide();
	    $('#tables').hide();
	    $('#servingsizes').hide();
	    $('#grocerylist').show();
	} else if (event.target.textContent == 'Serving Sizes') {
		$('#tips').hide();
	    $('#grocerylist').hide();
	    $('#tables').hide();
	    $('#servingsizes').show();
	}
});