"use server";
import connectDB from "@/utils/db";
import Food from "@/models/Food";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await connectDB();
    const foods = await Food.find();
    return new NextResponse(JSON.stringify(foods), { status: 200 });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return new NextResponse("Server Error", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connectDB();

    const body = await req.json();

    const { productName, smallPrice, mediumPrice, largePrice, image, content } =
      body;

    if (!smallPrice && !mediumPrice && !largePrice) {
      return new NextResponse("At least one price must be available", {
        status: 400,
      });
    }

    const food = new Food({
      productName,
      smallPrice,
      mediumPrice,
      largePrice,
      image,
      content,
    });

    await food.save();

    return new NextResponse(JSON.stringify(food), { status: 200 });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return new NextResponse("Server Error", { status: 500 });
  }
};
