import ShallowRenderer from "react-test-renderer/shallow";
import App from "../App";

describe("App Component", () => {
  it("Renders correctly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchInlineSnapshot(`
      <div
        className="container"
      >
        <SearchProvider>
          <Form />
        </SearchProvider>
        <footer>
          <a
            href="https://iemeka.github.io"
          >
            Created by Emeka
          </a>
        </footer>
      </div>
    `);
  });
});
