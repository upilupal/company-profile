import Image from "next/image";
import Works from "./components/Works";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface User {
  gender: string;
  name: { title: string; first: string; last: string };
  picture: { large: string; medium: string; thumbnail: string };
}

interface RandomUserResponse {
  results: User[];
}

const URL = "https://randomuser.me/api/?results=100";

const About = async () => {
  const response = await fetch(URL, { cache: "no-store" });
  const { results }: RandomUserResponse = await response.json();
  return (
    <main>
      {/* HERO START */}

      <div className="h-screen container mx-auto py-4 relative rounded-b-3xl bg-[#fafafa]">
        <div className="md:py-24 py-16 md:w-1/2">
          <h1 className="md:text-6xl text-4xl font-semibold">Crafting Quality Furniture with Years of Expertise, Rooted in Yogyakarta, Indonesia</h1>
        </div>
        <div className="w-full bg-black rounded-xl md:rounded-none ">
          <Image src="/img/gambar1.avif" width={400} height={400} alt="gambar kursi" className="md:absolute right-5 top-72 rounded-xl" loading="lazy" quality={60}/>
        </div>
      </div>

      {/* HERO END */}

      {/* COMPANY HISTORY START */}
      <div className="h-screen bg-white flex items-center container mx-auto py-4">
        <div>
          <div>
            <h1 className="md:text-6xl text-4xl font-semibold">Our Story</h1>
          </div>
          <div className="md:w-1/2 mt-6">
            <p className="md:text-2xl text-xl">
            Established in 2023, HART Furniture brings quality craftsmanship to Yogyakarta, Indonesia. Our skilled artisans create premium furniture using sustainable materials. Despite our short history, community engagement and sustainability are at our core. At HART Furniture, we value teamwork, creativity, and integrity. We strive to exceed customer expectations while fostering a supportive and inclusive work environment. As we mark our first year, we're excited for growth and continuing to uphold our values.
            </p>
          </div>
        </div>
      </div>
      {/* COMPANY HISTROY END */}

      {/* our works start */}
      <div className=" bg-white">
        <div className="mx-auto container py-4 bg-[#fafafa] rounded-3xl">
          <Works />
        </div>
      </div>
      {/* our works end */}

      {/* TEAMS START */}
      <div className="md:h-screen mx-auto container py-4 bg-white mb-24">
        <div className="mb-10 mt-10 flex justify-center items-center flex-col">
          <h1 className="md:text-6xl text-4xl font-semibold mb-3">Meet Our Teams</h1>

          <p className="md:w-1/2 text-center mb-5">Our team is comprised of skilled craftsmen, creative designers, and dedicated professionals, all committed to delivering excellence in every aspect of our work.</p>
          <Button className="rounded-full bg-yellow-500">
            <Link href="/teams">See More Our Teams</Link>
          </Button>
        </div>

        {/* TEAMS CARD */}
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          <div className="w-[250px] p-4 shadow-lg rounded-xl">
            <div className="mb-5">
              <Image src={results[0].picture.large} alt="gambar team" width={250} height={250} loading="lazy"/>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                {results[0].name.first} {results[0].name.last}
              </h3>
              <p>Founder & CEO</p>
            </div>
          </div>

          <div className="w-[250px] p-4 shadow-lg rounded-xl">
            <div className="mb-5">
              <Image src={results[1].picture.large} alt="gambar team" width={250} height={250} loading="lazy"/>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                {results[1].name.first} {results[1].name.last}
              </h3>
              <p>Manager</p>
            </div>
          </div>
          
          <div className="w-[250px] p-4 shadow-lg rounded-xl">
            <div className="mb-5">
              <Image src={results[2].picture.large} alt="gambar team" width={250} height={250} loading="lazy"/>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                {results[2].name.first} {results[2].name.last}
              </h3>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
      {/* TEAMS END */}
    </main>
  );
};

export default About;
