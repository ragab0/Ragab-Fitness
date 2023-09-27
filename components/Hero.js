import Image from "next/image";
import imgs from "@/assets/imgs";
import Header from "./Header";
import "./comps.css";

const { ramy } = imgs;


export default function Hero() {
  return (
    <section className="hero-section grid md:grid-cols-2 relative mb-[300px] gap-4">
      <div className="grid grid-rows-[auto_1fr] items-center">
        <Header />
        <div className="my-16">
          <h1>Ramy-Fitness</h1>
          <h2 className="my-8">Sweat, Smile <span className="block">And Repeat</span></h2>
          <p className="my-8 pe-8">The club of body building !
            Check out the most effective exercises personalized to you, and create you favourite plan, since you 
            with Ramy-Fintess website, you are the coatch and you are the student !
          </p>
          <a className="btn-main inline-block" href="#exercises">Explore Exercises</a>
        </div>
      </div>
      <div className="rounded-bl-[150px] overflow-hidden">
        <Image alt="BigRamy" src={ramy} width={800} className="w-full h-full object-cover lg:h-[800px] min-h-[400px]" />
      </div>
    </section>
  )
}
