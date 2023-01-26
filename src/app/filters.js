function filters() {
 const platformForm = document.getElementById("platformForm")
 const genreForm = document.getElementById("genreForm")

 platformForm.addEventListener("change", () => onSubmit())
 genreForm.addEventListener("change", () => onSubmit())

 function onSubmit() {
    const platform = document.getElementById("platform").value
    const genre = document.getElementById("genre").value
    console.log(`Form was submited with input: ${platform} and ${genre}`)
 }
}

export default filters