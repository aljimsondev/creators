import React from "react";
import { Container } from "src/components/ui/container";
import { Typography } from "src/components/ui/typography";
import { CreatorCard } from "@components/client/cards/creators";
import { creators } from "src/test-data/creators";

function FeaturedSection() {
  return (
    <Container className="py-8">
      <Typography variant="h6">Featured Cosplayers</Typography>
      <Typography>Asian Creators Making a Splash </Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
        {creators.map((creator, index) => {
          return <CreatorCard key={index} {...creator} />;
        })}
      </div>
    </Container>
  );
}

export default FeaturedSection;
