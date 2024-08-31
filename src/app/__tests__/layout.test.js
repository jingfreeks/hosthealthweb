import { render, screen } from "@testing-library/react";
import Layout from "../layout";


// Mock useRouter:
jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));
describe("Layout ", () => {
  it("renders Layout unchanged to match snapshot", () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
