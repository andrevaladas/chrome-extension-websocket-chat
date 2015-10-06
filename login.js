$(document).ready(function() {
	$("#form_submit").submit(function(e) {
		e.preventDefault();
		return login();
	});
	
	$("#login").click(function (e) {
		return  login();
	});
});

function login() {

	// Checking person name
	if ($('#password').val().trim().length <= 0) {
		alert('Enter the secret password brow!');
	} else {

		var pass = $('#password').val().trim();
		if (pass == '@thebestbossever' || pass == '@tbbe') {
			chrome.runtime.sendMessage({type:'request_password'});
			window.parent.close();
			return true;
		} else {
			alert('You probably are not a member of Team Brows, get out!');
			window.parent.close();
		}
	}
	return false;
}