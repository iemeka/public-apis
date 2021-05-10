import renderer from "react-test-renderer";
import TableHead from "../TableHead";

describe("TableHead Component", () => {
  it("Renders correctly", () => {
    const component = renderer.create(<TableHead />);
    const tree = component.toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="table-header-container"
      >
        <div
          className="table-header"
        >
          <span
            id="title"
          />
          <span
            id="description"
          >
            Description
          </span>
          <span
            id="auth"
          >
            Authentication
          </span>
          <span
            id="cors"
          >
            CORS
          </span>
        </div>
      </div>
    `);
  });
});
