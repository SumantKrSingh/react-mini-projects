import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { toast } from "react-toastify";

function ContactCard({ contact }) {
  const { isOpen, onOpen, onClose } = useDisclose();

  const deleteContacts = async (id) => {
    try {
      await deleteDoc(doc(db, "Contacts", id));
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow-50 flex justify-between items-center p-2 rounded-lg"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-orange-400 text-4xl" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContacts(contact.id)}
            className="text-red-600 cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default ContactCard;
