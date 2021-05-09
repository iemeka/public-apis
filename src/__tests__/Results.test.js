import ShallowRenderer from "react-test-renderer/shallow";
import Results from "../Results";

describe("Results Component", () => {
  it("Renders correctly when no result is available", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Results />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchInlineSnapshot(`
      <div
        className="result-holder"
      >
        <h1>
          NO RESULTS FOUND
        </h1>
      </div>
    `);
  });

  it("Renders correctly when results are available", () => {
    const renderer = new ShallowRenderer();
    const testProp = [
      {
        title: "cats Api",
        description: "api abouts cats",
        link: "https://cats.com",
        auth: "apiKey",
        cors: "yes",
      },
      {
        title: "dog Api",
        description: "api abouts cats",
        link: "https://cats.com",
        auth: "apiKey",
        cors: "yes",
      },
    ];
    renderer.render(<Results searchResults={testProp} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchInlineSnapshot(`
      <div
        className="result-holder"
      >
        <Result
          index={0}
        />
        <Result
          index={1}
        />
      </div>
    `);
  });
});
