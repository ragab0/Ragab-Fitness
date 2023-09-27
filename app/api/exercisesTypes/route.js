import { NextResponse } from "next/server";
import structuredApi from "@/constants/structuringApi";

const getTypesStructure = structuredApi.getTypesStructure

export function GET(req, res) {
  return NextResponse.json(getTypesStructure);
}
