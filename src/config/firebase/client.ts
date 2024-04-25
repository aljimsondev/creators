import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getPerformance, trace } from "firebase/performance";
import { getRemoteConfig } from "firebase/remote-config";

import { firebaseConfig } from "./config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const remoteConfig = getRemoteConfig(app);
export const perf = getPerformance(app);
export const trc = trace;

export const firebaseClient = {
  db,
  analytics,
  auth,
  storage,
  remoteConfig,
  perf,
  trc,
};
