import Image from "next/image"
import Link from "next/link"

//icon
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
  return (
    <header className=" w-full flex items-center justify-between px-16  xl:h-[100px] lg:h-[80px] md:h-[70px] sm:h-[60px] bg-transparent text-white">
      <div className="md:w-[50px] md:h-[45px] lg:w-[80px] lg:h-[65px] sm:w-[50px] ">
        <Link href="/">
          <Image src="/logo.png"  width={104} height={50} alt="Logo" />
        </Link>
      </div>
      <div className="h-14  lg:w-[800px] md:w-[500px]  lg:flex md:flex xl:flex hidden md:text-lg  items-center justify-around tracking-wide lg:text-2xl font-monsterrat antialiased ">
        {
          links.map(({ href, label }) => (
            <Link  key={href} href={href}>{label}</Link>
          ))
        }
      </div>
      <div className="" >
        <BsSearch size={28} />
      </div>
    </header>
  )
}

export default Navbar;

const links = [{
  label: "Home",
  href: "/"
}, {
  label: "Product",
  href: "/product"
}, {
  label: "Promo",
  href: "/promo"
}, {
  label: "About",
  href: "/about"
},
{
  label: 'Contact',
  href: '/contact'
}];