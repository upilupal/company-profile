import Image from "next/image";
import Link from "next/link";
import React from "react";
import gambar1 from "../../../../../public/img/gambar1.avif"
import gambar2 from "../../../../../public/img/gambar2.avif"
import gambar3 from "../../../../../public/img/gambar3.avif"
import gambar4 from "../../../../../public/img/gambar4.avif"
import gambar5 from "../../../../../public/img/gambar5.avif"
import gambar6 from "../../../../../public/img/gambar6.avif"

const ShowCard = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      <Link href="#" className="group relative w-[300px] block bg-black rounded-xl">
        <Image
          alt=""
          src={gambar1}
          className="absolute inset-0  w-[300px] h-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          loading="lazy" quality={60}
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">HART FURNITURE</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Kursi Teras</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">Crafted from high-quality wood, this chair boasts durability and timeless style, making it the perfect addition to any space. The soft cushion provides optimal comfort, allowing you to relax and unwind with ease.</p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#" className="group relative w-[300px] block bg-black rounded-xl">
        <Image
          alt=""
          src={gambar2}
          className="absolute inset-0  w-[300px] h-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          loading="lazy" quality={60}
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">HART FURNITURE</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Kursi Warmindo</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">Embrace clean lines and understated elegance with our minimalist white wooden chair. Made from sturdy wood and finished in a crisp white hue, it seamlessly complements any decor style, from contemporary to Scandinavian.</p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#" className="group relative w-[300px] block bg-black rounded-xl">
        <Image
          alt=""
          src={gambar3}
          className="absolute inset-0  w-[300px] h-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          loading="lazy" quality={60}
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">HART FURNITURE</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Sofa Lemon</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">Add a vibrant pop of color to your living space with our eye-catching orange couch. This statement piece is sure to become the focal point of any room, infusing energy and personality into your home decor.</p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#" className="group relative w-[300px] block bg-black rounded-xl">
        <Image
          alt=""
          src={gambar4}
          className="absolute inset-0  w-[300px] h-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          loading="lazy" quality={60}
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">HART FURNITURE</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Kursi Pinterest</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">Crafted with clean lines and understated elegance, this chair effortlessly combines modern style with timeless functionality. The rich black hue adds a touch of refinement to any space, while the wooden legs provide a warm and natural contrast.</p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#" className="group relative w-[300px] block bg-black rounded-xl">
        <Image
          alt=""
          src={gambar5}
          className="absolute inset-0  w-[300px] h-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          loading="lazy" quality={60}
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">HART FURNITURE</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Meja Kandang</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">This innovative piece effortlessly combines functionality with comfort, providing a cozy and inviting surface for lounging, relaxing, or enjoying your favorite beverages. The cushioned top adds a soft and tactile element to your living space, creating a relaxed and casual atmosphere.</p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#" className="group relative w-[300px] block bg-black rounded-xl">
        <Image
          alt=""
          src={gambar6}
          className="absolute inset-0  w-[300px] h-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          loading="lazy" quality={60}
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">HART FURNITURE</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Interior Design</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">Immerse yourself in the serene beauty of our minimalist earth tone interior design, where simplicity meets sophistication. Inspired by nature's timeless palette, our design aesthetic celebrates the warmth and tranquility of earthy hues, creating a harmonious and inviting space that evokes a sense of calm and balance.</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShowCard;
