import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({
  animals,
  countSum,
  countAverage,
  dragonCount,
}) {
  return (
    <>
      <CounterStats
        animals={animals}
        countSum={countSum}
        countAverage={countAverage}
        dragonCount={dragonCount}
      />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
