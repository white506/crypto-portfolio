import { Card, CardHeader, CardContent } from "../shared/ui/card";
import { Button } from "../shared/ui/button";

type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};

interface CoinItemProps {
  coin: Coin;
  onAdd?: (coin: Coin) => void;
}

export function CoinItem({ coin, onAdd }: CoinItemProps) {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <Card className="p-4 rounded-xl shadow-sm flex flex-col gap-2">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full bg-white" />
        <div>
          <div className="font-semibold text-lg">{coin.name}</div>
          <div className="text-muted-foreground uppercase text-xs">{coin.symbol}</div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row items-center justify-between pt-2">
        <div>
          <span className="text-xl font-bold">${coin.current_price.toFixed(2)}</span>
          <span
            className={
              "ml-2 font-medium " +
              (isPositive ? "text-green-600" : "text-red-500")
            }
          >
            {isPositive ? "+" : ""}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
        <Button onClick={() => onAdd?.(coin)}>Добавить</Button>
      </CardContent>
    </Card>
  );
} 