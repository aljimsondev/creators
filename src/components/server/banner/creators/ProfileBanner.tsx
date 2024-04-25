import React from "react";
import AppImage from "src/components/elements/image/AppImage";
import { Container } from "src/components/ui/container";
import { CreatorTypes } from "src/types/server/documentSchema";
import { CreatorProfileCard } from "src/components/server/cards/creators";

function ProfileBanner({ banner: bannerImage, ...props }: CreatorTypes) {
  return (
    <div className="relative h-[30dvh] md:h-[60dvh] flex items-start justify-end flex-col">
      <div className="banner_gradient w-full h-[calc(30dvh-5rem)] md:h-[calc(60dvh-5rem)] absolute bottom-20">
        <div
          className="banner__gradient_content absolute left-0 top-0 after:absolute after:h-full after:w-full after:bg-gradient-to-b after:from-black/70 after:via-transparent after:to-transparent"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        />
        <Container className="h-full w-full">
          <div className="w-full h-full relative z-[1] rounded-lg overflow-hidden pointer-events-none">
            <AppImage
              src={bannerImage!}
              alt=""
              fill
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </Container>
      </div>
      <CreatorProfileCard banner={bannerImage} {...props} />
    </div>
  );
}

export default ProfileBanner;
