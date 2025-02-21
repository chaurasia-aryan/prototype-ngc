import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 text-center fade-in">
        <h1 className="text-4xl font-bold mb-4">Find the Right AI for Your Work</h1>
        <p className="text-xl mb-8">Discover, compare, and choose from thousands of AI tools</p>
        <div className="max-w-md mx-auto flex">
          <Input type="text" placeholder="Search AI tools..." className="rounded-r-none" />
          <Button className="rounded-l-none">Search</Button>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Featured AI Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Finance AI", "Design AI", "Writing AI"].map((category) => (
            <Card key={category} className="hover-lift">
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Explore top {category.toLowerCase()} tools</p>
                <Button asChild>
                  <Link href={`/ai-listings?category=${category.toLowerCase().replace(" ", "-")}`}>View All</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

