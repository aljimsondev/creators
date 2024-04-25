import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { Container } from "src/components/ui/container";
import SocialLinksCarousel from "src/components/client/carousel/creator/profile/SocialLinksCarousel";

function CreatorSocialsSection() {
  const socialLinks = new Array(5).fill(0);
  return (
    <Container className="mt-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2 relative  content-center">
          <div className="w-full p-5 grid grid-cols-2 gap-3 px-9 relative">
            <span className="w-full ring-1 ring-primary rounded-md">
              <Link href="/" className="flex items-center justify-center p-2 ">
                <FaFacebookSquare size={24} />
              </Link>
            </span>
            <span className="w-full ring-1 ring-primary rounded-md">
              <Link href="/" className="flex items-center justify-center p-2 ">
                <FaInstagram size={24} />
              </Link>
            </span>
            <span className="w-full ring-1 ring-primary rounded-md">
              <Link href="/" className="flex items-center justify-center p-2 ">
                <FaDiscord size={24} />
              </Link>
            </span>
            <span className="w-full ring-1 ring-primary rounded-md">
              <Link href="/" className="flex items-center justify-center p-2 ">
                <FaTiktok size={24} />
              </Link>
            </span>
          </div>
        </div>
        <div className="col-span-3 p-5">
          <SocialLinksCarousel links={socialLinks} />
        </div>
      </div>
    </Container>
  );
}

export default CreatorSocialsSection;
