"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { Separator } from "src/components/ui/separator";
import { Typography } from "src/components/ui/typography";
import { getDocuments } from "src/lib/helper/client";

function FirebaseTestCard() {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      getDocuments("test-data").then((docs) => {
        console.log(data);
        if (docs) {
          setData(docs);
        }
      });
    })();
  }, []);

  return (
    <Card>
      <CardHeader>
        <Typography>Fetch using server firebase initialization</Typography>
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
  );
}

export default FirebaseTestCard;
