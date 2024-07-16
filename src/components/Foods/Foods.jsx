import Image from "next/image";
import React, { useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import useSWR from "swr";
import { Icon } from "@iconify/react";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  style: "italic",
  weight: "100",
});

const Foods = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/food", fetcher);
  const [imageLoading, setImageLoading] = useState(true); // State to manage image loading

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div>
      <div>PIZZA Role</div>
      <div className="text-black flex justify-center gap-20 flex-wrap p-16 lg:p-0 ">
        {data.map((product) => (
          <div key={product._id} className="">
            <div>
              <div className="relative h-96 w-96">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <div className="flex flex-col text-center justify-center items-center">
                      <Icon
                        icon="line-md:loading-alt-loop"
                        className="text-black text-5xl"
                      />
                      please wait...
                    </div>
                  </div>
                )}
                <Image
                  src={product.image}
                  alt="pizza"
                  width={500}
                  height={600}
                  loader={({ src }) => src}
                  onLoadingComplete={() => setImageLoading(false)}
                  onLoadingError={() => setImageLoading(false)}
                />
              </div>
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
                  {product.smallPrice.toLocaleString()}/=
                </span>
              </div>
              <div className="flex-col flex">
                <p className="font-extrabold">MEDIUM</p>
                <span className="text-red-800 font-extrabold">
                  {product.mediumPrice.toLocaleString()}/=
                </span>
              </div>
              <div className="flex-col flex">
                <p className="font-extrabold">LARGE</p>
                <span className="text-red-800 font-extrabold">
                  {product.largePrice.toLocaleString()}/=
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
