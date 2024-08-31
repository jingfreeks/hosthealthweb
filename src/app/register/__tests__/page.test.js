import { render,fireEvent } from "@testing-library/react";
import Page from "../page";

describe("Register Screen Page", () => {
  it("renders Register Screen Page to match snaptshots", async() => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
  it("renders Register Screen Page to match snaptshots", async() => {
    const { getByTestId } = render(<Page />);
    fireEvent.submit(getByTestId('RegisterMainForm'))
  });
});
