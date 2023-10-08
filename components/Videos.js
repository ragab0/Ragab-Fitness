import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";


export default function Videos({videos}) {
  if (!videos?.length) {
    return <Loading />
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {
      videos.map(({thumb, title, from}, i) => (
        <figure className="hover:scale-110">
          <Link href="#">
            <img alt="img" src={thumb} className="mx-auto" />
          </Link>
          <figcaption className="my-8">
            <p className="text-xl">{title}</p>
            <span className="block">{from}</span>
          </figcaption>
        </figure>
      ))
    }
    </div>
  )
}
