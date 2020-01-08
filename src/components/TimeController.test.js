import { shallow } from "enzyme";
import TimeController from "./TimeController";

const wrapper = shallow(<TimeController />);

it("expect to render timer-controller component", () => {
  expect(wrapper.length).toEqual(1);
});

it("expect to take snap-shot of time-controller component", () => {
  expect(wrapper).toMatchSnapshot();
});
