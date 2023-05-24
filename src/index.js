import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { extractTokens } from './utils/token'
import Dropdown from './components/dropdown'
import OutsideAlerter from './utils/outside-click'

import {
  Container,
  InputContainer,
  Input,
  Overlay,
  Inline,
  Token
} from './index.styl'

export default class extends Component {
  static propTypes = {
    // eslint-disable-line
    debug: PropTypes.bool,
    data: PropTypes.array,
    nameKey: PropTypes.string,
    nameKeyIncludes: PropTypes.array,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    keyboardHelpers: PropTypes.bool,
    collapseOnBlur: PropTypes.bool,
    footerComponent: PropTypes.func,
    inputProps: PropTypes.object,
    dropdownProps: PropTypes.object,
    selectorProps: PropTypes.object,
    listProps: PropTypes.object,
    alwaysLeft: PropTypes.bool, // Choose if element will be always left
    translations: PropTypes.object
  }

  static defaultProps = {
    // eslint-disable-line
    data: [],
    nameKey: 'name',
    nameKeyIncludes: ['name'],
    defaultValue: '',
    onChange: () => {},
    onSubmit: () => {},
    placeholder: 'Search',
    inputProps: {},
    dropdownProps: {},
    selectorProps: {},
    listProps: {}
  }

  constructor (props) {
    super(props)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onAutosuggest = this.onAutosuggest.bind(this)
    this.onSelectValue = this.onSelectValue.bind(this)
    this.handleEnterKey = this.handleEnterKey.bind(this)
    this.shouldAutosuggest = this.shouldAutosuggest.bind(this)
    this.onClose = this.onClose.bind(this)
    // this.onClickToken = this.onClickToken.bind(this)
    this.extract = this.extract.bind(this)
    this.getCurrentChunk = this.getCurrentChunk.bind(this)
    this.buildOverlay = this.buildOverlay.bind(this)
    this.state = {
      focused: false,
      value: props.defaultValue,
      attributes: props.data,
      overlayComponents: [],
      dropdownClosed: false,
      dropdownOpen: false,
      dropdownValue: null,
      dropdownX: null,
      dropdownY: null
    }
  }

  componentDidMount () {
    this.setState({
      overlayComponents: this.buildOverlay(this.state.value)
    })
  }

  componentDidUpdate (prevProps, prevState) {
    const { value, attributes } = this.state

    if (value !== prevState.value) {
      this.props.onChange(value)
    }

    if (
      value !== prevState.value ||
      attributes.length !== prevState.attributes.length
    ) {
      this.setState(
        {
          overlayComponents: this.buildOverlay(value)
        },
        this.onAutosuggest
      )
    }
  }

  componentWillReceiveProps (nextProps) {
    const newState = {}

    // default value can be empty string (to clear search)
    if (nextProps.defaultValue !== undefined) {
      newState.value = nextProps.defaultValue
    }

    if (nextProps.data) {
      newState.attributes = nextProps.data
    }

    this.setState(newState)
  }

  onFocus (evt) {
    this.setState(
      {
        focused: true
      },
      this.onAutosuggest
    )
  }

  onBlur (evt) {
    this.setState({
      focused: false
    })
  }

  onKeyDown (evt) {
    if (evt.keyCode === 13) {
      this.handleEnterKey(evt)
    }

    // close dropdown if navigating with arrow keys
    if (evt.keyCode === 37 || evt.keyCode === 39) {
      this.onClose()
    }
  }

  onChange (evt) {
    this.setState({
      value: evt.target.value
    })
  }

  onAutosuggest () {
    const { value } = this.state
    const { offsetLeft, offsetTop } = this._marker

    const { chunk } = this.getCurrentChunk(value)
    const suggest = this.shouldAutosuggest(chunk)

    if (suggest) {
      this.setState({
        dropdownClosed: false,
        dropdownOpen: true,
        dropdownValue: chunk,
        dropdownX: offsetLeft,
        dropdownY: offsetTop + 25 // line height + 5 extra padding
      })
    } else {
      this.setState({
        dropdownOpen: false
      })
    }
  }

  onSelectValue (chunk, appended = '') {
    const { value } = this.state
    const { index, indexEnd } = this.getCurrentChunk(value)

    const before = value.slice(0, index)
    const after = value.slice(indexEnd)
    const position = index + chunk.length + appended.length
    // const positionEnd = position + after.length

    this.setState(
      {
        value: `${before}${chunk}${appended}${after}`,
        dropdownClosed: appended !== ':'
      },
      () => {
        // position caret at the end of the inserted value
        this._input.focus()
        this._input.setSelectionRange(position, position)
      }
    )
  }

  handleEnterKey (evt) {
    // whether this input is infocus
    const isFocused = document.activeElement === this._input

    // submit on enter, line break on shift enter
    // dropdown handles enter key globally, so prevent clash
    if (!evt.shiftKey && isFocused && !this.state.dropdownOpen) {
      evt.preventDefault()
      this.props.onSubmit(this.state.value)
    }
  }

  shouldAutosuggest (chunk) {
    const { selectionStart } = this._input
    const { value, focused } = this.state

    // next character is whitespace, closing paren or null
    const nextCharIsEmpty =
      !value.charAt(selectionStart) ||
      /[)\s]/.test(value.charAt(selectionStart))

    // whitespace/negation/paren before and whitespace after caret
    const isNewWord =
      nextCharIsEmpty && /[\s-(]/.test(value.charAt(selectionStart - 1))

    // cursor is at end of the current word
    const atEndOfWord =
      nextCharIsEmpty && /[^)\s]/.test(value.charAt(selectionStart - 1))

    return (
      focused &&
      (!value || isNewWord || (atEndOfWord && !this.state.dropdownClosed))
    )
  }

  onClose (forWord) {
    this.setState({
      dropdownOpen: false,
      // don't reopen if it was closed for current word
      dropdownClosed: forWord || false
    })
  }

  // onClickToken (start, end) {
  //   // move cursor to end of token
  //   this._input.focus()
  //   this._input.setSelectionRange(end, end)
  // }

  extract (value) {
    const { nameKeyIncludes } = this.props
    const { attributes } = this.state

    return extractTokens(value, attributes, nameKeyIncludes)
  }

  getCurrentChunk (value) {
    const { selectionStart } = this._input

    // get location of each token found in value
    const tokens = this.extract(value)

    // find index of the closest previous whitespace
    const prevStr = value.substring(0, selectionStart)
    const prevMatch = prevStr.match(/[^\s]*$/)
    const prevIdx = prevMatch
      ? prevStr.lastIndexOf(prevMatch[prevMatch.length - 1])
      : -1

    // determine correct index for the start of the chunk
    let index = prevIdx
    for (const [start, end] of tokens.reverse()) {
      // token is between whitespace and cursor
      if (selectionStart > end && prevIdx < start) {
        index = end
        break
      }
      // at the end of or inside a token (thats what she said)
      if (selectionStart > start && selectionStart <= end) {
        index = start
        break
      }
      // there is whitespace in the token
      if (prevIdx > start && prevIdx < end) {
        index = end
        break
      }
    }

    // value is result of cursor back to beginning of chunk
    const chunk = value.substring(index, selectionStart)
    const indexEnd = index + chunk.length

    return {
      index,
      indexEnd,
      chunk
    }
  }

  buildTokens (value, relativeToIdx = 0) {
    const chunks = []
    const positions = this.extract(value)

    let currentPosition = 0
    positions.reduce(
      (prev, next) => {
        // const startIdx = next[0] + relativeToIdx
        // const endIdx = next[1] + relativeToIdx

        chunks.push(value.substring(prev[1], next[0]))
        chunks.push(
          <Token
            key={`token-${next[0]}`}
            tokenColor={this.props.inputProps.tokenColor}
          >
            {value.substring(next[0], next[1])}
          </Token>
        )

        currentPosition = next[1]
        return next
      },
      [null, 0]
    )

    chunks.push(value.substring(currentPosition))
    return chunks.filter(Boolean)
  }

  buildOverlay (value) {
    // figure out where we should split the overlay,
    // so we know where to position the dropdown
    const { index } = this.getCurrentChunk(value)

    // everything to the left of the current word/token
    const stuffOnLeft = this.buildTokens(value.substring(0, index))

    // everything to the right of the current word/token
    // need to have default whitespace or dropdown will not find position of caret
    const stuffOnRight = this.buildTokens(value.substring(index) || ' ', index)

    // since it will never split up a token,
    // we can build each side of cursor independently
    return [
      stuffOnLeft,
      <Inline
        key={`after-${index}`}
        style={{ outline: this.props.debug ? '1px solid red' : 'none' }}
        ref={ref => (this._marker = ref)}
      >
        {stuffOnRight}
      </Inline>
    ]
  }

  render () {
    const {
      nameKey,
      className,
      inputProps,
      placeholder,
      keyboardHelpers,
      collapseOnBlur,
      footerComponent,
      dropdownProps,
      selectorProps,
      listProps,
      alwaysLeft,
      translations
    } = this.props

    const {
      value,
      attributes,
      dropdownOpen,
      dropdownValue,
      dropdownX,
      dropdownY,
      overlayComponents
    } = this.state

    const collapsed = !this.state.focused && collapseOnBlur

    return (
      <OutsideAlerter notify={this.onClose}>
        <Container className={className}>
          <InputContainer {...inputProps} onClick={() => this._input.focus()}>
            <Overlay collapsed={collapsed}>{overlayComponents}</Overlay>

            <Input
              autoComplete='off'
              autoCorrect='off'
              autoCapitalize='off'
              spellCheck='false'
              autoFocus={inputProps.autoFocus}
              maxRows={collapsed ? 1 : undefined}
              placeholder={placeholder}
              placeholderColor={inputProps.placeholderColor}
              value={value}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onKeyDown={this.onKeyDown}
              onChange={this.onChange}
              ref={ref => (this._input = ref)}
            />
          </InputContainer>

          {dropdownOpen && (
            <Dropdown
              keyboardHelpers={keyboardHelpers}
              footerComponent={footerComponent}
              attributes={attributes}
              value={dropdownValue}
              nameKey={nameKey}
              onSelect={this.onSelectValue}
              onClose={this.onClose}
              offsetX={alwaysLeft ? 0 : dropdownX}
              offsetY={dropdownY}
              dropdownProps={dropdownProps}
              selectorProps={selectorProps}
              listProps={listProps}
              translations={translations}
            />
          )}
        </Container>
      </OutsideAlerter>
    )
  }
}
