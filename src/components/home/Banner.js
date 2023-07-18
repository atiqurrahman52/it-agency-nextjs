import { CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="banner__background h-screen bg-cover bg-center bg-no-repeat w-full">
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          src="/assets/images/banner/services.webp"
          alt=""
          width={620}
          height={350}
        />
        <p className="font-Inter font-medium text-sm text-white text-center pt-10 md:pt-5">
          &ldquo;we are here to empowering your digital transformation&rdquo;
        </p>
        <Link
          href="#"
          className="mt-20 p-3 border rounded-lg flex justify-center items-center gap-4"
        >
          <span className="text-white font-Inter font-bold text-sm md:text-base">
            Meet with Us
          </span>
          <span className="bg-white px-[3px] md:px-[4px] py-[4px] rounded-full flex">
            <CaretRight size={16} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
