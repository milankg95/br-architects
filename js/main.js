//Map
function initMap() {
	/*Setting map*/
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: {lat: 41.881832, lng: -87.623177},
	});
	/*Setting marker on the map*/
	var marker = new google.maps.Marker({
		position: {lat: 33.770050, lng: -118.193739},
		title:"Visit Us",
		map: map
	});
}

/*Carousel*/
var carousel = document.getElementById("carousel");
var carouselImgArray = [
	"header-image1",
	"header-image2",
	"header-image4"
];
var carouselImgArrayItem = 0;

setInterval(function(){
	carousel.style.backgroundImage = "url(img/" + carouselImgArray[carouselImgArrayItem] + ".jpg)";
	carouselImgArrayItem = carouselImgArrayItem + 1;
	if (carouselImgArrayItem == carouselImgArray.length){
		carouselImgArrayItem = 0;
	}
}, 7000);

/*Send message*/
var sendBtn = document.getElementById("send-message");
var formName = document.getElementById("form-name");
var warningName = document.getElementById("warning-name");
var formEmail = document.getElementById("form-email");
var warningEmail = document.getElementById("warning-email");
var formSubject  =document.getElementById("form-subject");
var warningSubject = document.getElementById("warning-subject");
var formComment = document.getElementById("form-comment");
var warningComment = document.getElementById("warning-comment")
sendBtn.addEventListener("click", function(){
	if (formName.value == ""){
		warningName.style.display = "block";
	} else {
		warningName.style.display = "none";
	}

	if (formEmail.value == "") {
		warningEmail.style.display = "block";
	} else {
		warningEmail.style.display = "none";
	}

	if (formSubject.value == "") {
		warningSubject.style.display = "block";
	} else {
		warningSubject.style.display = "none";
	}

	if (formComment.value == "") {
		warningComment.style.display = "block";
	} else {
		warningComment.style.display = "none";
	}

	if (formName.value != "" && formEmail.value != "" && formSubject.value != "" && formComment.value != "") {
		formName.value = "";
		formEmail.value = "";
		formSubject.value = "";
		formComment.value = "";
		alert("Message sent!");
	}
});