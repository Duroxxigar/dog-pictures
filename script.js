window.onload = randomDog();

var input = document.getElementById("breed-search");
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        specificBreed();
    }
});

function randomDog() {
    var picture = document.getElementById("dog-pic");
    var request = new XMLHttpRequest()
    request.open("GET", "https://dog.ceo/api/breed/hound/images/random");
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var data = request.response;
        picture.src = data["message"];
    }
}

function specificBreed() {
    var picture = document.getElementById("dog-pic");
    var searchBox = document.getElementById("breed-search");
    var breed = searchBox.value;
    var request = new XMLHttpRequest()
    request.open("GET", `https://dog.ceo/api/breed/${breed}/images/random`);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var data = request.response;
        picture.src = data["message"];
    }
}

function changePicture() {
    var timeUntilChange = 4000;
    setInterval(function () {
        myFunction();
        console.log('Picture auto changed');
    }, timeUntilChange);
}