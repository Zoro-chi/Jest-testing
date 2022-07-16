const analyzeArray = (array) => {
  const total = array.reduce((prev, curr) => prev + curr, 0);
  const length = array.length;
  const average = total / length;
  const max = Math.max(...array);
  const min = Math.min(...array);
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
};

export default analyzeArray;
