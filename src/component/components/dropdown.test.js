import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { mockAttributes } from "../../test-helpers";
import Dropdown from "./dropdown";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

const myCache = createCache({
    key: "my-prefix-key-drop",
});

jest.setTimeout(15 * 1000);

test("basic filtering", () => {
    const { rerender } = render(
        <CacheProvider value={myCache}>
            <Dropdown attributes={mockAttributes} />
        </CacheProvider>
    );

    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.getByText(/level/i)).toBeInTheDocument();
    expect(screen.getByText(/http_response/i)).toBeInTheDocument();
    expect(screen.getByText(/other/i)).toBeInTheDocument();

    rerender(
        <CacheProvider value={myCache}>
            <Dropdown value={"lev"} attributes={mockAttributes} />
        </CacheProvider>
    );

    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.getByText(/level/i)).toBeInTheDocument();
    expect(screen.queryByText(/http_response/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/other/i)).not.toBeInTheDocument();
});

test("no more suggestions", () => {
    render(
        <CacheProvider value={myCache}>
            <Dropdown value={"levv"} attributes={mockAttributes} />
        </CacheProvider>
    );

    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.queryByRole("list")).toBeEmptyDOMElement();
});

test("shows enumerations for selected attribute", () => {
    render(
        <CacheProvider value={myCache}>
            <Dropdown value={"level:"} attributes={mockAttributes} />
        </CacheProvider>
    );

    // screen.debug(screen.getByTestId("dropdown"))
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.getByText(/info/i)).toBeInTheDocument();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
});

test("adds wildcard suggestion with enums", () => {
    render(
        <CacheProvider value={myCache}>
            <Dropdown value={"level:i"} attributes={mockAttributes} />
        </CacheProvider>
    );

    // screen.debug(screen.getByTestId("dropdown"))
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.getByText(/info/i)).toBeInTheDocument();
    expect(screen.getByText("i*")).toBeInTheDocument();
    expect(screen.getByText("*i")).toBeInTheDocument();
    expect(screen.getByText("*i*")).toBeInTheDocument();

    // t.is(wrapper.state("suggestions").length, 2);
    // t.is(wrapper.state("suggestions")[1], "i*");
});

test("addon suggestions when no enumerations", () => {
    const { rerender } = render(
        <CacheProvider value={myCache}>
            <Dropdown value={"other:"} attributes={mockAttributes} />
        </CacheProvider>
    );
    // screen.debug(screen.getByTestId("dropdown"))

    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.queryByRole("list")).toBeEmptyDOMElement();

    rerender(
        <CacheProvider value={myCache}>
            <Dropdown value={"other:foo"} attributes={mockAttributes} />
        </CacheProvider>
    );

    // screen.debug(screen.getByTestId("dropdown"))
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.getByText('"foo"')).toBeInTheDocument();
    expect(screen.getByText("foo*")).toBeInTheDocument();
    expect(screen.getByText("*foo")).toBeInTheDocument();
    expect(screen.getByText("*foo*")).toBeInTheDocument();
});

test("suggests wildcard insite quotes", () => {
    const { rerender } = render(
        <CacheProvider value={myCache}>
            <Dropdown value={'other:"foo b"'} attributes={mockAttributes} />
        </CacheProvider>
    );
    // screen.debug(screen.getByTestId("dropdown"));

    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.getByText('"foo b"')).toBeInTheDocument();
    expect(screen.getByText('"foo b*"')).toBeInTheDocument();

    rerender(
        <CacheProvider value={myCache}>
            <Dropdown value={'other:"foo b*"'} attributes={mockAttributes} />
        </CacheProvider>
    );

    // screen.debug(screen.getByTestId("dropdown"));
    expect(screen.getByText('"foo b*"')).toBeInTheDocument();
});

// test("detects negation and operator", () => {
//     render(
//         <CacheProvider value={myCache}>
//             <Dropdown value={"-response:>=400"} attributes={mockAttributes} />
//         </CacheProvider>
//     );
//     screen.debug(screen.getByTestId("dropdown"));

//     //TODO nothing changes in the screen currently
// });

// test("navigates with keyboard",async () => {
//     const user = userEvent.setup()
//     render(
//         <CacheProvider value={myCache}>
//             <Dropdown  attributes={mockAttributes} />
//         </CacheProvider>
//     );

//     screen.debug(screen.getByTestId("dropdown"));
//     await user.keyboard('[Key40]')
//     screen.debug(screen.getByTestId("dropdown"));
//     await user.keyboard('[Key38]')

//     //TODO nothing changes in the screen currently
// });

test("shows correct operators for type", () => {
    render(
        <CacheProvider value={myCache}>
            <Dropdown value={"http_response:"} attributes={mockAttributes} />
        </CacheProvider>
    );
    // screen.debug(screen.getByTestId("dropdown"));
    expect(screen.getByText("GT")).toBeInTheDocument();
    expect(screen.getByText("LT")).toBeInTheDocument();
    expect(screen.getByText("GTE")).toBeInTheDocument();
    expect(screen.getByText("LTE")).toBeInTheDocument();
});

test("suggestion is selected for attribute/value", async () => {
    const selectMock = jest.fn(() => {});
    const user = userEvent.setup()
    render(
        <CacheProvider value={myCache}>
            <Dropdown value={"le"} attributes={mockAttributes} onSelect={selectMock} />
        </CacheProvider>
    );
    screen.debug(screen.getByTestId("dropdown"));
    expect(selectMock).not.toBeCalled();
    await user.keyboard('[Key40]')
    await user.keyboard('[Key13]')
    
    expect(selectMock).toBeCalled();
    //     t.true(onSelect.firstCall.calledWith("level", ":"));
    //     wrapper.setProps({
    //         children: drop("level:", t),
    //     });
    //     // selecting value
    //     wrapper.simulateKey(13);
    //     t.true(onSelect.secondCall.calledWith("level:info"));
});

// test("negation is toggled", (t) => {
//     const { wrapper, onSelect } = t.context;
//     // has no value yet
//     wrapper.instance().setOperator("-");
//     t.true(onSelect.firstCall.calledWith("-"));
//     // has a value, make sure it prepends
//     wrapper.setProps({
//         children: drop("level", t),
//     });
//     wrapper.instance().setOperator("-");
//     t.true(onSelect.secondCall.calledWith("-level"));
// });

// test("number operator is toggled", (t) => {
//     const { wrapper, onSelect } = t.context;
//     // toggle on
//     wrapper.setProps({
//         children: drop("http_response:400", t),
//     });
//     wrapper.instance().setOperator(">=");
//     t.true(onSelect.firstCall.calledWith("http_response:>=400"));
//     // toggle off
//     wrapper.setProps({
//         children: drop("http_response:>=400", t),
//     });
//     wrapper.instance().setOperator(">=");
//     t.true(onSelect.secondCall.calledWith("http_response:400"));
// });
