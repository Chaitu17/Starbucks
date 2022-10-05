 
 var alumni_lendegree = 1;
	function addDegree() {
	
		
		var table = document.getElementById("tbdegree");
		table_len = (table.rows.length)-1;
		alumni_lendegree = table_len;
				var add="<tr id='srow"+table_len+"'> "
				+"<td><select   name='beanProperties(degree_name_exam_"+ table_len+")' id='degree_name_exam_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(degree_name_exam_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(degree_name_exam_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(degree_name_exam_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";

				add=add+"<td><select   name='beanProperties(degree_medium_"+ table_len+")' id='degree_medium_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(degree_medium_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(degree_medium_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(degree_medium_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				 
				add=add+"<td><select   name='beanProperties(degree_slanguage_"+ table_len+")' id='degree_slanguage_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(degree_slanguage_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(degree_slanguage_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(degree_slanguage_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				 
				add=add+"<td><select   name='beanProperties(degree_optional1_"+ table_len+")' id='degree_optional1_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(degree_optional1_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(degree_optional1_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(degree_optional1_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				add=add+"<td><select   name='beanProperties(degree_optional2_"+ table_len+")' id='degree_optional2_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(degree_optional2_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(degree_optional2_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(degree_optional2_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				add=add+"<td><select   name='beanProperties(degree_optional3_"+ table_len+")' id='degree_optional3_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(degree_optional3_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(degree_optional3_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(degree_optional3_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				add=add+"<td><select   name='beanProperties(degree_optional4_"+ table_len+")' id='degree_optional4_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(degree_optional4_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(degree_optional4_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(degree_optional4_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				
				
				add=add+ "<td> <select   name='beanProperties(degree_passingmonth_" 
				+ table_len 
				+")' id='degree_passingmonth_"
				+ table_len
				+ "' class='form-control' style='width:90px;'> "
				+"<option value='0'>--Select--</option><option value='January'>January</option> "
				+ "<option value='February'>February</option><option value='March'>March</option> "
				+ "<option value='April'>April</option><option value='May'>May</option>  "
				+"<option value='June'>June</option><option value='July'>July</option> "
				+ "<option value='August'>August</option><option value='September'>September</option> "
				+ "<option value='October'>October</option><option value='November'>November</option><option value='December'>December</option>  "
				+"</select></td> "
				
				
				
				+"<td><select   name='beanProperties(degree_passingyear_" 
				+ table_len 
				+")' id='degree_passingyear_"
				+ table_len
				+ "' class='form-control'   style='width:90px;'><option value='0'>--Select--</option>";
				for(var l=1950;l<=2022;l++) {
					 add += ' <option value="'+l+'" >'+l+'</option>';
				}
				add=add+"</select></td> ";
				 
				add=add+"<td><select   name='beanProperties(degree_univ_"+ table_len+")' id='degree_univ_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(degree_univ_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(degree_univ_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(degree_univ_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				
				
				add=add+ "<td> <input type='text'  name='beanProperties(degree_msecured_"
				+ table_len
				+ ")' id='degree_msecured_"
				+ table_len
				+ "' maxlength='4' class='form-control' style='width:60px;' onkeyup='intOnly(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
				
				
				+ "<td><input type='text'  name='beanProperties(degree_mmarks_"
				+ table_len
				+ ")' class='form-control' id='degree_mmarks_"
				+ table_len
				+ "'  maxlength='4' style='width:60px;' onkeyup='intOnly(this);'><span id='papername_error' style='color:red;'></span></td> "
				
				
				+ "<td> <input type='text'  name='beanProperties(degree_hallticket_"
				+ table_len
				+ ")' id='degree_hallticket_"
				+ table_len
				+ "' maxlength='15'  class='form-control' onkeyup='isAlphaKeyaddress(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
				
				+"<td></td></tr> ";
				$("#tbdegree").append(add);
		document.forms[0].alumni_lendegree.value = alumni_lendegree;
	}
	function removeDegree() {
		var table = document.getElementById("tbdegree");
		table_len = (table.rows.length - 1);
		if (table_len >= 2) {
			document.getElementById("tbdegree").deleteRow(
					table.rows.length - 1);
			res_len = table_len;
			res_len--;
		} else {
			alert("Enter details for atleast one row.");
			return false;
		}
		document.forms[0].res_len.value = res_len;
	}
	 	
	 	
	 	//bed
	 	
	 	
	 	var alumni_lenpg = 1;
	function addPGDegree() {
	
		var table = document.getElementById("tbpgdegree");
		table_len = (table.rows.length)-1;
		alumni_lenpg = table_len;
		 
		 		var add="<tr id='srow"+table_len+"'> "
				+ "<td><select   name='beanProperties(pgd_name_exam_" 
				+ table_len 
				+")' id='pgd_name_exam_"
				+ table_len
				+ "' class='form-control'> "
				+"<option value='0'>--Select--</option><option value='MA'>MA</option> "
				+ "<option value='M.S.C'>M.S.C</option><option value='M.Com'>M.Com</option> "
				+ "<option value='MCA'>MCA</option><option value='M.B.A'>M.B.A</option><option value='M.C.A'>M.C.A</option> " 
						+" <option value='M.Phil'>M.Phil</option><option value='P.hD'>P.hD</option> "
						+"<option value='NET'>NET</option><option value='SLET'>SLET</option>"
				+"</select></td> "
				
				+"<td><select   name='beanProperties(pgd_subject_"+ table_len+")' id='pgd_subject_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(pgd_subject_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(pgd_subject_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(pgd_subject_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				add=add+ "<td> <select   name='beanProperties(pgd_passingmonth_" 
				+ table_len 
				+")' id='pgd_passingmonth_"
				+ table_len
				+ "' class='form-control' style='width:90px;'> "
				+"<option value='0'>--Select--</option><option value='January'>January</option> "
				+ "<option value='February'>February</option><option value='March'>March</option> "
				+ "<option value='April'>April</option><option value='May'>May</option>  "
				+"<option value='June'>June</option><option value='July'>July</option> "
				+ "<option value='August'>August</option><option value='September'>September</option> "
				+ "<option value='October'>October</option><option value='November'>November</option><option value='December'>December</option>  "
				+"</select></td> "
				
				+"<td><select   name='beanProperties(pgd_passingyear_" 
				+ table_len 
				+")' id='pgd_passingyear_"
				+ table_len
				+ "' class='form-control'   style='width:90px;'><option value='0'>--Select--</option> ";
				for(var l=1950;l<=2022;l++) {
					 add += ' <option value="'+l+'" >'+l+'</option>';
				}
				add=add+"</select></td> ";
				 
				add=add+"<td><select   name='beanProperties(pgd_univ_"+ table_len+")' id='pgd_univ_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(pgd_univ_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(pgd_univ_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(pgd_univ_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				add=add+ "<td> <input type='text'  name='beanProperties(pgd_msecured_"
				+ table_len
				+ ")' id='pgd_msecured_"
				+ table_len
				+ "' maxlength='4' class='form-control' style='width:60px;' onkeyup='intOnly(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
				
				
				+ "<td><input type='text'  name='beanProperties(pgd_mmarks_"
				+ table_len
				+ ")' class='form-control' id='pgd_mmarks_"
				+ table_len
				+ "'  maxlength='4' style='width:60px;' onkeyup='intOnly(this);'><span id='papername_error' style='color:red;'></span></td> "
				
				
				+ "<td> <input type='text'  name='beanProperties(pgd_hallticket_"
				+ table_len
				+ ")' id='pgd_hallticket_"
				+ table_len
				+ "' maxlength='15'  class='form-control' onkeyup='isAlphaKeyaddress(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
				
				+"<td></td></tr> ";
				 $("#tbpgdegree").append(add);
				 
		document.forms[0].alumni_lenpg.value = alumni_lenpg;
	}
	function removePGDegree() {
		var table = document.getElementById("tbpgdegree");
		table_len = (table.rows.length - 1);
		if (table_len >= 2) {
			document.getElementById("tbpgdegree").deleteRow(
					table.rows.length - 1);
			res_len = table_len;
			res_len--;
		} else {
			alert("Enter details for atleast one row.");
			return false;
		}
		document.forms[0].res_len.value = res_len;
	}
	 	
	 	
	 	
	 	//bed
	 	
	 	var alumni_lenbed = 1;
	function addBed() {
	
		var table = document.getElementById("tbBed");
		table_len = (table.rows.length)-1;
		alumni_lenbed = table_len;

				var add="<tr id='srow"+table_len+"'> "
				+"<td><select   name='beanProperties(bed_pgraduation_" 
				+ table_len 
				+")' id='bed_pgraduation_"
				+ table_len
				+ "' class='form-control' style='width:90px;'> "
				+"<option value='0'>--Select--</option><option value='B.ED'>B.ED</option> "
				+ "<option value='B.P.ED'>B.P.ED</option><option value='BA.ED'>BA.ED</option> "
				+ "<option value='MA.ED'>MA.ED</option><option value='II B VIDWAN'>II B VIDWAN</option>  "
				+"<option value='LPT'>LPT</option><option value='TTC/DED'>TTC/DED</option> "
				+ "<option value='TPT'>TPT</option><option value='HPT'>HPT</option> "
				+ "<option value='UPT'>UPT</option><option value='Pracharak Degree & B.Ed'>Pracharak Degree & B.Ed</option>  "
				
				+"<option value='Pracharak Diploma'>Pracharak Diploma</option><option value='B.Sc.Ed'>B.Sc.Ed</option> "
				+ "<option value='D.P.Ed'>D.P.Ed</option><option value='UGDPED'>UGDPED</option> "
				+ "<option value='Hindi Shikshan Nishant'>Hindi Shikshan Nishant</option><option value='Hindi Shikshan Parangat'>Hindi Shikshan Parangat</option>  "
				+"<option value='Hindi Shikshak Shikshana kala Ptaveena'>Hindi Shikshak Shikshana kala Ptaveena</option>"
				+ "<option value='Pracharak'>Pracharak</option><option value='ITI'>ITI</option> "
				+ "<option value='PGCTE/PGDTE'>PGCTE/PGDTE</option><option value='DELED'>DELED</option>  "
				+"<option value='Spl TTC'>Spl TTC</option><option value='Spl D.Ed'>Spl D.Ed</option>"
														+"<option value='Spl B.Ed'>Spl B.Ed</option>"
				+"</select></td> "
				
				+"<td><select   name='beanProperties(bed_msubject1_"+ table_len+")' id='bed_msubject1_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(bed_msubject1_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(bed_msubject1_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(bed_msubject1_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				 
				add=add+"<td><select   name='beanProperties(bed_msubject2_"+ table_len+")' id='bed_msubject2_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(bed_msubject2_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(bed_msubject2_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(bed_msubject2_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				 
				add=add+ "<td> <select   name='beanProperties(bed_passingmonth_" 
				+ table_len 
				+")' id='bed_passingmonth_"
				+ table_len
				+ "' class='form-control' style='width:90px;'> "
				+"<option value='0'>--Select--</option><option value='January'>January</option> "
				+ "<option value='February'>February</option><option value='March'>March</option> "
				+ "<option value='April'>April</option><option value='May'>May</option>  "
				+"<option value='June'>June</option><option value='July'>July</option> "
				+ "<option value='August'>August</option><option value='September'>September</option> "
				+ "<option value='October'>October</option><option value='November'>November</option><option value='December'>December</option>  "
				+"</select> </td>"
				
				
				
				+"<td><select   name='beanProperties(bed_passingyear_" 
				+ table_len 
				+")' id='bed_passingyear_"
				+ table_len
				+ "' class='form-control'   style='width:90px;'><option value='0'>--Select--</option> ";
				for(var l=1950;l<=2022;l++) {
					 add += ' <option value="'+l+'" >'+l+'</option>';
				}
				add=add+"</select></td> ";
				
				add=add+"<td><select   name='beanProperties(bed_univ_"+ table_len+")' id='bed_univ_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(bed_univ_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(bed_univ_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(bed_univ_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				
				add=add+ "<td> <input type='text'  name='beanProperties(bed_msecured_"
				+ table_len
				+ ")' id='bed_msecured_"
				+ table_len
				+ "' maxlength='4' class='form-control' style='width:60px;' onkeyup='intOnly(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
				
				
				+ "<td><input type='text'  name='beanProperties(bed_mmarks_"
				+ table_len
				+ ")' class='form-control' id='bed_mmarks_"
				+ table_len
				+ "'  maxlength='4' style='width:60px;' onkeyup='intOnly(this);'><span id='papername_error' style='color:red;'></span></td> "
				
				
				+ "<td> <input type='text'  name='beanProperties(bed_hallticket_"
				+ table_len
				+ ")' id='bed_hallticket_"
				+ table_len
				+ "' maxlength='15'  class='form-control' onkeyup='isAlphaKeyaddress(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
				
				+"<td></td></tr> ";
				 $("#tbBed").append(add);
		document.forms[0].alumni_lenbed.value = alumni_lenbed;
	}
	function removeBed() {
		var table = document.getElementById("tbBed");
		table_len = (table.rows.length - 1);
		if (table_len >= 2) {
			document.getElementById("tbBed").deleteRow(
					table.rows.length - 1);
			res_len = table_len;
			res_len--;
		} else {
			alert("Enter details for atleast one row.");
			return false;
		}
		document.forms[0].res_len.value = res_len;
	}
	 	
	 	
	 	
	 	//med
	 	
	 	var alumni_lenmed = 1;
	function addMed() {
		var table = document.getElementById("tbMed");
		table_len = (table.rows.length)-1;
		alumni_lenmed = table_len;
				
		var add="<tr id='srow"+table_len+"'> "
				+ "<td><select   name='beanProperties(med_pdegree_" 
				+ table_len 
				+")' id='med_pdegree_"
				+ table_len
				+ "' class='form-control' style='width:90px;'> "
				+"<option value='0'>--Select--</option><option value='M.ED'>M.ED</option> "
				+ "<option value='M.P.ED'>M.P.ED</option><option value='Spl M.Ed'>Spl M.Ed</option>"
				+"</select></td> "
				
				+ "<td> "
				+"<select   name='beanProperties(med_passingmonth_" 
				+ table_len 
				+")' id='med_passingmonth_"
				+ table_len
				+ "' class='form-control' style='width:90px;'> "
				+"<option value='0'>--Select--</option><option value='January'>January</option> "
				+ "<option value='February'>February</option><option value='March'>March</option> "
				+ "<option value='April'>April</option><option value='May'>May</option>  "
				+"<option value='June'>June</option><option value='July'>July</option> "
				+ "<option value='August'>August</option><option value='September'>September</option> "
				+ "<option value='October'>October</option><option value='November'>November</option><option value='December'>December</option>  "
				+"</select></td> "
				
				
				
				+"<td><select   name='beanProperties(med_passingyear_" 
				+ table_len 
				+")' id='med_passingyear_"
				+ table_len
				+ "' class='form-control'   style='width:90px;'><option value='0'>--Select--</option>" ;
				for(var l=1950;l<=2022;l++) {
					 add += ' <option value="'+l+'" >'+l+'</option>';
				}
				add=add+"</select></td> ";
				
				
				add=add+"<td><select   name='beanProperties(med_univ_"+ table_len+")' id='med_univ_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(med_univ_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(med_univ_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(med_univ_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				add=add+ "<td> <input type='text'  name='beanProperties(med_msecured_"
				+ table_len
				+ ")' id='med_msecured_"
				+ table_len
				+ "' maxlength='4' class='form-control' style='width:50px;' onkeyup='intOnly(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
				
				+ "<td><input type='text'  name='beanProperties(med_mmarks_"
				+ table_len
				+ ")' class='form-control' id='med_mmarks_"
				+ table_len
				+ "'  maxlength='4' style='width:60px;' onkeyup='intOnly(this);'><span id='papername_error' style='color:red;'></span></td> "
				
				+ "<td> <input type='text'  name='beanProperties(med_hallticket_"
				+ table_len
				+ ")' id='med_hallticket_"
				+ table_len
				+ "' maxlength='15'  class='form-control' onkeyup='isAlphaKeyaddress(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
				
				+"<td></td></tr> ";
			//	row = table.insertRow(table_len).outerHTML =add;
			    $("#tbMed").append(add);
		document.forms[0].alumni_lenmed.value = alumni_lenmed; 
	}
	function removeMed() {
		var table = document.getElementById("tbMed");
		table_len = (table.rows.length - 1);
		if (table_len >= 2) {
			document.getElementById("tbMed").deleteRow(
					table.rows.length - 1);
			res_len = table_len;
			res_len--;
		} else {
			alert("Enter details for atleast one row.");
			return false;
		}
		document.forms[0].res_len.value = res_len;
	}
	 	
	 
	 function educationDetails()
	 {
			if (document.getElementById("ssc").value=="Yes") {
				
	 	if (document.getElementById("ssc_name_of_board").value ==0) {
			alert("Please Enter SSC Name Of Board ");
			document.getElementById("ssc_name_of_board").focus();
			return false;
		}
		if (document.getElementById("ssc_medium").value == 0) {
			alert("Please Select  SSC Medium ");
			document.getElementById("ssc_medium").focus();
			return false;
		}
		if (document.getElementById("ssc_flanguage").value == 0) {
			alert("Please Select  SSC First language ");
			document.getElementById("ssc_flanguage").focus();
			return false;
		}
		if (document.getElementById("ssc_paasedyear").value == 0) {
			alert("Please Select SSC Passed Year");
			document.getElementById("ssc_paasedyear").focus();
			return false;
		}
		if (document.getElementById("ssc_msecured").value == 0) {
			alert("Please Select SSC MarksSecured");
			document.getElementById("ssc_msecured").focus();
			return false;
		}
		if (document.getElementById("ssc_mmarks").value == "") {
			alert("Please Enter SSC Max Marks");
			document.getElementById("ssc_mmarks").focus();
			return false;
		}
		 if (document.getElementById("ssc_hallticket").value == "") {
				alert("Please Enter SSC Hallticket");
				document.getElementById("ssc_hallticket").focus();
				return false;
			}
		 if (document.getElementById("ssc_cnumber").value == "") {
				alert("Please Enter SSC Certificate Number 1");
				document.getElementById("ssc_cnumber").focus();
				return false;
			}
			}
		
			if (document.getElementById("inter").value=="Yes") {
		if (document.getElementById("inter_name_of_board").value ==0) {
			alert("Please Enter Inter Name Of Board ");
			document.getElementById("inter_name_of_board").focus();
			return false;
		}
		if (document.getElementById("inter_medium").value == 0) {
			alert("Please Select  Inter Medium ");
			document.getElementById("inter_medium").focus();
			return false;
		}
		if (document.getElementById("inter_flanguage").value == 0) {
			alert("Please Select  Inter First language ");
			document.getElementById("inter_flanguage").focus();
			return false;
		}
		if (document.getElementById("inter_paasedyear").value == 0) {
			alert("Please Select Inter Passed Year");
			document.getElementById("inter_paasedyear").focus();
			return false;
		}
		if (document.getElementById("inter_msecured").value == 0) {
			alert("Please Select Inter MarksSecured");
			document.getElementById("inter_msecured").focus();
			return false;
		}
		if (document.getElementById("inter_mmarks").value == "") {
			alert("Please Enter Inter Max Marks");
			document.getElementById("inter_mmarks").focus();
			return false;
		}
		 if (document.getElementById("inter_hallticket").value == "") {
				alert("Please Enter Inter Hallticket");
				document.getElementById("inter_hallticket").focus();
				return false;
			}
		 if (document.getElementById("inter_cnumber").value == "") {
				alert("Please Enter Inter Certificate Number 1");
				document.getElementById("inter_cnumber").focus();
				return false;
			}
			}
		//degree validation
		
		var degree_len = document.getElementById("tbdegree").rows.length-2;
		/*  for (var c = 1; c <= degree_len; c++) {
		  
		if (document.getElementById("degree_name_exam_" + c).value == 0) {
				alert("Please Enter Name of Degree");
				document.getElementById("degree_name_exam_" + c).focus();
				return false;
			}
			if (document.getElementById("degree_medium_" + c).value == 0) {
				alert("Please select Medium");
				document.getElementById("degree_medium_" + c).focus();
				return false;
			}
			if (document.getElementById("degree_slanguage_" + c).value ==0) {
				alert("Please Enter  Second Language");
				document.getElementById("degree_slanguage_" + c).focus();
				return false;
			}*/
			/* if (document.getElementById("degree_optional1_" + c).value ==0) {
				alert("Please Select Optional 1");
				document.getElementById("degree_optional1_" + c).focus();
				return false;
			}
			if (document.getElementById("degree_optional2_" + c).value ==0) {
				alert("Please Select Optional 2 ");
				document.getElementById("degree_optional2_" + c).focus();
				return false;
			}
			if (document.getElementById("degree_optional3_" + c).value == 0) {
				alert("Please select Optional 3");
				document.getElementById("degree_optional3_" + c).focus();
				return false;
			}
			
			if (document.getElementById("degree_optional4_" + c).value == 0) {
				alert("Please Select Optional 4");
				document.getElementById("degree_optional4_" + c).focus();
				return false;
			} */
			
			/*if (document.getElementById("degree_passingmonth_" + c).value == 0) {
				alert("Please select Passing Month");
				document.getElementById("degree_passingmonth_" + c).focus();
				return false;
			}
			
			if (document.getElementById("degree_passingyear_" + c).value == 0) {
				alert("Please select Passing Year");
				document.getElementById("degree_passingyear_" + c).focus();
				return false;
			}
			if (document.getElementById("degree_univ_" + c).value ==0) {
				alert("Please Select University");
				document.getElementById("degree_univ_" + c).focus();
				return false;
			}
			
			if (document.getElementById("degree_msecured_" + c).value == "") {
				alert("Please Marks Secured ");
				document.getElementById("degree_msecured_" + c).focus();
				return false;
			}
			if (document.getElementById("degree_mmarks_" + c).value == "") {
				alert("Please Enter max Number");
				document.getElementById("degree_mmarks_" + c).focus();
				return false;
			}
			if (document.getElementById("degree_hallticket_" + c).value == "") {
				alert("Please Enter Hallticket");
				document.getElementById("degree_hallticket_" + c).focus();
				return false;
			}
			 
		}*/
		
		
		//pgdegree validation
		
		var pgdegree_len = document.getElementById("tbpgdegree").rows.length-2;
		/*  for (var d = 1; d <= pgdegree_len; d++) {
		  
		if (document.getElementById("pgd_name_exam_" + d).value == 0) {
				alert("Please Enter Name of Degree");
				document.getElementById("pgd_name_exam_" + d).focus();
				return false;
			}
			if (document.getElementById("pgd_subject_" + d).value == 0) {
				alert("Please select Subject");
				document.getElementById("pgd_subject_" + d).focus();
				return false;
			}
			 
			if (document.getElementById("pgd_passingmonth_" + d).value == 0) {
				alert("Please select Passing Month");
				document.getElementById("pgd_passingmonth_" + d).focus();
				return false;
			}
			
			if (document.getElementById("pgd_passingyear_" + d).value == 0) {
				alert("Please select Passing Year");
				document.getElementById("pgd_passingyear_" + d).focus();
				return false;
			}
			if (document.getElementById("pgd_univ_" + d).value ==0) {
				alert("Please Select University");
				document.getElementById("pgd_univ_" + c).focus();
				return false;
			}
			
			if (document.getElementById("pgd_msecured_" + d).value == "") {
				alert("Please Marks Secured ");
				document.getElementById("pgd_msecured_" + d).focus();
				return false;
			}
			if (document.getElementById("pgd_mmarks_" + d).value == "") {
				alert("Please Enter max Number");
				document.getElementById("pgd_mmarks_" + d).focus();
				return false;
			}
			if (document.getElementById("pgd_hallticket_" + d).value == "") {
				alert("Please Enter Hallticket");
				document.getElementById("pgd_hallticket_" + d).focus();
				return false;
			}
			 
		}
		
		*/
		
		//bed validation
		
		var bed_len = document.getElementById("tbBed").rows.length-2;
		  for (var i = 1; i <= bed_len; i++) {
		  
		if (document.getElementById("bed_pgraduation_" + i).value == 0) {
				alert("Please Enter Professional Graduation");
				document.getElementById("bed_pgraduation_" + i).focus();
				return false;
			}
			if (document.getElementById("bed_msubject1_" + i).value == 0) {
				alert("Please select Methodology Subject 1");
				document.getElementById("bed_msubject1_" + i).focus();
				return false;
			}
			 
			if (document.getElementById("bed_msubject2_" + i).value == 0) {
				alert("Please select Methodology Subject 2");
				document.getElementById("bed_msubject2_" + i).focus();
				return false;
			}
			
			if (document.getElementById("bed_passingmonth_" + i).value == 0) {
				alert("Please select Passing Month");
				document.getElementById("bed_passingmonth_" + i).focus();
				return false;
			}
			if (document.getElementById("bed_passingyear_" + i).value == 0) {
				alert("Please select Passing Year");
				document.getElementById("bed_passingyear_" + i).focus();
				return false;
			}
			if (document.getElementById("bed_univ_" + i).value ==0) {
				alert("Please Select University");
				document.getElementById("bed_univ_" + i).focus();
				return false;
			}
			
			if (document.getElementById("bed_msecured_" + i).value == "") {
				alert("Please Marks Secured ");
				document.getElementById("bed_msecured_" + i).focus();
				return false;
			}
			if (document.getElementById("bed_mmarks_" + i).value == "") {
				alert("Please Enter max Number");
				document.getElementById("bed_mmarks_" + i).focus();
				return false;
			}
			if (document.getElementById("bed_hallticket_" + i).value == "") {
				alert("Please Enter Hallticket");
				document.getElementById("bed_hallticket_" + i).focus();
				return false;
			}
			 
		}
		
		//med validation
		var med_len = document.getElementById("tbMed").rows.length-2;
		/*	  for (var i = 1; i <= med_len; i++) {
		  
		if (document.getElementById("med_pdegree_" + i).value == 0) {
				alert("Please Enter Professional Degree");
				document.getElementById("med_pdegree_" + i).focus();
				return false;
			}
			
			if (document.getElementById("med_passingmonth_" + i).value == 0) {
				alert("Please select Passing Month");
				document.getElementById("med_passingmonth_" + i).focus();
				return false;
			}
			if (document.getElementById("med_passingyear_" + i).value == 0) {
				alert("Please select Passing Year");
				document.getElementById("med_passingyear_" + i).focus();
				return false;
			}
			if (document.getElementById("med_univ_" + i).value ==0) {
				alert("Please Select University");
				document.getElementById("med_univ_" + i).focus();
				return false;
			}
			
			if (document.getElementById("med_msecured_" + i).value == "") {
				alert("Please Marks Secured ");
				document.getElementById("med_msecured_" + i).focus();
				return false;
			}
			if (document.getElementById("med_mmarks_" + i).value == "") {
				alert("Please Enter max Number");
				document.getElementById("med_mmarks_" + i).focus();
				return false;
			}
			if (document.getElementById("med_hallticket_" + i).value == "") {
				alert("Please Enter Hallticket");
				document.getElementById("med_hallticket_" + i).focus();
				return false;
			}
			 
		}*/
		
	 	var accept = confirm("Are you sure you want Submit");
			if (accept == true) 
			{
			loading("Form Submitting,Please Wait...");
				document.getElementById("alumni_lendegree").value=degree_len;
				document.getElementById("alumni_lenpg").value=pgdegree_len;
				document.getElementById("alumni_lenbed").value=bed_len;
				document.getElementById("alumni_lenmed").value=med_len;
				document.forms[0].key.value = "educationDetails";
				document.forms[0].submit();
			} else {
				return false;
			}
	 
	 
	 }
	 
	 function ssc_display()
	 {
	 	var val=document.getElementById("ssc_name_of_board").value;
	 	if(val=="OTHER")
	 	{
	 		document.getElementById("ssc_other").style.display="block";
	 	}
	 	else
	 	{
	 		document.getElementById("ssc_other").style.display="none";
	 		document.getElementById("ssc_oboardname").value="";
	 	}
	 }
	 
	  function inter_display()
	 {
	 	var val=document.getElementById("inter_name_of_board").value;
	 	if(val=="OTHER")
	 	{
	 		document.getElementById("inter_other").style.display="block";
	 	}
	 	else
	 	{
	 		document.getElementById("inter_other").style.display="none";
	 		document.getElementById("inter_oboardname").value="";
	 	}
	 }
	 	
	  

	  function Submit(confirmation_msg,struts_param_name,java_method_name)
	  {
	  var required_fields = "";
	  		var status = "true";
	  		required_fields = "<span  style='color:red;font-size:22px!important;'>"
	  				+ cross
	  				+ " Below mentioned(<i class='fa fa-times' aria-hidden='true'></i>) fields are mandatory / invalid</span>";
	  		required_fields += " <span class='sub_heading' >" + side_arrow
	  				+ "Required Details:</span>";

	  		if (document.getElementById("emp_photo_hidden").value=="" && document.getElementById("emp_photo").value=="") 
			{
				required_fields += "<span class='sub_fields'>" + break_space
						+ "Please Select Upload Candidate Photo </span>";
				status = "false";
			}
	  		
	    /* if(document.getElementById("emp_sur_name").value=="")
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter SurName</span>";
	  			status = "false";
	  } */
	   if(document.getElementById("emp_name").value=="")
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Name</span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_dob").value=="")
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Date Of Birth</span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_father_name").value=="")
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Father Name</span>";
	  			status = "false";
	  } 
	   if(document.getElementById("emp_aadhar").value.length!=12)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Aadhar Number</span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_mobile").value.length!=10)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Mobile Number</span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_m_status").value=="")
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Marital Status</span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_pancard").value=="")
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter PAN Card</span>";
	  			status = "false";
	  } 
	   if(document.getElementById("genderM").checked== false && document.getElementById("genderF").checked== false )
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Select Gender</span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_email").value=="")
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Email</span>";
	  			status = "false";
	  } 
	   if( document.getElementById("emp_appointment").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Nature Of Appointment</span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_medium").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Medium</span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_mothertongue").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Mother Tongue</span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_religion").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Religion </span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_community").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Community </span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_locality").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Locality </span>";
	  			status = "false";
	  } 

	   if(document.getElementById("emp_nativedistrict").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Native District </span>";
	  			status = "false";
	  }

	   if(document.getElementById("emp_nativedistrict").value==99)
	  {
		   if(document.getElementById("other_state").value=="")
			  {
			  		
			   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Other State </span>";
			  			status = "false";
			  }  
		   if(document.getElementById("other_district").value=="")
			  {
			  		
			   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter OtherDistrict </span>";
			  			status = "false";
			  }  
	  }
	  if(document.getElementById("emp_disability").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Disability </span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_disability").value=="YES")
	  {
		  if(document.getElementById("type_dis").value==0)  
		  {
		  		
		   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Type of Disability </span>";
		  			status = "false";
		  } 
		  
		  if(document.getElementById("perc_dis").value==0)  
		  {
		  		
		   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Percentage of Disablity </span>";
		  			status = "false";
		  } 
		  
	  }
	  if(document.getElementById("emp_districtcode").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select District </span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_mandalcode").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Mandal </span>";
	  			status = "false";
	  }  
	   if(document.getElementById("emp_villagecode").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Village </span>";
	  			status = "false";
	  }
	  if(document.getElementById("emp_doorno").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Door No </span>";
	  			status = "false";
	  }
	  if(document.getElementById("emp_street").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Street </span>";
	  			status = "false";
	  }
	  if(document.getElementById("emp_pincode").value.length!=6)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Pincode </span>";
	  			status = "false";
	  }
	  if(document.getElementById("emp_sameaddress_S").checked== false && document.getElementById("emp_sameaddress_N").checked== false)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Residental Address as same aas permanent Address  </span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_sameaddress_N").checked== true)
	{
		  if(document.getElementById("pa_districtcode").value==0)
			  
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Permanent Address District  </span>";
	  			status = "false";
	  }  
		  if(document.getElementById("pa_districtcode").value==99)
			  
		  {
			  if(document.getElementById("other_address").value==0)
			  {
			  		
			   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Address(State,District,Mandal,Village)  </span>";
			  			status = "false";
			  } 
		   
		  }  

		  if(document.getElementById("pa_districtcode").value!=99)
			  
		  {
	 if(document.getElementById("pa_mandalcode").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Permanent Mandal District  </span>";
	  			status = "false";
	  } 
	 
	  if(document.getElementById("pa_villagecode").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Permanent Village District  </span>";
	  			status = "false";
	  } 
		  }
	  if(document.getElementById("pa_doorno").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Permanent Door No </span>";
	  			status = "false";
	  } 
	  if(document.getElementById("pa_street").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Permanent Street </span>";
	  			status = "false";
	  } 
	  if(document.getElementById("pa_pincode").value==0)
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Permanent Pincode </span>";
	  			status = "false";
	  }
		  }
	
	  if(document.getElementById("emp_healthcard").value=="")
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Health Card Number </span>";
	  			status = "false";
	  } 
	  if(document.getElementById("emp_dependencies").value=="")
	  {
	  		
	   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Dependencies </span>";
	  			status = "false";
	  }
	  var fmembers = document.getElementById("tbfmembers").rows.length-2;
	  for (var i = 1; i <= fmembers; i++) {
		  
		  if(document.getElementById("p_relationship_" + i).value=="0")
		  {
		  		
		   required_fields += "<span class='sub_fields'>" + break_space+ "Please Select Relation </span>";
		  			status = "false";
		  }
		  
		  if(document.getElementById("p_healthCard_no_" + i).value=="")
		  {
		  		
		   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Health Card NUmber </span>";
		  			status = "false";
		  }
		  if(document.getElementById("p_dob_" + i).value=="")
		  {
		  		
		   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Date of Birth </span>";
		  			status = "false";
		  }
		  if(document.getElementById("p_adhar_no_" + i).value=="")
		  {
		  		
		   required_fields += "<span class='sub_fields'>" + break_space+ "Please Enter Aadhar Number </span>";
		  			status = "false";
		  }
	  }
	  
	  if(status=="true")
	  {
		  var frmlen=document.getElementById("tbfmembers").rows.length-2;
		  required_fields="<span style='color:#52D017;font-size:25px;'> <i class='fa fa-info-circle' aria-hidden='true'></i> "+confirmation_msg+"</span><br><div class='btn btn-success pull-right' style='margin-left:10px!important;' data-dismiss='modal' onclick='javascript:(function() {document.forms[0].alumni_lenfmembers.value=\""+frmlen+"\"; document.forms[0]."+struts_param_name+".value=\""+java_method_name+"\";loading();document.forms[0].submit(); })()'><i class='fa fa-check' aria-hidden='true'></i> SUBMIT </div> <div class='btn btn-warning pull-right' data-dismiss='modal'><i class='fa fa-pencil-square-o' aria-hidden='true'></i> EDIT </div>";
	  
	  } 
	  openModal(required_fields);


	  }

	  function show_data(val)
	  {
		  if(val=="notSame")
		  	{
			  document.getElementById("hide_add").style.display="block";
		  	}	
		  	else
		  	{
		  		
		  		document.getElementById("hide_add").style.display="none";
		  		document.getElementById("pa_districtcode").value="0";
		  		document.getElementById("pa_mandalcode").value="0";
		  		document.getElementById("pa_mandalcode").options.length = 0;
		  		document.getElementById("pa_villagecode").value="0";
		  		document.getElementById("pa_villagecode").options.length = 0;
		  		document.getElementById("pa_doorno").value="";
		  		document.getElementById("pa_street").value="";
		  		document.getElementById("pa_pincode").value="";
		  	}
	   
	  }

	  function disability_hide()
	  {
	  	if(document.getElementById("emp_disability").value=="YES")
	  	{
	  		document.getElementById("hide_dis").style.display="block";
	  	}	
	  	else
	  	{
	  	
	  		document.getElementById("hide_dis").style.display="none";
	  		document.getElementById("type_dis").value="0";
	  		document.getElementById("perc_dis").value="0";
	  		
	  	}
	  }

	  var alumni_lenfmembers = 1;
	  	function addFMembers() {
	  	
	  		var table = document.getElementById("tbfmembers");
	  		table_len = (table.rows.length)-1;
	  		//table_len = document.getElementById("emp_dependencies").value;
	  		alumni_lenfmembers = table_len;
	  		row = table.insertRow(table_len).outerHTML = "<tr id='srow"+table_len+"'> "
	  		
	  			 	+"<td><span>"
	  				+ table_len
	  				+ "</span></td>" 
	  				
	  				+ "<td><select   name='beanProperties(p_relationship_" 
	  				+ table_len 
	  				+")' id='p_relationship_"
	  				+ table_len
	  				+ "' class='form-control'  > "
	  				+"<option value='0'>--Select--</option><option value='1'>Father</option> "
	  				+ "<option value='2'>Mother</option><option value='3'>Son</option> "
	  				+ "<option value='4'>Daughter</option><option value='5'>Spouse</option>  "
	  				+"</select></td> "
	  				  
	  				+ "<td> <input type='text'  name='beanProperties(p_healthCard_no_"
	  				+ table_len
	  				+ ")' id='p_healthCard_no_"
	  				+ table_len
	  				+ "' maxlength='15' class='form-control'   onkeyup='checkAlphaNumeric(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
	  				
	  				+ "<td><input type='text'  name='beanProperties(p_dob_"
	  				+ table_len
	  				+ ")' class='form-control datepicker' id='p_dob_"
	  				+ table_len
	  				+ "'  maxlength='10'   onkeyup='buildDate(this,'/');onkeypress='return validateNumberAndForwardSlash(event,this);'><span id='papername_error' style='color:red;'></span></td> "
	  				
	  				+ "<td> <input type='text'  name='beanProperties(p_adhar_no_"
	  				+ table_len
	  				+ ")' id='p_adhar_no_"
	  				+ table_len
	  				+ "' maxlength='12'  class='form-control' onchange='uidOnly(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
	  				
	  				+ "<td align='center'> <input type='button'  name='btn' value='delete' class='btn btn-danger' onclick='deleteRecord();'"
	  				
	  				+ "</td>"
	  				
	  				+"<td></td></tr> ";
	  		document.forms[0].alumni_lenfmembers.value = alumni_lenfmembers;
	  	}
	  	function removeFMedmbers() {
	  		var table = document.getElementById("tbfmembers");
	  		table_len = (table.rows.length)-1;
	  		if (table_len >= 2) {
	  			document.getElementById("tbfmembers").deleteRow(
	  					table.rows.length - 2);
	  			res_len = table_len;
	  			res_len--;
	  		} else {
	  			alert("Enter details for atleast one row.");
	  			return false;
	  		}
	  		document.forms[0].res_len.value = res_len;
	  	}
	  	
	  	
	  	 
	     function show_dependencies()
	     {
	    	 value=document.getElementById("emp_dependencies").value;
	    	 document.getElementById("showdepen").style.display="block";
	 	    var tbl=document.getElementById("tbfmembers");
	 	    var  length = parseInt(tbl.rows.length)-1; 
	 	    if(value=="0")
	 	    {
	 	    	var pres_value=1;
	 	    }
	 	    else if(value=="1")
	 	    {
	 	    	document.getElementById("showdepen").style.display="block";
	 	    	return false;
	 	    }
	 	     
	 	    else if(value>1)  
	 	 	{
	 			   for(var z=length;z<=value;z++)
	 			   {
	 				    var tbl=document.getElementById("tbfmembers");
	 				    var table_len = z;
	 				   row = tbl.insertRow(table_len).outerHTML = "<tr id='srow"+table_len+"'> "
	 			  		
		  			 	+"<td><span>"
		  				+ table_len
		  				+ "</span></td>" 
		  				
		  				+ "<td><select   name='beanProperties(p_relationship_" 
		  				+ table_len 
		  				+")' id='p_relationship_"
		  				+ table_len
		  				+ "' class='form-control'  > "
		  				+"<option value='0'>--Select--</option><option value='1'>Father</option> "
		  				+ "<option value='2'>Mother</option><option value='3'>Son</option> "
		  				+ "<option value='4'>Daughter</option><option value='5'>Spouse</option>  "
		  				+"</select></td> "
		  				  
		  				+ "<td> <input type='text'  name='beanProperties(p_healthCard_no_"
		  				+ table_len
		  				+ ")' id='p_healthCard_no_"
		  				+ table_len
		  				+ "' maxlength='15' class='form-control'   onkeyup='checkAlphaNumeric(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
		  				
		  				+ "<td><input type='text'  name='beanProperties(p_dob_"
		  				+ table_len
		  				+ ")' class='form-control ' id='p_dob_"
		  				+ table_len
		  				+ "'  maxlength='10'   onkeyup='buildDate(this,'/');onkeypress='return validateNumberAndForwardSlash(event,this);'><span id='papername_error' style='color:red;'></span></td> "
		  				
		  				+ "<td> <input type='text'  name='beanProperties(p_adhar_no_"
		  				+ table_len
		  				+ ")' id='p_adhar_no_"
		  				+ table_len
		  				+ "' maxlength='12'  class='form-control' onkeyup='intOnly(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
		  				
		  				+"<td></td></tr> ";
	 		        }
	 			  document.forms[0].alumni_lenfmembers.value = table_len;
	          }
	          else
	          {
	        	  document.getElementById("showdepen").style.display="none";
	          }
	 	    
	 	   /*$('.datepicker').datepicker({
				 yearRange : '1920:+0',
				 changeYear: true,
				 changeMonth: true,
				 showOn: "focus",
				 inline: true,
				 autoclose:true,
				 todayHighlight: true,
				// endDate: new Date(),
				 maxDate: 10
			});*/
	     }
	     function show_spouse()
	     {
	    	 
	    	 var val=document.getElementById("emp_m_status").value;
	 	 	if(val=="2")
	 	 	{
	 	 		document.getElementById("showspouse").style.display="block";
	 	 	}
	 	 	else
	 	 	{
	 	 		document.getElementById("showspouse").style.display="none";
	 	 	}
	    	 
	     }
	  function spouse_hide()
	     {
	    	 
	    	 var val=document.getElementById("emp_empgovt").value;
	 	 	if(val=="YES")
	 	 	{
	 	 		document.getElementById("spousewrk").style.display="block";
	 	 		 document.getElementById("spouse_wrk_data").style.display="block";
	 	 	}
	 	 	else
	 	 	{
	 	 		document.getElementById("spousewrk").style.display="none";
	 	 		document.getElementById("spouse_wrk_data").style.display="none";
	 	 		document.getElementById("spouse_wrk").value="";
	 	 		document.getElementById("government").style.display="none";
	 	 		document.getElementById("othergovernment").style.display="none";
	 	 		document.getElementById("otherstategovernment").style.display="none";
	 	 		
	 	 		document.getElementById("othergovt_spouse_tresid").value="";
	 	 		document.getElementById("othergovt_spouse_name").value="";
	 	 		document.getElementById("othergovt_spouse_desig").value="";
	 	 		document.getElementById("othergovt_spouse_wrkplace").value="";
	 	 		document.getElementById("othergovt_spouse_dist").value="";
	 	 		document.getElementById("othergovt_spouse_mandal").value="";
	 	 		document.getElementById("othergovt_spouse_village").value="";
	 	 		document.getElementById("othergovt_spouse_mandal").options.length = 0;
	 	 		document.getElementById("othergovt_spouse_village").options.length = 0;
	 	 		
	 	 		document.getElementById("otherstgovt_spouse_tresid").value="";
	 	 		document.getElementById("otherstgovt_spouse_name").value="";
	 	 		document.getElementById("otherstgovt_spouse_deisg").value="";
	 	 		document.getElementById("otherstgovt_spouse_wrkplc").value="";
	 	 		document.getElementById("otherstgovt_spouse_dist").value="";
	 	 		document.getElementById("otherstgovt_spouse_mandal").value="";
	 	 		document.getElementById("otherstgovt_spouse_village").value="";
	 	 		document.getElementById("otherstgovt_spouse_mandal").options.length = 0;
	 	 		document.getElementById("otherstgovt_spouse_village").options.length = 0;
	 	 		
	 	 	}
	    	 
	     }
	    
	     function spousewrk_hide()
	     {
	    	 
	    	 var val=document.getElementById("spouse_wrk").value;
	    	
	 	 	if(val=="YES")
	 	 	{
	 	 		document.getElementById("government").style.display="block";
	 	 		document.getElementById("othergovernment").style.display="none";
	 	 		document.getElementById("otherstategovernment").style.display="none";
	 	 		
	 	 		document.getElementById("othergovt_spouse_tresid").value="";
	 	 		document.getElementById("othergovt_spouse_name").value="";
	 	 		document.getElementById("othergovt_spouse_desig").value="";
	 	 		document.getElementById("othergovt_spouse_wrkplace").value="";
	 	 		document.getElementById("othergovt_spouse_dist").value="";
	 	 		document.getElementById("othergovt_spouse_mandal").value="";
	 	 		document.getElementById("othergovt_spouse_village").value="";
	 	 		document.getElementById("othergovt_spouse_mandal").options.length = 0;
	 	 		document.getElementById("othergovt_spouse_village").options.length = 0;
	 	 		
	 	 		document.getElementById("otherstgovt_spouse_tresid").value="";
	 	 		document.getElementById("otherstgovt_spouse_name").value="";
	 	 		document.getElementById("otherstgovt_spouse_deisg").value="";
	 	 		document.getElementById("otherstgovt_spouse_wrkplc").value="";
	 	 		document.getElementById("otherstgovt_spouse_dist").value="";
	 	 		document.getElementById("otherstgovt_spouse_mandal").value="";
	 	 		document.getElementById("otherstgovt_spouse_village").value="";
	 	 		document.getElementById("otherstgovt_spouse_mandal").options.length = 0;
	 	 		document.getElementById("otherstgovt_spouse_village").options.length = 0;
	 	 	}
	 	 	else if(val=="NO")
	 	 	{
	 	 		document.getElementById("othergovernment").style.display="block";
	 	 		document.getElementById("otherstategovernment").style.display="none";
	 	 		document.getElementById("government").style.display="none";
	 	 	 
	 	 		document.getElementById("otherstgovt_spouse_tresid").value="";
	 	 		document.getElementById("otherstgovt_spouse_name").value="";
	 	 		document.getElementById("otherstgovt_spouse_deisg").value="";
	 	 		document.getElementById("otherstgovt_spouse_wrkplc").value="";
	 	 		document.getElementById("otherstgovt_spouse_dist").value="";
	 	 		document.getElementById("otherstgovt_spouse_mandal").value="";
	 	 		document.getElementById("otherstgovt_spouse_village").value="";
	 	 		document.getElementById("otherstgovt_spouse_mandal").options.length = 0;
	 	 		document.getElementById("otherstgovt_spouse_village").options.length = 0;
	 	 	}
	 	 	else
	 	 		{
	 	 		document.getElementById("otherstategovernment").style.display="block";
	 	 		document.getElementById("othergovernment").style.display="none";
	 	 		document.getElementById("government").style.display="none";
	 	 		
	 	 		document.getElementById("othergovt_spouse_tresid").value="";
	 	 		document.getElementById("othergovt_spouse_name").value="";
	 	 		document.getElementById("othergovt_spouse_desig").value="";
	 	 		document.getElementById("othergovt_spouse_wrkplace").value="";
	 	 		document.getElementById("othergovt_spouse_dist").value="";
	 	 		document.getElementById("othergovt_spouse_mandal").value="";
	 	 		document.getElementById("othergovt_spouse_village").value="";
	 	 		document.getElementById("othergovt_spouse_mandal").options.length = 0;
	 	 		document.getElementById("othergovt_spouse_village").options.length = 0;
	 	 		 
	 	 		}
	     }
	      function second_appointment()
		  {
		  	if(document.getElementById("dsc_lein").value=="1")
		  	{
		  		document.getElementById("second_appointment").style.display="block";
		  	}	
		  	else
		  	{
		  	
		  		document.getElementById("second_appointment").style.display="none";
		  		document.getElementById('dsc_2nd_year').value="0";
    			document.getElementById('roster_pt_2nd').value="0";
    			document.getElementById('2nd_aptmt').value="";
    			document.getElementById('post_category2').value="0";
    			document.getElementById('auth_appoint_2').value="0";
    			document.getElementById('dist_aptmt_2').value="0";
    			document.getElementById('mandal_aptmt_2').value="0";
    			document.getElementById("mandal_aptmt_2").options.length = 0;
    			document.getElementById('rev_vill_2').value="0";
    			document.getElementById("rev_vill_2").options.length = 0;
    			document.getElementById('manage_2').value="0";
    			
		  	}
		  }
	     
	     
	     
	     function test_fun()
		  {
		  	if(document.getElementById("is_dept_test").value=="Yes")
		  	{
		  		document.getElementById("test").style.display="block";
		  		document.getElementById("showtests").style.display="block";
		  	}	
		  	else
		  	{
		  	
		  		document.getElementById("test").style.display="none";
		  		document.getElementById("showtests").style.display="none";
		  	}
		  }
	     
	     function promotion()
		  {
		  	if(document.getElementById("is_promoted").value=="Yes")
		  	{
		  		document.getElementById("promote").style.display="block";
		  		document.getElementById("showpromotions").style.display="block";
		  	}	
		  	else
		  	{
		  	
		  		document.getElementById("promote").style.display="none";
		  		document.getElementById("showpromotions").style.display="none";
		  	}
		  }
	     
	 
	     
	     var alumni_lenftests = 1;
	     function show_tests()
	     {
	    	 value_test=document.getElementById("no_of_test").value;
	    	 document.getElementById("showtests").style.display="block";
	 	    var tbl=document.getElementById("tbftests");
	 	    var  length =  tbl.rows.length; 

	 	    if(value_test=="0")
	 	    {
	 	    	var pres_value=1;
	 	    }
	 	    else if(value_test=="1")
	 	    {
	 	    	document.getElementById("showtests").style.display="block";
	 	    	return false;
	 	    }
	 	     
	 	    else if(value_test>1)  
	 	 	{
	 			   for(var z=length;z<=value_test;z++)
	 			   {
	 				  
	 				    var tbl=document.getElementById("tbftests");
	 				    var table_len =z;
	 				  
	 				    var add="<tr id='srow"+table_len+"'> "
		  			 	+"<td><span>"
		  				+ table_len
		  				+ "</span></td>" 
		  				
		  				+"<td><select   name='beanProperties(dept_test_passed_"+ table_len+")' id='dept_test_passed_"+ table_len+ "' class='form-control'> ";
						
						 var len = document.forms[0].elements["beanProperties(dept_test_passed_1)"].options.length;
						for(var l=0;l<len;l++) {
							 add += ' <option value="'+document.forms[0].elements["beanProperties(dept_test_passed_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(dept_test_passed_1)"][l].text+'</option>';
						}
						add=add+"</select></td> ";
		  				
		  				  
		  				add=add+ "<td> <input type='text'  name='beanProperties(regd_no_"
		  				+ table_len
		  				+ ")' id='regd_no_"
		  				+ table_len
		  				+ "' maxlength='15' class='form-control'   onkeyup='intOnly(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
		  				
		  				+ "<td> <input type='text'  name='beanProperties(gazzette_no_"
		  				+ table_len
		  				+ ")' id='gazzette_no_"
		  				+ table_len
		  				+ "' maxlength='15' class='form-control'   onkeyup='isAlphaNumberKey(this);'   /><span id='papercode_error' style='color:red;'></span></td>"
		  				
		  				
		  				+ "<td><select   name='beanProperties(passed_month_" 
		  				+ table_len 
		  				+")' id='passed_month_"
		  				+ table_len
		  				+ "' class='form-control'  > "
		  				+"<option value='0'>--Select--</option><option value='January'>January</option> "
						+ "<option value='February'>February</option><option value='March'>March</option> "
						+ "<option value='April'>April</option><option value='May'>May</option>  "
						+"<option value='June'>June</option><option value='July'>July</option> "
						+ "<option value='August'>August</option><option value='September'>September</option> "
						+ "<option value='October'>October</option><option value='November'>November</option><option value='December'>December</option>  "
						+"</select> </td>"
		  				
		  				
		  				+ "<td><select   name='beanProperties(passed_year_" 
		  				+ table_len 
		  				+")' id='passed_year_"
		  				+ table_len
		  				+ "' class='form-control'   style='width:90px;'><option value='0'>--Select--</option>" ;
						for(var l=1983;l<=2022;l++) {
							 add += ' <option value="'+l+'" >'+l+'</option>';
						}
						add=add+"</select></td> ";
		  				
		  				+"<td></td></tr> ";
		  				$("#tbftests").append(add);
	 		        }
	 			  
	 			  document.forms[0].alumni_lenftests.value = table_len;
	          }
	          else
	          {
	        	  document.getElementById("showtests").style.display="none";
	          }
	     }
	     
	     
	     function pro_otherschool()
	     {
	    	  var tbl=document.getElementById("tbfpromotions");
			    var len = parseInt(tbl.rows.length);
			    for(var i=1;i<=len;i++)
			    	{
			    	 var val=document.getElementById("school_name_"+i).value;
			    	 if(val=="OTHERS")
				 	 	{
				 	 		document.getElementById("pro_other_school").style.display="block";
				 	 	}
				 	 	else
				 	 	{
				 	 		document.getElementById("pro_other_school").style.display="none";
				 	 	}
			    	}
	    	 
	     }
	     
	     
	     
	     var alumni_lenfpromotions = 1;     

	     function show_promotions()
	     {
	    	 value=document.getElementById("no_of_promotions").value;
	    	 //value=0;
	    	 document.getElementById("showpromotions").style.display="block";
	 	    var tbl=document.getElementById("tbfpromotions");
	 	    var  length = tbl.rows.length-1;
	 	    if(value=="0")
	 	    {
	 	    	var pres_value=1;
	 	    	//document.getElementById("showpromotions").style.display="block";
	 	    }
	 	    else  if(value=="1")
	 	    {
	 	    	document.getElementById("showpromotions").style.display="none";
	 	    	return false;
	 	    }
	 	    else if(value>1)  
	 	 	{
	 			   for(var z=length;z<=value;z++)
	 			   {
	 				    var tbl=document.getElementById("tbfpromotions");
	 				    var table_len = z;
	 			  		
	 				    var add="<tr id='srow"+table_len+"'> "
		  			 	+"<td><span>"
		  				+ table_len
		  				+ "</span></td>" 
		  				 
		  				+"<td><select   name='beanProperties(post_category_"+ table_len+")' id='post_category_"+ table_len+ "' class='form-control'> ";
						
						 var len = document.forms[0].elements["beanProperties(post_category_1)"].options.length;
						for(var l=0;l<len;l++) {
							 add += ' <option value="'+document.forms[0].elements["beanProperties(post_category_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(post_category_1)"][l].text+'</option>';
						}
						add=add+"</select></td> ";
		  				
						add=add+"<td><select   name='beanProperties(medium_"+ table_len+")' id='medium_"+ table_len+ "' class='form-control'> ";
						
						 var len = document.forms[0].elements["beanProperties(medium_1)"].options.length;
						for(var l=0;l<len;l++) {
							 add += ' <option value="'+document.forms[0].elements["beanProperties(medium_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(medium_1)"][l].text+'</option>';
						}
						add=add+"</select></td> ";
						
						add=add+"<td><select   name='beanProperties(subject_"+ table_len+")' id='subject_"+ table_len+ "' class='form-control'> ";
						
						 var len = document.forms[0].elements["beanProperties(subject_1)"].options.length;
						for(var l=0;l<len;l++) {
							 add += ' <option value="'+document.forms[0].elements["beanProperties(subject_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(subject_1)"][l].text+'</option>';
						}
						add=add+"</select></td> ";
		  				
						add=add+"<td><select   name='beanProperties(promt_district_"+ table_len+")' id='promt_district_"+ table_len+ "' class='form-control'" +
						" onchange=\"retrieveOptions(this,'','promt_mandal_"+table_len+"','mandals');openPromotionDetails(this.value,"+table_len+")\" >";
						
						 var len = document.forms[0].elements["beanProperties(promt_district_1)"].options.length;
						for(var l=0;l<len;l++) {
							 add += ' <option value="'+document.forms[0].elements["beanProperties(promt_district_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(promt_district_1)"][l].text+'</option>';
						}
						add=add+ "<td> <span id=\"promotion_district_"+table_len+"\" style=\"display: none;\">Address(State,Mandal,School Name)<input type='text'  name='beanProperties(other_district_promotion_"
		  				+ table_len
		  				+ ")' id='other_district_promotion_"
		  				+ table_len
		  				+ "' maxlength='15' class='form-control'      /></span><span id='papercode_error' style='color:red;'></span>" +
		  						"</td>" ;
						add=add+"<td><select   name='beanProperties(promt_mandal_"+ table_len+")' id='promt_mandal_"+ table_len+ "' class='form-control' " +
						" onchange=\"retrieveOptions(document.getElementById('promt_district_"+ table_len+"'),this,'school_name_"+table_len+"','schools')\" >";
						
						 var len = document.forms[0].elements["beanProperties(promt_mandal_1)"].options.length;
						for(var l=0;l<len;l++) {
							 add += ' <option value="'+document.forms[0].elements["beanProperties(promt_mandal_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(promt_mandal_1)"][l].text+'</option>';
						}
						add=add+"</select></td> ";
		  				
						add=add+"<td><select   name='beanProperties(school_name_"+ table_len+")' id='school_name_"+ table_len+ "' class='form-control'> ";
						
						 var len = document.forms[0].elements["beanProperties(school_name_1)"].options.length;
						for(var l=0;l<len;l++) {
							 add += ' <option value="'+document.forms[0].elements["beanProperties(school_name_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(school_name_1)"][l].text+'</option>';
						}
						add=add+"</select></td> ";
		  				  
		  				add=add+ "<td> <input type='text'  name='beanProperties(date_promotion_"
		  				+ table_len
		  				+ ")' id='date_promotion_"
		  				+ table_len
		  				+ "  class='form-control datepicker' style='wdith:95px;' onkeypress='return validateNumberAndForwardSlash(event,this);' onkeyup='buildDate(this,'/')' /><span id='papercode_error' style='color:red;'></span></td>"
		  				
		  				+ "<td> <input type='text'  name='beanProperties(date_joining_"
		  				+ table_len
		  				+ ")' id='date_joining_"
		  				+ table_len
		  				+ "'  class='form-control datepicker'  style='wdith:95px;' onkeypress='return validateNumberAndForwardSlash(event,this);' onkeyup='buildDate(this,'/')' /><span id='papercode_error' style='color:red;'></span></td>"
		  				+"<td></td></tr> ";
		  				$("#tbfpromotions").append(add);
	 		        }
	 			  
	 			  document.forms[0].alumni_lenfpromotions.value = table_len;
	          }
	          else
	          {
	        	  document.getElementById("showtests").style.display="none";
	          }
	 	    
	 	  
	     }
	  	
	     
	     
	     var alumni_lengthpromotions = 1;
		  	function addPromotions() {
		  	
		  		var table = document.getElementById("tbfpromotions");
		  		table_len = (table.rows.length)-1;
		  		document.getElementById("no_of_promotions").value=table_len;
		  		alumni_lengthpromotions = table_len;
		  		
		  		var add="<tr id='srow"+table_len+"'> "
  			 	+"<td><span>"
  				+ table_len
  				+ "</span></td>" 
  				 
  				+"<td><select   name='beanProperties(post_category_"+ table_len+")' id='post_category_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(post_category_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(post_category_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(post_category_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
  				
				add=add+"<td><select   name='beanProperties(medium_"+ table_len+")' id='medium_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(medium_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(medium_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(medium_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				add=add+"<td><select   name='beanProperties(subject_"+ table_len+")' id='subject_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(subject_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(subject_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(subject_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
  				
				add=add+"<td><select   name='beanProperties(promt_district_"+ table_len+")' id='promt_district_"+ table_len+ "' class='form-control'" +
						" onchange=\"retrieveOptions(this,'','promt_mandal_"+table_len+"','mandals');openPromotionDetails(this.value,"+table_len+")\" >";

				var len = document.forms[0].elements["beanProperties(promt_district_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(promt_district_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(promt_district_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
				
				add+= "<td> <span id=\"promotion_district_"+table_len+"\" style=\"display: none;\">Address(State,Mandal,School Name)<input type='text'  name='beanProperties(other_district_promotion_"
  				+ table_len
  				+ ")' id='other_district_promotion_"
  				+ table_len
  				+ "' maxlength='15' class='form-control'      /></span><span id='papercode_error' style='color:red;'></span>" +
  						"</td>" ;
				
				add=add+"<td><select   name='beanProperties(promt_mandal_"+ table_len+")' id='promt_mandal_"+ table_len+ "' class='form-control'" +
				" onchange=\"retrieveOptions(document.getElementById('promt_district_"+ table_len+"'),this,'school_name_"+table_len+"','schools');\" >";
				
				 var len = document.forms[0].elements["beanProperties(promt_mandal_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(promt_mandal_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(promt_mandal_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
 				
				add=add+"<td><select   name='beanProperties(school_name_"+ table_len+")' id='school_name_"+ table_len+ "' class='form-control'> ";
				
				 var len = document.forms[0].elements["beanProperties(school_name_1)"].options.length;
				for(var l=0;l<len;l++) {
					 add += ' <option value="'+document.forms[0].elements["beanProperties(school_name_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(school_name_1)"][l].text+'</option>';
				}
				add=add+"</select></td> ";
  				  
  				add=add+ "<td> <input type='text'  name='beanProperties(date_promotion_"
  				+ table_len
  				+ ")' id='date_promotion_"
  				+ table_len
  				+ "'  class='form-control' onkeypress='return validateNumberAndForwardSlash(event,this);' onkeyup='buildDate(this,'/')' /><span id='papercode_error' style='color:red;'></span></td>"
  				
  				+ "<td> <input type='text'  name='beanProperties(date_joining_"
  				+ table_len
  				+ ")' id='date_joining_"
  				+ table_len
  				+ "'  class='form-control ' onkeypress='return validateNumberAndForwardSlash(event,this);' onkeyup='buildDate(this,'/')' /><span id='papercode_error' style='color:red;'></span></td>"
  				+"<td></td></tr> ";
  				
  				$("#tbfpromotions").append(add);
		  		document.forms[0].alumni_lengthpromotions.value = alumni_lengthpromotions;
		  	}
		  	function removePromotions() {
		  		var table = document.getElementById("tbfpromotions");
		  		table_len = (table.rows.length);
		  	alert("table_len===>"+table_len);
		  		if (table_len > 3) {
		  			document.getElementById("tbfpromotions").deleteRow(
		  					table.rows.length - 1);
		  			res_len = table_len;
		  			res_len--;
		  		} else {
		  			alert("Enter details for atleast one row.");
		  			return false;
		  		}
		  		document.forms[0].res_len.value = res_len;
		  	}
	     function GetForm()
	     {
	    	 tras_del=document.getElementById("tras_del").value;
	    	 if (tras_del=='YES')
	    		{

	    			 
	    				document.getElementById('yes').style.display="block";
	    				document.getElementById('no').style.display="block";
	    		}
	    		else 
	    		{
	    			document.getElementById('yes').style.display="none";
	    			document.getElementById('no').style.display="block";
	    			
	    			document.getElementById('teacher_affected').value="";
	    			document.getElementById('from_district').value="0";
	    			document.getElementById('date_of_join').value="";
	    			document.getElementById('category_post').value="0";
	    			document.getElementById('medium_inter').value="0";
	    			document.getElementById('sub_inter').value="0";
	    			document.getElementById('allot_mandal').value="0";
	    			document.getElementById("allot_mandal").options.length = 0;

	    		}
	    	
	    	 
	     }
	     
	     
	     var alumni_lentransfers = 1;
	     function show_transfers()
	     {
	    	 value=document.getElementById("genreal_transfer_details").value;
	    	 document.getElementById("showtransfers").style.display="block";
	 	    var tbl=document.getElementById("tbftransfers");
	 	    var  length = tbl.rows.length;
	 	  
	 	
	 	    if(value=="0")
	 	    {
	 	    	//pres_value=0;
	 	    	document.getElementById("showtransfers").style.display="none";
	 	    	return false;
	 	    }
	 	    else if(value=="1")
	 	    {
	 	    	document.getElementById("showtransfers").style.display="block";
	 	    	return false;
	 	    }
	 	    else if(value<=20)  
	 	 	{
	 	    	 $(".datepicker").datepicker("destroy");
	 			   for(var z=length;z<=value;z++)
	 			   {
	 				 
	 				    var tbl=document.getElementById("tbftransfers");
	 				   var table_len = z;
	 			  		
	 				    var add="<tr id='srow"+table_len+"'> "
		  			 	+"<td><span>"
		  				+ table_len
		  				+ "</span></td>" ;
	 				    
		  				add+="<td><select   name='beanProperties(districts_"+ table_len+")' id='districts_"+ table_len+ "' class='form-control' " +
		  				" onchange=\"retrieveOptions(this,'','mandals_"+ table_len+ "','mandals');showotherdetails(this.value,"+table_len+")\" >";
						
						 var len = document.forms[0].elements["beanProperties(districts_1)"].options.length;
						for(var l=0;l<len;l++) 
						{
							if(table_len==value&&document.forms[0].elements["beanProperties(districts_1)"][l].value==99)
								{
								;
								}
							else
							 add += ' <option value="'+document.forms[0].elements["beanProperties(districts_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(districts_1)"][l].text+'</option>';
						}
						add+="</select></td> ";
						 
						add+= "<td> <span id=\"transfer_district_"+table_len+"\" style=\"display: none;\">Address(District/Mandal/School)<input type='text'  name='beanProperties(others_transfer_address_"
		  				+ table_len
		  				+ ")' id='others_transfer_address_"
		  				+ table_len
		  				+ "' maxlength='15' class='form-control'/></span><span id='papercode_error' style='color:red;'></span>" +
		  						"</td>" ;
		  				
						add+="<td><span id=\"transfer_mandal_"+table_len+"\" style=\"display: none;\"><select   name='beanProperties(mandals_"+ table_len+")' id='mandals_"+ table_len+ "' class='form-control' " +
						" onchange=\"retrieveOptions(document.getElementById('districts_"+ table_len+"'),this,'school_"+ table_len+ "','schoolswithothers');\" >";
						
						 var len = document.forms[0].elements["beanProperties(mandals_1)"].options.length;
						for(var l=0;l<len;l++) 
						{
							 add += ' <option value="'+document.forms[0].elements["beanProperties(mandals_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(mandals_1)"][l].text+'</option>';
						}
						add+="</select></td> ";
		  				 
						add+="<td><span id=\"transfer_school_"+table_len+"\" style=\"display: none;\"><select   name='beanProperties(school_"+ table_len+")' id='school_"+ table_len+ "' class='form-control' onchange=\"openOtherOffice(this.value,"+table_len+")\"> " ;
								
						
						 var len = document.forms[0].elements["beanProperties(school_1)"].options.length;
						for(var l=0;l<len;l++) 
						{
							 add += ' <option value="'+document.forms[0].elements["beanProperties(school_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(school_1)"][l].text+'</option>';
						}
						add+="</select></td> ";

		  				add+= "<td> <span id=\"other_office_"+table_len+"\" style=\"display: none;\">Office Name<input type='text'  name='beanProperties(ofc_name_"
		  				+ table_len
		  				+ ")' id='ofc_name_"
		  				+ table_len
		  				+ "' maxlength='15' class='form-control'/></span><span id='papercode_error' style='color:red;'></span>" +
		  						"</td>" +
		  						" <td><span id=\"other_worked_"+table_len+"\" style=\"display: none;\">Worked As<input type='text'  name='beanProperties(worked_as_"
		  				+ table_len
		  				+ ")' id='worked_as_"
		  				+ table_len
		  				+ "' maxlength='15' class='form-control'      /></span> <span id='papercode_error' style='color:red;'></span></td>";
		  				
		  				add+="<td><select   name='beanProperties(category_post_"+ table_len+")' id='category_post_"+ table_len+ "' class='form-control'> ";
						
						 var len = document.forms[0].elements["beanProperties(category_post_1)"].options.length;
						for(var l=0;l<len;l++) {
							 add += ' <option value="'+document.forms[0].elements["beanProperties(category_post_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(category_post_1)"][l].text+'</option>';
						}
						add=add+"</select></td> ";
						
						add+="<td><select   name='beanProperties(transfer_medium_"+ table_len+")' id='transfer_medium_"+ table_len+ "' class='form-control'> ";
						
						 var len = document.forms[0].elements["beanProperties(transfer_medium_1)"].options.length;
						for(var l=0;l<len;l++) 
						{
							 add += ' <option value="'+document.forms[0].elements["beanProperties(transfer_medium_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(transfer_medium_1)"][l].text+'</option>';
						}
						add=add+"</select></td> ";
		  				
						add+="<td><select   name='beanProperties(sub_"+ table_len+")' id='sub_"+ table_len+ "' class='form-control'> ";
						
						 var len = document.forms[0].elements["beanProperties(sub_1)"].options.length;
						for(var l=0;l<len;l++) {
							 add += ' <option value="'+document.forms[0].elements["beanProperties(sub_1)"][l].value+'" >'+document.forms[0].elements["beanProperties(sub_1)"][l].text+'</option>';
						}
						add=add+"</select></td> ";
		  				
		  				add=add+ "<td> <input type='text'  name='beanProperties(working_from_date_"
		  				+ table_len
		  				+ ")' id='working_from_date_"
		  				+ table_len
		  				+ "' maxlength='15' class='form-control datepicker'  onkeyup='buildDate(this,'/');' onkeypress='return validateNumberAndForwardSlash(event,this);'     /><span id='papercode_error' style='color:red;'></span></td>"
		  				
		  				+ "<td> <input type='text'  name='beanProperties(working_due_date_"
		  				+ table_len
		  				+ ")' id='working_due_date_"
		  				+ table_len
		  				+ "' maxlength='15' class='form-control datepicker'  onkeyup='buildDate(this,'/');' onkeypress='return validateNumberAndForwardSlash(event,this);'     /><span id='papercode_error' style='color:red;'></span></td>"
		  				+"<td></td></tr> ";
		  				
		  				$("#tbftransfers").append(add);
	 		        }

	 			  $('.datepicker').datepicker({
	 				 yearRange : '1920:+0',
	 				 changeYear: true,
	 				 changeMonth: true,
	 				 showOn: "focus",
	 				 inline: true,
	 				 autoclose:true,
	 				 todayHighlight: true,
	 				// endDate: new Date(),
	 				 maxDate: 10
	 			}); 
	 			  
	 			  document.forms[0].alumni_lentransfers.value = table_len;
	          }
	          else
	          {
	        	  alert("No of Transfers should be less than or equal to 20 records only");
	        	  document.getElementById("genreal_transfer_details").value="";
	        	  document.getElementById("genreal_transfer_details").focus();
	        	 // document.getElementById("showtransfers").style.display="none";
	          }
	 	    
	 	  
	     }  
	     function promotionalDetails()
		 {
	    	/* 
	    	 if (document.getElementById("pst_wrkg_schl").value =="") {
	 			alert("Please Enter Present Working Place ");
	 			document.getElementById("pst_wrkg_schl").focus();
	 			return false;
	 		}
	 		if (document.getElementById("pst_schl_date").value == 0) {
	 			alert("Please Enter Present School joining date   ");
	 			document.getElementById("pst_schl_date").focus();
	 			return false;
	 		}
	 		if (document.getElementById("design").value == "") {
	 			alert("Please Enter Designation ");
	 			document.getElementById("design").focus();
	 			return false;
	 		}*/
	    	 
	 		if (document.getElementById("dsc_year").value == 0) {
	 			alert("Please Select DSC/APPSC Year");
	 			document.getElementById("dsc_year").focus();
	 			return false;
	 		}
	 		if (document.getElementById("roster_pt").value == 0) {
	 			alert("Please Select Roster Point");
	 			document.getElementById("roster_pt").focus();
	 			return false;
	 		}
	 		if (document.getElementById("1st_aptment_date").value == 0) {
	 			alert("Please Enter date of first Appointment");
	 			document.getElementById("1st_aptment_date").focus();
	 			return false;
	 		}
	 		
	 		if (document.getElementById("post_category").value == 0) {
	 			alert("Please Select Category of the post");
	 			document.getElementById("post_category").focus();
	 			return false;
	 		}
	 		if (document.getElementById("appointing_auth").value == 0) {
	 			alert("Please Select Appointing Authority");
	 			document.getElementById("appointing_auth").focus();
	 			return false;
	 		}
	 		if (document.getElementById("distict_apt").value == 0) {
	 			alert("Please Select District");
	 			document.getElementById("distict_apt").focus();
	 			return false;
	 		}
	 		
	 		if (document.getElementById("distict_apt").value == 99) {
	 		if (document.getElementById("other_first_address").value == "") {
	 			alert("Please Enter Other District");
	 			document.getElementById("other_first_address").focus();
	 			return false;
	 		}
	 		}
	 		else{
	 			
	 		
	 		if (document.getElementById("mandal_apt").value == 0) {
	 			alert("Please Select Mandal");
	 			document.getElementById("mandal_apt").focus();
	 			return false;
	 		}
	 		if (document.getElementById("rev_village").value == 0) {
	 			alert("Please Select Village");
	 			document.getElementById("rev_village").focus();
	 			return false;
	 		}
	 		}
	 		if (document.getElementById("management").value == 0) {
	 			alert("Please Select Management");
	 			document.getElementById("management").focus();
	 			return false;
	 		}
	 		if (document.getElementById("dsc_lein").value == 0) {
	 			alert("Please Select DSC Under Lein");
	 			document.getElementById("dsc_lein").focus();
	 			return false;
	 		}
	 		if (document.getElementById("dsc_lein").value == "1") {
	 			
	 			if (document.getElementById("dsc_2nd_year").value == 0) {
		 			alert("Please Select DSC/APPSC Second Year");
		 			document.getElementById("dsc_2nd_year").focus();
		 			return false;
		 		}
		 		if (document.getElementById("roster_pt_2nd").value == 0) {
		 			alert("Please Select Roster Point");
		 			document.getElementById("roster_pt_2nd").focus();
		 			return false;
		 		}
		 		if (document.getElementById("2nd_aptmt").value == 0) {
		 			alert("Please Enter date of Second Appointment");
		 			document.getElementById("2nd_aptmt").focus();
		 			return false;
		 		}
		 		
		 		if (document.getElementById("post_category2").value == 0) {
		 			alert("Please Select Category of the post");
		 			document.getElementById("post_category2").focus();
		 			return false;
		 		}
		 		if (document.getElementById("auth_appoint_2").value == 0) {
		 			alert("Please Select Appointing Authority");
		 			document.getElementById("auth_appoint_2").focus();
		 			return false;
		 		}
		 		if (document.getElementById("dist_aptmt_2").value == 0) {
		 			alert("Please Select District");
		 			document.getElementById("dist_aptmt_2").focus();
		 			return false;
		 		}
		 		
		 		if (document.getElementById("dist_aptmt_2").value == 99) {
		 		if (document.getElementById("other_second_address").value == "") {
		 			alert("Please Enter Other District");
		 			document.getElementById("other_second_address").focus();
		 			return false;
		 		}
		 		}
		 		else{
		 		
		 		if (document.getElementById("mandal_aptmt_2").value == 0) {
		 			alert("Please Select Mandal");
		 			document.getElementById("mandal_aptmt_2").focus();
		 			return false;
		 		}
		 		if (document.getElementById("rev_vill_2").value == 0) {
		 			alert("Please Select Village");
		 			document.getElementById("rev_vill_2").focus();
		 			return false;
		 		}
		 		}
		 		if (document.getElementById("manage_2").value == 0) {
		 			alert("Please Select Management");
		 			document.getElementById("manage_2").focus();
		 			return false;
		 		}
	 		}
	 		
	 		if (document.getElementById("is_dept_test").value == 0) {
	 			alert("Please Select Passed any Departmental Test");
	 			document.getElementById("is_dept_test").focus();
	 			return false;
	 		}
	 		
	 		if (document.getElementById("is_dept_test").value == "Yes") {
	 			
	 			if (document.getElementById("no_of_test").value =="") {
		 			alert("Please Enter No of tests");
		 			document.getElementById("no_of_test").focus();
		 			return false;
		 		}
	 			
	 			var dept_tests = document.getElementById("tbftests").rows.length-1;
	 			//alert("dept_tests:::"+dept_tests);
	 			
	 			if (!document.getElementById("no_of_test").value =="") {
		 			 
		 			
		 			
		 			  for (var d = 1; d <= dept_tests; d++) {
		 			  
		 			if (document.getElementById("dept_test_passed_" + d).value == 0) {
		 					alert("Please select Name of the Departmental Test Passed");
		 					document.getElementById("dept_test_passed_" + d).focus();
		 					return false;
		 				}
		 				if (document.getElementById("regd_no_" + d).value == "") {
		 					alert("Please Enter Regd.No");
		 					document.getElementById("regd_no_" + d).focus();
		 					return false;
		 				}
		 				 
		 				if (document.getElementById("gazzette_no_" + d).value == "") {
		 					alert("Please Enter Gazette No");
		 					document.getElementById("gazzette_no_" + d).focus();
		 					return false;
		 				}
		 				
		 				if (document.getElementById("passed_month_" + d).value == 0) {
		 					alert("Please select Passed Year");
		 					document.getElementById("passed_month_" + d).focus();
		 					return false;
		 				}
		 				if (document.getElementById("passed_year_" + d).value ==0) {
		 					alert("Please Select Passed Year");
		 					document.getElementById("passed_year_" + d).focus();
		 					return false;
		 				}
		 				
		 				
		 				 
		 			}
		 			
		 		
		 		}
	 		}
		 
	 		
	 		if (document.getElementById("is_promoted").value == 0) {
	 			alert("Please Select Promoted");
	 			document.getElementById("is_promoted").focus();
	 			return false;
	 		}
	 		
	 		if (document.getElementById("is_promoted").value == "Yes") {
	 			
	 			var promotion_details = document.getElementById("tbfpromotions").rows.length-2;
	 			//alert("promotion_details:::"+promotion_details)
	 			
	 			/*if (document.getElementById("no_of_promotions").value =="") {
		 			alert("Please Enter No of Promotions");
		 			document.getElementById("no_of_promotions").focus();
		 			return false;
		 		}
	 			
	 			else {*/
	 			
	 			if((!document.getElementById("no_of_promotions").value =="")){
		 			  for (var d = 1; d <= promotion_details; d++) {
		 			  
		 			if (document.getElementById("post_category_" + d).value =="0") {
		 					alert("Please select Category of the Post");
		 					document.getElementById("post_category_" + d).focus();
		 					return false;
		 				}
		 				if (document.getElementById("medium_" + d).value =="0") {
		 					alert("Please select Medium");
		 					document.getElementById("medium_" + d).focus();
		 					return false;
		 				}
		 				 
		 				if (document.getElementById("subject_" + d).value =="0") {
		 					alert("Please select Subject");
		 					document.getElementById("subject_" + d).focus();
		 					return false;
		 				}
		 				
		 				if (document.getElementById("promt_district_" + d).value =="0") {
		 					alert("Please select District");
		 					document.getElementById("promt_district_" + d).focus();
		 					return false;
		 				}
		 				
		 				if (document.getElementById("promt_district_" + d).value =="99"){
		 					if (document.getElementById("other_district_promotion_" + d).value =="") {
			 					alert("Please Enter Other Address");
			 					document.getElementById("other_district_promotion_" + d).focus();
			 					return false;
			 				}
		 				}
		 				else{
		 				if (document.getElementById("promt_mandal_" + d).value =="0" || document.getElementById("promt_mandal_" + d).value =="") {
		 					alert("Please Select Mandal");
		 					document.getElementById("promt_mandal_" + d).focus();
		 					return false;
		 				}
		 				
		 				if (document.getElementById("school_name_" + d).value =="0" || document.getElementById("school_name_" + d).value =="") {
		 					alert("Please Select School Name");
		 					document.getElementById("school_name_" + d).focus();
		 					return false;
		 				}
		 				}
		 				
		 				if (document.getElementById("date_promotion_" + d).value=="") {
		 					alert("Please Select Date of Promotion");
		 					document.getElementById("date_promotion_" + d).focus();
		 					return false;
		 				}
		 				
		 				if (document.getElementById("date_joining_" + d).value=="") {
		 					alert("Please Select Date of Joining in Promoted Post");
		 					document.getElementById("date_joining_" + d).focus();
		 					return false;
		 				}
		 				 
		 			}
		 			
			 		
		 			 
		 		} 
	 		}
	 		
	 		if (document.getElementById("present_joining_date").value=="") {
	 			alert("Please Select Present Joining Date");
	 			document.getElementById("present_joining_date").focus();
	 			return false;
	 		}
	 		if (document.getElementById("regular_date").value=="") {
	 			alert("Please Select regularization Date");
	 			document.getElementById("regular_date").focus();
	 			return false;
	 		}
	 		
			 var accept = confirm("Are you sure you want Submit");
				if (accept == true) 
				{
				loading("Form Submitting,Please Wait...");
				document.getElementById("alumni_lenftests").value=dept_tests;
				document.getElementById("alumni_lenfpromotions").value=promotion_details;
					document.forms[0].key.value = "promotionalDetails";
					document.forms[0].submit();
				} else {
					return false;
				}
		 }
		 
	     function transferDetails()
		 {
	    	 if (document.getElementById("tras_del").value == 0) {
		 			alert("Please Select inter district ");
		 			document.getElementById("tras_del").focus();
		 			return false;
		 		}
	    	 
	    	 if (document.getElementById("tras_del").value == "Yes") {
		 			
		 			if (document.getElementById("teacher_affected").value == 0) {
			 			alert("Please Select DSC/APPSC Second Year");
			 			document.getElementById("teacher_affected").focus();
			 			return false;
			 		}
			 		if (document.getElementById("from_district").value == 0) {
			 			alert("Please Select from district");
			 			document.getElementById("from_district").focus();
			 			return false;
			 		}
			 		if (document.getElementById("date_of_join").value == 0) {
			 			alert("Please Enter Date of Joining in Present District");
			 			document.getElementById("date_of_join").focus();
			 			return false;
			 		}
			 		
			 		if (document.getElementById("medium_inter").value == 0) {
			 			alert("Please Select Medium");
			 			document.getElementById("medium_inter").focus();
			 			return false;
			 		}
			 		if (document.getElementById("sub_inter").value == 0) {
			 			alert("Please Select Subject");
			 			document.getElementById("sub_inter").focus();
			 			return false;
			 		}
			 		if (document.getElementById("dist_aptmt_2").value == 0) {
			 			alert("Please Select District");
			 			document.getElementById("dist_aptmt_2").focus();
			 			return false;
			 		}
			 		
			 		if (document.getElementById("allot_mandal").value == 0) {
			 			alert("Please Select On transfer Allotted Mandal");
			 			document.getElementById("allot_mandal").focus();
			 			return false;
			 		}
			 	
		 		}
	    	 
	    	 
	    	 if (document.getElementById("genreal_transfer_details").value == "") {
		 			alert("Please Enter No.of Transfers");
		 			document.getElementById("genreal_transfer_details").focus();
		 			return false;
		 		}
	    	 var transfers_details = document.getElementById("tbftransfers").rows.length-1;
	    	 if (document.getElementById("genreal_transfer_details").value =="0" || document.getElementById("genreal_transfer_details").value ==0) {
	    	 }
	    	 else{
	    		 for (var d = 1; d <= transfers_details; d++) {
	 			  
	 			if (document.getElementById("districts_" + d).value == 0) {
	 					alert("Please select District");
	 					document.getElementById("districts_" + d).focus();
	 					return false;
	 				}
	 			

 				if (document.getElementById("districts_" + d).value ==99) {
 					
 				if (document.getElementById("others_transfer_address_" + d).value == "") {
 					alert("Please Enter Address(District/Mandal/school)");
 					document.getElementById("others_transfer_address_" + d).focus();
 					return false;
 				}
 				}
 				if (document.getElementById("districts_" + d).value !=99) {
	 				if (document.getElementById("mandals_" + d).value == 0) {
	 					alert("Please select Mandal");
	 					document.getElementById("mandals_" + d).focus();
	 					return false;
	 				}
	 				 
	 				if (document.getElementById("school_" + d).value == 0) {
	 					alert("Please select School");
	 					document.getElementById("school_" + d).focus();
	 					return false;
	 				}
	 				
 				}
	 				
	 				if (document.getElementById("category_post_" + d).value ==0) {
	 					alert("Please Select Category of the Post");
	 					document.getElementById("category_post_" + c).focus();
	 					return false;
	 				}
	 				
	 				if (document.getElementById("transfer_medium_" + d).value =="") {
	 					alert("Please Select Medium");
	 					document.getElementById("transfer_medium_" + c).focus();
	 					return false;
	 				}
	 				
	 				if (document.getElementById("sub_" + d).value =="") {
	 					alert("Please Select Subject");
	 					document.getElementById("sub_" + c).focus();
	 					return false;
	 				}
	 				if (document.getElementById("working_from_date_" + d).value =="") {
	 					alert("Please Enter Working From Date");
	 					document.getElementById("working_from_date_" + c).focus();
	 					return false;
	 				}
	 				if(d != transfers_details){
	 				if (document.getElementById("working_due_date_" + d).value =="") {
	 					alert("Please  Enter Working To Date");
	 					document.getElementById("working_due_date_" + c).focus();
	 					return false;
	 				}
	 				}
	 			}
	 		}
			 var accept = confirm("Are you sure you want Submit");
				if (accept == true) 
				{
				loading("Form Submitting,Please Wait...");
					document.getElementById("alumni_lentransfers").value=transfers_details;
					document.forms[0].key.value = "transferDetails";
					document.forms[0].submit();
				} else {
					return false;
				}
		 }
	     function otherAutho(no)
	     {
	    	 if(no=="1"){
	    		 var val=document.getElementById("appointing_auth").value;
	    		 if(val=="OTHER")
	    		 {
	    			 document.getElementById("otherappAuthorityDiv").style.display="block";
	    		 }
	    		 else
	    		 {
	    			 document.getElementById("otherappAuthorityDiv").style.display="none";
	    			 document.getElementById("otherappAuthority").value="";
	    		 }
	    	 }
	    	 else
	    	 {
	    		 var val=document.getElementById("auth_appoint_2").value;
	    		 if(val=="OTHER")
	    		 {
	    			 document.getElementById("otherappAuthorityDiv2").style.display="block";
	    		 }
	    		 else
	    		 {
	    			 document.getElementById("otherappAuthorityDiv2").style.display="none";
	    			 document.getElementById("otherappAuthority2").value="";
	    		 }

	    	 }
	     }
	     function otherManagement(no)
	     {
	    	 if(no=="1")
	    	 {


	    		 var val=document.getElementById("management").value;
	    		 if(val=="OTHER")
	    		 {
	    			 document.getElementById("othermanagementDiv").style.display="block";
	    		 }
	    		 else
	    		 {
	    			 document.getElementById("othermanagementDiv").style.display="none";
	    			 document.getElementById("othermanagement").value="";
	    		 }	
	    	 }
	    	 else
	    	 {
	    		 var val=document.getElementById("manage_2").value;
	    		 if(val=="OTHER")
	    		 {
	    			 document.getElementById("othermanagementDiv2").style.display="block";
	    		 }
	    		 else
	    		 {
	    			 document.getElementById("othermanagementDiv2").style.display="none";
	    			 document.getElementById("othermanagement2").value="";
	    		 }	
	    	 }
	     }
	     
	     function getspouseDetails()
	     {
					document.forms[0].key.value = "getTeacherData";
					document.forms[0].submit();
	     }
	  
	     function Otherdistrictpermenat(val)
	     {
	    var val=document.getElementById("pa_districtcode").value;
	       if(val=="99")
	      {
	     
	     document.getElementById("address").style.display="";
	     document.getElementById("address_mandal").style.display="none"; 
	     document.getElementById("address_village").style.display="none"; 
	     document.getElementById("pa_mandalcode").value="";
	     document.getElementById("pa_villagecode").value="";
	      }
	      else
	      {
	      document.getElementById("address").style.display="none";     
	      document.getElementById("address_mandal").style.display=""; 
		     document.getElementById("address_village").style.display=""; 
	       
	      document.getElementById("other_address").value="";
	      //document.getElementById("other_district").value="";
	      }
	     }
	     
	     
	     function showSpousedistrict(val)
	     {
	    //var val=document.getElementById("othergovt_spouse_dist").value;
	       if(val=="99")
	      {
	      //document.getElementById("other_dis").style.display="";
	     document.getElementById("address_other_govt_spouse").style.display="";
	     document.getElementById("address_other_mandal_govt_spouse").style.display="none"; 
	     document.getElementById("address_other_village_govt_spouse").style.display="none"; 
	     document.getElementById("othergovt_spouse_mandal").value="";
	     document.getElementById("othergovt_spouse_village").value="";
	      }
	      else
	      {
	      //document.getElementById("other_dis").style.display="none";
	      document.getElementById("address_other_govt_spouse").style.display="none";     
	      document.getElementById("address_other_mandal_govt_spouse").style.display=""; 
		     document.getElementById("address_other_village_govt_spouse").style.display=""; 
	       
	      document.getElementById("other_govt_spouse_address").value="";
	      //document.getElementById("other_district").value="";
	      }
	     }
	     
	     function showSpousestatedistrict(val)
	     {
	    //var val=document.getElementById("othergovt_spouse_dist").value;
	       if(val=="99")
	      {
	      //document.getElementById("other_dis").style.display="";
	     document.getElementById("address_otherstate_govt_spouse").style.display="";
	     document.getElementById("address_otherstate_mandal_govt_spouse").style.display="none"; 
	     document.getElementById("address_otherstate_village_govt_spouse").style.display="none"; 
	     document.getElementById("otherstgovt_spouse_mandal").value="";
	     document.getElementById("otherstgovt_spouse_village").value="";
	      }
	      else
	      {
	      //document.getElementById("other_dis").style.display="none";
	      document.getElementById("address_otherstate_govt_spouse").style.display="none";     
	      document.getElementById("address_otherstate_mandal_govt_spouse").style.display=""; 
		     document.getElementById("address_otherstate_village_govt_spouse").style.display=""; 
	       
	      document.getElementById("other_govt_spouse_address").value="";
	      //document.getElementById("other_district").value="";
	      }
	     }
	     
	     function showFirstotherDetails()
	     {
	    	var val= document.getElementById("distict_apt").value;
	       if(val=="99")
	      {
	     document.getElementById("address_other_first_address").style.display="";
	     document.getElementById("address_othermandal_first_address").style.display="none"; 
	     document.getElementById("address_othervillage_first_address").style.display="none"; 
	     document.getElementById("mandal_apt").value="";
	     document.getElementById("rev_village").value="";
	      }
	      else
	      {
	      document.getElementById("address_other_first_address").style.display="none";     
	      document.getElementById("address_othermandal_first_address").style.display=""; 
		     document.getElementById("address_othervillage_first_address").style.display=""; 
	       
	      document.getElementById("other_first_address").value="";
	      }
	     }
	     
	     function showSecondotherDetails()
	     {
	    	 var val= document.getElementById("dist_aptmt_2").value;
	       if(val=="99")
	      {
	     document.getElementById("address_other_second_address").style.display="";
	     document.getElementById("address_othermandal_second_address").style.display="none"; 
	     document.getElementById("address_othervillage_second_address").style.display="none"; 
	     document.getElementById("mandal_aptmt_2").value="";
	     document.getElementById("rev_vill_2").value="";
	      }
	      else
	      {
	      document.getElementById("address_other_second_address").style.display="none";     
	      document.getElementById("address_othermandal_second_address").style.display=""; 
		     document.getElementById("address_othervillage_second_address").style.display=""; 
	       
	      document.getElementById("other_second_address").value="";
	      }
	     }
	     
	     
	     function openPromotionDetails(val,index)
	     {
	    
	       if(val=="99")
	      {
	      document.getElementById("promotion_district_"+index).style.display="";
	      document.getElementById("promotion_mandal_"+index).style.display="none";
	      document.getElementById("promotion_school_"+index).style.display="none";
	      }
	      else
	      {
	      document.getElementById("promotion_district_"+index).style.display="none";
	      document.getElementById("promotion_mandal_"+index).style.display="";
	      document.getElementById("promotion_school_"+index).style.display="";
	      
	      document.getElementById("other_district_promotion_"+index).value="";
	     
	      }
	     }
	     
	     
	    
	     
	     function showotherdetails(val,index)
	     {
	       if(val=="99")
	      {
	      document.getElementById("transfer_district_"+index).style.display="";
	      document.getElementById("transfer_mandal_"+index).style.display="none";
	      document.getElementById("transfer_school_"+index).style.display="none";
	      }
	      else
	      {
	      document.getElementById("transfer_district_"+index).style.display="none";
	      document.getElementById("transfer_mandal_"+index).style.display="";
	      document.getElementById("transfer_school_"+index).style.display="";
	      document.getElementById("others_transfer_address_"+index).value="";
	      }
	     }
	    function ssc_data()
	    
		  {
	    	var val=document.forms[0].elements["beanProperties(ssc)"].value;
	   
 			  if(val=="Yes")
			  	{
				  document.getElementById("ssc").style.display="";
			  	}	
			  	else
			  	{
			  		
			  		document.getElementById("ssc").style.display="none";
		
				
			  	}
		   
		  }

	    function inter_data()
		  {
	    	var val=document.forms[0].elements["beanProperties(inter)"].value;
	    	
			  if(val=="Yes")
			  	{
				  document.getElementById("inter").style.display="";
				
				 
			  	}	
			  	else
			  	{
			  		
			  		document.getElementById("inter").style.display="none";
			  		
			  	}
		   
		  }
	    function OtherdistricttransferYes(val)
	     {
	       if(val=="99")
	      {
	     
	     document.getElementById("transfer_yes").style.display="";
	     document.getElementById("allot_mandal").style.display="none"; 
	     document.getElementById("transfer_mandal_yes").style.display="none"; 
	    
	      }
	      else
	      {
	      document.getElementById("transfer_yes").style.display="none";     
	      document.getElementById("allot_mandal").style.display=""; 
	      document.getElementById("transfer_mandal_yes").style.display=""; 
	       
	      document.getElementById("transfer_district_yes").value="";
	     
	      }
	     }
	    
	    /*function otheraddresscheck(i)
	    {
	    	if ((i.value).length > 0) 
	    	{
	    		i.value = i.value.replace(/[a-zA-Z.]+/g, "");
	    	}
	    	var str=i.value;
	    	 
	    }*/
