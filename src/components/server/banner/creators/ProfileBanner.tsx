import React from "react";
import AppImage from "src/components/elements/image/AppImage";
import { Container } from "src/components/ui/container";

function ProfileBanner({ bannerImage }: { bannerImage?: string }) {
  return (
    <div className="banner_gradient mb-6 w-full h-[60dvh]">
      <div
        className="banner__gradient_content absolute left-0 top-0 after:absolute after:h-full after:w-full after:bg-gradient-to-b after:from-black/70 after:via-transparent after:to-transparent"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      />
      <Container className="h-full w-full">
        <div className="w-full h-full relative z-[1] rounded-lg overflow-hidden">
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
  );
}

export default ProfileBanner;
