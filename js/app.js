import contacts from "./modules/contacts.js"
import contactRow from "./modules/contact-template.js"

/**
 * Populate the html
 */
const contactList = document.getElementById("contact-list")
contacts.forEach((contact) => {
  contactList.innerHTML += contactRow(contact)
})

/**
 * Handle Events
 */
// Add the click logic to add classes that will expand the contact info
const contactRows = document.querySelectorAll(".contact-row")
const overlay = document.querySelector(".contact-list-inner .overlay")
contactRows.forEach((row) => {
  row.addEventListener("click", function () {
    this.classList.add("expanded")
    overlay.classList.add("expanded")
  })
})

// Close contact info if overlay is clicked
overlay.addEventListener("click", () => {
  overlay.classList.remove("expanded")
  contactRows.forEach((row) => {
    row.classList.remove("expanded")
  })
})

// Add the select change logic
const select = document.querySelector(".contact-list-footer select")
const contactInfo = document.querySelectorAll(".contact-info")
select.addEventListener("change", (e) => {
  if (e.target.value === "email") {
    contactInfo.forEach((info, index) => {
      info.textContent = contacts[index].email
    })
  } else if (e.target.value === "phone") {
    contactInfo.forEach((info, index) => {
      info.textContent = contacts[index].phone
    })
  }
})
