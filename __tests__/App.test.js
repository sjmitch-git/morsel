import "react-native";
import renderer from "react-test-renderer";

import App from "../App";

it("renders correctly", () => {
  renderer.create(<App />);
});

test("renders App component correctly", () => {
  const component = renderer.create(<App />);
  const instance = component.root;
  const text = instance.findByProps({ children: "Home Screen!" });
  expect(text).toBeTruthy();
});

test("renders App component correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
