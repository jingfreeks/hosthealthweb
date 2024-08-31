import { render } from "@testing-library/react";
import UserNofound from "../not-found";

describe("User not found Component", () => {
  it("renders User not found Component to match snaptshots", async() => {
    const { container } = render(<UserNofound />);
    expect(container).toMatchSnapshot();
  });
});
