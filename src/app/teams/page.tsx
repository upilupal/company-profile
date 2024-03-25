import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface User {
    gender: string;
    name: {title: string; first: string; last: string};
    picture: {large: string; medium: string; thumbnail:string};
}

interface RandomUserResponse {
    results: User[];
}

const URL = "https://randomuser.me/api/?results=100";

const Teams = async () => {
    const response = await fetch(URL, {cache: "no-store"});
    const {results}: RandomUserResponse = await response.json();
  return (
    <div className=" mx-auto container py-4 bg-white ">
    <div className="mb-10 mt-24 flex justify-center items-center flex-col">
      <h1 className="md:text-6xl text-4xl font-semibold mb-3">Meet Our Teams</h1>

      <p className="md:w-1/2 text-center mb-5">Our team is comprised of skilled craftsmen, creative designers, and dedicated professionals, all committed to delivering excellence in every aspect of our work.</p>
      
    </div>

    {/* TEAMS CARD */}
    <div className="flex flex-wrap flex-col md:flex-row gap-8 justify-center w-3/4 mx-auto">
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

      <div className="w-[250px] p-4 shadow-lg rounded-xl">
        <div className="mb-5">
          <Image src={results[3].picture.large} alt="gambar team" width={250} height={250} loading="lazy"/>
        </div>

        <div>
          <h3 className="text-xl font-medium">
            {results[3].name.first} {results[3].name.last}
          </h3>
          <p>Designer</p>
        </div>
      </div>

      <div className="w-[250px] p-4 shadow-lg rounded-xl">
        <div className="mb-5">
          <Image src={results[4].picture.large} alt="gambar team" width={250} height={250} loading="lazy"/>
        </div>

        <div>
          <h3 className="text-xl font-medium">
            {results[4].name.first} {results[4].name.last}
          </h3>
          <p>Marketing</p>
        </div>
      </div>

      <div className="w-[250px] p-4 shadow-lg rounded-xl">
        <div className="mb-5">
          <Image src={results[5].picture.large} alt="gambar team" width={250} height={250} loading="lazy"/>
        </div>

        <div>
          <h3 className="text-xl font-medium">
            {results[5].name.first} {results[5].name.last}
          </h3>
          <p>Customer Service</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Teams