import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mockAITools = [
  { id: 1, name: "FinanceGPT", category: "Finance AI", price: "$49/mo", rating: 4.5 },
  { id: 2, name: "DesignMaster", category: "Design AI", price: "$39/mo", rating: 4.2 },
  { id: 3, name: "WriterBot", category: "Writing AI", price: "$29/mo", rating: 4.7 },
]

export default function AIListings() {
  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <h1 className="text-3xl font-bold mb-8">AI Listings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockAITools.map((tool) => (
          <Card key={tool.id} className="hover-lift">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <Badge>{tool.category}</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Price: {tool.price}</p>
              <p className="mb-4">Rating: {tool.rating}/5</p>
              <Button asChild>
                <Link href={`/ai-details/${tool.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

