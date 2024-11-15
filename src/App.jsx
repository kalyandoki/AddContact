import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center align-middle text-3xl font-bold mb-4 p-4  bg-blue-500">
        <h1>All Contacts</h1>
        <button>
          <CiCirclePlus className="mt-1 ml-2" />
        </button>
      </div>

      <div className="flex justify-center align-middle text-3xl font-bold mb-4 p-4">
        <input
          className="p-4 text-2xl rounded-lg "
          type="search"
          placeholder="search contact"
        />
      </div>

      <div className="space-y-4">
        <AddContact addContact={addContact} />

        {editingContact && (
          <EditContact
            contact={editingContact}
            editContact={editContact}
            cancelEdit={() => setEditingContact(null)}
          />
        )}

        <ContactList
          contacts={contacts}
          setEditingContact={setEditingContact}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
};

export default App;
