import Image from "next/image";
import Icon1 from "@/assets/icons/body-part.png"
import Icon2 from "@/assets/icons/target.png"
import Icon3 from "@/assets/icons/equipment.png"
import Type from "@/assets/icons/gym.png";


const data = [
  {
    name: "chest",
    img: Icon1
  },{
    name: "pectorals",
    img: Icon2
  },{
    name: "band",
    img: Icon3
  },
]


export default function ExHero() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 mb-[250px]">
      <div className=" bg-white flex items-center justify-center min-h-[500px]">
        <Image alt="exercise" src={Type} />
      </div>
      <div className="p-4 py-16">
        <h2>Band bench press</h2>
        <p className=" my-12 text-[#535352]">
          Exercises keep you strong. Exercises keep you strong. Exercises keep you strong. 
          Exercises keep you strong. Exercises keep you strong. Exercises keep you strong. 
          Exercises keep you strong. Exercises keep you strong. Exercises keep you strong. 
        </p>
        <ul className="flex flex-col gap-8">
          {
            data.map(({name, img}, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className=" rounded-full bg-clrYellowLighted overflow-hidden p-4 w-[82px]">
                  <Image className="img" src={img} width="100%" />
                </div>
                <span className="text-xl capitalize">{name}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
