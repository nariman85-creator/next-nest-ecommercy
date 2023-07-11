"use client";

import Cardprops from "@/types/cardtypes";
import Image from "next/image";

function Card({ title, id, name, description, image, price }: Cardprops) {
  console.log(image);

  return (
    <>
      <article className="card product-card">
        <div className="card-content">
          <div className="card-img product-img">
            <Image
              src={image}
              alt={`${name} image`}
              className="img"
              width={100}
              height={100}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="card-footer df">
            <span className="more plus"></span>
            <span className="product-name">{name}</span>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
