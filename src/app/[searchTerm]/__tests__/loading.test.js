import { render } from "@testing-library/react";
import SearchTermLoading from "../loading";

describe("Search Term Loading Page", () => {
  it("renders Search Term Loading Page to match snapshots", () => {
    const { container } = render(<SearchTermLoading />);
    expect(container).toMatchSnapshot();
  });
});
