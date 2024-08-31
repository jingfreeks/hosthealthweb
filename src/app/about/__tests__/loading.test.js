import { render } from "@testing-library/react";
import AboutLoading from "../loading";

describe("About Loading Page", () => {
  it("renders About Loading Page to match snaptshot", () => {
    const { container } = render(<AboutLoading />);
    expect(container).toMatchSnapshot();
  });
});
