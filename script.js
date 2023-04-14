// Add a hover effect to the quote
const quote = document.querySelector("#quote blockquote");

quote.addEventListener("mouseover", function() {
	quote.style.backgroundColor = "lightgray";
});

quote.addEventListener("mouseout", function() {
	quote.style.backgroundColor = "white";
});
