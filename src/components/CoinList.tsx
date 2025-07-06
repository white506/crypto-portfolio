import { useGetCoinsListQuery } from '../shared/api/cryptoApi';

export function CoinList() {
  const { data, error, isLoading } = useGetCoinsListQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <ul>
      {data?.slice(0, 10).map((coin: any) => (
        <li key={coin.id}>{coin.name} ({coin.symbol})</li>
      ))}
    </ul>
  );
}
