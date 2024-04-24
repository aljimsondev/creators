import Image from "next/image";
import React from "react";
import { Card, CardContent } from "src/components/ui/card";
import { CreatorTypes } from "src/types/server/documentSchema";

function CreatorCard({
  profilePicture,
  banner,
  introduction,
  name,
  tags,
}: CreatorTypes) {
  return (
    <div className="w-full aspect-square">
      <Card className="bg-theme-card h-full overflow-hidden">
        <CardContent className="p-0 h-full w-full">
          <div className="h-[40%] w-full relative">
            <div className="w-full h-full bg-slate-500 pointer-events-none">
              {banner && (
                <Image
                  src={banner}
                  alt="banner"
                  fill
                  objectFit="cover"
                  objectPosition="center"
                />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreatorCard;
