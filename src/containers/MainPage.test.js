import { shallow } from "enzyme";
import MainPage from "./MainPage";

const wrapper = shallow(<MainPage />);

it("expect to render main-page component", () => {
  expect(wrapper.length).toEqual(1);
});

it("expect to take snap shot of main-page component", () => {
  expect(wrapper).toMatchSnapshot();
});
