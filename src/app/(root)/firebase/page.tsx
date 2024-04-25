import React from "react";
import FirebaseTestCard from "src/components/client/cards/creators/test/FirebaseTestCard";
import { AppNavbar } from "src/components/elements/navbar";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { Container } from "src/components/ui/container";
import { Separator } from "src/components/ui/separator";
import { Typography } from "src/components/ui/typography";
import { initFirebaseServer } from "src/config/firebase/server";

async function getTestData() {
  try {
    const { firestore } = await initFirebaseServer();

    const testdata = await firestore.collection("test-data").get();

    const documents = testdata.docs.map((doc) => {
      return {
        ...doc.data(),
        uid: doc.id,
      };
    });

    return documents;
  } catch (e) {
    throw new Error("Error fetching database [REASON]" + e);
  }
}

async function FirebaseTest() {
  const data = await getTestData();
  return (
    <Container>
      <AppNavbar />
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <Typography>Fetch using client firebase initialization</Typography>
          </CardHeader>
          <CardContent>
            <Separator />
            {data.map((data: any, index) => {
              return (
                <div key={data.uid} className="grid gap-4 mb-4">
                  <Typography>
                    {index + 1}: {data.title} UID: {data.uid}
                  </Typography>
                  <Typography key={data.uid}>UID: {data.uid}</Typography>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <FirebaseTestCard />
      </div>
    </Container>
  );
}

export default FirebaseTest;
