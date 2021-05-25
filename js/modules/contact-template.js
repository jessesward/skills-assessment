const contactRow = (contact) =>
  `
    <div class="contact-row">
        <div class="contact-name">
            <span class="contact-status ${contact.status}"></span>
            <span>${contact.firstName}</span>
        </div>
        <span class="contact-info">${contact.email}</span>
        <div class="contact-expand">
            <span class=""
            ><a href="mailto:${contact.email}"
                >${contact.email}</a
            ></span
            >
            <span class="">${contact.phone}</span>
            <span class="">${contact.address} <br />${contact.city} ${contact.state} ${contact.zip}</span>
        </div>
    </div>
    `
export default contactRow
