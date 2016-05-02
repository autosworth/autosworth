        $(function () {


			     $("#makeId").change(function () {
                var selectedItem = $(this).val();
					//	alert(selectedItem);

				//var url = 'http://autoworth.azurewebsites.net/api/years/' + selectedItem;
                var url ='http://autoworth.azurewebsites.net/api/years/';
				alert (url);
				$.ajax({
				    cache: false,
				    type: "GET",
				    url: url,
				    data: { "id": selectedItem },
				    success: function (data) {
                            
				        alert("Hello");
                        for (var i = 0; i < data.length; ++i) {

                     alert(data[i]);
                          
                                $('#year').append($('<option>', { value: 0, html: data[i] }));

                            
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Failed to retrieve years');
           
                    }
                });
            });


            $("#brandId").change(function () {
                var selectedItem = $(this).val();
		
				//alert(selectedItem);

                var url = 'http://autoworth.azurewebsites.net/api/make/' ;
          
           
                $.ajax({
                    cache: false,
                    type: "GET",
                    url: url,
                    data: { "id": selectedItem },
                    success: function (data) {
         
				
                
                        for (var i = 0; i < data.length; ++i) {
//alert(data[i].AutoModelID);
                          
                                $('#makeId').append($('<option>', { value: data[i].AutoModelID, html: data[i].Name }));

                            
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Failed to retrieve terms.');
           
                    }
                });
            });
			
			

			    $("#paymentbutton").click(function(e) {
					
					var makeId = document.getElementById("makeId");
					var yearId = document.getElementById("year");
					var selectedItem = legacySystemDictionaryId.options[legacySystemDictionaryId.selectedIndex].value
				//	if year == null
				//	alert ('Pleaes enter a year');

				var url = 'http://autoworth.azurewebsites.net/api/price/?id=' + makeId + '&year=' = yearId ;
			
				alert(url);
				var legacySystemDictionaryId = document.getElementById("makeId");
				
			
				
		          
                $.ajax({
                    cache: false,
                    type: "GET",
                    url: url,
                    success: function (data) {
         
				    $('#preview').text('€ ' +  data[0]);
                
                      
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Failed to retrieve valuations.');
           
                    }
                });

    });

        });

		

	
		
		  