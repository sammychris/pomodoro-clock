import { shallow } from "enzyme";
import PlayPauseReset from "./PlayPauseReset";

const wrapper = shallow(<PlayPauseReset />);

it("expect to render play-pause reset component", () => {
  expect(wrapper.length).toEqual(1);
});

it("expect to take a snap shot of play-pause reset component", () => {
  expect(wrapper).toMatchSnapshot();
});
