import React from "react";
import Image from "next/image";
import Link from "next/link";
import services1 from "../../../../public/img/services1.jpg";
import services2 from "../../../../public/img/services2.jpg";
import services3 from "../../../../public/img/services3.jpg";

const ServicesCard = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      <Link href="#" className="group relative w-[300px] block bg-black rounded-xl">
        <Image alt="" src={services1} className="absolute inset-0  w-[300px] h-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl" loading="lazy" quality={60}/>

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">HART FURNITURE</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Furniture Collection</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                Explore our carefully curated furniture collections, thoughtfully designed to elevate any space with style, functionality, and timeless elegance. Each piece in our collection is meticulously selected to harmonize with
                diverse tastes and interior aesthetics, ensuring a seamless integration into your home, office, or commercial environment. From modern minimalist designs to classic and rustic inspirations, our curated collections offer an
                array of options to suit every preference and enhance the ambiance of your space.
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#" className="group relative w-[300px] block bg-black rounded-xl">
        <Image alt="" src={services2} className="absolute inset-0  w-[300px] h-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl" loading="lazy" quality={60}/>

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">HART FURNITURE</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Custom Furniture</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
              We'll take the time to understand your vision, preferences, and functional requirements, translating them into meticulously crafted furniture pieces that surpass your expectations. Whether you're looking for bespoke pieces to complement your existing decor or seeking to transform your space with a completely customized design, our dedicated team is committed to bringing your furniture dreams to life.
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#" className="group relative w-[300px] block bg-black rounded-xl">
        <Image alt="" src={services3} className="absolute inset-0  w-[300px] h-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"loading="lazy" quality={60} />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">HART FURNITURE</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Interior Design</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
              Enhance your home or office with our professional interior design services. Our experienced team works closely with you to bring your vision to life, creating spaces that reflect your style and meet your needs. From concept to execution, we handle everything, ensuring a seamless and personalized experience. Let us transform your space and elevate your environment with our expert design solutions.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServicesCard;
