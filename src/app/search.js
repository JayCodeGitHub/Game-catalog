export function run() {
    const search = document.getElementById("search");
    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput")
    search.addEventListener('click',  (e) => click(e))

    function click(e) {
        form.classList.toggle("active")
        input.focus()
    }
    window.addEventListener('click', (e) => {
        if(!document.getElementById("searchForm").contains(e.target)) {
            form.classList.remove("active")
        }
    })
}