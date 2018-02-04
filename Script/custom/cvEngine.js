

//on window load
$(window).on('load', function(){
	hideLoader();
});




function test(){
	alert("Hi ... save feature will be added soon. ");
}

function getCv(){
	//alert("get Cv is called ");
	processData();		
	
}

/*start show hide loader ***/
function showLoader(){
	$('#overlay').css({
		'display':'block'
	});
	$(".loader").css({
		'display':'block'
	}); 
}
function hideLoader(){
	$('#overlay').css({
		'display':'none'
	});
	$(".loader").css({
		'display':'none'
	});
}
/**************************/




userData = {};

function processData(){
	showLoader();
	getUserInformation();
	getSkills();
	getObjective();
	//getEducation();
	//getWorkexp();
	//getCert();
	//getHobbies();
	if(!userData.name && !userData.email ){
     alert("Please enter User Details !");
     	hideLoader();
     return;
	}
	//prepareJson();
	createContent();
 }

function getUserInformation(){

	userData.name = $('#userName').val();

	userData.email = $('#userEmailId').val();
	userData.contactNo = $('#userContactNo').val();
	
	userData.gender = $('input[name=inlineRadioOptions]:checked', '#userDetail').val();
	
	userData.address = {};

	userData.address.address1 = $('#inputAddress1').val();
	userData.address.city = $('#inputCity').val();
	userData.address.state = $('#inputState').val();
	userData.address.zip = $('#inputZip').val();
}

function getSkills(){
	userData.skills = $('#inputSkills').val();
}

function getObjective(){
	userData.objective = $('#inputObjective').val();
}


