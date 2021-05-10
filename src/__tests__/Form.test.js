import ShallowRenderer from "react-test-renderer/shallow";
import Form from "../Form";


describe("Form Component", () => {

  it("Renders correctly when no result is available", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Form />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchInlineSnapshot(`
      <div>
        <div
          className="header"
        >
          <form
            onSubmit={[Function]}
          >
            <SearchBar />
            <CategoryDropdown />
            <HTTPSsupportBtn />
            <button
              data-testid="submit-btn"
              id="submit-btn"
            >
              Search
            </button>
          </form>
        </div>
        <div
          className="result"
          style={
            Object {
              "color": "red",
            }
          }
        >
          <div
            className="in-result"
          >
            <div
              className="in-result-content"
            >
              <Results
                searchResults={Array []}
              />
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
