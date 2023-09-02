import { NextResponse } from "next/server";
import SearchApiConstant from "@/constants/SearchApi";

export function GET(req, res) {
  const { id } = res.params;
  // console.log(SearchApiConstant[id]);
  return NextResponse.json(SearchApiConstant.get(id));
}
