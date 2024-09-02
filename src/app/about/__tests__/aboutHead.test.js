import { render } from "@testing-library/react";
import AboutHead from "../head";

describe("About Head Page", () => {
  it("renders About Head Page to match snaptshot", () => {
    const { container } = render(<AboutHead />);
    expect(container).toMatchSnapshot();
  });
});
