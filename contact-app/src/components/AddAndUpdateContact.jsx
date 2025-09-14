import { ErrorMessage, Field, Form, Formik } from "formik";
import Model from "./Model";
import { db } from "../config/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required *"),
  email: Yup.string().email("Invalid email ").required("Email is required *"),
});

function AddAndUpdateContact({ isOpen, onClose, isUpdate, contact }) {
  const addContact = async (Contact) => {
    try {
      const contactRef = collection(db, "Contacts");
      await addDoc(contactRef, Contact);
      onClose();
      toast.success("Contact added successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (Contact, id) => {
    try {
      const contactRef = doc(db, "Contacts", id);
      await updateDoc(contactRef, Contact);
      onClose();
      toast.success("Contact added successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={schemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border-2 h-8 px-5" />
              <div className="text-red-700 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">E-Mail</label>
              <Field type="email" name="email" className="border-2 h-8 px-5" />
              <div className="text-red-700 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className="bg-orange-400 py-1 border rounded-lg cursor-pointer">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
}

export default AddAndUpdateContact;
