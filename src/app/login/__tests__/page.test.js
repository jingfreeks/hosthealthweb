import { renderWithProviders } from "../../../lib/testframework";
import Page from "../page";

describe("Login Screen Page", () => {
  it("renders Login Screen Page to match snaptshots", async () => {
    const { container } = renderWithProviders(<Page />);
    expect(container).toMatchSnapshot();
  });
});
