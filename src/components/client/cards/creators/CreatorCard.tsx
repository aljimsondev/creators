import Image from "next/image";
import React from "react";
import { Card, CardContent } from "src/components/ui/card";
import { Typography } from "src/components/ui/typography";
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
          <div className="relative -top-[20px] px-4">
            <div className="flex items-center justify-center px-4 gap-2 relative ">
              <span className="text-xs rounded-xl p-2 py-[3px] ring-2 ring-white hidden md:block">
                Cosplay
              </span>
              <div className="rounded-full ring-2 ring-theme-primary bg-card flex-1 aspect-square relative -top-[20px] min-w-[40%] max-w-[50%] overflow-hidden">
                {profilePicture && (
                  <Image
                    alt="profile"
                    src={profilePicture}
                    fill
                    objectFit="cover"
                    objectPosition="center"
                  />
                )}
              </div>
              <span className="text-xs rounded-xl p-2 py-[3px] ring-2 ring-white hidden md:block">
                Cosplay
              </span>
            </div>
            <div className="text-center -top-[10px] relative">
              <Typography className="font-bold mb-2">{name}</Typography>
              <Typography className="line-clamp-2 text-primary/80">
                {introduction}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreatorCard;
