import React from "react";
import { Container } from "src/components/ui/container";
import { Separator } from "src/components/ui/separator";
import { Typography } from "src/components/ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";

function CreatorContentSection() {
  return (
    <Container className="mt-4 sticky top-0">
      <div className="mt-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 h-max sticky top-navbar">
            <Tabs defaultValue="about" className="w-full">
              <div className="bg-background">
                <TabsList className="w-full p-0 bg-transparent border-b-2 rounded-none py-6">
                  <TabsTrigger value="about" className="uppercase flex-1">
                    About
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum
                fuga aut nesciunt, sunt fugiat dolores velit eius minus nobis ut
                ipsam commodi error expedita? Molestias commodi, quo magnam,
                molestiae suscipit cupiditate voluptas, et ea aut minus id
                tempora inventore nihil magni eligendi! Autem possimus, sequi
                porro, necessitatibus placeat consequatur aliquam aperiam est
                deserunt tempore incidunt optio sunt laudantium minus quas
                officiis quo. Laboriosam molestias reiciendis exercitationem
                rerum obcaecati necessitatibus assumenda aliquid excepturi
                nostrum laborum sed, perferendis rem maxime magni delectus
                perspiciatis modi pariatur inventore enim animi tempora facere
                dignissimos amet! Laudantium at vel obcaecati, repellendus
                numquam voluptas eos quasi?
              </TabsContent>
            </Tabs>
          </div>
          <div className="col-span-3">
            <Tabs defaultValue="feed" className="w-full">
              <div className="sticky top-navbar bg-background">
                <TabsList className="w-full p-0 bg-transparent border-b-2 rounded-none  py-6">
                  <TabsTrigger value="feed" className="uppercase flex-1">
                    Feed
                  </TabsTrigger>
                  <TabsTrigger value="gallery" className="uppercase flex-1">
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger value="store" className="uppercase flex-1">
                    Store
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="feed">
                <div className="h-[200vh]">ffed</div>
              </TabsContent>
              <TabsContent value="gallery">Gallery</TabsContent>
              <TabsContent value="store">Store content</TabsContent>
            </Tabs>
          </div>
          <Separator />
        </div>
      </div>
    </Container>
  );
}

export default CreatorContentSection;
