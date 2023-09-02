import { NextResponse } from "next/server";
import api from "@/constants/api";

export function GET(req, res) {
  return NextResponse.json(api);
}
