import contacts from "./modules/contacts.js";
import contactRow from "./modules/contact-template.js";
const contactList = document.getElementById("contact-list");
contacts.forEach((contact) => {
  contactList.innerHTML += contactRow(contact);
});
const contactRows = document.querySelectorAll(".contact-row");
const overlay = document.querySelector(".contact-list-inner .overlay");
contactRows.forEach((row) => {
  row.addEventListener("click", function() {
    this.classList.add("expanded");
    overlay.classList.add("expanded");
  });
});
overlay.addEventListener("click", () => {
  overlay.classList.remove("expanded");
  contactRows.forEach((row) => {
    row.classList.remove("expanded");
  });
});
const select = document.querySelector(".contact-list-footer select");
const contactInfo = document.querySelectorAll(".contact-info");
select.addEventListener("change", (e) => {
  if (e.target.value === "email") {
    contactInfo.forEach((info, index) => {
      info.textContent = contacts[index].email;
    });
  } else if (e.target.value === "phone") {
    contactInfo.forEach((info, index) => {
      info.textContent = contacts[index].phone;
    });
  }
});
