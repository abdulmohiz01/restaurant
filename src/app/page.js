import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className=''>
    <Hero/>
      <h1 className=" text-5xl text-primary">This is using a custom font</h1>
      <h1 className="font-grandhotel text-5xl text-accent">This is using a grandhotel font</h1>
      <h1 className="font-monsterrat text-5xl">This is using a monsterrat font</h1>
    </div>
  );
}
