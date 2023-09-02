import Header from "@/components/Header";
import AppProvider from "@/utils/Context";
import ExHero from "@/components/ExHero";
import App from "./app";

export default function layout() {
  return (
    <main className="container">
      <Header />
      <AppProvider>
        <ExHero />
        <App />
      </AppProvider>
    </main>
  )
}
