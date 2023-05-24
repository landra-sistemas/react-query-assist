# React Query Assist

> This fork has the following improvements:
>
> - React 17 support
> - Updated emotion to latest
> - Translatable static strings

A smart search bar for React that comes with built-in autocomplete and token visualization.

![demo animation][demo]

<a name="token"></a>

#### What is a token?

A token is a key-value in a search query that contains an attribute and a value separated by a colon. e.g. `some_attribute:some_enumeration`

## Getting Started

```bash
$ npm install -S react-query-assist emotion react-emotion
```

> `emotion` is a peer dependency of this library to allow for easy custom styling.

```javascript
import QueryAssist from "react-query-assist";

const data = [
  {
    name: "some_attribute",
    type: "string",
    enumerations: ["enum1", "enum2", "enum3" /* ... */],
  },
];

export default function () {
  return <QueryAssist data={data} onSubmit={console.log} />;
}
```

<a name="autocomplete"></a>

## Autocomplete Data

The [data prop](#data) should have the full list of autocomplete values. The data structure should be an array of attributes, and each attribute should have a name, type and enumerations of available values:

```
[
  {
    name: String,
    type: String,
    enumerations: Array or null
  }
]
```

- `name` The value of the attribute in the [token](#token)
- `type` The data type of the enumerations (this determines available operators)
- `enumerations` A list of available attribute values in the [token](#token)

#### Wildcards and quoted values

If the attribute type is a string, there are two additional autocomplete values that may be suggested:

- An appended wildcard will be suggested if the value is not blank
- Wrapping the value in quotes will be suggested if there are no enumerations for the attribute

#### When will the dropdown open?

The autocomplete dropdown will automatically open when it detects a new word is being typed or an existing token is being edited. _Note: Tokens are only valid if the attribute and value match an attribute and enumeration in the autocomplete data._

## Operators

Each token in the query can have a number of operators, depending on the data type of the enumerations. They will change based on the `type` of the active attribute. The operator buttons in the dropdown will automatically update as you type, but they can also be clicked to toggle/update the value.

#### Available to all tokens

- `NEGATE` `-`

#### Available to `int` or `float` tokens

- `GT` `>`
- `LT` `<`
- `GTE` `>=`
- `LTE` `<=`

<a name="themes"></a>

## Themes

The default styling is intentionally neutral so you can customize the look based on your own style guide. You can add custom styling to each specific element by using the [inputProps](#inputProps), [dropdownProps](#dropdownProps), [selectorProps](#selectorProps) and [listProps](#listProps) props. These objects will be merged into the props of each component. See the documentation for [styled-system](https://github.com/jxnblk/styled-system) on how to customize styles with props.

##### Input Prop Extras

A few extra props are accepted for further styling on `inputProps`:

- `placeholderColor` The placeholder text color for the input field
- `tokenColor` The highlight color of the valid tokens

## Keyboard

By default, [keyboard helpers](#keyboardHelpers) for the dropdown are enabled. Meaning when the dropdown is open, pressing the following keys will result in action:

- `up`/`down` Will navigate through the autocomplete values
- `enter` Will select the currently highlighted value and insert into the query
- `escape` Will close the dropdown

## Props

| Prop Name                                       | Prop Type | Description                                                                                                                                             | Default Value |
| ----------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| <a name="data"></a>`data`                       | object    | Should return an array with the [autocomplete data](#autocomplete).                                                                                     | -             |
| `onChange`                                      | function  | Called with the updated value when the input changes.                                                                                                   | -             |
| `onSubmit`                                      | function  | Called with the final value of the query when the enter key is pressed. _Pressing enter will submit the query, but shift+enter will create a new line._ | -             |
| `defaultValue`                                  | string    | The default value to pass to the input component. Will parse this value when mounted for any existing tokens.                                           | -             |
| `nameKey`                                       | string    | The key to use for the attribute name in the data object.                                                                                               | `name`        |
| `nameKeyIncludes`                               | array     | Keys to look at when determining a valid attribute name (e.g. if you want to display short names, but keep long names valid.)                           | `['name']`    |
| `placeholder`                                   | string    | The placeholder text to use for the input field.                                                                                                        | `Search`      |
| `collapseOnBlur`                                | boolean   | The input field automatically expands to fit the text, but if this is `true`, will collapse to one line when it is not in focus.                        | -             |
| <a name="keyboardHelpers"></a>`keyboardHelpers` | boolean   | Whether to enable the keyboard helpers for the dropdown.                                                                                                | `true`        |
| <a name="inputProps"></a>`inputProps`           | object    | The props to use for the input component. See the [themes](#themes) section.                                                                            | -             |
| <a name="dropdownProps"></a>`dropdownProps`     | object    | The props to use for the dropdown component. See the [themes](#themes) section.                                                                         | -             |
| <a name="selectorProps"></a>`selectorProps`     | object    | The props to use for the dropdown selector component. See the [themes](#themes) section.                                                                | -             |
| <a name="listProps"></a>`listProps`             | object    | The props to use for the dropdown list component. See the [themes](#themes) section.                                                                    | -             |
| `footerComponent`                               | function  | Optionally append a footer component to the dropdown. Useful for adding a link to search documentation, etc.                                            | -             |
| `debug`                                         | boolean   | Enables styling useful for debugging.                                                                                                                   | `false`       |
| `translations`                                  | object    | Object to translate the NEGATE and other static strings: {negate: "", navigate: "", select: ""}                                                         | undefined     |

[demo]: demo.gif
