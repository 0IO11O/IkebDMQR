window.onload = function() {
	var logo = document.getElementById("logo");
	var title = document.getElementById("title");
	var buttons = document.getElementById("buttons");

	logo.style.display = "block";
	setTimeout(function() {
		logo.style.opacity = "1";
	}, 1000);

	setTimeout(function() {
		title.classList.remove("hidden");
	}, 2000);

	setTimeout(function() {
		buttons.classList.remove("hidden");
	}, 4000);
}
