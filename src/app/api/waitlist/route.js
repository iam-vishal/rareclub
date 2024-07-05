import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Waitlist from "@/lib/modals/waitlist";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
  try {
    await connect();
    const waitlist = await Waitlist.find();
    return new NextResponse(JSON.stringify(waitlist), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching waitlist" + error, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();

    await connect();
    const newWaitlist = new Waitlist(body);
    await newWaitlist.save();

    return new NextResponse(
      JSON.stringify({ message: "Waitlist Joined", user: newWaitlist }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in adding to waitlist",
        error,
      }),
      {
        status: 500,
      }
    );
  }
};
