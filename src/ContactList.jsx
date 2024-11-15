import ContactItem from "./ContactItem";

const ContactList = ({ contacts, setEditingContact, deleteContact }) => {
  return (
    <div className="space-y-4">
      {contacts.length === 0 ? (
        <p className="flex justify-center align-middle text-3xl font-bold mb-4 p-4">
          No contacts found.
        </p>
      ) : (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            setEditingContact={setEditingContact}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
