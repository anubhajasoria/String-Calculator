# String Calculator — TDD Kata

The classic incremental String Calculator kata, implemented in **React + TypeScript** with the core logic driven by **Jest** tests.

**Live demo:** https://string-calculator-ochre.vercel.app

## Rules implemented

- Empty string returns `0`; a single number returns itself
- Sums an unknown amount of comma-separated numbers (`"1,2,3,4,5"` → `15`)
- Newlines work as separators alongside commas (`"1\n2,3"` → `6`)
- Custom delimiters via header syntax (`"//;\n1;2"` → `3`)
- Negative numbers throw, with **all** negatives listed in the message (`"1,-2,-3"` → `negative numbers not allowed -2, -3`)

## Where to look

- `src/helper/Logic.ts` — the `add()` implementation
- `src/App.test.tsx` — the Jest spec covering every rule above
- `src/App.tsx` — a small UI to try inputs against the live logic

## Run it

```bash
npm install
npm test     # run the Jest suite
npm start    # run the UI at http://localhost:3000
```
