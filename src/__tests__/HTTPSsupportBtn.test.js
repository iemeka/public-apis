import ShallowRenderer from "react-test-renderer/shallow";
import HTTPSsupportBtn from "../HTTPSsupportBtn";
import { searchContext } from "../search/searchContext";
import { render, fireEvent } from "@testing-library/react";

describe("HTTPSsupportBtn Component", () => {
  it("Selects the correct option", () => {
    const mocksetHTTPSsupport = jest.fn();
    const mockValue = {
      categories: [],
      category: "",
      setCategory: () => {},
      HTTPSsupport: "",
      setHTTPSsupport: mocksetHTTPSsupport,
      searchBarValue: () => {},
      setSearchBarValue: "",
    };
    const component = render(
      <searchContext.Provider value={mockValue}>
        <HTTPSsupportBtn />
      </searchContext.Provider>
    );
    const radioInputElement = component.getByTestId("radio-input");

    fireEvent.click(radioInputElement, { target: { textContent: "HTTPS" } });
    expect(mocksetHTTPSsupport).toBeCalledWith("True");

    fireEvent.click(radioInputElement, { target: { textContent: "HTTP" } });
    expect(mocksetHTTPSsupport).toBeCalledWith("False");
  });
     
  it("Renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(<HTTPSsupportBtn />);
    const result = shallowRenderer.getRenderOutput();
    expect(result).toMatchInlineSnapshot(`
      <div
        className="http-switch"
      >
        <div
          className="radioInputs"
          data-testid="radio-input"
          onClick={[Function]}
        >
          <input
            id="on"
            name="http-radio"
            type="radio"
          />
          <label
            htmlFor="on"
          >
            HTTPS
          </label>
          <input
            id="off"
            name="http-radio"
            type="radio"
          />
          <label
            htmlFor="off"
          >
            HTTP
          </label>
          <input
            id="both"
            name="http-radio"
            type="radio"
          />
          <label
            htmlFor="both"
          >
            Both
          </label>
        </div>
      </div>
    `);
  });
});
