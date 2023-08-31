import Header from "@/components/Header";
import ExHero from "./ExHero";
import Videos from "./Videos";
import Result from "@/components/Result";
import AppProvider from "@/utils/Context";

export default function page() {
  return (
    <main className="container">
      <Header />
      <ExHero />
      <AppProvider>
        <Videos heading="Watch baaaaaaaaand exercise videos" target="baaaaaaaand" />
        <Result heading="Similar target muscle exercises" target="target muscle" pagination={false} />
        <Result heading="Similar equipment exercises" target="equipment" pagination={false} />
      </AppProvider>
    </main>
  )
}
