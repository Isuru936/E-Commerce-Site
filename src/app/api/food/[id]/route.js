"use server";
import connectDB from "@/utils/db";
import Food from "@/models/Food";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    const { id } = params;
    console.log(params);

    if (!id) {
      return new NextResponse("No ID provided", { status: 400 });
    }

    const result = await Food.findByIdAndDelete(id);

    if (!result) {
      return new NextResponse("Food item not found", { status: 404 });
    }

    return new NextResponse("Successfully deleted", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Server Error", { status: 500 });
  }
};
export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const { id } = params;
    console.log(`Fetching food with id: ${id}`);

    const result = await Food.findById(id);
    console.log(`Fetched result:`, result);

    if (!result) {
      return new NextResponse({ error: "Food not found" }, { status: 404 });
    }

    return new NextResponse(JSON.stringify(result));
  } catch (error) {
    console.error("Error fetching food:", error);
    return new NextResponse({ error: "Server error" }, { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    console.log("Starting PUT request...");

    await connectDB();
    console.log("Database connected");

    const body = await req.json();
    console.log("Request body parsed:", body);

    const {
      id,
      productName,
      smallPrice,
      mediumPrice,
      largePrice,
      image,
      content,
    } = body;

    if (!smallPrice && !mediumPrice && !largePrice) {
      console.error("No prices provided");
      return new NextResponse("At least one price must be available", {
        status: 400,
      });
    }

    if (!id) {
      console.error("No ID provided");
      return new NextResponse("ID is required for updating", { status: 400 });
    }

    console.log("Product details:", {
      id,
      productName,
      smallPrice,
      mediumPrice,
      largePrice,
      image,
      content,
    });

    const updatedFood = await Food.findByIdAndUpdate(
      id,
      { productName, smallPrice, mediumPrice, largePrice, image, content },
      { new: true }
    );

    if (!updatedFood) {
      console.error("Food item not found");
      return new NextResponse("Food item not found", { status: 404 });
    }

    console.log("Food item updated:", updatedFood);

    return new NextResponse("Food Item updated successfully", { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error.message);
    return new NextResponse(error.message, { status: 500 });
  }
};
