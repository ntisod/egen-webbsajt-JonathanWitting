// Jonathan Witting Jakhammer
// 18/3 - 2020

function showDialog_uppg1(textAttVisa) {
    alert(textAttVisa);
}

function authorDialog_uppg2() {
    alert("Jonathan har skapat denna sida år 2020");
}

function changeColors_uppg3() {
    document.getElementById("uppg3_h1").innerHTML = "Jonathan";
    document.getElementById("uppg3_p").style.backgroundColor = "lightblue";
}

function changeImage_uppg4() {
    if (document.getElementById("uppg4_img").alt === "Donald-Duck Card-Image") {
        document.getElementById("uppg4_img").src = "https://live.staticflickr.com/1324/761769472_a2e23b393d_b.jpg";
        document.getElementById("uppg4_img").alt = "Donald-Duck Angry-Image";
    }
    else if (document.getElementById("uppg4_img").alt === "Donald-Duck Angry-Image") {
        document.getElementById("uppg4_img").src = "https://live.staticflickr.com/3403/3604860866_e0811023a1_z.jpg";
        document.getElementById("uppg4_img").alt = "Donald-Duck Card-Image";
    }
}

function alertName_uppg_5_6_7() {
    var cName = document.getElementById("user-name").value;
    var alertMSG = "Hej " + cName + "!";
    alert(alertMSG);
    document.getElementById("current-name").innerHTML = cName;
}