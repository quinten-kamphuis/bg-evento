import { ImageResponse } from "next/og";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export const alt = "Evento - Browse events around you";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const OpenGraphImage = ({ params }: Props) => {
  return new ImageResponse(
    (
      <section>
        <h1>{params.slug}</h1>
        <p>Evento - Browse events around you</p>
      </section>
    )
  );
};

export default OpenGraphImage;
