import ShallowRenderer from "react-test-renderer/shallow";
import CategoryDropdown from "../CategoryDropdown";

describe("CategoryDropdown Component", () => {

  it("Renders correctly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CategoryDropdown />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchInlineSnapshot(`
      <div
        className="category-dropdown"
      >
        <label
          className="category-label"
          htmlFor="category"
        >
          <span>
            Category :
          </span>
          <span>
            All
          </span>
          <button
            data-testid="drop-down-btn"
            id="category"
            onClick={[Function]}
          >
            <Icon
              color="#000"
              horizontal={false}
              path="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              rotate={0}
              size={1}
              spin={false}
              vertical={false}
            />
          </button>
        </label>
      </div>
    `);
  });
});
