"use client";
import Result from "@/components/Result";
import Types from "@/components/Types";
import Pagination from "@/components/Pagination";
import AppProvider from "@/utils/Context";
import Search from "@/components/Search";


export default async function HomeClientParts({types, exers}) {
  return (
    <AppProvider>
      <Search />
      <Types types={types} />
      <Result exers={exers} />
      <Pagination exers={exers} />
    </AppProvider>
  )
}