import { projectsDB } from "./firebase";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
const projectCollectionRef = collection(projectsDB, "projects");