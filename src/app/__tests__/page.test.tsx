import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../page";

describe("Home", () => {
  it("renders home page correctly", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
