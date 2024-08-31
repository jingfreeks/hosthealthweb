import { render } from "@testing-library/react";
import AboutLayout from "../layout";

describe("About Layout Page", () => {
  it("renders About Layout Page to match snaptshot", () => {
    const { container } = render(<AboutLayout />);
    expect(container).toMatchSnapshot();
  });
});
