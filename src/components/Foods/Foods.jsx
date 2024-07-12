import Image from "next/image";
import React from "react";
import { Roboto_Condensed } from "next/font/google";
import useSWR from "swr";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  style: "italic",
  weight: "100",
});

const Foods = ({ category }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/food", fetcher);

  console.log("data", data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  console.log("cate", category);
  return (
    <div>
      <div>PIZZA Role</div>
      <div className="text-black flex justify-center gap-20 flex-wrap p-16 lg:p-0">
        {data.map((product) => {
          return (
            <div key={product._id} className="">
              <div>
                <Image
                  src={product.image}
                  alt="pizza"
                  width={500}
                  height={600}
                  loader={({ src }) => src}
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
                  <p className=" font-extrabold">LARGE</p>
                  <span className="text-red-800 font-extrabold">
                    {product.largePrice.toLocaleString()}/=
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
