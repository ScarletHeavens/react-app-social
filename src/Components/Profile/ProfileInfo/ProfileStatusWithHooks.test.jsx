import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("props status shall be in the state", () => {
    const component = create(<ProfileStatus status="this is test" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("this is test");
  });

  test("the <span> should be displayed in the component", () => {
  const component = create(<ProfileStatus status="this is test" />);
  const root = component.root;
  let span = root.findAllByType("span");
  expect(span.length).toBe(1);
  });

  test("<input> shouldn't be displayed after mounting", () => {
  const component = create(<ProfileStatus status="this is test" />);
  const root = component.root; 
  expect(() => {
    let input = root.findByType("input");
  }).toThrow();
  });

  test("the <span> should have correct status after creation", () => {
  const component = create(<ProfileStatus status="this is test" />);
  const root = component.root;
  let span = root.findByType("span");
  expect(span.children[0]).toBe("this is test");
  });

  test("callback should be called", () => {
  let mockCallback = jest.fn();
  const component = create(<ProfileStatus status="this is test" updateStatus = {mockCallback}/>);
  const instance = component.getInstance();
  instance.deactivateEdit();
  expect(mockCallback.mock.calls.length).toBe(1);
  });
});