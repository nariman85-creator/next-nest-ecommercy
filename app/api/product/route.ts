import { NextResponse } from "next/server";
import data from "../../../public/db/data.json";

export async function GET() {
  return NextResponse.json(data, { status: 200 });
}
