import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className='h-[100vh]'>
      <div className="absolute z-[-10] w-full flex bg-primary  overflow-hidden">
        <img src="/Hero-Left.jpg" alt="" width={670} className="" />
        <img src="/hero-right.png" alt="" width={510} className="absolute ml-[480px] mx-[50px] hidden xl:flex md:flex md:h-[880px] " />
      </div>
      <Navbar />
      <Hero />
      
    </div>
  );
}
