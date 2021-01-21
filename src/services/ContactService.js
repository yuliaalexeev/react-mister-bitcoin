const gContacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824"
    },
    {
        "_id": "5a56640269f44f479000j222",
        "name": "Dylan Long",
        "email": "dylan.long@example.com",
        "phone": "(877)-140-9003"
    },
    {
        "_id": "5a56640269f44f479000j341",
        "name": "loren jensil",
        "email": "loren.jensilp@example.com",
        "phone": "(090)-888-63308"
    },
    {
        "_id": "5b56640244f1hk47945j1k53",
        "name": "selina machte",
        "email": "selina@example.com",
        "phone": "(130)-838-612500"
    },
    {
        "_id": "5b56640244f11f479456j329",
        "name": "Ramon Rodriguez",
        "email": "ramon.rodriguez@example.com",
        "phone": "(615)-219-6874"
    },
    {
        "_id": "5a56640269f44f479654773g",
        "name": "Lumi gadi",
        "email": "lumi.gadi@example.com",
        "phone": "(689)-200-63308"
    },
    {
        "_id": "5a56640269f44f479000j565",
        "name": "lee chapter",
        "email": "lee.chapter@example.com",
        "phone": "(012)-888-63308"
    },
    {
        "_id": "5a5g990269f888jkl9issldp",
        "name": "Mika lernkin",
        "email": "mikal12@example.com",
        "phone": "+1 (900) 590-3821"
    },
    {
        "_id": "5a56640269f44f4790067y99",
        "name": "Jaqline mor",
        "email": "jaqm@example.com",
        "phone": "(910)-138-654999"
    }
]

function filter(term) {
   // term = term.toLowerCase()

    console.log('term', term);
    return gContacts.filter(contact => {
        //console.log('contact name',  contact.name.toLowerCase())
        return contact.name.toLowerCase().includes(term) ||
            contact.phone.toLowerCase().includes(term) ||
            contact.email.toLowerCase().includes(term)
    })
}

function getContacts(filterBy = null) {
    let contactsToReturn = gContacts;
    console.log('filter service by', filterBy)
    if (filterBy) {
        contactsToReturn = filter(filterBy)
        console.log('insite dilter by', filterBy)
    }
    console.log('returning contactsToReturn', contactsToReturn)
    return contactsToReturn;
}

// async function getContacts (filterBy = null) {
//     return new Promise((resolve, reject) => { 
//       var contactsToReturn = gContacts;
//       if (filterBy ) {
//         contactsToReturn = filter(filterBy)
//       }
//       resolve(contactsToReturn)
//     })
//   }

function getById(id) {
    try {
        const contact = gContacts.find(contact => contact._id === id)
        return Promise.resolve(contact)
    } catch (err) {
        throw err
    }
}

export const contactService = {
    getContacts,
    getById
}