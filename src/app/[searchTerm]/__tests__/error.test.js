import { render } from "@testing-library/react";
import SearchTermError from "../error";

describe("Search Term Error Page", () => {
  it("renders Search Term Error Page to match snapshots", () => {
    const { container } = render(<SearchTermError />);
    expect(container).toMatchSnapshot();
  });
});
