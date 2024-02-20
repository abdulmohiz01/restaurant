import Button from "./Button"

const Hero = () => {
    return (
        <div>
            <div className="flex flex-row-reverse mx-[220px] mt-[190px] md:mx-[100px] sm:mx-[50px] sm:h-[500px] sm:mt-[50px] ">
                <div className="flex flex-col items-start sm:justify-between justify-evenly h-96  w-auto">
                    <h1 className="font-grandhotel text-8xl text-accent ">Title Here</h1>
                    <p className="font-monsterrat text-3xl text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Fugit, esse a dolore voluptate provident itaque, commodi <br />dolor tempore natus nostrum aperiam ab, harum  <br />amet dolores saepe ut error quod. Magnam?</p>
                    <Button />
                </div>
            </div>
            {/* <div className="">
                <img src="/veg-1.png" alt="vegetables" className="absolute top-[160px] right-[170px] rotate-180 sm:w-[20px]" />
            </div> */}
        </div>
    )
}

{/* <Image src="/Hero-Left.jpg" className="object-cover" width={300} height={300} alt="food image"/> */ }
export default Hero