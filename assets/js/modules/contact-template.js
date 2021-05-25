import expandContact from "./expand-contact.js"

const contactRow = (
  firstName,
  email,
  phone,
  status,
  address,
  city,
  state,
  zip
) =>
  `
    <div class="contact-row">
        <div class="contact-name">
            <span class="contact-status ${status}"></span>
            <span>${firstName}</span>
        </div>
        <span class="contact-info">${email}</span>
        <div class="contact-expand">
            <span class=""
            ><a href="mailto:${email}"
                >${email}</a
            ></span
            >
            <span class="">${phone}</span>
            <span class="">${address} <br />${city} ${state} ${zip}</span>
        </div>
    </div>
    `
export default contactRow
