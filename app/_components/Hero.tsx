import React from "react";
import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

function Hero() {
  return (
    <section className="relative bg-gray-50 ">
      {/* Left Decorative Shape - Moved to Top Left Corner */}
      <div className="absolute left-5  mt-40 hidden sm:block">
        <div className="px-6 py-3 bg-white text-black border-2 border-black rounded-lg shadow-lg text-sm transform rotate-6">
          Diagrams
        </div>
      </div>

      {/* Right Decorative Shape - Moved to Top Right Corner */}
      <div className="absolute right-5 mt-40 hidden sm:block">
        <div className="px-6 py-3 bg-white text-black border-2 border-black rounded-full shadow-lg text-sm transform -rotate-6">
          FlowCharts
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-normal sm:text-6xl">
            Streamline Your Tasks with  
            <span className="block font-extrabold text-primary sm:text-7xl"> VisioBoard </span>
          </h1>

          <p className="mt-5 text-lg font-medium text-gray-700 sm:text-xl">
            Manage your workflow effortlessly with VisioBoard. Organize, collaborate, and boost productivity—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            
           <a href="#layout"> <Button 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-3 lg:px-10 lg:py-4 text-lg font-medium rounded-md transition hover:bg-primary hover:text-white cursor-pointer"
            >
              Learn More
            </Button> </a>
          </div>
        </div>

        {/* Responsive Image */}
        <div className="w-full flex justify-center mt-20 px-4 sm:px-0 shadow">
          <img 
            src="https://res.cloudinary.com/dwoosciy8/image/upload/v1740932611/ffffffffffff_gbn3kc.png" 
            alt="Hero Image" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
