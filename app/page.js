import Hero from "@/components/Hero";
import HomeClientParts from "./pageClient";
import { fetchExercises } from "@/utils/FetchExercises";
import { fetchExercisesTypes } from "@/utils/FetchExercisesTypes";


export default async function Home() {
  // Fetching on server, and then passing to client comps;
  const exers = await fetchExercises();
  const types = await fetchExercisesTypes()

  return (
    <main className="container">
      <Hero />
      <HomeClientParts exers={exers} types={types} />
    </main>
  )
}
