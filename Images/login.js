function userTextField() {
    let userName = document.getElementById("text-field-1").value;
    let userNameUpper = userName.toUpperCase();
    if (userNameUpper == "SHIVA") {
        document.getElementById("users-container").style.backgroundImage = "url('shiva-cropped.jpg')";
    } else if (userNameUpper == "SRINIVAS") {
        document.getElementById("users-container").style.backgroundImage = "url('dad.jpg')";

    } else if (userNameUpper == "RADHA") {
        document.getElementById("users-container").style.backgroundImage = "url('mom.jpg')";

    } else if (userNameUpper == "CHITRA") {
        document.getElementById("users-container").style.backgroundImage = "url('chitra.jpg')";
    }
    else if (userNameUpper == "SHRAVAN" || userNameUpper == "SRAVAN") {
        document.getElementById("users-container").style.backgroundImage = "url('shravan.jpg')";
    }
    else if (userNameUpper == "POOJA") {
        document.getElementById("users-container").style.backgroundImage = "url('pooja.jpg')";
    }
    else if (userNameUpper == "RAKESH") {
        document.getElementById("users-container").style.backgroundImage = "url('rakesh.jpg')";
    }
    else if (userNameUpper == "SAI" || userNameUpper == "SAI KRISHNA") {
        document.getElementById("users-container").style.backgroundImage = "url('sai.jpg')";
    }
    else {
        document.getElementById("users-container").style.backgroundImage = "url('man.jpg')";
    }

    document.getElementById("btn-explore").style.display = "none";
    document.getElementById("second-btn-explore").style.display = "block";
    document.getElementById("greet-user").innerHTML = userNameUpper;

}

function goLink() {
    document.getElementById("inside-view").style.display = "block";
    document.getElementById("main").style.display = "none";
    let userName = document.getElementById("text-field-1").value;
    let userNameUpper = userName.toUpperCase();
    if (userNameUpper == "SHIVA") {
        document.getElementById("profile").style.backgroundImage = "url('shiva-cropped.jpg')";
    } else if (userNameUpper == "SRINIVAS") {
        document.getElementById("profile").style.backgroundImage = "url('dad.jpg')";

    } else if (userNameUpper == "RADHA") {
        document.getElementById("profile").style.backgroundImage = "url('mom.jpg')";

    } else if (userNameUpper == "CHITRA") {
        document.getElementById("profile").style.backgroundImage = "url('chitra.jpg')";
    }
    else if (userNameUpper == "SHRAVAN" || userNameUpper == "SRAVAN") {
        document.getElementById("profile").style.backgroundImage = "url('shravan.jpg')";
    }
    else if (userNameUpper == "POOJA") {
        document.getElementById("profile").style.backgroundImage = "url('pooja.jpg')";
    }
    else if (userNameUpper == "RAKESH") {
        document.getElementById("profile").style.backgroundImage = "url('rakesh.jpg')";
    }
    else if (userNameUpper == "SAI" || userNameUpper == "SAI KRISHNA") {
        document.getElementById("profile").style.backgroundImage = "url('sai.jpg')";
    }
    else {
        document.getElementById("profile").style.backgroundImage = "url('man.jpg')";
    }
}


// if (document.getElementById("music-card-1").click) {
//     document.getElementById("inside-view").style.display = 'none';
//     document.getElementById("main").style.display = 'none';
//     document.querySelector("body").style.background = "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('GR-bg.jpg')";
//     document.querySelector("body").style.backgroundPosition = "center";
//     document.querySelector("body").style.backgroundRepeat = "no-repeat";
//     document.querySelector("body").style.backgroundAttachment = "fixed";
//     document.querySelector("body").style.overflowX = "hidden";
//     document.querySelector("body").style.overflowY = "hidden";
//     // document.getElementById("play-now").style.overflowX = "hidden";
//     // document.getElementById("play-now").style.overflowY = "hidden";
//     document.getElementById("song-card").style.backgroundImage = "url('GR-bg.jpg')";
//     document.getElementById("song-card").style.backgroundPosition = "center";
// }

// if (document.getElementById("fa-arrow-right").click) {
//     document.getElementById("inside-view").style.display = '';
//     document.getElementById("main").style.display = '';
//     document.querySelector("body").style.backgroundImage = "url(ba.jpg)";
//     document.querySelector("body").style.backgroundAttachment = "fixed";
//     document.querySelector("body").style.backgroundPosition = "center";
// }


