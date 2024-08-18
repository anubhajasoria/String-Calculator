export function add(numbers: string): number | string {
  if (numbers === "") return 0;

  if (numbers.length === 1) return parseInt(numbers);

  return "";
}
