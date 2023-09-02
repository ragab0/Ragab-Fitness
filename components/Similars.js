import Card from "./Card";
import Loading from "./Loading";

export default function Similars({target, list=[], setMore=function() {}}) {

  return (
    <div className="my-[100px]">
      <h2 className="mb-8">Similar <span className=" text-mainColor">{target}</span> exercises</h2>
      {
        !list.length 
        ? <Loading />
        : 
        <div className="similars grid md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
          {list.map((obj, i) => <Card key={i} obj={obj} />)}
          <button onClick={setMore} className=" btn-main">Set More</button>
        </div>
      }
    </div>
  )
}
