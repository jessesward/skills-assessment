import contacts from "./modules/contacts.js"
import contactRow from "./modules/contact-template.js"

/**
 * Populate the contact list using the template html
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

function expandContactInfo(element) {
  element.classList.add("expanded")
  overlay.classList.add("expanded")
}
function collapseContactInfo() {
  overlay.classList.remove("expanded")
  contactRows.forEach((row) => {
    row.classList.remove("expanded")
  })
}

// Handle clicks on rows, escape, and enter
contactRows.forEach((row) => {
  row.addEventListener("click", function () {
    expandContactInfo(this)
  })
  row.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      collapseContactInfo()
    }
    if (e.key === "Enter") {
      collapseContactInfo()
      expandContactInfo(this)
    }
  })
})

// Close contact info if overlay is clicked
overlay.addEventListener("click", collapseContactInfo)

// Add the select change logic to display either emails or phone numbers
const select = document.querySelector(".contact-list-footer select")
const contactInfo = document.querySelectorAll(".contact-info")
select.addEventListener("change", function () {
  if (this.value === "email") {
    contactInfo.forEach((info, index) => {
      info.textContent = contacts[index].email
    })
  } else if (this.value === "phone") {
    contactInfo.forEach((info, index) => {
      info.textContent = contacts[index].phone
    })
  }
})
