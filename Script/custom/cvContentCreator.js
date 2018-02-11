

function createContent(){


	try{
		var docDefinition = {
	 	 pageSize: 'A4',
	 	 pageMargins: [40, 40, 40, 40],
	 	 footer: function(currentPage, pageCount) { 
	 	 	return {
	 	 		alignment: 'center',
	 	 		text: currentPage.toString()
	 	 	 }
	 	 	},
	     	 
			content: [				
				{
					canvas: [
					
						{
							type: 'line',
							//margin:30,
							x1: 0, y1: 05,
							x2: 500, y2: 05,
							lineWidth: 4
						}										
					]
				},
				{text: '\n ' + userData.name, style: 'header'},
				{text:  userData.email, style: 'small'},
				{
					canvas:[ 
					    {
							type: 'line',
							x1: 0, y1: 20,
							x2: 500, y2: 20,
							lineWidth: 4
						}	
					]
				},
				{
					alignment: 'justify',
					columns:[
						{text:  '\n' + userData.address.address1 + '\n'+ 
						       userData.address.city + ' - ' + userData.address.zip + '\n'+ 
						       userData.address.state + '\n'
						, style: 'small'},
						{text: '\n' + 'Phone: ' + userData.contactNo + '\n' + 
								'Gender: ' + userData.gender + '\n'
						, style: 'small'}
					]
				},
				{
					canvas:[ 
					    {
							type: 'line',
							x1: 0, y1: 20,
							x2: 500, y2: 20,
							lineWidth: 2
						}	
					]
				},
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: [
								'\n' + 'Skills:',
							],
							bold: true,
							fontSize:14
						},
						{text : '\n' + userData.skills, style:'small'}
					]					
				},
				{
					canvas:[ 
					    {
							type: 'line',
							x1: 0, y1: 20,
							x2: 500, y2: 20,
							lineWidth: 2
						}	
					]
				},
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: [
								'\n' + 'Objective:',
							],
							bold: true,
							fontSize:14
						},
						{text : '\n' + userData.objective, style:'small'}
					]					
				},
				{
					canvas:[ 
					    {
							type: 'line',
							x1: 0, y1: 20,
							x2: 500, y2: 20,
							lineWidth: 2
						}	
					]
				},
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: [
								'\n' + 'Education:',
							],
							bold: true,
							fontSize:14
						},
						{text : '\n' + getEduDetails(), style:'small'}
					]					
				},
				{
					canvas:[ 
					    {
							type: 'line',
							x1: 0, y1: 20,
							x2: 500, y2: 20,
							lineWidth: 2
						}	
					]
				},
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: [
								'\n' + 'Work Experience:',
							],
							bold: true,
							fontSize:14
						},
						{text : '\n' + getWorkExp(), style:'small'}
					]					
				},
				{
					canvas:[ 
					    {
							type: 'line',
							x1: 0, y1: 20,
							x2: 500, y2: 20,
							lineWidth: 2
						}	
					]
				},
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: [
								'\n' + 'Certifications:',
							],
							bold: true,
							fontSize:14
						},
						{text : '\n' + getCertification(), style:'small'}
					]					
				},
				{
					canvas:[ 
					    {
							type: 'line',
							x1: 0, y1: 20,
							x2: 500, y2: 20,
							lineWidth: 2
						}	
					]
				},
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: [
								'\n' + 'Hobbies:',
							],
							bold: true,
							fontSize:14
						},
						{text : '\n' + getHobbies(), style:'small'}
					]					
				},
				{
					canvas:[ 
					    {
							type: 'line',
							x1: 0, y1: 20,
							x2: 500, y2: 20,
							lineWidth: 2
						}	
					]
				},
				{
					text : '\n' + 'I hereby certify that the above information given are true and correct as to the best of my knowledge. ',
					style:'declaration'
				}	  		  
			],
			styles: {
				header: {
					fontSize: 18,
					bold: true
				},
				subheader: {
					fontSize: 14,
					bold: true
				},
				quote: {
					italics: true
				},
				small: {
					fontSize: 11,
					alignment: 'left',
					color: 'black'
				},
				declaration:{
					fontSize: 11,
					alignment: 'left',
					color:'black'
				}
			}
		};
	 // print the PDF
	 //pdfMake.createPdf(docDefinition).print();
	  // open the PDF in a new window
	 //pdfMake.createPdf(docDefinition).open();
	}
	catch(ex){
		console.log(ex);
	}
		// download the PDF
	pdfMake.createPdf(docDefinition).download('Resume' + '.pdf');
	hideLoader();
}
 
