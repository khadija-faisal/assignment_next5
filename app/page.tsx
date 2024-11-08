import Image from "next/image";
function Home() {
  return (
    <main className="h-[80%] flex flex-col md:flex-row">
      <div className=" md:w-1/2 flex flex-col justify-center items-start p-8 lg:p-14  gap-4 ">
        <h1 className=" font text-[35px] sm:text-[46px] font-bold lg:w-[496px] ">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className=" text-[#A29875] text-lg font-medium ">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className=" bg-[#A29875] text-[#ffff] px-7 py-2 rounded-lg ">
          Explore Now
        </button>
      </div>
      <div className=" md:w-1/2 flex justify-center items-center sm: m-12">
        <Image src={"/images/hero.png"} alt="image" width={350} height={550} />
      </div>
    </main>
  );
}

export default Home;
