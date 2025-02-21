import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockAITools = [
  {
    id: "1",
    name: "FinanceGPT",
    category: "Finance AI",
    price: "$49/mo",
    rating: 4.5,
    description: "FinanceGPT is an advanced AI tool for financial analysis and forecasting.",
    features: ["Real-time market analysis", "Personalized investment advice", "Risk assessment"],
  },
  {
    id: "2",
    name: "CodeAssist",
    category: "Developer AI",
    price: "$29/mo",
    rating: 4.8,
    description: "CodeAssist helps developers with code generation and debugging.",
    features: ["AI-powered code suggestions", "Debugging assistant", "Multi-language support"],
  },
];

export default function AIDetails({ params }) {
  // Find the AI tool based on the URL parameter (id)
  const tool = mockAITools.find((tool) => tool.id === params.id);

  // Handle the case when no AI tool is found
  if (!tool) {
    return <p className="text-center text-xl text-red-500">AI tool not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{tool.name}</CardTitle>
          <Badge>{tool.category}</Badge>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">{tool.description}</p>
          <div className="mb-4">
            <h3 className="font-bold mb-2">Features:</h3>
            <ul className="list-disc list-inside">
              {tool.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <p className="mb-4">Price: {tool.price}</p>
          <p className="mb-6">Rating: {tool.rating}/5</p>
          <Button>Try Now</Button>
        </CardContent>
      </Card>
    </div>
  );
}
