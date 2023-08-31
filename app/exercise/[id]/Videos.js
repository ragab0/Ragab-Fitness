import Type from "@/assets/icons/gym.png";
import Image from "next/image";
import Link from "next/link";


const data = [
  {
    thumb: Type,
    title: "Resistance BAAAAAAANd",
    from: "Big-Ramy"
  },{
    thumb: Type,
    title: "Resistance BAAAAAAANd",
    from: "Big-Ramy"
  },{
    thumb: Type,
    title: "Resistance BAAAAAAANd",
    from: "Big-Ramy"
  },{
    thumb: Type,
    title: "Resistance BAAAAAAANd",
    from: "Big-Ramy"
  },{
    thumb: Type,
    title: "Resistance BAAAAAAANd",
    from: "Big-Ramy"
  },{
    thumb: Type,
    title: "Resistance BAAAAAAANd",
    from: "Big-Ramy"
  },{
    thumb: Type,
    title: "Resistance BAAAAAAANd",
    from: "Big-Ramy"
  },
]

export default function Videos() {
  return (
    <section>
      <h3 className="mb-10">Watch 
        <span className=" text-mainColor">BAAAAAAAAANd</span> exercie videos
      </h3>
      <div className="videos grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          data.map(({thumb, title, from}, i) => (
            <figure>
              <Link href="#">
                <Image alt="img" src={thumb} width={300} height={150} className="mx-auto" />
              </Link>
              <figcaption className="my-8">
                <p className="text-xl">{title}</p>
                <span className="block">{from}</span>
              </figcaption>
            </figure>
          ))
        }
      </div>
    </section>
  )
}
