

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




userData = {};

function processData(){
	showLoader();
	getUserInformation();
	//getSkills();
	//getOjbective();
	//getEducation();
	//getWorkexp();
	//getCert();
	//getHobbies();
	if(!userData.name){
     alert("Please enter User Details !");
     	hideLoader();
     return;
	}
	prepareJson();
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
function prepareJson(){
    //download document
	var doc = new jsPDF();
    try{

    doc.text('Name: ' + ' ' + userData.name, 10, 10);

	doc.text('Email: ' + ' ' + userData.email, 10, 20);

	doc.text('Phone No.: ' + ' ' + userData.contactNo, 10, 30);
	doc.text('Gender: ' + ' ' + userData.gender, 10, 40);
	doc.text('Address: ' + ' ' + userData.address.address1, 10, 50);
	doc.text('City: ' + ' ' + userData.address.city, 10, 60);
	doc.text('Pincode: ' + ' ' + userData.address.zip, 10, 70);

    }
	catch(ex){
		console.log('Error : '+ ex);
		alert(ex);
	}
	hideLoader();
	doc.save('Resume_' + userData.name + '.pdf');
}

