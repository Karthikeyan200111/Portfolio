document.getElementById('contactform1').addEventListener('submit',  function(event) {
	event.preventDefault();
  
	var form = event.target;
	var data = new FormData(form);
  
	 fetch(form.action, {
	  method: form.method,
	  body: data
	})
	.then(function(response) {
	  if (response.ok) {
       form.reset();
		alert("Success! Your message has been sent.");
		
        
	  } else {
		alert('Error! Please try again later.');
	  }
	})
	.catch(function(error) {
	  console.error('Error:', error);
	  alert('An unexpected error occurred. Please try again later.');
	});
  });

 
