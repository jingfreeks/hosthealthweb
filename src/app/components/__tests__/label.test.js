import { render } from "@testing-library/react";
import {Label} from "../ui";

describe("Label Component", () => {
  it("renders Label Component to make snapshots", () => {
    const { container } = render(<Label />);
    expect(container).toMatchSnapshot();
  });
});
