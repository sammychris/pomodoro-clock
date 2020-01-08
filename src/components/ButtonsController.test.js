import { shallow } from "enzyme";
import ButtonsController from "./ButtonsController";

it("expect to render button controller component", () => {
  const wrapper = shallow(<ButtonsController />);
  expect(wrapper.length).toEqual(1);
});

it("expect to render increment button", () => {
  const props = {
    title: "Break",
    id: "break",
    control: jest.fn(),
    increment: jest.fn(),
    decrement: jest.fn(),
  };

  const wrapper = shallow(<ButtonsController {...props} />);
  expect(wrapper.find("#break-increment").length).toEqual(1);
});

it("expect to render decrement button", () => {
  const props = {
    title: "Break",
    id: "break",
    control: jest.fn(),
    increment: jest.fn(),
    decrement: jest.fn(),
  };

  const wrapper = shallow(<ButtonsController {...props} />);
  expect(wrapper.find("#break-decrement").length).toEqual(1);
});

it("expect to take a snap shot of button controller component", () => {
  const wrapper = shallow(<ButtonsController />);
  expect(wrapper).toMatchSnapshot();
});
