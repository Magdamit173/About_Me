const background_on_effect = ["data-cover_page", "data-purpose_page"]
const portrait = document.querySelector(".portrait")
// ,"data-purpose_page"


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const screenshowlist = [
    "IMG_20241006_194859.jpg",
    "IMG_20241006_194911.jpg",
    "IMG_20241006_194948.jpg",
    "IMG_20241006_194959.jpg",
    "IMG_20241006_195004.jpg",
    "IMG_20241006_195015.jpg",
    "IMG_20241006_195021.jpg",
    "IMG_20241006_195031.jpg",
    "IMG_20241006_195037.jpg",
    "IMG_20241006_195042.jpg",
    "IMG_20241006_195048.jpg",
    "IMG_20241006_195145.jpg",
    "IMG_20241006_195156.jpg",
    "IMG_20241006_195209.jpg",
    "IMG_20241006_195507.jpg",
    "IMG_20241006_195510.jpg",
    "IMG_20241006_195513.jpg",
    "IMG_20241006_195600.jpg",
    "IMG_20241006_195605.jpg",
    "IMG_20241006_195720.jpg",
    "IMG_20241006_195725.jpg",
    "IMG_20241006_195732.jpg",
    "IMG_20241006_195738.jpg",
    "IMG_20241006_195925.jpg",
    "IMG_20241006_195933.jpg",
    "IMG_20241006_200551.jpg",
    "IMG_20241006_200556.jpg"
]


setInterval(async () => {
    await portraitTransition()
}, 5000)


async function portraitTransition() {
    portrait.style.background = "black"
    await sleep(300)
    portrait.style.backgroundRepeat = "no-repeat"
    portrait.style.backgroundSize = "cover"
    portrait.style.backgroundPosition = "center"
    portrait.style.objectFit = "cover"
    portrait.style.backgroundImage = `url('./assets/images/screenshow/${choice(screenshowlist)}')`

}

function choice(list) {
    return list[Math.floor(Math.random() * list.length)]
}

background_on_effect.forEach((query, index) => {
    addEventListener("scroll", e => {
        const background = document.querySelector(`[${query}]`)
        // background.style.backgroundPosition = `center ${background.getBoundingClientRect().top ** 1 / 10}px`
        background.style.backgroundPosition = `center ${background.getBoundingClientRect().top}px`
    })
})

function responsiveText(element, pixel_size) {
    element.style.fontSize = `${pixel_size * (pixel_size / element.textContent.length)}px`
}

const responsiveTitle = (() => {
    const titles = document.querySelectorAll("[data-card_title]")
    titles.forEach((item) => {
        responsiveText(item, 40)
    })
    addEventListener("resize", () => {
        titles.forEach((item) => {
            responsiveText(item, 40)
        })
    })
})()

function videoAutoplay() {
    const videos = document.querySelectorAll("[data-auto_play]")
    const observer = new IntersectionObserver(entries => {
        entries.forEach(async entry => {
            if (!entry.isIntersecting) {
                entry.target.preload = "none"
                entry.target.pause()
                console.log("not intersecting")
            }
            else {
                entry.target.preload = "auto"
                await entry.target.play()
                console.log("intersecting")
            }

        })
    })
    videos.forEach(item => {
        item.preload = "none"
        item.muted = true
        item.style.pointerEvents = "none"
        item.setAttribute("loop", true)
        observer.observe(item)
    })
}

function Awake() {
    videoAutoplay()
    console.log("Awake Called")
}

window.addEventListener("load", Awake)

