import { collection, getDocs, query } from "firebase/firestore";

import { db } from "src/config/firebase/client";

/**
 * usage `client only`
 *
 * Retreive data from the firestore data collection
 *
 * `NOTE: PULLED FROM SUPAFATA PROJECT`
 * @returns list of docs
 */
const getDocuments = async (document: string, ...firebaseQueries: any[]) => {
  if (!document) throw new Error("Unspecified document reference");
  try {
    let list: any[] = [];
    let queryParam = query(collection(db, document), ...firebaseQueries);
    const querySnapshot = await getDocs(queryParam);
    querySnapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));

    return list;
  } catch (error) {
    throw new Error("Get Documents helper: " + error);
  }
};

export { getDocuments };
