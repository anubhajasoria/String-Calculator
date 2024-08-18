export function add(numbers: string): number | string {
  if (numbers === "") return 0;

  if (numbers.length === 1) return parseInt(numbers);

  //removing \n and , from the input string
  let str = numbers.replace(/[\\n,]/g, "");

  return str
    .split("")
    .map((e) => parseInt(e))
    .reduce((a, b) => a + b);
}
