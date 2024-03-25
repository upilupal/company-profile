"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  return (
    <main>
      <div className="md:grid grid-cols-3 gap-4 hidden">
        <div className="shadow-lg p-5 bg-white my-5 rounded-xl">
          <h3 className="text-lg font-semibold">Furniture Collection</h3>
          <p className="text-sm">Explore our carefully curated furniture collections designed to elevate any space.</p>
        </div>
        <div className="shadow-lg p-5 bg-white my-5 rounded-xl">
          <h3 className="text-lg font-semibold">Custom Furniture</h3>
          <p className="text-sm line-clamp-3"> Our custom furniture solutions will work closely with you to create furniture that perfectly fits your space and style.</p>
        </div>
        <div className="shadow-lg p-5 bg-white my-5 rounded-xl">
          <h3 className="text-lg font-semibold">Interior Design</h3>
          <p className="text-sm">Transform your home or office with our professional interior design services.</p>
        </div>
      </div>

      
        <Accordion type="single" collapsible className="md:hidden">
          <AccordionItem value="item-1">
            <AccordionTrigger><h3 className="text-lg font-semibold">Furniture Collection</h3></AccordionTrigger>
            <AccordionContent><p className="text-sm">Explore our carefully curated furniture collections designed to elevate any space.</p></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger><h3 className="text-lg font-semibold">Custom Furniture</h3></AccordionTrigger>
            <AccordionContent><p className="text-sm line-clamp-3"> Our custom furniture solutions will work closely with you to create furniture that perfectly fits your space and style.</p></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger><h3 className="text-lg font-semibold">Interior Design</h3></AccordionTrigger>
            <AccordionContent><p className="text-sm overflow-y-auto">Transform your home or office with our professional interior design services.</p></AccordionContent>
          </AccordionItem>
        </Accordion>
      
    </main>
  );
};

export default Services;
