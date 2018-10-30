export default {
  idCounter: 0,
  Posts: [],
  ContactRequests: [],

  createContactRequest(request) {
    // Check to see if request exists, and we at least have an email.
    // However, we really should be doing some sort of validation
    // before this point.
    if (request && request.email) {

      // JavaScript passes objects by reference,
      // so we need to create a new object to push into
      // the database.
      this.ContactRequests.push({
        id: this.idCounter++,
        // By using a constantly incrementing counter,
        // we can be relatively certain that the ids are
        // unique.
        name: request.name,
        email: request.email,
        message: request.message
      })
    }
  },
  retrieveContactRequests() { },
  deleteContactRequest(id) { },
  debug() {
    console.log('Id Counter:')
    console.log(this.idCounter)
    console.log('Posts:')
    console.log(this.Posts)
    console.log('Contact Requests:')
    console.log(this.ContactRequests)
  }
}
