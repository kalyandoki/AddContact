import { MdCancel } from "react-icons/md";
import { useState } from "react";

const AddContact = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  console.log(addContact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { ...formData, id: Date.now() };
    addContact(newContact);
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between text-3xl font-bold mb-4 p-4">
        <h2 className="text-2xl font-semibold mb-4">Add Contact</h2>
        <MdCancel />
      </div>
      <hr />

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className=" bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          submit
        </button>
        <button className=" ml-10 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Reset
        </button>
      </form>
    </div>
  );
};

export default AddContact;
