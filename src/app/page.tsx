"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Services from "@/app/components/Services";
import Testimonial from "./components/Testimonial";
import Link from "next/link";
import { useRouter } from 'next/router';
import { AnyARecord } from "dns";



const page = () => {
 
  return (
    <main className="bg-[#fafafa] relative scroll-smooth">
      {/* jumbotron */}
      <section className="bg-[url('/img/hero-image.avif')] h-screen bg-cover bg-center rounded-b-2xl">
        <div className="bg-gradient-to-t from-black h-screen rounded-b-2xl flex items-center">
          {/* HERO */}
          <div className="h-[80%] flex justify-center items-center">
            <div className="text-center text-wrap md:w-1/2 mx-5 text-[#fafafa]">
              <h1 className="md:text-5xl font-bold text-3xl mb-5">Transforming Spaces with Affordable Furniture Solutions</h1>

              <p className="mb-5 text-xl">
                We pride ourselves on offering a vast selection of high-quality furniture pieces at unbeatable prices. From stylish sofas to elegant dining sets and everything in between, we're committed to helping you create a home you
                love without breaking the bank.
              </p>
              <Button className="rounded-full bg-yellow-600 hover:bg-yellow-800"><Link href="/about">Explore how we work</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="md:w-[75%] grid  md:grid-cols-2      mx-auto md:p-16 p-10  gap-10">
          <div>
            <h3 className="text-lg font-semibold leading-6 md:text-left text-center">
              We're a dedicated team committed to providing premium furniture solutions with excellence and innovation. With years of experience, we prioritize quality craftsmanship, personalized customer service, and sustainability. Join
              us in redefining the furniture industry and creating inspiring spaces.
            </h3>
          </div>

          <div className="relative hidden md:block">
            <Image src="/img/chair.avif" alt="about image" className="object-cover rounded-xl" fill />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="rounded-3xl px-4 bg-[#fafafa]">
          <div className="grid grid-rows-8 gap-5 md:gap-0 md:w-[75%] h-screen mx-auto p-5 md:px-0 md:pt-0">
            <div className="row-span-2  flex flex-col md:flex-row items-center justify-evenly mx-auto md:gap-16">
              <div className="md:text-4xl text-3xl font-bold text-center md:text-left">
                <h1>Exploring Our</h1>
                <h1>Company Services</h1>
              </div>
              <div className="md:w-1/2">
                <p className="md:line-clamp-3 text-center md:text-left">We offer a wide range of high-quality furniture products and services tailored to meet the diverse needs of our customers.</p>
              </div>
            </div>
            <div className="md:row-span-4 row-span-3">
              <div className=" relative h-full mx-auto">
                <Image src="/img/interior-design.avif" alt="interior-design" className="object-cover rounded-2xl" fill loading="lazy" quality={60}/>
              </div>
            </div>
            <div>
              <Services />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <Testimonial />
        </div>
      </section>
    </main>
  );
};

export default page;
