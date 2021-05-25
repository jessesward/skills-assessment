/**
 *
 * @param {Object} contact - The contact to display in the list
 * @returns string of html to be added to the contact list
 */
const contactRow = (contact) =>
  `
    <div class="contact-row" tabindex="0">
        <div class="contact-name">
            <span class="contact-status ${contact.status}"></span>
            <span>${contact.firstName}</span>
        </div>
        <span class="contact-info">${contact.email}</span>
        <div class="contact-expand">
            <span><a href="mailto:${contact.email}">${contact.email}</a></span>
            <span>${contact.phone}</span>
            <span>
                ${contact.address}<br />
                ${contact.city} ${contact.state} ${contact.zip}
            </span>
        </div>
    </div>
    `
export default contactRow
