import { db } from "../../../config/firebase-config";
import { collection, doc, addDoc, getDocs, deleteDoc } from "firebase/firestore"; 

const Docadd = async (prop) => {
    try {
        console.log('add called')
        console.log(prop)
        const docRef = await addDoc(collection(db, "users"), {
            email: prop.email,
            // Add other fields as needed
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

const Docread = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    } catch (error) {
        console.error("Error reading documents: ", error);
    }
};

const Docdelete = async (docId) => {
    try {
        await deleteDoc(doc(db, "users", docId));
        console.log("Document deleted successfully");
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
};

export { Docadd, Docread, Docdelete };
