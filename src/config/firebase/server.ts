import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

interface FirebaseAdminAppParams {
  projectId: string;
  clientEmail: string;
  storageBucket: string;
  privateKey: string;
}

function createFirebaseAdminApp(params: FirebaseAdminAppParams) {
  const privateKey = params.privateKey?.replace(/\\n/g, "\n");
  //   checks if app is already initialized
  if (admin.apps.length > 0) {
    return admin.app();
  }
  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey: privateKey,
  });

  return admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    storageBucket: params?.storageBucket,
  });
}

export async function initFirebaseAdmin() {
  const params: FirebaseAdminAppParams = {
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  };

  return createFirebaseAdminApp(params);
}

export const initFirebaseServer = async () => {
  try {
    await initFirebaseAdmin();

    return {
      firestore: getFirestore(),
    };
  } catch (e) {
    throw new Error("Error initializing firebase admin: " + e);
  }
};
