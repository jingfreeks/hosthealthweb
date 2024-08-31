import { render } from "@testing-library/react";
import Page from "../page";

describe("Search Term Page", () => {
  const props = {
    params: {
      searchTerm: "",
    },
  };
  it("renders Search Term Page to match snaptshots", async() => {
    const { container } = render( await Page({params:{searchTerm:'test'}}));
    expect(container).toMatchSnapshot();
  });
});
