import contacts from "./modules/contacts.js"
import contactRow from "./modules/contact-template.js"
;(function () {
  /**
   * Populate the html
   */
  const contactList = document.getElementById("contact-list")
  contacts.forEach((contact) => {
    contactList.innerHTML += contactRow(
      contact.firstName,
      contact.email,
      contact.phone,
      contact.status,
      contact.address,
      contact.city,
      contact.state,
      contact.zip
    )
  })

  /**
   * Add the click logic to add or remove classes that will expand or collapse contact info
   */
  const contactRows = document.querySelectorAll(".contact-row")
  const overlay = document.querySelector(".contact-list-inner .overlay")
  contactRows.forEach((row) => {
    row.addEventListener("click", function () {
      this.classList.toggle("expanded")
      overlay.classList.toggle("expanded")
    })
  })

  /**
   * Add the select change logic
   */
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
})()
