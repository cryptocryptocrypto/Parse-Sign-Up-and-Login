function signUpUser() {
        		
        	// TODO: Enter in your own API keys
	        Parse.initialize("App-ID", "Javascript-Key");
	        		        	       	
	        var user = new Parse.User();

	        var username = $("#signup-username").val();
	        var email = $("#signup-email").val();
	        var password = $("#signup-password").val();
	        var school = $("#signup-school").val();

	        user.set("username", username);
			user.set("password", password);
			user.set("email", email);

	        user.signUp(null, {
		        success: function(user) {
			        alert("You successfully signed up!");
			        var currentUser = Parse.User.current();  
			        	if(currentUser) {
	  					// TODO: Bring them to the hidden "logged in only" page
  					}  
			     },
			    error: function(user, error) {
				    alert("Error: " + error.code + " " + error.message);
				}
		});
}

function signInUser() {

        	// TODO: Enter in your own API keys
	        Parse.initialize("App-ID", "Javascript-Key");

			var username = $("#signin-username").val();
			var password = $("#signin-password").val();

			Parse.User.logIn(username, password, {
  				success: function(user) {
  					alert("You successfully logged in!");
  					var currentUser = Parse.User.current();
  					if(currentUser) {
	  					// TODO: Bring them to the hidden "logged in only" page
  					}  
  				},
 				 error: function(user, error) {
 				 	alert("Error: " + error.code + " " + error.message);
			 	}
		});
}
