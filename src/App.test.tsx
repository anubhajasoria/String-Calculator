import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { add } from "./helper/Logic";

describe("StringCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    expect(add("15")).toBe(6);
  });
});
