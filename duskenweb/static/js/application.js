/* Google+ button language */
//window.___gcfg = {
//    lang: 'no'
//};
// Ref: https://developers.facebook.com/docs/facebook-login/using-auto-login/
//window.fbAsyncInit = function() {
//    // Initialize the Facebook SDK
//    FB.init({
//        appId: '654851471204962',
//        xfbml: true,
//        status: true,
//        cookie: true,
//    });
//
//    // Check if the current user is logged in and has authorized the app
//    //FB.getLoginStatus(checkLoginStatus);
//
//    // Login in the current user via Facebook and ask for email permission
//    $(".btn-facebook-login").on('click', function(e) {
//        FB.login(checkLoginStatus, {scope:'email, user_birthday'});
//    });
//
//    function login_or_create_member(authResponse) {
//        console.log("Facebook:", authResponse);
//        // Ref: https://developers.facebook.com/docs/facebook-login/multiple-providers/
//        FB.api('/me', function(response) {
//            var data = {
//                last_name: response.last_name,
//                first_name: response.first_name,
//                username: response.username,
//                email: response.email,
//                facebook_id: response.id,
//                date_of_birth: response.birthday
//            };
//            /* Check for existing account by looking up email */
//            Dusken.findMember({email: data.email}, function(member) {
//                if(member === undefined) {
//                    /* Create new account */
//                    Dusken.register(data, function(response) {
//                        console.log(response);
//                        // TODO Hide login form
//                        $("form").css('opacity', 0.5);
//                        // login
//                        // render profile view with data from dusken.
//                    });
//                } else {
//                    // TODO what now?
//                    /* Check for verified email (before merging FB information into Dusken account) */
//                    if(response.verified) {
//                        /* Member exists, authenticate and login */
//                        // TODO Hide login form, render profile view with data from dusken.
//                        $("form").css('opacity', 0.5);
//
//                    } else {
//                        /* Send verification email and ask user to check it */
//                        // TODO 
//                    }
//                }
//            });
//
//        });
//    }
//    // Check the result of the user status and display login button if necessary
//    function checkLoginStatus(response) {
//        if(response && response.status == 'connected') {
//            console.log('User is authorized');
//
//            // Hide the login button
//            //$(".btn-facebook-login").css('opacity', 0.3);
//
//            // Now Personalize the User Experience
//            // authResponse: 
//            // - accessToken: make requests to the Facebook APIs on behalf of that user.
//            // - userID: the unique identifier for the user who's present in your app.
//            //console.log('Access Token: ' + response.authResponse.accessToken);
//            // User is logged in to FB and likes our FB app
//            login_or_create_member(response.authResponse);
//        } else {
//            console.log('User is not authorized');
//
//            // Display the login button
//            $(".btn-facebook-login").show();
//        }
//    }
//};

// Load the SDK asynchronously
//(function(d){
//  var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
//  if (d.getElementById(id)) {return;}
//  js = d.createElement('script'); js.id = id; js.async = true;
//  js.src = "//connect.facebook.net/en_US/all.js";
//  ref.parentNode.insertBefore(js, ref);
//}(document));


/* Google + */
//function signinCallback(authResult) {
//  if (authResult['access_token']) {
//    // Update the app to reflect a signed in user
//    // Hide the sign-in button now that the user is authorized, for example:
//    $("#signinButton").hide();
//    console.log("Google+:", authResult);
//  } else if (authResult['error']) {
//    // Update the app to reflect a signed out user
//    // Possible error values:
//    //   "user_signed_out" - User is signed-out
//    //   "access_denied" - User denied access to your app
//    //   "immediate_failed" - Could not automatically log in the user
//    console.log('Sign-in state: ' + authResult['error']);
//  }
//}

/* Ref: http://stackoverflow.com/questions/1184624/convert-form-data-to-js-object-with-jquery */
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

$(function() {
    /* Override options for local dev */
    Dusken.init({
        base_url: "http://127.0.0.1:8000/",
        api_base_url: "http://127.0.0.1:8000/api/v1/",
    });

    //});
    /* Ref:
     * - https://developers.facebook.com/docs/facebook-login/getting-started-web/ 
     * - https://developers.facebook.com/docs/facebook-login/checklist/
     *
     * Test the following: 
     * - When someone new to your app logs in with Facebook
     * - When someone who has logged in with Facebook in the past logs back in with Facebook
     * - When someone cancels log in and then logs back in with Facebook
     * - When someone revokes permissions previously granted to your app and then logs back in with Facebook
     * - When your token has expired when someone logs in with Facebook
     * */

    //$(".sign-out-google-plus").on('click', function(e) {
    //    gapi.auth.signOut();
    //});
    /* Register new user */
    $(".btn-register").on('click', function(event) {
        event.preventDefault();
        var data = $("form").serializeObject();
        Dusken.register(data, function(response) {
            console.log(response);
            $("form").html("Vi har sendt deg en epost, trykk på linken i for å fortsette registreringen.");
        },
        function(jq_xhr) {
            $("form .errors").html('<div class="alert alert-danger">' +jq_xhr.responseText + '</div>');
        });
    });
    /* Login existing user */
    //$(".btn-login").on('click', function(event) {
    //    event.preventDefault();
    //    var data = $("form").serializeObject();
    //    Dusken.authenticate(data, function(response) {
    //        console.log(response);
    //        
    //    },
    //    /* On error */
    //    function(jq_xhr) {
    //        $("form .errors").html('<div class="alert alert-danger">' +jq_xhr.responseText + '</div>');
    //    });
    //});
});
