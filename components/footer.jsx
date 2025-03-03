"use client";
import React from "react";
import Aurora from '@/src/blocks/Backgrounds/Aurora/Aurora';

<Aurora
colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
speed={0.5}
/>


const Footer = () => {
  return (
    
    <footer className=" border-t mt-8 py-6 text-center text-gray relative ">
      <div className="absolute inset-0 -z-10">
        <Aurora
            colorStops={["#0a192f", "#172a45", "#0a192f"]}

                

                speed={0.5}
                    />
                    </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <h3 className="font-bold">NGC</h3>
          <p className="text-sm">Find the Right AI for Your Work</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <a href="/ai-listings" className="block text-sm hover:underline">AI Listings</a>
          <a href="/dashboard" className="block text-sm hover:underline">Dashboard</a>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <p className="text-sm">support@ngc-ai.com</p>
        </div>
      </div>
      <div className="bg-primary/90 p-0.5 mt-6 mb-3">
  <p className="mt-3 mb-3 text-sm text-white">© {new Date().getFullYear()} NGC AI Marketplace. All rights reserved.</p>
</div>

    </footer>
  );
};

export default Footer;
