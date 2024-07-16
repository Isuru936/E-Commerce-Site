"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import uploadImage from "@/utils/handleImageUploads.js";
import useSWR, { mutate } from "swr";
import ViewFood from "@/components/Foods/ViewFood";
import AddFood from "@/components/Foods/AddFood";
import AddPromotions from "@/components/Foods/AddPromotions";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  style: "italic",
  weight: "100",
});

const ManageFood = () => {
  const [isCurrentMenu, setIsCurrentMenu] = useState(true);
  const [addPromotion, setAddPromotion] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState("");
  const [showViewFood, setShowViewFood] = useState(false);
  const [showAddFood, setShowAddFood] = useState(false);
  const addPromotionRef = useRef(null);

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return {
        redirect: { destination: "/api/auth/signin?callbackUrl=/client" },
      };
    },
  });

  const fetchDetails = async () => {
    const session = await getServerSession();
    return session;
  };

  const handleSignout = async () => {
    await signOut();
  };

  const openViewFood = (id) => {
    setSelectedFoodId(id);
    setShowViewFood(true);
  };

  const closeViewFood = () => {
    setSelectedFoodId(null);
    setShowViewFood(false);
  };

  const closeAddFood = () => {
    setShowAddFood(false);
  };

  const closeAddPromotion = () => {
    setAddPromotion(false);
  };

  const getEmail = async () => {
    const session = await getServerSession();
    return session.user.email;
  };

  //fetch Foods
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/food", fetcher);

  //handleDelete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/food/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 404) {
        alert("No such Product fond to delete");
        return;
      }

      if (res.status === 500) {
        alert("Error Deleting ");
        return;
      }

      mutate();
      alert("Deleted successfully");
    } catch (error) {}
  };

  //animations
  useEffect(() => {
    if (addPromotion) {
      gsap.fromTo(
        addPromotionRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.2 }
      );
    }
  }, [addPromotion]);

  if (!data) {
    return (
      <div className="w-screen h-screen bg-black flex justify-center items-center align-middle">
        <Icon icon="line-md:loading-alt-loop" className="text-xl" /> Loading...
      </div>
    );
  }

  return (
    <div className="w-screen h-full p-5 bg-black">
      <div className="w-full flex-col lg:flex-row flex items-start justify-between ">
        <div className="w-fit h-fit ">
          <a href="/">
            <Image
              src="/logo.jpeg"
              width={400}
              height={200}
              objectFit="cover"
              alt="logo"
            />
          </a>
          <p
            className={`text-white ${roboto_Condensed.className} pt-2 pl-2 align-bottom`}
          >
            Taste buds to the next levels
          </p>
        </div>

        <div className="text-white flex h-full p-2">
          <div className="text-white h-full p-2"></div>
          <div className="text-white h-full p-2">
            <button
              className="p-2 border-2 rounded-lg mb-3 button hover:border-2 hover:border-red-900"
              onClick={() => {
                setShowAddFood(!showAddFood);
              }}
            >
              Add Food
            </button>
            <div className="flex items-center gap-2">
              {session && (
                <>
                  <Image
                    src={session.user.image}
                    className="rounded-full"
                    width={30}
                    height={50}
                    alt="profile pic"
                  />
                  <p>{session.user.name}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white bg-black p-4 overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-4 text-left border-b border-gray-700">
                Food Name
              </th>
              <th className="p-4 text-left border-b border-gray-700">Price</th>
              <th className="p-4 text-left border-b border-gray-700">Image</th>
              <th className="p-4 text-left border-b border-gray-700">
                Content
              </th>
              <th className="p-4 text-left border-b border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((food) => (
                <tr key={food._id} className="bg-black hover:bg-red">
                  <td className="p-4 border-b border-gray-700">
                    {food.productName}
                  </td>
                  <td className="p-4 border-b border-gray-700">
                    <p>Small: {food.smallPrice}</p>
                    <p>Medium: {food.mediumPrice}</p>
                    <p>Large: {food.largePrice}</p>
                  </td>
                  <td className="p-4 border-b border-gray-700">
                    <Image
                      src={food.image}
                      width={200}
                      height={600}
                      alt={food.productName}
                    />
                  </td>
                  <td className="p-4 border-b border-gray-700 w-3/6">
                    {food.content}
                  </td>
                  <td className="p-4 border-b border-gray-700 gap-5">
                    <button
                      type="button"
                      onClick={(e) => {
                        openViewFood(food._id);
                      }}
                      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-green-500/50 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        handleDelete(food._id);
                      }}
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  No food items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showAddFood && <AddFood onClose={closeAddFood} />}
      {addPromotion && <AddPromotions onClose={closeAddPromotion} />}
      {showViewFood && <ViewFood id={selectedFoodId} onClose={closeViewFood} />}
    </div>
  );
};

export default ManageFood;
