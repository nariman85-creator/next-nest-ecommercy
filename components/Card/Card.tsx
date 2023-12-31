"use client";

import Cardprops from "@/types/cardtypes";
import Image from "next/image";
const myLoader = ({ src }: any) => {
  console.log(src);

  return `https://yandex.ru/images/search?pos=1&img_url=https%3A%2F%2Fcdn130.picsart.com%2F262575448005212.png&text=png+без+фона+бесплатно&rpt=simage&lr=10325`;
};

function Card({ title, id, name, description, image, price }: Cardprops) {
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
                backgroundColor: "transparent",
                mixBlendMode: "multiply",
              }}
              unoptimized
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
