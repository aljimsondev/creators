import React from "react";
import { Container } from "src/components/ui/container";
import { Typography } from "src/components/ui/typography";

function FeaturedSection() {
  return (
    <Container className="py-8">
      <Typography variant="h6">Featured Cosplayers</Typography>
      <Typography>Asian Creators Making a Splash </Typography>
      <div></div>
    </Container>
  );
}

export default FeaturedSection;
