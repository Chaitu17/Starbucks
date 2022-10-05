
var A,B,C,returnElements;
 

function retrieveOptions(source_obj1,source_obj2, target_obj_name,type) 
{	
	loading('Loading '+type.toUpperCase()+'...');
    A=source_obj1;
    B=source_obj2;
    C=document.getElementById(target_obj_name);
    C.options.length = 0;
    C.options[0] = new Option("Loading...","0");
    url = "Ajax.do?key=unspecified&selectedOption1=" + A.value + "&selectedOption2=" + B.value + "&type="+type+"&random=" + Math.random();
    $.post(url,function(data)  
            {
    	loadingOff();
    	returnElements = data.split("||");
        for ( var i = 0; i < returnElements.length; i++) 
        {
            valueLabelPair = returnElements[i].split(",,,");                       
            C.options[i] = new Option(valueLabelPair[1], valueLabelPair[0]);
        }  
            });
} 

function retrieveOptions1(source_obj1,source_obj2, target1,type1,target2,type2) 
{
	loading('Loading '+type1.toUpperCase()+'...');
    A=source_obj1;
    B=source_obj2;
    C=document.getElementById(target1);
    C.options.length = 0;
    C.options[0] = new Option("Loading...","0");
    url = "Ajax.do?key=unspecified&selectedOption1=" + A.value + "&selectedOption2=" + B.value + "&type="+type1+"&random=" + Math.random();
    $.post(url,function(data)  
            {
    	loadingOff();
    	returnElements = data.split("||");
        for ( var i = 0; i < returnElements.length; i++) 
        {
            valueLabelPair = returnElements[i].split(",,,");                       
            C.options[i] = new Option(valueLabelPair[1], valueLabelPair[0]);
        }  
            });
    D=document.getElementById(target2);
    D.options.length = 0;
    D.options[0] = new Option("Loading...","0");
    url1 = "Ajax.do?key=unspecified&selectedOption1=" + A.value + "&selectedOption2=" + B.value + "&type="+type2+"&random=" + Math.random();
    $.post(url1,function(data1)  
            {
    	loadingOff();
    	returnElements1 = data1.split("||");
        for ( var i = 0; i < returnElements1.length; i++) 
        {
            valueLabelPair1 = returnElements1[i].split(",,,");                       
            D.options[i] = new Option(valueLabelPair1[1], valueLabelPair1[0]);
        }  
            });
} 


function getBankDeatils(ifsc_code,id) 
{
	loading('Loading Bank Details...');
    document.getElementById(""+id+"").innerHTML="loading bank details...,";
    url = "Ajax.do?key=getBankDetails&ifsc_code=" + ifsc_code.value +"&random=" + Math.random();
    $.post(url,function(data)  
            {
    	loadingOff();
    	var jsonobj=JSON.parse(data);
    	if(jsonobj.status=="success")
    		{
    		document.getElementById(""+id+"").innerHTML=jsonobj.bankDetails[0].bank_name+","+jsonobj.bankDetails[0].branch_name;
    		}
        	else
    		{
        	
    		document.getElementById(""+id+"").innerHTML="<span style='color:red;'>"+jsonobj.message+"</span>";
    		ifsc_code.value="";
    		}
    	
            });
}
   
    function getBankAccNo(aadhar,id1,id2) 
    {
    	var parent_status = document.getElementById("parent_id").value;
    	var stat=false;
    	loading('Loading Bank Details...');
    	if(parent_status=="4")
    	{
    		if(aadhar.id=="mother_aadhar")
    		{
    			stat=true;
    		}
    	}
    	if(parent_status=="1")
    	{
    		if(aadhar.id=="guardian_aadhar")
    		{
    			stat=true;
    		}
    	}
    	if(parent_status=="3")
    	{
    		if(aadhar.id=="mother_aadhar")
    		{
    			stat=true;
    		}
    	}
    	if(parent_status=="2")
    	{
    		if(aadhar.id=="father_aadhar")
    		{
    			stat=true;
    		}
    	}
    	if(stat==true)
    	{
    	if(aadhar.value.length==12)
    	{
        url = "Ajax.do?key=getBankAccount&aadhar_id=" + aadhar.value +"&random=" + Math.random();
        $.post(url,function(data)  
                {
        	stat=false;
        	loadingOff();
        	var jsonobj=JSON.parse(data);
        	if(jsonobj.status=="success")
        		{
        		document.getElementById(""+id1+"").value=jsonobj.bankAccDetails[0].bank_acc_no;
        		document.getElementById(""+id2+"").value=jsonobj.bankAccDetails[0].bank_acc_no;
        		document.getElementById("ifsc").value=jsonobj.bankAccDetails[0].ifsc;
        		document.getElementById(""+id1+"").readOnly=true;
        		document.getElementById(""+id2+"").readOnly=true;
        		document.getElementById("ifsc").readOnly=true;
        		getBankDeatils(document.getElementById("ifsc"),'bank_details');
        		}
        	else
        	{
        			document.getElementById(""+id1+"").value="";
            		document.getElementById(""+id2+"").value="";
            		document.getElementById("ifsc").value="";
            		document.getElementById(""+id1+"").readOnly=false;
            		document.getElementById(""+id2+"").readOnly=false;
            		document.getElementById("ifsc").readOnly=false;
            		document.getElementById("bank_details").innerHTML="";
        		}
                });  
    	}
    	else{
    		loadingOff();
    		document.getElementById(""+id1+"").value="";
    		document.getElementById(""+id2+"").value="";
    		document.getElementById("ifsc").value="";
    		document.getElementById(""+id1+"").readOnly=false;
    		document.getElementById(""+id2+"").readOnly=false;
    		document.getElementById("ifsc").readOnly=false;
    		document.getElementById("bank_details").innerHTML="";
    	}
    	}
    	else
    	{
    		loadingOff();
    	}
} 
    
    
    function checkAadhar(acc_no_obj) 
    {
    	var parent_status = document.getElementById("parent_id").value;
    	var stat=null;
    	var aadhar= null;
    	loading('Loading Bank Details...');
    	if(parent_status=="4"){
    		aadhar=document.getElementById("mother_aadhar").value;
    	}
    	if(parent_status=="1"){
    		aadhar=document.getElementById("guardian_aadhar").value;
    	}
    	if(parent_status=="3"){
    		aadhar=document.getElementById("mother_aadhar").value;
    	}
    	if(parent_status=="2"){
    		aadhar=document.getElementById("father_aadhar").value;
    	}
        url = "Ajax.do?key=checkAadharNo&acc_no=" + acc_no_obj.value +"&random=" + Math.random();
        $.post(url,function(data)  
                {
        	loadingOff();
        	var jsonobj=JSON.parse(data);
        	if(jsonobj.status=="success")
        		{
        		var  table_aadhar = jsonobj.bankAcc[0].aadhar_no;
        		if(table_aadhar!=aadhar){
        			alert("The given Account no already used by another aadhar no");
        			document.getElementById(""+acc_no_obj.id).value="";
        			document.getElementById("acc_no").value="";
        		}
        		}
                }); 
    	}
 

    function calculateAge(dob)
    {
        if(dob!="" && dob.length==10)
            {
            loading('Checking AGE...');
             url = "Ajax.do?key=calculateAge&dob=" + dob + "&random=" + Math.random();
                $.post(url,function(data)
                        {
                     loadingOff();
                     var jsonobj=JSON.parse(data);
                     if(jsonobj.status=="failure")
                         {
                         alert(jsonobj.message);
                         document.getElementById("can_age").innerHTML=jsonobj.message;
                         document.getElementById("student_dob").value="";
                         }
                        });
           
            }
    }
 
