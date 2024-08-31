import { render, baseRender } from "@testing-library/react";
import Page from "../page";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        24884283: {
          pageid: 24884283,
          ns: 0,
          title: "TeST Gliders",
          index: 3,
          thumbnail: {
            source:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/104_b_aircraft_0.jpg/50px-104_b_aircraft_0.jpg",
            width: 50,
            height: 38,
          },
          pageimage: "104_b_aircraft_0.jpg",
          extract:
            "TeST Gliders was a manufacturer of ultralight sailplanes and motorgliders based in Brno, Czech Republic...",
        },
      }),
  })
);

describe("Search Term Page", () => {
  const props = {
    params: {
      searchTerm: "",
    },
  };
  it("renders Search Term Page to match snaptshots", async () => {
    // const { container } = render(
    //   await Page({ params: { searchTerm: "test" } })
    // );
    const tree = render(await Page({ params: { searchTerm: "test" } }));
    const head = tree.baseElement.parentElement?.firstChild;
    expect(head).toMatchSnapshot();
  });
});
