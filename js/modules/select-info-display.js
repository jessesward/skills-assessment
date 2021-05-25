const selectInfoDisplay = () => {
  const select = document.querySelector(".contact-list-footer select")
  select.addEventListener("change", (e) => {
    console.log(e)
  })
}

export default selectInfoDisplay
