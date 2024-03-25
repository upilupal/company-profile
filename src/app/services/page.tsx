import React from "react";
import Image from "next/image";
import services1 from "../../../public/img/services1.jpg";
import services2 from "../../../public/img/services2.jpg";
import services3 from "../../../public/img/services3.jpg";
import ServicesCard from "./components/ServicesCard";

const Services = async () => {
  return (
    <main className="bg-[#fafafa]">
      <div className="container mx-auto py-4">
        <div className="md:w-3/4 my-24">
          <h1 className="md:text-6xl text-4xl font-semibold">We're here to help you create a space that inspires and delights. Discover the difference of personalized furniture solutions with us today.</h1>
        </div>
      </div>

      <div className="bg-yellow-500 py-10 rounded-t-3xl hidden md:block">
        {/* FIRST SERVICES */}
        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <Image src={services1} alt="furniture collection" width={300} className="rounded-2xl" loading="lazy" quality={60}/>
          </div>
          <div>
            <h2 className="text-5xl font-semibold">Furniture Collection</h2>
            <div className="w-3/4 mt-5">
              <p>
                Explore our carefully curated furniture collections, thoughtfully designed to elevate any space with style, functionality, and timeless elegance. Each piece in our collection is meticulously selected to harmonize with
                diverse tastes and interior aesthetics, ensuring a seamless integration into your home, office, or commercial environment. From modern minimalist designs to classic and rustic inspirations, our curated collections offer an
                array of options to suit every preference and enhance the ambiance of your space.
              </p>
            </div>
          </div>
        </div>
        {/* FIRST SERVICES */}

        {/* SECOND SERVICES */}
        <div className="grid grid-cols-2 mt-16">
          <div className="flex justify-center order-last">
            <Image src={services2} alt="furniture collection" width={300} className="rounded-2xl" loading="lazy" quality={60}/>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-semibold text-left mr-20">Custom Furniture</h2>
            <div className="w-3/4 mt-5 ">
              <p>
                We'll take the time to understand your vision, preferences, and functional requirements, translating them into meticulously crafted furniture pieces that surpass your expectations. Whether you're looking for bespoke pieces
                to complement your existing decor or seeking to transform your space with a completely customized design, our dedicated team is committed to bringing your furniture dreams to life.
              </p>
            </div>
          </div>
        </div>
        {/* SECOND SERVICES */}

        {/* THIRD SERVICES */}
        <div className="grid grid-cols-2 mt-16">
          <div className="flex justify-center">
            <Image src={services3} alt="furniture collection" width={300} className="rounded-2xl" loading="lazy" quality={60}/>
          </div>
          <div>
            <h2 className="text-5xl font-semibold">Interior Design</h2>
            <div className="w-3/4 mt-5">
              <p>
                Enhance your home or office with our professional interior design services. Our experienced team works closely with you to bring your vision to life, creating spaces that reflect your style and meet your needs. From concept
                to execution, we handle everything, ensuring a seamless and personalized experience. Let us transform your space and elevate your environment with our expert design solutions.
              </p>
            </div>
          </div>
        </div>
        {/* THIRD SERVICES */}
      </div>

      <div className="md:hidden bg-yellow-500 py-4">
        <ServicesCard />
      </div>
    </main>
  );
};

export default Services;
