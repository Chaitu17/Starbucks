    var preview_text="";
	var frm=document.forms[0];
	var tick="<i class='fa fa-check' style='font-weight:normal;'></i>";
	var cross="<i class='fa fa-exclamation-triangle' aria-hidden='true'></i>  ";
	var side_arrow="<br><i class='fa fa-hand-o-right'></i> ";
	var break_space="<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:red;'><i class='fa fa-times' aria-hidden='true'></i> </span>";
	var break_space_for_sub_heading="<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:red;'>&#10007; </span> ";
	var space_for_sub_heading="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	var break_space_completed="<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+tick +" Completed" ;
 /*
window.onkeydown = function(e) 
{
		if (e.ctrlKey || e.keyCode === 116) 
		{
			e.keyCode = 0;
			e.returnValue = false;
			return false;
		}
	};*/

	if (top != self) 
	{
		top.location.replace(location.href);
	}

	// To disable Right click Function

	var message = "This function is not allowed here.";
	
	function clickIE4() {

		if (event.button == 2)
		{
			alert(message);
			return dist_codefalse;
		}
	}

	function clickNS4(e) {
		if (document.layers || document.getElementById && !document.all) 
		{
			if (e.which == 2 || e.which == 3)
			{
				alert(message);
				return false;
			}
		}
	}

	if (document.layers) 
	{
		document.captureEvents(Event.MOUSEDOWN);
		document.onmousedown = clickNS4;
	}

	else if (document.all && !document.getElementById) 
	{
		document.onmousedown = clickIE4;
	}

	document.oncontextmenu = new Function("alert(message);return false;");

/*   JavaScrpt Validations for GADT2.0           */
var dtCh = "/"; 
var minYear = 1900;
var maxYear = 2100;
function intOnly(i) 
{
	if ((i.value).length > 0) 
	{
		i.value = i.value.replace(/[^\d]+/g, "");
	}
}
 

function floatOnly(i)    
{
 if ((i.value).length > 0)    
           	{
           	
           	if( i.value.substring(0, 1)==".")  
           	{
           	 i.value = "0";
           	}
           	 
          			if (i.value.replace(/[^.]/g, "").length > 1)  
          			{
             i.value = "0";   
          		 
            }
            else
            {
                i.value = i.value.replace(".." , ".");
          		i.value = i.value.replace("..." , ".");
          		i.value = i.value.replace(/[^0-9\.]/g , "");
            }
          		   
          	}
          	else
          	{
          	i.value = i.value="0";
          	}
}
 


function mobileOnly(i) 
{
 	 if(parseInt(i.value.substring(0,1))<6 || i.value=="9999999999" || i.value=="8888888888" || i.value=="7777777777" || i.value=="6666666666")     
	   {
	  	  notify('Mobile Validation(s):','<br>Mobile Should Start With 6/7/8/9<br>Invalid Mobile Number-'+i.value,'top', 'right', 'fa fa-comments', 'danger', 'animated bounceIn', 'animated bounceOut','');
		i.value="";   
	   }
	 else   
		 {
	if ((i.value).length > 0) 
	{
		i.value = i.value.replace(/[^\d]+/g, "");
	}
		 }
}

function pinOnly(i) 
{
	 if(parseInt(i.value.substring(0,1))!=5)   
	   {
	  	notify('Pincode Validation(s):','<br>Pincode Should Start With 5','top', 'right', 'fa fa-comments', 'danger', 'animated bounceIn', 'animated bounceOut','');
		i.value="";   
	   }
	 else   
		 {
	if ((i.value).length > 0) 
	{
		i.value = i.value.replace(/[^\d]+/g, "");
	}
		 }
}

function isValidDate(year, month, day) 
{
month=parseInt(month)-1;
var d = new Date(year, month, day);
if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) 
{
return true;
}
else
{
return false;  
}

}
 

function ValidateDateWithAge(inputText,minage,maxage)
{
var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
// Match the date format through regular expression
if(inputText.value.match(dateformat))
{
inputText.focus();
//Test which seperator is used '/' or '-'
var opera1 = inputText.value.split('/');
var opera2 = inputText.value.split('-');
lopera1 = opera1.length;
lopera2 = opera2.length;
// Extract the string into month, date and year
if (lopera1>1)
{
var pdate = inputText.value.split('/');
}
else if (lopera2>1)
{
var pdate = inputText.value.split('-');
}
var dd = parseInt(pdate[0]);
var mm  = parseInt(pdate[1]);
var yy = parseInt(pdate[2]);
// Create list of days of a month [assume there is no leap year by default]
var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
if (mm==1 || mm>2)
{
if (dd>ListofDays[mm-1])
{
alert('Invalid date format!');
return false;
}
}
if (mm==2)
{
var lyear = false;
if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
{
lyear = true;
}
if ((lyear==false) && (dd>=29))
{
alert('Invalid date format!');
return false;
}
if ((lyear==true) && (dd>29))
{
alert('Invalid date format!');
return false;
}
}

var dtDOB = new Date(mm + "/" + dd + "/" + yy);
var dtCurrent = new Date();
if ( (dtCurrent.getFullYear() - dtDOB.getFullYear())<minage || (dtCurrent.getFullYear() - dtDOB.getFullYear())>maxage ) {
	alert("Age must be greater than or equal to "+minage+" and less than or equal to "+maxage);
	inputText.focus();
	inputText.value = "";
    return false;
}

}
else
{
alert("Invalid date format!");
inputText.focus();
inputText.value = "";
return false;
}
}


function ValidateDateWithAnotherDate(inputText,anotherdate,compare_with_currentdate_y_n)
{
var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
// Match the date format through regular expression
if(inputText.value.match(dateformat))
{
inputText.focus();
//Test which seperator is used '/' or '-'
var opera1 = inputText.value.split('/');
var opera2 = inputText.value.split('-');
lopera1 = opera1.length;
lopera2 = opera2.length;
// Extract the string into month, date and year
if (lopera1>1)
{
var pdate = inputText.value.split('/');
}
else if (lopera2>1)  
{
var pdate = inputText.value.split('-');
}
var dd = parseInt(pdate[0]);
var mm  = parseInt(pdate[1]);
var yy = parseInt(pdate[2]);
// Create list of days of a month [assume there is no leap year by default]
var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
if (mm==1 || mm>2)
{
if (dd>ListofDays[mm-1])
{
alert('Invalid date format!');
return false;
}
}
if (mm==2)
{
var lyear = false;
if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
{
lyear = true;
}
if ((lyear==false) && (dd>=29))
{
alert('Invalid date format!');
return false;
}
if ((lyear==true) && (dd>29))
{
alert('Invalid date format!');
return false;
}
}

var EnteredDate = new Date(mm + "/" + dd + "/" + yy);


var opera3 = anotherdate.split('/');
var opera4 = anotherdate.split('-');
lopera3 = opera3.length;
lopera4 = opera4.length;
// Extract the string into month, date and year
if (lopera3>1)
{
var pdate2 = anotherdate.split('/');
}
else if (lopera4>1)
{
var pdate2 = anotherdate.split('-');
}
var dd2 = parseInt(pdate2[0]);
var mm2  = parseInt(pdate2[1]);
var yy2 = parseInt(pdate2[2]);

var CompareDate = new Date(mm2 + "/" + dd2 + "/" + yy2);

var dtCurrent = new Date();
if ( EnteredDate<CompareDate ) {
	alert("Date must be greater than or equal to "+anotherdate);
	inputText.focus();
	inputText.value = "";
    return false;
}

if(compare_with_currentdate_y_n == "Y") {
	if ( EnteredDate>dtCurrent) {
		alert("Date must be less than or equal to Today's Date");
		inputText.focus();
		inputText.value = "";
	    return false;
	}
}

}
else
{
alert("Invalid date format!");
inputText.focus();
inputText.value = "";
return false;
}
}

function buildDate(data,separator) 
{
	if (data.value.length==2) 
	{
		data.value=data.value+""+separator;
	} 
	else if (data.value.length==5) 
	{
		data.value=data.value+""+separator;
	}
}

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value){
if(inputText.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
inputText.value = "";
inputText.focus();
return false;
}
}
}

function ValidateStartEndYear(str,sval,eval,msg) 
{
	if(Number(str.value)<sval || Number(str.value)>eval) 
	{
		alert(msg);
		str.value = "";
		str.focus();
		return false;
	}
}

 
function isAlphaKeyaddress(i) 
{
	if((i.value).length>0) 
	{
		i.value = i.value.replace(/[^\d\d.\w\s\-\/\,]+/g, '');
		//i.value = i.value.replace(/[\d\d.\d]+/g, ''); 
	}
	var str=i.value;
	//i.value=str.toUpperCase();
}
function alphaNumOnly2(i) 
{
	if(i.value.length>0) 
	{
		i.value = i.value.replace(/[^\da-zA-Z]+/g, ''); 
	}
}
function isAlphaNumberKey(evt) 
{
	var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 64 || charCode > 90) && (charCode < 97 || charCode > 122))
    	return false;
    return true;
}
function emailCheck(email,target_id) 
{
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	//var emailPattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var emailCheck = emailPattern.test(email.value);
	/*var w = window.open('','','width=100,height=100');
	w.document.write('Message');
	w.focus();
	setTimeout(function() {w.close();}, 5000);*/
	//if( !emailPattern.test(email.value)) {
	
	if(emailCheck) 
	{
		document.getElementById(""+target_id+"").innerHTML="";
	} 
	else
	{
		document.getElementById(""+target_id+"").innerHTML="Enter valid email";
    	notify('Email Validation(s):','<br>Enter valid email','top', 'right', 'fa fa-comments', 'danger', 'animated bounceIn', 'animated bounceOut','');
   		email.value="";
   	}; 
}

function numCharsSpaceOnly()
{
	if (event.keyCode >= 97 && event.keyCode <= 122) 
	{
		event.keyCode = event.keyCode - 32;
	}
	if ((event.keyCode >= 45) && (event.keyCode <= 57) || (event.keyCode >= 65) && (event.keyCode <= 90) || (event.keyCode >= 97) && (event.keyCode <= 122) || (event.keyCode == 13) || (event.keyCode == 32)) 
	{
		event.keyCode = event.keyCode;
	} 
	else
	{
		event.keyCode = 0;
	}
}
function isAlphaKey(i) 
{
	if ((i.value).length > 0) 
	{
		i.value = i.value.replace(/[^\d\d.\w\s\(\)]+/g, "");
		i.value = i.value.replace(/[\d\d.\d]+/g, "");
	}
	var str = i.value;
	i.value = str.toUpperCase();
}
function intCharactersOnly(i) 
{
	if ((i.value).length > 0) 
	{
		i.value = i.value.replace(/[^\d\d.\w\s\(\)]+/g, "");
	}
	var str = i.value;
	i.value = str.toUpperCase();
}
function checkAlphaNumeric(object) 
{
	re = /[A-Z a-z 0-9]/gi;
	var fieldDescription = object.label;
	if (object.value.match(/\w/gi).length != object.value.length) 
	{
		//alert(fieldDescription + " must contain only Alphabets or Digits.");
		return false;
	}
}
function checkLetters(object) 
{
	var fieldDescription = object.label;
	if (object.value.match(/[A-Za-z .]/gi).length != object.value.length)
	{
		alert(fieldDescription + " must contain only Alphabets.");
		return false;
	}
}
  
function getSize(vfile) 
{
	var fsize;  
	if (window.ActiveXObject) 
	{
			//IE BROWSER
		var oas = new ActiveXObject("Scripting.FileSystemObject");
			//alert(oas);
		var filepath = vfile.value;
		//	alert(filepath);
		var thefile = oas.getFile(filepath);
		fsize = thefile.size;
			//alert(fsize);
	} else {
		if (window.XMLHttpRequest) {
			//NON - IE BROWSER
			var fileupload = vfile;
			if (fileupload.files) {
				fsize = fileupload.files.item(0).fileSize;
			}
		} else {
		}
	}
	return fsize;
}
    

function myClick(ids) {
	  setTimeout(
	    function() {
	    document.getElementById("res").value=parseInt(document.getElementById("res").value)+1;
	    if(parseInt(document.getElementById("res").value)<6){
	    getAjaxData(ids);
	    }else{
	    	alert("Exceeded Maximum Time Please try again ");
	    	return false;
	    }
		
	    }, 5000);
	}



/* created by chalamalasetty satish on 16/09/2020 */

function ajax_msg(msg_type,id,milli_seconds,msg)  
{
	//sky blue background
if(msg_type=="S" || msg_type=="s")
{
document.getElementById(""+id+"").style.backgroundColor = "#00c851";  
$('#'+id).fadeIn().html("<i class='fa fa-check' aria-hidden='true'></i>  "+msg);
}  

//red background
else if(msg_type=="F" || msg_type=="f")
{
document.getElementById(""+id+"").style.backgroundColor = "#ff4444";
$('#'+id).fadeIn().html("<i class='fa fa-exclamation-triangle' aria-hidden='true' style='font-size:18px;font-weight:normal;'></i> "+msg);
}

//green background
else if(msg_type=="B" || msg_type=="b") 
{
document.getElementById(""+id+"").style.backgroundColor = "rgba(3, 169, 244, 1)";
$('#'+id).fadeIn(1000).html("&#10004;  "+msg);
}  
  
else if(msg_type=="W" || msg_type=="w") 
{
document.getElementById(""+id+"").style.backgroundColor = "whitesmoke";
document.getElementById(""+id+"").style.color = "green";
$('#'+id).fadeIn(1000).html("&#10004;  "+msg);
}


//yellow  background
else
{
document.getElementById(""+id+"").style.backgroundColor = "#ffbb33";
$('#'+id).fadeIn().html("<i class='fa fa-info-circle' aria-hidden='true' style='font-size:18px;'></i> "+msg);
}

//disapering div after specified milli seconds
setTimeout(function() {$('#'+id).fadeOut("slow");}, milli_seconds ); 
}




/* created by chalamalasetty satish on 26/09/2020 */  


//========================Aadhaar validateVerhoeff Algirtham start==========================

var d = [
       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
       [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], 
       [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], 
       [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], 
       [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], 
       [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], 
       [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], 
       [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], 
       [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], 
       [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
     ]

     // permutation table
     var p = [
       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
       [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], 
       [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], 
       [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], 
       [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], 
       [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], 
       [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], 
       [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
     ]

//validates Aadhar number received as string
function uidOnly(obj) 
{
var aadharNumber=obj.value;
if(aadharNumber.length!=12)
{
	 notify('Aadhar Validation(s):','<br>Aadhar should be 12 Digit','top', 'right', 'fa fa-comments', 'danger', 'animated bounceIn', 'animated bounceOut','');
obj.value="";
return false;
}

if(isNaN(aadharNumber))
{
notify('Aadhar Validation(s):','<br>Aadhaar must be a number','top', 'right', 'fa fa-comments', 'danger', 'animated bounceIn', 'animated bounceOut','');
obj.value="";     
return false;
}


var c = 0;
var invertedArray = aadharNumber.split('').map(Number).reverse();
var len = invertedArray.length;
for (var i = 0; i < len; i++) 
{
	       c = d[c][p[(i % 8)][invertedArray[i]]];
}

if(!(c === 0))
	   { 
	 	 notify('Aadhar Validation(s):','<br>Invalid UID-'+obj.value,'top', 'right', 'fa fa-comments', 'danger', 'animated bounceIn', 'animated bounceOut','');
	   obj.value="";     
	   };
}
      
 


//========================Aadhaar validateVerhoeff Algirtham end==========================

   
function getValue(id,type)
{
	type=type.toUpperCase();
	if(type=="S")
		return document.getElementById(""+id+"").options[document.getElementById(""+id+"").selectedIndex].text;
	else if(type=="I")
		return document.getElementById(""+id+"").innerHTML;
		else
		return document.forms[0].elements["beanProperties("+id+")"].value.trim(); 
		
}


 

//Overlay Loading...

function loading(text) 
{
	var text2="";
	if(text==undefined || text===undefined || text=="" || text==null || text===null || text=="null")
		{
		text2='<div class=\"loading\"><i class=\"fa fa-refresh fa-spin\" style=\"font-size:24px\"></i> Loading,Please Wait... </div>';
		}
	  else
		{
		text2="<div class=\"loading\"><i class=\"fa fa-refresh fa-spin\" style=\"font-size:24px\"></i> "+text+"</div>";
		}
document.getElementById("overlay").style.display = "block";  
document.getElementById("overlayText").innerHTML=text2;
return false;
};

function loadingOff() 
{
document.getElementById("overlay").style.display = "none";
return false;
};
  



var check_file_and_preview  = function(event,obj,target,maxSize,minSize)      
{
 
var id=obj.id;
var fileName=obj.value;
	          document.getElementById(""+target+"").style.display="none";
			   var dots = fileName.split(".");
			   var fileType = "." + dots[dots.length - 1];
			   
			   var fileUpload = document.getElementById(""+id+"");
             var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);

         if (fileType.toUpperCase() != '.JPG' && fileType.toUpperCase() != '.JPEG') 
         {  
				 
					alert(" You can upload only *.jpg/jpeg files only");
                  $('#myModal').modal('show');
					document.getElementById(""+id+"").value="";
					document.getElementById(""+id+"").focus();
					return false;
		   }
				//(filesize<maxlength)  &&  (filesize>minlength)
	  	      else if (size > parseInt(maxSize) || size < parseInt(minSize)) 
				{
					  alert("Size of Document  should between "+minSize+" kb and  "+maxSize+" ");
					document.getElementById(""+id+"").value="";
					document.getElementById(""+id+"").focus();
					return false;
				}
				
		 				else
				{
	var output = document.getElementById(""+target+"");
  document.getElementById(""+target+"").style.display="";
  document.getElementById(""+target+"").style.height = "150px";
  document.getElementById(""+target+"").style.width = "150px";
  output.src = URL.createObjectURL(event.target.files[0]);
				}  
				 };  
				 
				 
				 
				 
				 function checkValue(idd,minLen,MaxLen)
				 {
					 var frm=document.forms[0];
					 var val=frm.elements["beanProperties("+idd+")"].value.trim(); 
				 
					 
					 if(val==null || val===null || val==undefined || val===undefined || val=="null" || val=="undefined" || val==""
						 || val=="0"   )
							//||   parseInt(val.length)  < parseInt(minLen)    
						 {
						 return false;
						 }
					 else
						 {
						 return true;
						 }
				 }
				 
				 function validateNumberAndForwardSlash(event,data)
				 {
				     var key = window.event ? event.keyCode : event.which;
				    if (event.keyCode >= 47 && event.keyCode <= 57 || event.keyCode == 191)
				   {
				          
				     return true;
				   } 
				   else 
				   {
				     return false;
				   }
				 };
				 
				 

				 function getAge(dob,target_id)
				 {
				 	var can_dob=dob.value;
				 	
				 	if(can_dob.length==10)
				 		{
				 	var opera1 = can_dob.split('/');
				 	var opera2 = can_dob.split('-');
				 	lopera1 = opera1.length;
				 	lopera2 = opera2.length;
				 	if (lopera1>1)
				 	{
				 	var pdate = can_dob.split('/');
				 	}
				 	else  if(lopera2>1)  
				 	{
				 	var pdate = can_dob.split('-');
				 	}
				 	var dd = parseInt(pdate[0]);
				 	var mm  = parseInt(pdate[1]);
				 	var yy = parseInt(pdate[2]);
				 	
				 	
				 	
				 	
				 	
				 	var date_1= new Date(yy,mm,dd);
				  	var date_2= new Date();
				 	//convert to UTC
				 	var date2_UTC = new Date(Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate()));
				 	var date1_UTC = new Date(Date.UTC(date_1.getUTCFullYear(), date_1.getUTCMonth(), date_1.getUTCDate()));
				 	var yAppendix, mAppendix, dAppendix;
				 	//--------------------------------------------------------------
				 	var days = date2_UTC.getDate() - date1_UTC.getDate();
				 	if (days < 0)
				 	{
				 	
				 	    date2_UTC.setMonth(date2_UTC.getMonth() - 1);
				 	    days += DaysInMonth(date2_UTC);
				 	}
				 	//--------------------------------------------------------------
				 	var months = date2_UTC.getMonth() - date1_UTC.getMonth();
				 	if (months < 0)
				 	{
				 	    date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
				 	    months += 12;
				 	}
				 	//--------------------------------------------------------------
				 	var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();
				 	
				 	if (years > 1) 
				 		yAppendix = " years";
				 	else 
				 		yAppendix = " year";
				 	if (months > 1) 
				 		mAppendix = " months";
				 	else 
				 		mAppendix = " month";
				 	if (days > 1) 
				 		dAppendix = " days";
				 	else 
				 		dAppendix = " day";
				 		
				 		/* if(parseInt(years)>64)
				 		{
				 		alert("Age should not  cross 65 years");
				 		document.getElementById("age").innerHTML="Age should not  cross 65 years";
				 		document.getElementById("dob").value=""; 
				 		document.getElementById("type_dob").innerHTML=""; 
				 		return false;
				 		} */
				 	document.getElementById(""+target_id+"").innerHTML= years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix + " old.";
				 	}
				 	else
				 	{
				 	document.getElementById(""+target_id+"").innerHTML="Please Enter Valid DOB(dd/mm/yyyy)";
				 	}
				 }


				 function DaysInMonth(date2_UTC)
				 {
				 var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
				 var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
				 var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
				 return monthLength;
				 }
				  
				 
				 
				 
				 
				 
				 function printDiv(printpage)
				 {
				  var mywindow = window.open('Print', 'PRINT', 'height=700,width=600');
				  mywindow.document.write('<html><head><title></title></head><body>');
				     mywindow.document.write('</body>');
				     mywindow.document.write(document.all.item(printpage).innerHTML);
				     mywindow.document.write('</body></html>');
				  
				 mywindow.document.close(); // necessary for IE >= 10
				     mywindow.focus(); // necessary for IE >= 10*/

				     mywindow.print();
				     
				 return true;
				 }
				 	
				 
				 
				 function generateCaptcha() 
				  	{
				  	  //clear the contents of captcha div first 
				  	  document.getElementById('captcha').innerHTML = "";
				  	  var charsArray =
				  	  "0123456789";
				  	  var lengthOtp = 6;
				  	  var captcha = [];
				  	 
				  	  for (var i = 0; i < 6; i++) {
				  	    //below code will not allow Repetition of Characters
				  	    var index = Math.floor(Math.random() * 7 + 1); //get the next character from the array
				  	      
				  	   if (captcha.indexOf(charsArray[index]) == -1)
				  	      captcha.push(charsArray[index]);
				  	     else i--;
				  	  }
				  	  var canv = document.createElement("canvas");
				  	  canv.id = "captcha";
				  	  canv.width = 100;
				  	  canv.height = 50; 
				  	  var ctx = canv.getContext("2d");
				  	  ctx.font = "25px Georgia";
				  	  ctx.strokeText(captcha.join(""), 0, 30);
				  	  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
				  	  code = captcha.join("");
				  	  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
				  	  document.getElementById("gen_captcha").value=code;
		 		  	}
				   
				 //by chalamalsaetty satish kumar
				 function openModal(data)
				 {
					 loading();
					 if(data==undefined || data===undefined || data=="undefined" || data==null || data===null || data=="null" || data=="")
						 {
						   
						 data="<span style='color:red;font-size:20px;'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i> No Data Found</span>";
						 }
					 
					 document.getElementById("cfss_modal_body").innerHTML=data;
					 loadingOff();
                     $('#cfss_modal').modal('show'); 
				 }
				 

				 function closeModal(idd)
				 {
					 
					 if(idd==undefined || idd===undefined || idd=="undefined" || idd==null || idd===null || idd=="null" || idd=="")
						 {
						 $('#cfss_modal').modal('hide');
 						 }
					 else
						 {
						 $('#'+idd).modal('hide');

						 }
					 
				 }
				 
				 function openTab(evt, tabId) 
				 {
				   var i, tabcontent, tablinks;
				   tabcontent = document.getElementsByClassName("tabcontent");
				   for (i = 0; i < tabcontent.length; i++) {
				     tabcontent[i].style.display = "none";
				   }
				   tablinks = document.getElementsByClassName("tablinks");
				   for (i = 0; i < tablinks.length; i++) {
				     tablinks[i].className = tablinks[i].className.replace(" active", "");
				   }
				   document.getElementById(tabId).style.display = "block";
				   evt.currentTarget.className += " active";
				 }
				 
				 function clearInnerHTML(idd)
				 {
				 document.getElementById(""+idd+"").innerHTML="";
				 }
				 
				  function notify(title,message,from, align, icon, type, animIn, animOut,url)
				  {
					  document.getElementById("myAudio").play(); 
				        $.growl({
				            icon: icon,
				            title:' '+title+' ',
				            message:' '+message +' ',
				            url: url
				        },{
				            element: 'body',
				            type: type,
				            allow_dismiss: true,
				            placement: {
				                from: from,
				                align: align
				            },
				            offset: {
				                x: 30,
				                y: 30
				            },
				            spacing: 10,
				            z_index: 999999,
				            delay: 2500,
				            timer: 6000,
				            url_target: '_blank',
				            mouse_over: false,
				            animate: {
				                enter: animIn,
				                exit: animOut
				            },
				            icon_type: 'class',
				            template: '<div data-growl="container" class="alert" role="alert">' +
				            '<button type="button" class="close" data-growl="dismiss">' +
				            '<span aria-hidden="true">&times;</span>' +
				            '<span class="sr-only">Close</span>' +
				            '</button>' +
				            '<span data-growl="icon"></span>' +
				            '<span data-growl="title"></span>' +
				            '<span data-growl="message"></span>' +
				            '<a href="#" data-growl="url"></a>' +
				            '</div>'
				        });
				    };
				    
				    
				    function startTime() {
                        var today = new Date();
                        var h = today.getHours();
                        var m = today.getMinutes();
                        var s = today.getSeconds();
                        var am_pm=" AM";
                        m = checkTime(m);
                        s = checkTime(s);
                        if(h>12)
                        {
                            h=h-12;  
                            am_pm=" PM";
                        }
                        
                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = today.getFullYear();

                        today = mm + '/' + dd + '/' + yyyy;
                        
                        document.getElementById('txt').innerHTML =today +" "+
                            h + ":" + m + ":" + s ;
                        var t = setTimeout(startTime, 500);
                    }
				    
				    function checkTime(i) {
                        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10    
                        return i;
                    }