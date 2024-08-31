import { render } from "@testing-library/react";
import ItemSearch from "../item";

describe("Item Component", () => {
  it("renders Item Component to match snapshot", async () => {
    const { container } = render(
      await ItemSearch({
        result: {
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
      })
    );
    expect(container).toMatchSnapshot();
  });
});
