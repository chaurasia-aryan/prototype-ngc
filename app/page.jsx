"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Particles from "@/src/blocks/Backgrounds/Particles/Particles";

export default function Home() {
  return (
    <div className=" relative min-h-screen flex flex-col justify-center">
      
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["black", "black"]}
          particleCount={150}
          particleSpread={12}
          speed={0.2}
          particleBaseSize={75}
          moveParticlesOnHover={true}
          alphaParticles={true} 
          disableRotation={false}
        />
      </div>

      
      <div className="container mx-auto px-4 relative z-10">
        
        <section className="py-20 text-center fade-in">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-700 drop-shadow-lg">
            Find the Right AI for Your Work
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Discover, compare, and choose from thousands of AI tools.
          </p>
          <div className="max-w-lg mx-auto flex bg-white rounded-lg overflow-hidden shadow-lg">
            <Input
              type="text"
              placeholder="Search AI tools..."
              className="rounded-none px-4 flex-1 focus:ring-0 focus:border-gray-300"
            />
            <Button className="rounded-none bg-blue-600 hover:bg-blue-700 text-white px-6">
              Search
            </Button>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured AI Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Finance AI", "Design AI", "Writing AI"].map((category) => (
              <Card key={category} className="hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">Explore top {category.toLowerCase()} tools</p>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href={`/ai-listings?category=${category.toLowerCase().replace(" ", "-")}`}>View All</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
