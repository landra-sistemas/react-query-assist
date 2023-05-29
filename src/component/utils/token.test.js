import * as token from "./token";

test("tokenRegex", () => {
    expect(token.tokenRegex().test("foo:bar")).toBe(true);
    expect(token.tokenRegex().test("-foo:bar")).toBe(true);
    expect(token.tokenRegex().test("foo:bar_baz.qux")).toBe(true);
    expect(token.tokenRegex().test("foo_bar.baz:qux")).toBe(true);
    expect(token.tokenRegex().test("foo_bar.baz:<=1")).toBe(true);
    expect(token.tokenRegex().test('foo:"bar"')).toBe(true);
    expect(token.tokenRegex().test('foo:"bar baz"')).toBe(true);
    expect(token.tokenRegex().test('foo:"bar baz qux"')).toBe(true);
    expect(token.tokenRegex().test('foo:" "')).toBe(true);
    expect(token.tokenRegex().test("foo:>1")).toBe(true);
    expect(token.tokenRegex().test("foo:>=1")).toBe(true);
    expect(token.tokenRegex().test("foo:bar*")).toBe(true);
    expect(token.tokenRegex().test('foo:"bar*"')).toBe(true);
    expect(token.tokenRegex().test('foo:"bar baz*"')).toBe(true);
    expect(token.tokenRegex().test('foo:" "')).toBe(true);
    expect(token.tokenRegex().test("foo:bar:baz")).toBe(true);
    expect(token.tokenRegex().test("$foo:bar")).toBe(true);
    expect(token.tokenRegex().test("foo")).toBe(false);
    expect(token.tokenRegex().test("foo:")).toBe(false);
    expect(token.tokenRegex().test("foo:*")).toBe(false);
    expect(token.tokenRegex().test("foo::")).toBe(false);
    expect(token.tokenRegex().test('foo:""')).toBe(false);
    // t.false(token.tokenRegex().test('%foo:bar'))
});

test("parseToken", () => {
    expect(token.parseToken([])).toEqual({});
    expect(token.parseToken("foo:bar").fullToken).toEqual("foo:bar");
    expect(token.parseToken("foo:bar").attributeName).toEqual("foo");
    expect(token.parseToken("foo:bar*").wildcard).toBe(true);
    expect(token.parseToken('foo:"bar*"').wildcard).toBe(true);
    expect(token.parseToken('foo:"bar baz*"').attributeValue).toEqual("bar baz");
    expect(token.parseToken("foo:bar:baz:qux").attributeValue).toEqual("bar:baz:qux");
    expect(token.parseToken("foo:bar", [{ name: "foo" }], ["name"]).attributeNameValid).toBe(true);
    expect(token.parseToken("fooo:bar", [{ name: "foo" }], ["name"]).attributeNameValid).toBe(false);
    expect(token.parseToken('-foo_bar.baz:>="qux"')).toEqual({
        fullToken: '-foo_bar.baz:>="qux"',
        attributeName: "foo_bar.baz",
        attributeNameValid: false,
        attributeValue: "qux",
        attributeValueValid: false,
        prepended: "-",
        operator: ">=",
        negated: true,
        quoted: true,
        wildcard: false,
    });
});

test("serializeToken", () => {
    expect(
        token.serializeToken({
            attributeName: "foo",
            attributeValue: "bar",
            prepended: "-",
            operator: ">=",
        })
    ).toEqual("-foo:>=bar");
});

test("extractTokens", () => {
    expect(token.extractTokens("http.method:PUT (level:error OR level:debug)")).toEqual([
        [0, 15],
        [17, 28],
        [32, 43],
    ]);
    expect(
        token.extractTokens(
            `keyword1 (level:error AND heroku.source:"foo bar") keyword2 http.method:POST\n\t(-level:info OR http_response.status:>=400)\nkeyword3 invalid:token heroku.dyno_id:abc*`
        )
    ).toEqual([
        [10, 21],
        [26, 49],
        [60, 76],
        [79, 90],
        [94, 120],
        [131, 144],
        [145, 164],
    ]);
    expect(
        token.extractTokens("level:debug (foo:bar OR level:critical) level:foobar", [{ name: "level", enumerations: ["debug", "critical"] }], ["name"])
    ).toEqual([
        [0, 11],
        [24, 38],
    ]);
});
