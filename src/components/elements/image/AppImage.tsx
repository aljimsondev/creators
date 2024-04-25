import Image, { ImageProps } from "next/image";
import React from "react";
import { getPlaiceholder } from "plaiceholder";

/**
 * Server-side side image renderer which added blur image preview
 * @param props
 * @returns
 */
async function AppImage(props: ImageProps) {
  const source = props?.src as string;
  //local images starts with /assets, checks if image src is not usng local
  if (source && !source.startsWith("/")) {
    const buffer = await fetch(props?.src as string).then(async (data) => {
      return Buffer.from(await data.arrayBuffer());
    });

    if (buffer) {
      const { base64 } = await getPlaiceholder(buffer as Buffer);

      return (
        <Image
          blurDataURL={base64}
          placeholder="blur"
          {...props}
          alt={props?.alt}
        />
      );
    }
    return <Image {...props} alt={props?.alt} />;
  }

  return <Image {...props} alt={props?.alt} />;
}

export default AppImage;
