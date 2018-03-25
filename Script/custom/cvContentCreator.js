

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
				{text: [ {text:'Email: ', style: 'small'},
					     {text: userData.email, style: 'small'}
					]
				},
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
						{text:  '\n' + 'Address: ' + userData.address.address1 + '\n'+ 
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
				{ 	text: '\n' },
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: ['Skills:'],
							bold: true,
							fontSize:14
						},
						{text : userData.skills, style:'small'}
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
				{ 	text: '\n' },
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: ['Objective:'],
							bold: true,
							fontSize:14
						},
						{text : userData.objective, style:'small'}
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
				{ 	text: '\n' },
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: ['Education:'],
							bold: true,
							fontSize:14
						},						
						{ ul : getEduDetails(), style:'small'}
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
				{ 	text: '\n' },
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: ['Work Experience:'],
							bold: true,
							fontSize:14
						},
						{ ul : getWorkExp(), style:'small'}
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
				{ 	text: '\n' },
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: ['Certifications:'],
							bold: true,
							fontSize:14
						},
						{text : getCertification(), style:'small'}
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
				{ 	text: '\n' },
				{ 	alignment: 'justify',
					columns:[
						{
							color: 'black',
							text: ['Hobbies:'],
							bold: true,
							fontSize:14
						},
						{text : getHobbies(), style:'small'}
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
				{ 	text: '\n' },
				{
					text: [
					       { text: 'Declaration: ', style: 'subheader2' },
						   { text : getDeclaration(),
						     style:'declaration'}
					]
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
				},
				subheader2:{
					fontSize: 14,
					color: 'black',
					bold: true
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
 
