import Image from "next/image";
import BigRamy from "@/assets/imgs/ramy.png";
import Header from "./Header";


export default function Hero() {
  return (
    <section className="hero-section grid md:grid-cols-2 relative mb-[300px] gap-4">
      <div className="grid grid-rows-[auto_1fr] items-center">
        <Header />
        <div className="my-16">
          <h1>Fitness Club</h1>
          <h2 className="my-8">Sweat, Smile <span className="block">And Repeat</span></h2>
          <p className="my-8">Check out the most effective exercises personalized to you</p>
          <a className="btn-main inline-block" href="#">Explore Exercises</a>
        </div>
      </div>
      <div className="rounded-bl-[150px] overflow-hidden">
        <Image alt="BigRamy" src={BigRamy} className="w-full h-full object-cover lg:h-[800px] min-h-[400px]" />
      </div>
    </section>
  )
}
