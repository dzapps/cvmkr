

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

/************************/
//binding of jQuery ui event click
//add new exp and edu
$(document).ready(function(){
	$('#addNewBlankExperience').click(function(){
		addNewBlankExperience(this);
	});
	$('#addNewBlankCourse').click(function(){
		addNewBlankCourse(this);
	});

	//remove education form
	$('div.eduContainer').on('click','.removeEduForm',function(){
		this.parentElement.parentElement.remove();
	});
	//remove workExp form
	$('div.wxpContainer').on('click','.removeWxpForm',function(){
		this.parentElement.parentElement.remove();
	});
});

/*******************************************/
//adding new blank course
function addNewBlankCourse(btnEvent){

	//clone
	var eduFormCopy = $('#hiddenEduForm').clone();

	// remove hidden class and id 
	eduFormCopy[0].classList.remove('hidden');
	eduFormCopy[0].removeAttribute('id');

	//add new  class
	$(eduFormCopy[0]).addClass('eduForm');

	//add edu header number
	var len = getEduFormLength();

	// clone eraser;
	var eraser = eduFormCopy[0].firstElementChild.lastElementChild;
	eduFormCopy[0].firstElementChild.innerText = len + '. Education';

	eduFormCopy[0].firstElementChild.append($(eraser).clone()[0]);

	//prepend the new eduForm before the +
	$('.eduContainer').append(eduFormCopy[0]);
}
//adding new blank work experience
function addNewBlankExperience(btnEvent){

	//clone
	var wxpFormCopy = $('#hiddenWxpForm').clone();

	//remove hidden class and id
	wxpFormCopy[0].classList.remove('hidden');
	wxpFormCopy[0].removeAttribute('id');

	//add new  class
	$(wxpFormCopy[0]).addClass('wxpForm');

	//add wxp header number
	var len = getWxpFormLength();

	// clone eraser;
	var eraser = wxpFormCopy[0].firstElementChild.lastElementChild;
	wxpFormCopy[0].firstElementChild.innerText = len + '. Work Experience';

	wxpFormCopy[0].firstElementChild.append($(eraser).clone()[0]);

	//prepend the new wxpForm before the +
	$('.wxpContainer').append(wxpFormCopy[0]);
}

//helper method
function getEduFormLength(){
	var forms= $('.eduForm');
	var len = forms.length;
	if(len == 0){
		return 1;
	}
	else{
		return len + 1;
	}
}
function getWxpFormLength(){
	var forms= $('.wxpForm');
	var len = forms.length;
	if(len == 0){
		return 1;
	}
	else{
		return len + 1;
	}
}
/***********************/


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

function getEduDetails(){
	//get Education Model List
	userData.eduModelList = getEduModelList();
    
    //create education data for pdf
    var edu = '';
    var eduList = [];
    for(i=0; i<userData.eduModelList.length; i++){

    	var eduModelListObj = userData.eduModelList[i];

    	edu = eduModelListObj.crName;	   
	    edu = edu + '\n' +  eduModelListObj.insName;
	    edu = edu + '\n' +  getFormattedDate(eduModelListObj.startDate, eduModelListObj.endDate);
	    edu = edu + '\n' +  eduModelListObj.score;
	    edu = edu + '\n' +  eduModelListObj.other ;
	    edu = edu + '\n';
	    if(eduModelListObj.other.trim())
	    edu = edu + '\n';

	    eduList.push(edu);
    }
    return eduList;
}

function getWorkExp(){

	//get WorkExp Model List
	userData.wxpModelList = getWxpModelList();

	//create work exp data for pdf
	var workExp = ''; 
	var wxpList = [];
	for(i=0; i<userData.wxpModelList.length; i++){
		var  wxpModelListObj = userData.wxpModelList[i];

		workExp = wxpModelListObj.jobTitle;
		workExp = workExp + '\n' + wxpModelListObj.companyName;
		workExp = workExp + '\n' + getFormattedDate(wxpModelListObj.compStartDate, wxpModelListObj.compEndDate);
		
		if(wxpModelListObj.compOther.trim()){
			workExp = workExp + '\n';
			workExp = workExp + '\n' + wxpModelListObj.compOther;
		}
		
		workExp = workExp + '\n';
		if(wxpModelListObj.compOther.trim())
		workExp = workExp + '\n';

		wxpList.push(workExp);
	}
	return wxpList;
}

function getCertification() {
	userData.cert = {};
	userData.cert.details = $('#inputcert').val();

	var certification = userData.cert.details;

	return certification;
}


function getHobbies(){
	userData.hobbies = {};
	userData.hobbies.details = $('#inputHobbies').val();

	var hobbies = userData.hobbies.details;

	return hobbies;
}
function getDeclaration(){
	var declaration = 'I hereby certify that the above information given are true and correct as to the best of my knowledge.';
	return declaration;
}
/************************************/
//get formatted date 
function getFormattedDate(startDate, endDate){
	if(startDate.trim()){
		if(endDate.trim()){
			return startDate + ' - ' + endDate;
		}else{
			return startDate;
		}		
	}
	else{
		return endDate;
	}
}
/************************************/
//get Education list
function getEduModelList(){
	var eduList =  $('.eduForm');

	var items = [];
    var eduModelList = [];

	$.each(eduList, function(i) {
	    //get items
	    for(var j= 0; j<eduList[i].length; j++){   
  			 items.push(eduList[i][j].value);   
    	} 
    	var eduModel = bindEduModel(items);
    	items.length = 0;
    	eduModelList.push(eduModel);
	});

	return eduModelList;
}

/**********************************/
//get work Experience list
function getWxpModelList(){
	var wxpList =  $('.wxpForm');

	var items = [];
    var wxpModelList = [];

	$.each(wxpList, function(i) {
	    //get items
	    for(var j= 0; j<wxpList[i].length; j++){   
  			 items.push(wxpList[i][j].value);   
    	} 
    	var wxpModel = bindWxpModel(items);
    	items.length = 0;
    	wxpModelList.push(wxpModel);
	});

	return wxpModelList;
}
/*********************************/

//helper methods
function bindEduModel(items){
	var eduModel = {};
		eduModel.crName = items[0];
		eduModel.insName = items[1];
		eduModel.startDate = items[2];
		eduModel.endDate = items[3];
		eduModel.score = items[4];
		eduModel.other = items[5];
		return eduModel;
}
function bindWxpModel(items){
	var wxpModel = {};
		wxpModel.jobTitle = items[0];
		wxpModel.companyName = items[1];
		wxpModel.compStartDate = items[2];
		wxpModel.compEndDate = items[3];
		wxpModel.compOther = items[4];
		return wxpModel;
}
/************************************/



