function validation(){
	var number=document.getElementById("number").value;///get id with value 
	var numberpattern=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;////Regular expression
	if(numberpattern.test(number))
	   {
		
        
       }
    else
      {
    	
        document.getElementById("number").setCustomValidity('Inncorrect phone number format');
      }
	}






  $(function() {    
    $('#fname').change(function() { 
        $("#table_order td.col2:contains('" + $(this).val() + "')").parent().show();
        $("#table_order td.col2:not(:contains('" + $(this).val() + "'))").parent().hide();
    });

});
  

  function filterTable() {
    // Variables
    
    let dropdown, table, rows, cells, country, filter;
    dropdown = document.getElementById("countriesDropdown");
    table = document.getElementById("table_order");
    rows = table.getElementsByTagName("tr");
    filter = dropdown.value;
   
    // Loops through rows and hides those with countries that don't match the filter
    for (let row of rows) { // `for...of` loops through the NodeList
      cells = row.getElementsByTagName("td");
      country = cells[2] || null; // gets the 2nd `td` or nothing
      // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
      if (filter === "All" || !country || (filter === country.textContent)) {
        row.style.display = ""; // shows this row
      }
      else {
        row.style.display = "none"; // hides this row
      }

    }
   
  }

  function openForm() {
    document.getElementById("Open_Messages").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("Open_Messages").style.display = "none";
  }
  
  function openMassageForm() {
    document.getElementById("Send_Messages").style.display = "block";
  }
  
  function closeMassageForm() {
    document.getElementById("Send_Messages").style.display = "none";
  }

  function openMassage_request() {
    document.getElementById("massage_request").style.display = "block";
  }
  
  function closeMassage_request() {
    document.getElementById("massage_request").style.display = "none";
  }