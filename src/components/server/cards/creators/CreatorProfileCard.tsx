import React from "react";
import AppImage from "src/components/elements/image/AppImage";
import { Button } from "src/components/ui/button";
import { Container } from "src/components/ui/container";
import { Typography } from "src/components/ui/typography";
import { CreatorTypes } from "src/types/server/documentSchema";

function CreatorProfileCard({ profilePicture, name }: CreatorTypes) {
  return (
    <div className="relative z-10 w-full">
      <Container>
        <div className="flex items-end justify-start gap-4">
          <div className="w-[150px] relative rounded-full aspect-square ring-4 ring-theme-white bg-primary-foreground overflow-hidden">
            <AppImage src={profilePicture} alt="profile" fill />
          </div>
          <div className="flex items-end justify-start gap-4 pb-4">
            <div>
              <Typography variant="h5">{name}</Typography>
              <Typography>2389 followers • 1 following</Typography>
            </div>
            <Button
              className="rounded-full uppercase bg-transparent hover:bg-primary/10 px-4 ring-2 ring-primary"
              variant="outline"
            >
              Follow
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CreatorProfileCard;
