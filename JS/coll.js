

//NUEVA IMPLEMENTACION


$(document).ready(function(){

	$('#butshow').click(function(){
		if($(this).hasClass('bool')){
        	$("#showcoll").slideDown( 700 ); 
       	 	$(this).removeClass("bool");
		}else{
			$("#showcoll").slideUp( 700 ); 
      		$(this).addClass("bool"); 
		}
	});
});




