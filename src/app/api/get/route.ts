import { NextRequest, NextResponse } from "next/server";
import { initFirebaseServer } from "src/config/firebase/server";

export async function GET(request: NextRequest) {
  const { firestore } = await initFirebaseServer();

  const testData = await firestore.collection("test-data").get();

  const docs = testData.docs.map((doc) => {
    return {
      ...doc.data(),
      uid: doc.id,
    };
  });

  return NextResponse.json({ payload: docs });
}
