import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mockUserData = {
  savedTools: ["FinanceGPT", "DesignMaster"],
  recentPurchases: ["WriterBot"],
  recommendations: ["DataAnalyzer", "AIAssistant"],
}

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Saved AI Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {mockUserData.savedTools.map((tool, index) => (
                <li key={index} className="mb-2">
                  {tool}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Recent Purchases</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {mockUserData.recentPurchases.map((tool, index) => (
                <li key={index} className="mb-2">
                  {tool}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 hover-lift">
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {mockUserData.recommendations.map((tool, index) => (
                <li key={index} className="mb-2">
                  {tool}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

