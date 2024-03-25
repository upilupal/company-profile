import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface User {
  gender: string;
  name: { title: string; first: string; last: string };
  picture: { large: string; medium: string; thumbnail: string };
}

interface RandomUserResponse {
  results: User[];
}

const URL = "https://randomuser.me/api/?results=100";

const Testimonial = async () => {
  const response = await fetch(URL, { cache: "no-store" });
  const { results }: RandomUserResponse = await response.json();
  return (
    <main className="container mx-auto py-4 bg-white h-screen flex items-center">
      <div className="">
        <Carousel className="mx-auto grid md:grid-cols-2 grid-cols-1  md:w-[77%] w-full ">
          {/* left start */}
          <div className="flex flex-col marker:justify-center gap-5 ">
            <div>
              <h1 className="md:text-7xl text-5xl font-semibold">
                From Our <span className="font-bold">Clients</span>
              </h1>
            </div>
            <div className="mb-5 mr-5">
              <p>Discover the stories of satisfaction and delight straight from our valued customers. Read on to find out how our furniture solutions have transformed their spaces and exceeded their expectations</p>
            </div>
            <div className="ml-[50px] w-5 relative bottom-0 hidden md:block">
              <CarouselPrevious className=" bg-red-400" />
              <CarouselNext className=" bg-red-400" />
            </div>
          </div>
          {/* left end */}
          {/* Right START */}
          <div className=" flex w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-yellow-500 h-[50vh] flex items-center">
                    <div className="m-5">
                      <div className="mb-5">
                        <h1 className="text-xl text-left font-semibold ">
                          "The quality is exceptional, and the craftsmanship is evident in every detail. The pieces have completely transformed my living room, and I couldn't be happier with the result. Thank you for exceeding my
                          expectations!"
                        </h1>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Avatar>
                          <AvatarImage src={results[0].picture.medium} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="font-medium">{results[0].name.first} {results[0].name.last}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-teal-500 h-[50vh] flex items-center">
                    <div className="m-5">
                      <div className="mb-5">
                        <h1 className="text-xl font-semibold ">
                          "The custom furniture they created for me fits beautifully in my space and perfectly matches my style. I highly recommend their services to anyone looking for top-notch quality and personalized attention."
                        </h1>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Avatar>
                          <AvatarImage src={results[1].picture.medium} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="font-medium">{results[1].name.first} {results[1].name.last}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-fuchsia-500 h-[50vh] flex items-center">
                    <div className="m-5">
                      <div className="mb-5">
                        <h1 className="text-xl font-semibold ">
                          "The result is a professional and inviting environment that has received countless compliments from clients and colleagues. Thank you for helping me create a workspace that inspires productivity and creativity!"
                        </h1>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Avatar>
                          <AvatarImage src={results[2].picture.medium} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="font-medium">{results[2].name.first} {results[2].name.last}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </div>
        </Carousel>
        {/* Right END */}
      </div>
      {/* left start */}

      {/* </div> */}
    </main>
  );
};

export default Testimonial;
