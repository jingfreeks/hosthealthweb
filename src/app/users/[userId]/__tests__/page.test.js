import { render } from "@testing-library/react";
import Page from "../page";

describe("User Id Screen Component Page", () => {
  it("renders User Id Screen Component Page to match snaptshots", async () => {
    const { container } = render(
      await Page({
        params: {
          userId: "test user",
        },
      })
    );
    expect(container).toMatchSnapshot();
  });
});
