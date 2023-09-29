import { NextResponse } from "next/server";
import structuredApi from "@/constants/structuringApi";

const { searchOnStructure } = structuredApi;


export function GET(req, res) {
  const { id } = res.params;
  return NextResponse.json(searchOnStructure.get(id));
}