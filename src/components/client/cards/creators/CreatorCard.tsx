import Image from "next/image";
import Link from "next/link";
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
    <Link href="/">
      <div className="w-full aspect-square">
        <Card className="bg-theme-card h-full overflow-hidden hover:shadow-lg hover:shadow-theme-shadow/40 duration-200 ease-in-out">
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
            <div className="relative -top-[10px] md:-top-[30px] px-4">
              <div className="flex items-center justify-center px-4 gap-2 relative ">
                <span className="text-xs rounded-xl p-2 py-[3px] ring-2 ring-white hidden md:block">
                  {tags.length > 0 ? tags[0] : "Custom"}
                </span>
                <div className="rounded-full ring-2 ring-theme-primary bg-card flex-1 aspect-square relative -top-[10px] md:-top-[30px] min-w-[40%] max-w-[50%] overflow-hidden">
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
                  {tags.length > 0 ? tags[1] : "Custom"}
                </span>
              </div>
              <div className="text-center -top-[10px] md:-top-[20px] relative">
                <Typography className="font-bold mb-1 md:mb-2">
                  {name}
                </Typography>
                <Typography className="line-clamp-1 md:line-clamp-2 text-primary/80">
                  {introduction}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}

export default CreatorCard;
