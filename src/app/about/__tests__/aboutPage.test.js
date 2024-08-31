import { render, screen } from "@testing-library/react";
import AboutPage from "../page";

describe("About Page", () => {
  it("renders About Page to match snaptshot", () => {
    const { container } = render(<AboutPage />);
    expect(container).toMatchSnapshot();
  });
});
