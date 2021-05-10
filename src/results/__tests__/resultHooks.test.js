import { useQueryResults, generateEndpoint } from "../resultHooks";
import { renderHook, act } from "@testing-library/react-hooks";
import SearchProvider from "../../search/SearchProvider";

describe("resultHooks", () => {
  let spyFetch;

  beforeEach(() => {
    spyFetch = jest.spyOn(global, "fetch");
  });

  it("queryResults", async () => {
    const wrapper = ({ children }) => (
      <SearchProvider>{children}</SearchProvider>
    );
    const { result } = renderHook(() => useQueryResults(), {
      wrapper,
    });

    await act(async () => {
      await result.current();
    });

    expect(spyFetch).toBeCalled();
  });

  it("generateEndpoint", () => {
    const result1 = generateEndpoint("finance", "HTTPS", "fina");
    expect(result1).toEqual(
      "https://api.publicapis.org/entries?title=fina&category=finance&https=HTTPS"
    );

    const result2 = generateEndpoint(null, "HTTPS", "fina");
    expect(result2).toEqual(
      "https://api.publicapis.org/entries?title=fina&https=HTTPS"
    );

    const result3 = generateEndpoint("finance", null, "fina");
    expect(result3).toEqual(
      "https://api.publicapis.org/entries?title=fina&category=finance"
    );

    const result4 = generateEndpoint(null, null, null);
    expect(result4).toEqual("https://api.publicapis.org/entries?");
  });
});
