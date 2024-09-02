import { render,fireEvent } from "@testing-library/react";
import Page from "../page";
import {renderWithProviders} from '../../../lib/testframework';

const signup=()=>jest.fn()
const isLoading={loading:false}

jest.mock('../../../slice/authApi',()=>{
  return{
    useSignupMutation:()=>[signup,isLoading],
  }
})
describe("Register Screen Page", () => {
  it("renders Register Screen Page to match snaptshots", async() => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
  it("renders Register Screen Page to match snaptshots", async() => {
    const { getByTestId } = renderWithProviders(<Page />);
    fireEvent.submit(getByTestId('RegisterMainForm'))
  });
});
