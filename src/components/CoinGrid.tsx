import { CoinItem } from "./CoinItem";

const coins = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "btc",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    current_price: 65000,
    price_change_percentage_24h: 2.5,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "eth",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    current_price: 3500,
    price_change_percentage_24h: -1.2,
  },
  // ...ещё монеты
];

export function CoinGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {coins.map((coin) => (
        <CoinItem key={coin.id} coin={coin} onAdd={() => alert(coin.name)} />
      ))}
    </div>
  );
} 