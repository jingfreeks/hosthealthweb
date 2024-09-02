import { render } from "@testing-library/react";
import {renderWithProviders} from '../../../../lib/testframework';
import Page from "../page";

describe("User Id Screen Component Page", () => {
  it("renders User Id Screen Component Page to match snaptshots", async () => {
    const { container } = renderWithProviders(
      await Page({
        params: {
          userId: "test user",
        },
      })
    );
    expect(container).toMatchSnapshot();
  });
});
