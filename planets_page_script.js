const planetsInfo = {
    Earth : [
        'Earth is only the fifth largest planet in the solar system, ' +
        'it is the only world in our solar system with liquid water on the surface.' +
        'Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun,' +
        'all of which are made of rock and metal.' +
        'The name Earth is at least 1,000 years old.' +
        'All of the planets, except for Earth, were named after Greek and Roman gods and goddesses.' +
        'However, the name Earth is a Germanic word, which simply means "the ground."',
        24, "6,371", 1, "0 KM"
    ],
    Mars : [
        "Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground. Like Earth, Mars has seasons," +
        "polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon.",
        24.37, "3,389.5", 2, "124,032,015 KM"
    ],
    Mercury : [
        "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon." + 
        "From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun," +
        "Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.",
        "1,407", "2,439.7", 0,  "97,510,481 KM"
    ],
    Venus : [
        "Venus is the second planet from the Sun and Earth's closest planetary neighbor. Even though Mercury is closer to the Sun, Venus is the hottest planet in our solar system." +
        "Its thick atmosphere is full of the greenhouse gas carbon dioxide, and it has clouds of sulfuric acid.",
        "2,802", "6,051.8", 0, "254,166,651 KM" 
    ],
    Jupiter : [
        "Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth." +
        "That discovery changed the way we see the universe.Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined." +
        "upiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium." +
        "Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
        9.56, "69,991", 80, "591,463,741 KM" 
    ],
    Saturn : [
        "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system." + 
        "Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings –" +
        "made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's." + 
        "Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.",
        10.34, "58,232", 83, "1,427,000,000 KM"
    ],
    Uranus : [
        "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel," +
        "although he originally thought it was either a comet or a star.t was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode." +
        "Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III." +
        "Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.​",
        17.14, "25,362", 27, "2,843,132,342 KM" 
    ],
    Neptune : [
        "Neptune is the eighth planet from the Sun and the farthest known solar planet. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet." +
        "It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus.",
        "16.6", "24,622", 14, "4,325,828,810 KM"
    ]
}
const planetImg = document.getElementById('planet-image')
const planetName = document.getElementById('planet')
const planetOverview = document.getElementById('planet-overview')
const planetsContainer = document.getElementById('planets-container')
const planetDescription = document.getElementById('planet-desc')
const dayValue = document.getElementById('day-value')
const radiusValue = document.getElementById('radius-value')
const moonValue = document.getElementById('moons-value')
const distanceValue = document.getElementById('distance-value')
const dayPanel = document.getElementById('day-panel')
const radiusPanel = document.getElementById('radius-panel')
const moonPanel = document.getElementById('moons-panel')
const distancePanel = document.getElementById('distance-from-earth-panel')

function changeContent(planet_name) {
    const temp = planetsInfo[planet_name]
    planetDescription.textContent = temp[0]
    dayValue.textContent = String(temp[1]) 
    radiusValue.textContent = String(temp[2])
    moonValue.textContent = String(temp[3])
    distanceValue.textContent = String(temp[4])
}

let planetinfoAnime = anime({
    targets: [dayPanel, radiusPanel, moonPanel, distancePanel],
    translateY: 150,
    opacity: 1,
    delay: anime.stagger(100, {start: 1200, easing: 'easeInOutSine', from: 'first'})
})
//necche wala code planet ka overview he uska animation he
let overViewAnimation = anime({
    targets: planetOverview,
    translateY: '-40%',
    opacity: '1',
    easings: 'easeInOutSine',
    duration: 1000,
    delay: 1200
})

//ye function sare animations ko eksath play karne ke liye likha taki jabh onlclick invoke ho tabhi sare animations play jo jaye
function invokeAllAnimes() {
    planetinfoAnime.play()
    overViewAnimation.play()
    planetinfoAnime.play()
}
//ya pe ek common event lisetener laya so tha multiple event listener ki jarurat na padhe
planetsContainer.onclick = invokeAllAnimes
//plametsContainer me sare planets ke name he to e.target ki help se cliked DOM element directly milta he
planetsContainer.addEventListener('click', (e) => {

    function customeTransitionAnimation(image) {
        planetImg.animate([
            {opacity: '0'},
            {transform:'scale(1.5, 1.5)'},
            {opacity: '0'},
            {animationFillMode:'forwards'},
            {transition: '1s ease-in'}
        ], {duration:1000})
        planetImg.style.backgroundImage = String("url('" + image + "')")
    }
    function customTextAnimation(planet_name) {
        planetName.animate([
            {opacity: '0'},
            {letterSpacing: '20rem'},
            {transform: 'scale(50, 50)'},
            {top: '20%'},
            {opacity: '0'},
            {animationFillMode: 'backwards'},
            {transition: '1s ease-in'}
        ],
        {duration:1600})
        planetName.textContent = planet_name
    }
    let images = [
        '/images-videos/earth.jpg',
        '/images-videos/mars.jpg',
        '/images-videos/mercury.jpg',
        '/images-videos/venus.jpg',
        '/images-videos/jupiter.jpg',
        '/images-videos/saturn.jpg',
        '/images-videos/uranus.jpg',
        '/images-videos/neptune.jpg'
    ]
    if(e.target.textContent === 'Earth') {
        customeTransitionAnimation(images[0])
        customTextAnimation('Earth')
        changeContent('Earth')
    }
    else if(e.target.textContent === 'Mars') {
        customeTransitionAnimation(images[1])
        customTextAnimation('Mars')
        changeContent('Mars')
    }
    else if(e.target.textContent === 'Mercury') {
        customeTransitionAnimation(images[2])
        customTextAnimation('Mercury')
        changeContent('Mercury')
    }
    else if(e.target.textContent === 'Venus') {
        customeTransitionAnimation(images[3])
        customTextAnimation('Venus')      
        changeContent('Venus')
    }
    else if(e.target.textContent === 'Jupiter') {
        customeTransitionAnimation(images[4])
        customTextAnimation('Jupiter')
        changeContent('Jupiter')
    }
    else if(e.target.textContent === 'Saturn') {
        customeTransitionAnimation(images[5])
        customTextAnimation('Saturn')
        changeContent('Saturn')
    }
    else if(e.target.textContent === 'Uranus') {
        customeTransitionAnimation(images[6])
        customTextAnimation('Uranus')
        changeContent('Uranus')
    }
    else if(e.target.textContent === 'Neptune'){
        customeTransitionAnimation(images[7])
        customTextAnimation('Neptune')
        changeContent('Neptune')
    }
})
