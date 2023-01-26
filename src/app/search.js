function search() {
    const search = document.getElementById("search");
    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput")
    search.addEventListener('click',  () => click())

    form.addEventListener("submit", (e) => onSubmit(e))

    function click() {
        form.classList.toggle("active")
        input.focus()
    }
    window.addEventListener('click', (e) => {
        if(!document.getElementById("searchForm").contains(e.target)) {
            form.classList.remove("active")
        }
    })

    function onSubmit(e) {
        const inputValue = input.value

        const games = document.getElementsByClassName("game")
        for( let i =0; i< games.length; i++) {
            if(games[i].childNodes[1].innerText.toLowerCase().includes(inputValue.toLowerCase())) {
                games[i].style.display = 'flex'
            }
            else {
                games[i].style.display = 'none'
            }
        }

        document.getElementById("platform").selectedIndex = "0"
        document.getElementById("genre").selectedIndex = "0"

        input.value = ''
        e.preventDefault();
        form.classList.remove("active")
    }
}

export default search