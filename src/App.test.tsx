import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { add } from "./helper/Logic";

describe("StringCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
