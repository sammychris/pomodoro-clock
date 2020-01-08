import { shallow } from "enzyme";
import DisplayTimer from "./DisplayTimer";

const wrapper = shallow(<DisplayTimer />);

it("expect to render display-timer component", () => {
  expect(wrapper.length).toEqual(1);
});

it("expect to take snap shot of display-timer component", () => {
  expect(wrapper).toMatchSnapshot();
});
