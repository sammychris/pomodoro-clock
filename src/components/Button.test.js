import { shallow } from "enzyme";
import Button from "./Button";

const wrapper = shallow(<Button />);

test("expect to render a button", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot to a component", () => {
  expect(wrapper).toMatchSnapshot();
});
