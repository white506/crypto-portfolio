import { ThemeToggle } from "./components/ThemeToggle";
import { CoinList } from "./components/CoinList";
import { Button } from "./shared/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./shared/ui/card";

export function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <Card className="p-6 max-w-md w-full shadow-lg">
        <CardHeader>
          <CardTitle>Пример карточки</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => alert("Нажато!")}>Нажми меня</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
