import t,{PureComponent as e,Component as s}from"react";import o from"prop-types";import n from"escape-string-regexp";import i from"@emotion/styled";import{keyframes as r}from"@emotion/react";import{top as a,left as l,color as p,boxShadow as d,borders as h,borderColor as u,borderRadius as c,space as g,width as b,minWidth as m,fontSize as f,fontWeight as y,fontFamily as v,lineHeight as w,letterSpacing as x,maxHeight as k,maxWidth as $,textAlign as C,style as S}from"styled-system";import{css as E}from"@emotion/css";import K from"react-textarea-autosize";function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t},O.apply(this,arguments)}function P(t,e){return new RegExp(n(t||""),"i").test(e||"")}function V(t={}){const e=t.partial?"*":"+";return new RegExp("(?!^|\\(|\\s)*([-]+)?([\\w.$]+)"+(t.partial?"?":"")+":"+(t.partial?"?":"")+"(?!:)([><=]*)"+`(?:(")(.${e}?)(\\*)?"|([^\\s()*"]${e}))`+(t.partial?"?":"")+"(\\*)?(?!\\s|\\)|$)*","g")}function A(t,e=[],s=[]){const o=Array.isArray(t)?t:V({partial:!0}).exec(t);if(!o||!o.length)return{};const i={fullToken:o[0],attributeName:o[2],attributeNameValid:!1,attributeValue:o[5]||o[7],attributeValueValid:!1,prepended:o[1]||"",operator:o[3],negated:o[0].indexOf("-")>-1,quoted:Boolean(o[4]),wildcard:Boolean(o[6]||o[8])};if(e){const t=e.find(t=>{let e=!1;for(const r of s)if(o=i.attributeName,new RegExp(`^${n(t[r]||"")}$`,"i").test(o||"")){e=!0;break}var o;return e});t&&(i.attributeNameValid=!0,i.attributeValueValid=!0,Array.isArray(t.enumerations)&&(i.attributeValueValid=t.enumerations.findIndex(t=>P(i.attributeValue,t))>-1))}return i}let F,D,I,j,T,_,L,H,N,R,B,X=t=>t;const z=r(F||(F=X`
  0% {
    opacity: 0;
    transform: perspective(50em) rotateX(-30deg);
  }
  100% {
    opacity: 1;
    transform: perspective(50em) rotateX(0deg);
  }
`)),W=i("aside")(D||(D=X`
    display: inline-block;
    position: absolute;
    z-index: 10;
    transform-origin: 50% 0;
    animation: ${0} ease-in-out 250ms;
    transition: top 100ms, left 100ms;

    ${0}
    ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
`),z,a,l,p,d,h,u,c,g,b,m,f,y,v,w,x);W.defaultProps={bg:"#555555",boxShadow:"0 4px 10px rgba(0, 0, 0, .25)",color:"#FFFFFF",minWidth:"280px"};const Y=i("section")(I||(I=X`
    padding: 15px;
    text-align: ${0};
    :not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    }
`),t=>t.center?"center":"inherit"),M=i("ul")(j||(j=X`
    list-style-type: none;
    line-height: 20px;
    margin: 10px 0;
    overflow: auto;
    padding-inline-start: 0;

    ${0}
    ${0}
  ${0}
  ${0}
`),g,p,h,k);M.defaultProps={maxHeight:"200px"};const U=i("li")(T||(T=X`
    cursor: pointer;
    border: 1px solid transparent;
    overflow: hidden;
    text-overflow: ellipsis;

    ${0}
    ${0}

  ${0}
  ${0}
  ${0}
`),g,$,t=>t.active&&p,t=>t.active&&h,t=>t.active&&u);U.defaultProps={bg:"#FFFFFF",color:"#000000",p:"3px 15px",maxWidth:"320px"};const G=i(Y)(_||(_=X`
    padding: 15px 0;
`)),q=i("div")(L||(L=X`
    display: inline-block;
    background: ${0};
    font-weight: 500;
    line-height: 18px;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`),t=>t.active?"rgba(255, 255, 255, 0.2)":"none"),J=i(q)(H||(H=X`
    display: block;
    margin-bottom: 5px;
`)),Q=i("div")(N||(N=X`
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    min-width: 20px;
    text-align: center;
    vertical-align: middle;
    padding: 2px 5px;
    margin-right: 5px;
`)),Z=i(Q)(R||(R=X`
    background: none;
    border: 1px solid ${0};
    color: ${0};
    font-size: 8px;
    padding: 0;
    width: ${0};
    height: 18px;
`),t=>t.theme.color,t=>t.theme.color,t=>t.long?"36px":"18px"),tt=i("div")(B||(B=X`
    display: inline-block;
    opacity: 0.5;
    &:not(:last-child) {
        margin-right: 15px;
    }
`));class et extends e{constructor(t){super(t),this.onKeyDown=this.onKeyDown.bind(this),this.handleEnterKey=this.handleEnterKey.bind(this),this.handleEscKey=this.handleEscKey.bind(this),this.handleArrowKeys=this.handleArrowKeys.bind(this),this.adjustListScroll=this.adjustListScroll.bind(this),this.getAttribute=this.getAttribute.bind(this),this.getSuggestions=this.getSuggestions.bind(this),this.getSuggestionAddons=this.getSuggestionAddons.bind(this),this.filterSuggestions=this.filterSuggestions.bind(this),this.acceptSuggestion=this.acceptSuggestion.bind(this),this.getOperators=this.getOperators.bind(this),this.setOperator=this.setOperator.bind(this),this.state={suggestions:[],highlightedIdx:0,selectedIdx:null,prepended:"",operator:"",negated:!1}}componentDidMount(){this.filterSuggestions(this.props.value),this.props.keyboardHelpers&&document.addEventListener("keydown",this.onKeyDown,!1)}componentWillUnmount(){this.props.keyboardHelpers&&document.removeEventListener("keydown",this.onKeyDown,!1)}componentWillReceiveProps(t){this.props.value!==t.value&&this.filterSuggestions(t.value)}componentDidUpdate(){0===this.state.suggestions.length&&this.props.onClose()}onKeyDown(t){switch(t.keyCode){case 9:case 13:this.handleEnterKey(t);break;case 27:this.handleEscKey(t);break;case 38:case 40:this.handleArrowKeys(t,t.keyCode)}}handleEnterKey(t){t.preventDefault(),this.acceptSuggestion()}handleEscKey(t){t.preventDefault(),this.props.onClose(!0)}handleArrowKeys(t,e){t.preventDefault();const{highlightedIdx:s}=this.state,o=40===e,n=this.state.suggestions.length-1,i=null!==s?o?s+1:s-1:o?0:n;this.setState({highlightedIdx:o?i<=n?i:0:i>=0?i:n},this.adjustListScroll)}adjustListScroll(){const{offsetTop:t,clientHeight:e}=this._selected,{scrollTop:s,clientHeight:o}=this._list,n=e,i=o-e,r=t-s;r>i?this._list.scrollTop+=e+(r-i):r<n&&(this._list.scrollTop=t-e+(r-n))}getAttribute(t){if(null!==t&&t>-1)return this.props.attributes[t]}getSuggestions(t){const{nameKey:e,attributes:s}=this.props;return t?t.enumerations||[]:s.map(t=>t[e])}getSuggestionAddons(t,e){const s=[];return t&&(e.wildcard||t.enumerations||!e.attributeValue||"string"!==t.type||s.push(`"${e.attributeValue}"`),e.attributeValue&&"string"===t.type&&(e.quoted&&!t.enumerations?s.push(`"${e.attributeValue}*"`):s.push(`*${e.attributeValue}*`,`${e.attributeValue}*`,`*${e.attributeValue}`))),s}filterSuggestions(t){const{nameKey:e,attributes:s}=this.props,o=A(t),n=o.attributeName&&t.indexOf(":")>-1?s.findIndex(t=>t[e]===o.attributeName):-1,i=this.getAttribute(n),r=this.getSuggestions(i),a=n>-1?o.attributeValue:o.attributeName,l=r.filter(t=>P(a,t)).concat(this.getSuggestionAddons(i,o));this.setState({selectedIdx:n,prepended:o.prepended,operator:o.operator,negated:o.negated,suggestions:l,highlightedIdx:0})}acceptSuggestion(){const{nameKey:t,onSelect:e}=this.props,{suggestions:s,highlightedIdx:o,selectedIdx:n,prepended:i,operator:r}=this.state,a=this.getAttribute(n),l=s[o];e(`${i}${a?`${a[t]}:${r}${l}`:l}`,-1===n?":":"")}getOperators(){const t=[],e=this.getAttribute(this.state.selectedIdx);if(e)switch(e.type){case"int":case"float":t.push({name:"GT",char:">",active:">"===this.state.operator}),t.push({name:"LT",char:"<",active:"<"===this.state.operator}),t.push({name:"GTE",char:">=",active:">="===this.state.operator}),t.push({name:"LTE",char:"<=",active:"<="===this.state.operator})}return t}setOperator(t){const{value:e}=this.props,{negated:s,operator:o}=this.state;if("-"===t){const t=e.replace(/^-?(.*)/,(s?"":"-")+"$1");this.props.onSelect(t)}else{const s=A(e);s.operator=o===t?"":t,this.props.onSelect(function(t){const{prepended:e="",attributeName:s="",attributeValue:o="",operator:n=""}=t||{};return`${e}${s}:${n}${o}`}(s))}}render(){const e=this.props.footerComponent;/*#__PURE__*/return t.createElement(W,O({left:this.props.offsetX||0,top:this.props.offsetY||0},this.props.dropdownProps,{"data-testid":"dropdown"}),/*#__PURE__*/t.createElement(M,O({},this.props.listProps,{ref:t=>this._list=t}),this.state.suggestions.map((e,s)=>{const o=this.state.highlightedIdx===s;/*#__PURE__*/return t.createElement(U,O({key:s,active:o,onClick:this.acceptSuggestion,onMouseOver:()=>this.setState({highlightedIdx:s}),ref:o?t=>this._selected=t:void 0},this.props.selectorProps),e)})),/*#__PURE__*/t.createElement(G,null,/*#__PURE__*/t.createElement(J,{active:this.state.negated,onClick:()=>this.setOperator("-")},/*#__PURE__*/t.createElement(Q,null,"-"),this.props.translations&&this.props.translations.negate?this.props.translations.negate:"NEGATE"),this.getOperators().map((e,s)=>/*#__PURE__*/t.createElement(q,{key:s,active:e.active,onClick:()=>this.setOperator(e.char)},/*#__PURE__*/t.createElement(Q,null,e.char),e.name))),this.props.keyboardHelpers&&/*#__PURE__*/t.createElement(Y,{center:!0},/*#__PURE__*/t.createElement(tt,null,/*#__PURE__*/t.createElement(Z,null,"▲"),/*#__PURE__*/t.createElement(Z,null,"▼"),this.props.translations&&this.props.translations.navigate?this.props.translations.navigate:"to navigate"),/*#__PURE__*/t.createElement(tt,null,/*#__PURE__*/t.createElement(Z,{long:!0},"↵"),this.props.translations&&this.props.translations.select?this.props.translations.select:"to select")),/*#__PURE__*/t.createElement(e,null))}}et.propTypes={value:o.string,nameKey:o.string,attributes:o.array,onSelect:o.func,onClose:o.func,offsetX:o.number,offsetY:o.number,keyboardHelpers:o.bool,footerComponent:o.func,dropdownProps:o.object,selectorProps:o.object,listProps:o.object,translations:o.object},et.defaultProps={value:"",nameKey:"name",onSelect:()=>{},onClose:()=>{},keyboardHelpers:!0,footerComponent:()=>null};class st extends s{constructor(e){super(e),this.wrapperRef=/*#__PURE__*/t.createRef(),this.handleClickOutside=this.handleClickOutside.bind(this)}componentDidMount(){document.addEventListener("mousedown",this.handleClickOutside)}componentWillUnmount(){document.removeEventListener("mousedown",this.handleClickOutside)}handleClickOutside(t){this.wrapperRef&&!this.wrapperRef.current.contains(t.target)&&this.props.notify&&this.props.notify()}render(){/*#__PURE__*/return t.createElement("div",{ref:this.wrapperRef},this.props.children)}}let ot,nt,it,rt,at,lt,pt,dt=t=>t;const ht=i("div")(ot||(ot=dt`
    position: relative;
    width: 100%;
`)),ut=i("div")(nt||(nt=dt`
    position: relative;
    ${0}
    ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
`),g,b,h,u,c,d,p,f,y,v,w,x,C);ut.defaultProps={bg:"#FFFFFF",color:"#505050",border:"1px solid rgba(0, 0, 0, .1)",fontFamily:"monospace"};const ct=K,gt=S({prop:"placeholderColor",cssProperty:"color",key:"colors"}),bt=i(ct)(it||(it=dt`
    display: block;
    background: none;
    border: none;
    outline: none;
    resize: none;
    font: inherit;
    width: 100%;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    /* we only want overlay text visible */
    /* need to do this so caret still shows up */
    color: inherit;
    -webkit-text-fill-color: transparent;
    ::placeholder {
        ${0}
        -webkit-text-fill-color: initial;
    }
`),gt);bt.defaultProps={lineHeight:"1.1rem",placeholderColor:"#D7D7D7"};const mt=i("div")(rt||(rt=dt`
    display: block;
    background: none;
    border: none;
    outline: none;
    resize: none;
    font: inherit;
    max-width: 100%;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    padding: inherit;

    ${0}

    /* reversed from Input above */
  -webkit-text-fill-color: initial;
`),t=>t.collapsed&&E(at||(at=dt`
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        `))),ft=i("span")(lt||(lt=dt`
    font: inherit;
`)),yt=S({prop:"tokenColor",cssProperty:"color",key:"colors"}),vt=i(ft)(pt||(pt=dt`
    position: relative;
    cursor: pointer;
    font-weight: 500;

    ${0}
`),yt);vt.defaultProps={tokenColor:"#2384FF"};class wt extends s{constructor(t){super(t),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onChange=this.onChange.bind(this),this.onAutosuggest=this.onAutosuggest.bind(this),this.onSelectValue=this.onSelectValue.bind(this),this.handleEnterKey=this.handleEnterKey.bind(this),this.shouldAutosuggest=this.shouldAutosuggest.bind(this),this.onClose=this.onClose.bind(this),this.extract=this.extract.bind(this),this.getCurrentChunk=this.getCurrentChunk.bind(this),this.buildOverlay=this.buildOverlay.bind(this),this.state={focused:!1,value:t.defaultValue,attributes:t.data,overlayComponents:[],dropdownClosed:!1,dropdownOpen:!1,dropdownValue:null,dropdownX:null,dropdownY:null}}componentDidMount(){this.setState({overlayComponents:this.buildOverlay(this.state.value)})}componentDidUpdate(t,e){const{value:s,attributes:o}=this.state;s!==e.value&&this.props.onChange(s),s===e.value&&o.length===e.attributes.length||this.setState({overlayComponents:this.buildOverlay(s)},this.onAutosuggest)}componentWillReceiveProps(t){const e={};void 0!==t.defaultValue&&(e.value=t.defaultValue),t.data&&(e.attributes=t.data),this.setState(e)}onFocus(t){this.setState({focused:!0},this.onAutosuggest)}onBlur(t){this.setState({focused:!1})}onKeyDown(t){13===t.keyCode&&this.handleEnterKey(t),37!==t.keyCode&&39!==t.keyCode||this.onClose()}onChange(t){this.setState({value:t.target.value})}onAutosuggest(){const{value:t}=this.state,{offsetLeft:e,offsetTop:s}=this._marker,{chunk:o}=this.getCurrentChunk(t),n=this.shouldAutosuggest(o);this.setState(n?{dropdownClosed:!1,dropdownOpen:!0,dropdownValue:o,dropdownX:e,dropdownY:s+25}:{dropdownOpen:!1})}onSelectValue(t,e=""){const{value:s}=this.state,{index:o,indexEnd:n}=this.getCurrentChunk(s),i=s.slice(0,o),r=s.slice(n),a=o+t.length+e.length;this.setState({value:`${i}${t}${e}${r}`,dropdownClosed:":"!==e},()=>{this._input.focus(),this._input.setSelectionRange(a,a)})}handleEnterKey(t){const e=document.activeElement===this._input;t.shiftKey||!e||this.state.dropdownOpen||(t.preventDefault(),this.props.onSubmit(this.state.value),t.target.blur())}shouldAutosuggest(t){const{selectionStart:e}=this._input,{value:s,focused:o}=this.state,n=!s.charAt(e)||/[)\s]/.test(s.charAt(e)),i=n&&/[\s-(]/.test(s.charAt(e-1)),r=n&&/[^)\s]/.test(s.charAt(e-1));return o&&(!s||i||r&&!this.state.dropdownClosed)}onClose(t){this.setState({dropdownOpen:!1,dropdownClosed:t||!1})}extract(t){const{nameKeyIncludes:e}=this.props,{attributes:s}=this.state;return function(t,e,s){const o=[],n=V();let i;for(;null!==(i=n.exec(t));){if(e){const t=A(i,e,s);if(!t.attributeNameValid||!t.attributeValueValid)continue}o.push([i.index,n.lastIndex])}return o}(t,s,e)}getCurrentChunk(t){const{selectionStart:e}=this._input,s=this.extract(t),o=t.substring(0,e),n=o.match(/[^\s]*$/),i=n?o.lastIndexOf(n[n.length-1]):-1;let r=i;for(const[t,o]of s.reverse()){if(e>o&&i<t){r=o;break}if(e>t&&e<=o){r=t;break}if(i>t&&i<o){r=o;break}}const a=t.substring(r,e);return{index:r,indexEnd:r+a.length,chunk:a}}buildTokens(e,s=0){const o=[],n=this.extract(e);let i=0;return n.reduce((s,n)=>(o.push(e.substring(s[1],n[0])),o.push(/*#__PURE__*/t.createElement(vt,{key:`token-${n[0]}`,tokenColor:this.props.inputProps.tokenColor},e.substring(n[0],n[1]))),i=n[1],n),[null,0]),o.push(e.substring(i)),o.filter(Boolean)}buildOverlay(e){const{index:s}=this.getCurrentChunk(e),o=this.buildTokens(e.substring(0,s)),n=this.buildTokens(e.substring(s)||" ",s);return[o,/*#__PURE__*/t.createElement(ft,{key:`after-${s}`,style:{outline:this.props.debug?"1px solid red":"none"},ref:t=>this._marker=t},n)]}render(){const{nameKey:e,className:s,inputProps:o,placeholder:n,keyboardHelpers:i,collapseOnBlur:r,footerComponent:a,dropdownProps:l,selectorProps:p,listProps:d,alwaysLeft:h,translations:u}=this.props,{value:c,attributes:g,dropdownOpen:b,dropdownValue:m,dropdownX:f,dropdownY:y,overlayComponents:v}=this.state,w=!this.state.focused&&r;/*#__PURE__*/return t.createElement(st,{notify:this.onClose},/*#__PURE__*/t.createElement(ht,{className:s},/*#__PURE__*/t.createElement(ut,O({},o,{onClick:()=>this._input.focus()}),/*#__PURE__*/t.createElement(mt,{collapsed:w},v),/*#__PURE__*/t.createElement(bt,{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:o.autoFocus,maxRows:w?1:void 0,placeholder:n,placeholderColor:o.placeholderColor,value:c,onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onChange:this.onChange,ref:t=>this._input=t})),b&&/*#__PURE__*/t.createElement(et,{keyboardHelpers:i,footerComponent:a,attributes:g,value:m,nameKey:e,onSelect:this.onSelectValue,onClose:this.onClose,offsetX:h?0:f,offsetY:y,dropdownProps:l,selectorProps:p,listProps:d,translations:u})))}}wt.propTypes={debug:o.bool,data:o.array,nameKey:o.string,nameKeyIncludes:o.array,defaultValue:o.string,placeholder:o.string,onChange:o.func,onSubmit:o.func,keyboardHelpers:o.bool,collapseOnBlur:o.bool,footerComponent:o.func,inputProps:o.object,dropdownProps:o.object,selectorProps:o.object,listProps:o.object,alwaysLeft:o.bool,translations:o.object},wt.defaultProps={data:[],nameKey:"name",nameKeyIncludes:["name"],defaultValue:"",onChange:()=>{},onSubmit:()=>{},placeholder:"Search",inputProps:{},dropdownProps:{},selectorProps:{},listProps:{}};export{wt as QueryAssist};
//# sourceMappingURL=lib.modern.mjs.map
