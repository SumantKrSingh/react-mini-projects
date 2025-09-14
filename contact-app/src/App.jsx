import "./App.css";
import { FiPlus, FiSearch } from "react-icons/fi";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./components/hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "Contacts");
        onSnapshot(contactRef, (snapShot) => {
          const contactLists = snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });

        const contactLists = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContact = (e) => {
    const value = e.target.value;
    const contactRef = collection(db, "Contacts");
    onSnapshot(contactRef, (snapShot) => {
      const contactLists = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filterContact = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filterContact);
      return filterContact;
    });
  };
  return (
    <>
      <div className="mx-auto max-w-[370px] px-4 ">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute ml-1" />
            <input
              onChange={filterContact}
              type="text"
              className="bg-transparent border-2 border-white rounded-md h-10 flex-grow text-white pl-10"
            />
          </div>
          <FiPlus
            onClick={onOpen}
            className=" text-4xl bg-white cursor-pointer rounded-[50%] "
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFound />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
