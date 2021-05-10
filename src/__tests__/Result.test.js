import ShallowRenderer from "react-test-renderer/shallow";
import Result from "../Result";

describe("Result Component", () => {
  it("Renders correctly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Result
        title="cats"
        description=" about cats"
        link="https://cats.com"
        auth="apiKey"
        cors="Unknown"
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchInlineSnapshot(`
      <div
        className="table-body"
      >
        <a
          className="title"
          href="https://cats.com"
        >
          cats
        </a>
        <span
          className="description"
        >
           about cats
        </span>
        <span
          className="auth"
        >
          apiKey
        </span>
        <span
          className="cors"
          data-type="Unknown"
        >
          Unknown
        </span>
      </div>
    `);
  });
});
