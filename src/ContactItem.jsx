import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

const ContactItem = ({ contact, setEditingContact, deleteContact }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <IoPersonOutline className="text-2xl size-16" />
      <div>
        <h3 className="text-xl font-semibold">{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.address}</p>
      </div>
      <div className="space-x-2">
        <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600">
          <MdPreview />
        </button>
        <button
          onClick={() => deleteContact(contact.id)}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          <MdDelete />
        </button>
        <button
          onClick={() => setEditingContact(contact)}
          className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
        >
          <FaRegEdit />
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
