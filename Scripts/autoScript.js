        $(function () {
            $("#brandId").change(function () {
                var selectedItem = $(this).val();
		
				alert(selectedItem);

                var url = 'http://autoworth.azurewebsites.net/api/make/' ;
          
           
                $.ajax({
                    cache: false,
                    type: "GET",
                    url: url,
                    data: { "id": selectedItem },
                    success: function (data) {
         
				
                
                        for (var i = 0; i < data.length; ++i) {


                          
                                $('#makeId').append($('<option>', { value: data[i].AutoModelID, html: data[i].Name }));

                            
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Failed to retrieve terms.');
           
                    }
                });
            });
			    $("#paymentbutton").click(function(e) {

				var url = 'http://autoworth.azurewebsites.net/api/autoprices/GetById' ;
			
				
				var legacySystemDictionaryId = document.getElementById("makeId");
				
			
				var selectedItem = legacySystemDictionaryId.options[legacySystemDictionaryId.selectedIndex].value
		          
                $.ajax({
                    cache: false,
                    type: "GET",
                    url: url,
                    data: { "id": selectedItem , year: '2008'},
                    success: function (data) {
         
				    $('#preview').text('€ ' +  data[0].Amount);
                
                      
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Failed to retrieve valuations.');
           
                    }
                });

    });

        });

		

	
		
		  