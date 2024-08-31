import { render } from "@testing-library/react";
import {Button} from "../ui";

describe("Button Component", () => {
  it("renders Button Component to make snapshots", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
