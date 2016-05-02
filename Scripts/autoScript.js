        $(function () {


			     $("#makeId").change(function () {
                var selectedItem = $(this).val();
		          var url ='http://autoworth.azurewebsites.net/api/years/';
				alert (url);
                $.ajax({
                    cache: false,
                    type: "GET",
                    url: url   , 
                    data: { "id": selectedItem },
                    success: function (data) {
         
                    
                
                        for (var i = 0; i < data.length; ++i) {
                         
                                $('#year').append($('<option>', { value: 0, html: data[i] }));

                            
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
               
           
                    }
                });
            });


            $("#brandId").change(function () {
                var selectedItem = $(this).val();
		
			

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
                    
           
                    }
                });
            });
			
			

			    $("#paymentbutton").click(function(e) {
					
			        var makeId = document.getElementById("makeId").value;
			

			       
			        var yearId = $('#year :selected').text();
			

				var url = 'http://autoworth.azurewebsites.net/api/price/?id=' + makeId + '&year='+ yearId ;
			
			
	
				
			
				
		          
                $.ajax({
                    cache: false,
                    type: "GET",
                    url: url,
                    success: function (data) {
                    
         
				    $('#preview').text('€ ' +  data);
                
                      
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                     
           
                    }
                });

    });

        });

		

	
		
		  