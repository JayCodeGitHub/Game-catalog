function filters() {
 const platformForm = document.getElementById("platformForm")
 const genreForm = document.getElementById("genreForm")

 platformForm.addEventListener("change", () => onSubmit())
 genreForm.addEventListener("change", () => onSubmit())

 function onSubmit() {
    const platform = document.getElementById("platform").value
    const genre = document.getElementById("genre").value

    const games = document.getElementsByClassName("game")
        for( let i =0; i< games.length; i++) {
            if(platform.includes("all") && genre.includes("all")){
               games[i].style.display = 'flex'
            }
            else if(genre.includes("all") && games[i].childNodes[2].innerText.toLowerCase().includes(platform.toLowerCase())) {
                games[i].style.display = 'flex'
            }
            else if(platform.includes("all") && games[i].childNodes[3].innerText.toLowerCase().includes(genre.toLowerCase())) {
               games[i].style.display = 'flex'
           }
            else if(games[i].childNodes[2].innerText.toLowerCase().includes(platform.toLowerCase()) && games[i].childNodes[3].innerText.toLowerCase().includes(genre.toLowerCase())) {
               games[i].style.display = 'flex'
           }
            else {
                games[i].style.display = 'none'
            }
        }
 }
}

export default filters