export function add(numbers: string): number {
  if (numbers === "") return 0;

  if (numbers.length === 1) return parseInt(numbers);

  //removing \n , alphbets, spaces and , from the input string
  let str = numbers.replace(/[\n,\sa-zA-z]/g, "");

  if (str.includes("-")) {
    const negativeNumbers = str.match(/-\d/g)?.join(", ");
    throw new Error(`negative numbers not allowed ${negativeNumbers}`);
  }

  if (numbers.startsWith("//")) {
    str = str.replace("//", "");
    const delimiter = str.match(/\D/);

    return str
      ?.split(!delimiter?.length ? "" : delimiter[0])
      .filter((e) => e !== null && e !== "")
      .map((e) => parseInt(e))
      .reduce((a, b) => a + b);
  }

  return str
    .split("")
    .map((e) => parseInt(e))
    .reduce((a, b) => a + b);
}
