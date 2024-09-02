import { render } from "@testing-library/react";
import {Input} from "../ui";

describe("Input Component", () => {
  it("renders Input Component to make snapshots", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});
