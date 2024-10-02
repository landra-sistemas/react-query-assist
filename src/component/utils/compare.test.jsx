import * as compare from "./compare";

test("compares", () => {
    expect(compare.compare()).toBe(true);
    expect(compare.compare("foobar", "foobar")).toBe(true);
    expect(compare.compare("foobar", "FOOBAR")).toBe(true);
    expect(compare.compare("foo", "FOOBAR")).toBe(false);
});
test("compareFuzzy", () => {
    expect(compare.compareFuzzy()).toBe(true);
    expect(compare.compareFuzzy("oob", "Foobar")).toBe(true);
    expect(compare.compareFuzzy("foo", "Foobar")).toBe(true);
    expect(compare.compareFuzzy("foobar", "Foobar")).toBe(true);
    expect(compare.compareFuzzy("boo", "Foobar")).toBe(false);
});