"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { type CarouselApi } from "@components/ui/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import CreatorSocialCard from "src/components/client/cards/creators/profile/CreatorSocialCard";

function SocialLinksCarousel({
  links = [],
  loading = false,
}: {
  links: any[];
  loading?: boolean;
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
    <div className="group relative z-10 h-full w-full">
      <Carousel
        setApi={setApi}
        className=" w-full h-full flex items-center"
        opts={{
          align: "start",
          slidesToScroll: "auto",
        }}
      >
        <CarouselContent className="ml-0 h-full">
          {links.map((creator: any, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-[calc(80%-(var(--carousel-spacing)))] lg:basis-[calc(45%-(var(--carousel-spacing)))] pl-[calc(var(--carousel-spacing)/2)] h-full py-4"
              >
                <CreatorSocialCard />
              </CarouselItem>
            );
          })}
          {/* <CarouselItem className="w-0 basis-0 pl-[calc(var(--carousel-spacing)/2)] md:pr-0 "></CarouselItem> */}
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

export default SocialLinksCarousel;
