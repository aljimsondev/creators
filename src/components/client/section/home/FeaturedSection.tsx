import React from "react";
import { Container } from "src/components/ui/container";
import { Typography } from "src/components/ui/typography";
import { CreatorCard } from "@components/client/cards/creators";
import { creators } from "src/test-data/creators";
import { FeaturedSectionCarousel } from "@components/client/carousel/home";

function FeaturedSection() {
  return (
    <Container className="py-8">
      <div className="hidden md:block">
        <Typography variant="h6">Featured Cosplayers</Typography>
        <Typography>Asian Creators Making a Splash </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
          {creators.map((creator, index) => {
            return <CreatorCard key={index} {...creator} />;
          })}
        </div>
      </div>
      <FeaturedSectionCarousel
        creators={creators}
        description="Asian Creators Making a Splash"
        title="Featured Cosplayers Carousel Version"
      />
    </Container>
  );
}

export default FeaturedSection;
