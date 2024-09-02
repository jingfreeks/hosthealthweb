import { render } from "@testing-library/react";
import Search from "../search";

describe("Search Component", () => {
  it("renders Search Component to make snapshots", () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });
});
