import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import Result from "@/components/Result";
import Types from "@/components/Types";
import Pagination from "@/components/Pagination";
import { fetchExercisesTypes } from "@/utils/FetchExercisesTypes";
import { fetchExercises } from "@/utils/FetchExercises";


export default async function Home() {
  // Fetching on server, and then passing to client comps;
  const exers = await fetchExercises();
  const types = await fetchExercisesTypes()

  return (
    <main className="container">
      <Hero />
      <section id="exercises">
        <h2 className=" max-w-md text-center mx-auto leading-[1.7] mb-16">awesome exercises you should know</h2>
        <SearchForm />
      </section>
      <Types types={types} />
      <Result exers={exers} />
      <Pagination exers={exers} />
    </main>
  )
}

