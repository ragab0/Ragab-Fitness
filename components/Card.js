import CardPlan from "./CardPlan";

export default function Card() {
  return (
    <aside className="fixed top-0 right-0 z-10 bg-mainColor50 p-4 w-1/4 h-full">
      <header>
        <h2 className="mb-8 py-4 border-b-4 border-current text-center font-serif cursor-default">
          <span className="text-mainColor">My</span> Plan
        </h2>
      </header>
      <CardPlan /> 
    </aside>
  )
}
