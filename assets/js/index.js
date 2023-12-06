const background_on_effect = ["data-cover_page", "data-purpose_page"]
// ,"data-purpose_page"

background_on_effect.forEach((query, index) => {
    addEventListener("scroll", e => {
        const background = document.querySelector(`[${query}]`)
        background.style.backgroundPosition = `center ${background.getBoundingClientRect().top ** 1 / 10}px`
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

