export default function Button() {
  return (
    <>
      <button className="text-sm bg-[#FF7F50] group relative min-h-[50px] w-full sm:w-40 md:w-30 lg:w-45 xl:w-46 h-auto overflow-hidden border text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#92B188] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#92B188] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full rounded-lg">
        <span className="font-semibold top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#92B188] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#92B188] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
        <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white hover:scale-110 duration-500 font-semibold">
          let's talk social
        </span>
      </button>
    </>
  );
}
