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
        console.log(`Form was submited with input: ${inputValue}`)
        input.value = ''
        e.preventDefault();
        form.classList.remove("active")
    }
}

export default search