const redirects = document.querySelectorAll("[data-redirect]")

redirects.forEach(url_tag => {
    url_tag.addEventListener("click", () => {
        open(url_tag.dataset.redirect)
    })
})