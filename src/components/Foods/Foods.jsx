import Image from "next/image";
import React from "react";
import { Roboto_Condensed } from "next/font/google";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  style: "italic",
  weight: "100",
});

const products = [
  {
    id: 1,
    productName: "Pizza",
    productPrice: {
      small: "790/=",
      medium: "1,499/=",
      large: "2,499/=",
    },
    image: "https://max-themes.net/demos/palermo/upload/palermo_demos_08.jpg",
    content: "Pineapple, mushrooms, black olives, tomato sauce",
  },
  {
    id: 2,
    productName: "Pizza",
    productPrice: {
      small: "790/=",
      medium: "1,499/=",
      large: "2,499/=",
    },
    image: "https://max-themes.net/demos/palermo/upload/palermo_demos_08.jpg",
    content: "Pineapple, mushrooms, black olives, tomato sauce",
  },
  {
    id: 3,
    productName: "Pizza",
    productPrice: {
      small: "790/=",
      medium: "1,499/=",
      large: "2,499/=",
    },
    image: "https://max-themes.net/demos/palermo/upload/palermo_demos_08.jpg",
    content: "Pineapple, mushrooms, black olives, tomato sauce",
  },
];

const Foods = ({ category }) => {
  console.log("cate", category);
  return (
    <div>
      <div>PIZZA Role</div>
      <div className="text-black flex justify-center gap-20 flex-wrap">
        {products.map((product) => {
          return (
            <div key={product.id} className="">
              <div>
                <Image
                  src="https://max-themes.net/demos/palermo/upload/palermo_demos_08.jpg"
                  alt="pizza"
                  width={500}
                  height={600}
                />
              </div>
              <div>{product.productName}</div>
              <div
                className={`${roboto_Condensed.className} italic font-extralight`}
              >
                {product.content}
              </div>
              <div className="flex gap-5">
                <div className="flex-col flex">
                  <p className="font-extrabold">SMALL</p>
                  <span className="text-red-800 font-extrabold">
                    {product.productPrice.small}
                  </span>
                </div>
                <div className="flex-col flex">
                  <p className="font-extrabold">MEDIUM</p>
                  <span className="text-red-800 font-extrabold">
                    {product.productPrice.medium}
                  </span>
                </div>
                <div className="flex-col flex">
                  <p className=" font-extrabold">LARGE</p>
                  <span className="text-red-800 font-extrabold">
                    {product.productPrice.large}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foods;
