


                // sidebar-js "hidde element inside "

              
              
                              // Js edit page "for select"
                      
                          
                              function thevalue(){
                                var value = document.getElementById('selector').value;
                                // option == event 
                                if(value === "Event"){
                                    // show event
                                    document.getElementById("Event").style.display = "block";
                                    //hide news
                                    document.getElementById("News").style.display = "none";
                                    
                                }
                                // option == news
                                else{
                                    // hide event
                                    document.getElementById("Event").style.display = "none";
                                    // show news
                                    document.getElementById("News").style.display = "block";
                                }
                                
                            }
                            
                                  // Js edit page البحث بالجدول
                      
                      function myFunction() {
                       var input, filter, table, tr, td1,td2 ,i,txtValue0,txtValue1;
                       input = document.getElementById("myInput");
                       filter = input.value.toUpperCase();
                       table = document.getElementById("myTable");
                       tr = table.getElementsByTagName("tr");
                       for (i = 0; i < tr.length; i++) {
                         td1 = tr[i].getElementsByTagName("td")[0];
                         td2 = tr[i].getElementsByTagName("td")[1];
                     if(td1||td2){
                         txtValue0 = td1.textContent || td1.innerText;
                         txtValue1 = td2.textContent || td2.innerText;
                     
                           if (txtValue0.toUpperCase().indexOf(filter) > -1 ||  txtValue1.toUpperCase().indexOf(filter) > -1 ){
                      
                           tr[i].style.display = "";
                           }
                           else {
                             tr[i].style.display = "none";
                           }
                         }       
                       }
                     
                     
                     }
                                  // mange card page
              
                     
                const table = document.getElementById("tablecard");
                // save all tr
                const tr = table.getElementsByTagName("tr");
                
                function SearchData() {
                
                  var city = document.getElementById("idCity").value.toUpperCase();
                  var sector = document.getElementById("idSector").value.toUpperCase();
                 
                  for (i = 1; i < tr.length; i++) {
                
                    var rowCity = tr[i].getElementsByTagName("td")[3].textContent.toUpperCase();
                    var rowSector = tr[i].getElementsByTagName("td")[2].textContent.toUpperCase();
                    var isDiplay = true;
                
                
                
                    if (city != 'ALL' && rowCity != city) {
                      isDiplay = false;
                    }
                    if (sector != 'ALL' && rowSector != sector) {
                      isDiplay = false;
                    }
                    
                    
                    if (isDiplay) {
                      tr[i].style.display = "";
                    }  
                    else{
                      tr[i].style.display = "none";
                    }
                
                  }
                }
                
                                    // mangement news and events page
              
              function myFunction() {
                 var input, filter, table, tr, td1,td2 ,i,txtValue0,txtValue1;
                 input = document.getElementById("myInput");
                 filter = input.value.toUpperCase();
                 table = document.getElementById("myTable");
                 tr = table.getElementsByTagName("tr");
                 for (i = 0; i < tr.length; i++) {
                   td1 = tr[i].getElementsByTagName("td")[0];
                   td2 = tr[i].getElementsByTagName("td")[1];
               if(td1||td2){
                   txtValue0 = td1.textContent || td1.innerText;
                   txtValue1 = td2.textContent || td2.innerText;
               
                     if (txtValue0.toUpperCase().indexOf(filter) > -1 ||  txtValue1.toUpperCase().indexOf(filter) > -1 ){
                
                     tr[i].style.display = "";
                     }
                     else {
                       tr[i].style.display = "none";
                     }
                   }       
                 }
               
               }