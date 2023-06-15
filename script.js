function login() {
    document.getElementById("typeeffect").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("secloginform").style.display = "flex";
    document.getElementById("secregform").style.display = "none";
    loginRegAnime.play()
    // document.getElementById("secloginform").style.display = "block";
}

function welcome1() {
    document.getElementById("typeeffect").style.display = "block";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("secloginform").style.display = "none";
    document.getElementById("secregform").style.display = "none";
    // typeWriter()
    // document.getElementById("typeeffect").innerHTML="";
}

function register() {
    document.getElementById("typeeffect").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("secloginform").style.display = "none";
    document.getElementById("secregform").style.display = "flex";
    loginRegAnime.play()
    // document.getElementById("typeeffect").innerHTML="";
}

anime.timeline({ loop: false })
    .add({
        targets: '#welcome',
        scale: [14, 1],
        opacity: [0, 0.88],
        easing: "easeInOutCirc",
        duration: 5000
    })

let loginRegAnime = anime({
    targets: ["#secloginform", "#secregform"],
    scale: [2.0, 1],
    opacity: 1,
    duration: 200,
    easing: 'easeInOutSine'
})
