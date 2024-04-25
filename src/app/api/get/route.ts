import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin, server } from "src/config/firebase/server";

export async function GET(request: NextRequest) {
  await initFirebaseAdmin();

  const testData = await server.firestore.collection("test-data").get();

  const docs = testData.docs.map((doc) => {
    return {
      ...doc.data(),
      uid: doc.id,
    };
  });

  return NextResponse.json({ payload: docs });
}
