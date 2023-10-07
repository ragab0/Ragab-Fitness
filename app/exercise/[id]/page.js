import { fetchExercise } from "@/utils/FetchExercise";
import { fetchExercises } from "@/utils/FetchExercises";
import Header from "@/components/Header";
import ExHero from "@/components/ExerciseHero";
import Similars from "@/components/Similars";
import Videos from "@/components/Videos";
import NotFound from "./not-found";


/* SSG rendering as we know the ids of the all exercises 
 * SO we can map on them and after fetching from the server and then generate static pages;
 * May be this function will executes only once (on building) not in each that we hit our API route;
*/
export async function generateStaticParams() {
  // Will deduped;
  const exers = await fetchExercises();
  return exers.map((e) => ({
    id: e.id
  }))
}


export async function generateMetadata({params: {id}}) {
  // Will deduped
  const exer = await fetchExercise(id);
  if (!exer.name) {
    return {
      title: "Page doesn't exist"
    }
  }

  return {
    title: exer.name,
    description: "Exercise " + exer.name
  }
}


export default async function Exercise({params: {id}}) {
  const exer = await fetchExercise(id);
  const exers = await fetchExercises();

  if (!exer.id) return NotFound();


  return (
    <main className="container">
      <Header />
      <ExHero exer={exer} />
      <section className="videos mb-[100px]" id="exercises">
        <h2 className="mb-8">
          Show <span className=" text-mainColor">Videos</span>
        </h2>
        <Videos exer={exer} />
      </section>
      <section className="my-[100px]">
        <h2 className="mb-8">
          Similar <span className=" text-mainColor">target muscle</span> exercises
        </h2>
        <Similars exers={exers.filter(e => e.bodyPart === exer.bodyPart)} />
      </section>
      <section className="my-[100px]">
        <h2 className="mb-8">
          Similar <span className=" text-mainColor">equipment</span> exercises
        </h2>
        <Similars exers={exers.filter(e => e.equipment === exer.equipment)} />
      </section>
    </main>
  )
}
