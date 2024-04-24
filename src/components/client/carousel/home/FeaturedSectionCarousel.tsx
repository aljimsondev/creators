"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { Container } from "@components/ui/container";
import { type CarouselApi } from "@components/ui/carousel";
import { Typography } from "@components/ui/typography";
import { CreatorCard } from "../../cards/creators";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

function FeaturedSectionCarousel({
  creators = [],
  loading = false,
  title = "",
  description = "",
}: {
  creators: any[];
  loading?: boolean;
  title: string;
  description?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api, setSelectedIndex]);

  React.useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
  }, [api, onSelect]);

  return (
    <div className="group relative z-10 mt-6 h-full w-full">
      <Typography variant="h6">{title}</Typography>
      <Typography className="mb-6">{description}</Typography>
      <Carousel
        setApi={setApi}
        className=" w-full"
        opts={{
          align: "start",
          slidesToScroll: "auto",
        }}
      >
        <CarouselContent className="ml-0 py-4">
          {loading
            ? new Array(8).fill(0).map((_, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="basis-[calc(80%-(var(--carousel-spacing)))] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div />
                  </CarouselItem>
                );
              })
            : creators.map((creator, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="basis-[calc(90%-(var(--carousel-spacing)))] pl-0 pr-[calc(var(--carousel-spacing)/2)] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <CreatorCard {...creator} />
                  </CarouselItem>
                );
              })}
          {/* <CarouselItem className="w-0 basis-0 last:pl-[calc(var(--carousel-spacing)+5px)] last:pr-[calc(var(--carousel-spacing)+5px)] last:md:pl-0 last:md:pr-0 "></CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious
          className="-left-4 hidden border-transparent text-transparent shadow-none  hover:border-border hover:bg-white/5 hover:bg-gradient-to-r hover:from-primary-foreground hover:to-transparent hover:shadow-sm group-hover:text-primary lg:flex bg-transparent hover:backdrop-blur-md rounded-lg border-none h-[calc(100%-2rem)]"
          icon={<IconChevronLeft size={30} />}
        />
        <CarouselNext
          className="-right-3  hidden  border-transparent text-transparent shadow-none  hover:border-border hover:bg-white/5 hover:bg-gradient-to-r hover:from-transparent hover:to-primary-foreground hover:shadow-sm group-hover:text-primary lg:flex h-[calc(100%-2rem)] hover:backdrop-blur-md  bg-transparent border-none"
          icon={<IconChevronRight size={30} />}
        />
      </Carousel>
    </div>
  );
}

export default FeaturedSectionCarousel;
