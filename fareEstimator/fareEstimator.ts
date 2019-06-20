function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  const minute_rates = cost_per_minute.map(rate =>
    (rate * ride_time).toFixed(2)
  );

  const mile_rates = cost_per_mile.map(rate =>
    (rate * ride_distance).toFixed(2)
  );

  return minute_rates.map(
    (rate, i) => parseFloat(rate) + parseFloat(mile_rates[i])
  );
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
