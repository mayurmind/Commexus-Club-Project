export const getRandomCircuitBg = () => {
  const num = Math.floor(Math.random() * 3) + 1;
  return `linear-gradient(rgba(10, 10, 15, 0.88), rgba(10, 10, 15, 0.92)), url('/assets/circuits/circuit-${num}.png')`;
};
