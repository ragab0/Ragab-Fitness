import Hero from "@/components/Hero";
import Result from "@/components/Result";
import Search from "@/components/Search";
import Types from "@/components/Types";
import AppProvider from "@/utils/Context";


export default function Home() {
  return (
    <main className="container">
      <Hero />
      <AppProvider>
        <Search />
        <Types />
        <Result pagination={true} />
      </AppProvider>
    </main>
  )
}
