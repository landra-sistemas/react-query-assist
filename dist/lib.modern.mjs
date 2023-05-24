import t,{PureComponent as e,Component as s}from"react";import o from"prop-types";import i from"escape-string-regexp";import n from"@emotion/styled";import{keyframes as r}from"@emotion/react";import{top as a,left as l,color as p,boxShadow as d,borders as h,borderColor as u,borderRadius as c,space as g,width as b,minWidth as f,fontSize as m,fontWeight as y,fontFamily as v,lineHeight as w,letterSpacing as x,maxHeight as $,maxWidth as C,textAlign as k,style as S}from"styled-system";import{jsxs as K,jsx as O}from"react/jsx-runtime";import{css as P}from"@emotion/css";import V from"react-textarea-autosize";function A(){return A=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t},A.apply(this,arguments)}function F(t,e){return new RegExp(i(t||""),"i").test(e||"")}function E(t={}){const e=t.partial?"*":"+";return new RegExp("(?!^|\\(|\\s)*([-]+)?([\\w.$]+)"+(t.partial?"?":"")+":"+(t.partial?"?":"")+"(?!:)([><=]*)"+`(?:(")(.${e}?)(\\*)?"|([^\\s()*"]${e}))`+(t.partial?"?":"")+"(\\*)?(?!\\s|\\)|$)*","g")}function D(t,e=[],s=[]){const o=Array.isArray(t)?t:E({partial:!0}).exec(t);if(!o||!o.length)return{};const n={fullToken:o[0],attributeName:o[2],attributeNameValid:!1,attributeValue:o[5]||o[7],attributeValueValid:!1,prepended:o[1]||"",operator:o[3],negated:o[0].indexOf("-")>-1,quoted:Boolean(o[4]),wildcard:Boolean(o[6]||o[8])};if(e){const t=e.find(t=>{let e=!1;for(const r of s)if(o=n.attributeName,new RegExp(`^${i(t[r]||"")}$`,"i").test(o||"")){e=!0;break}var o;return e});t&&(n.attributeNameValid=!0,n.attributeValueValid=!0,Array.isArray(t.enumerations)&&(n.attributeValueValid=t.enumerations.findIndex(t=>F(n.attributeValue,t))>-1))}return n}let I,j,T,_,L,H,N,R,B,X,z,W=t=>t;const Y=r(I||(I=W`
  0% {
    opacity: 0;
    transform: perspective(50em) rotateX(-30deg);
  }
  100% {
    opacity: 1;
    transform: perspective(50em) rotateX(0deg);
  }
`)),M=n("aside")(j||(j=W`
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
`),Y,a,l,p,d,h,u,c,g,b,f,m,y,v,w,x);M.defaultProps={bg:"#555555",boxShadow:"0 4px 10px rgba(0, 0, 0, .25)",color:"#FFFFFF",minWidth:"280px"};const U=n("section")(T||(T=W`
    padding: 15px;
    text-align: ${0};
    :not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    }
`),t=>t.center?"center":"inherit"),G=n("ul")(_||(_=W`
    list-style-type: none;
    line-height: 20px;
    margin: 10px 0;
    overflow: auto;
    padding-inline-start: 0;

    ${0}
    ${0}
  ${0}
  ${0}
`),g,p,h,$);G.defaultProps={maxHeight:"200px"};const q=n("li")(L||(L=W`
    cursor: pointer;
    border: 1px solid transparent;
    overflow: hidden;
    text-overflow: ellipsis;

    ${0}
    ${0}

  ${0}
  ${0}
  ${0}
`),g,C,t=>t.active&&p,t=>t.active&&h,t=>t.active&&u);q.defaultProps={bg:"#FFFFFF",color:"#000000",p:"3px 15px",maxWidth:"320px"};const J=n(U)(H||(H=W`
    padding: 15px 0;
`)),Q=n("div")(N||(N=W`
    display: inline-block;
    background: ${0};
    font-weight: 500;
    line-height: 18px;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`),t=>t.active?"rgba(255, 255, 255, 0.2)":"none"),Z=n(Q)(R||(R=W`
    display: block;
    margin-bottom: 5px;
`)),tt=n("div")(B||(B=W`
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
`)),et=n(tt)(X||(X=W`
    background: none;
    border: 1px solid ${0};
    color: ${0};
    font-size: 8px;
    padding: 0;
    width: ${0};
    height: 18px;
`),t=>t.theme.color,t=>t.theme.color,t=>t.long?"36px":"18px"),st=n("div")(z||(z=W`
    display: inline-block;
    opacity: 0.5;
    &:not(:last-child) {
        margin-right: 15px;
    }
`));class ot extends e{constructor(t){super(t),this.onKeyDown=this.onKeyDown.bind(this),this.handleEnterKey=this.handleEnterKey.bind(this),this.handleEscKey=this.handleEscKey.bind(this),this.handleArrowKeys=this.handleArrowKeys.bind(this),this.adjustListScroll=this.adjustListScroll.bind(this),this.getAttribute=this.getAttribute.bind(this),this.getSuggestions=this.getSuggestions.bind(this),this.getSuggestionAddons=this.getSuggestionAddons.bind(this),this.filterSuggestions=this.filterSuggestions.bind(this),this.acceptSuggestion=this.acceptSuggestion.bind(this),this.getOperators=this.getOperators.bind(this),this.setOperator=this.setOperator.bind(this),this.state={suggestions:[],highlightedIdx:0,selectedIdx:null,prepended:"",operator:"",negated:!1}}componentDidMount(){this.filterSuggestions(this.props.value),this.props.keyboardHelpers&&document.addEventListener("keydown",this.onKeyDown,!1)}componentWillUnmount(){this.props.keyboardHelpers&&document.removeEventListener("keydown",this.onKeyDown,!1)}componentWillReceiveProps(t){this.props.value!==t.value&&this.filterSuggestions(t.value)}componentDidUpdate(){0===this.state.suggestions.length&&this.props.onClose()}onKeyDown(t){switch(t.keyCode){case 9:case 13:this.handleEnterKey(t);break;case 27:this.handleEscKey(t);break;case 38:case 40:this.handleArrowKeys(t,t.keyCode)}}handleEnterKey(t){t.preventDefault(),this.acceptSuggestion()}handleEscKey(t){t.preventDefault(),this.props.onClose(!0)}handleArrowKeys(t,e){t.preventDefault();const{highlightedIdx:s}=this.state,o=40===e,i=this.state.suggestions.length-1,n=null!==s?o?s+1:s-1:o?0:i;this.setState({highlightedIdx:o?n<=i?n:0:n>=0?n:i},this.adjustListScroll)}adjustListScroll(){const{offsetTop:t,clientHeight:e}=this._selected,{scrollTop:s,clientHeight:o}=this._list,i=e,n=o-e,r=t-s;r>n?this._list.scrollTop+=e+(r-n):r<i&&(this._list.scrollTop=t-e+(r-i))}getAttribute(t){if(null!==t&&t>-1)return this.props.attributes[t]}getSuggestions(t){const{nameKey:e,attributes:s}=this.props;return t?t.enumerations||[]:s.map(t=>t[e])}getSuggestionAddons(t,e){const s=[];return t&&(e.wildcard||t.enumerations||!e.attributeValue||"string"!==t.type||s.push(`"${e.attributeValue}"`),e.attributeValue&&"string"===t.type&&(e.quoted&&!t.enumerations?s.push(`"${e.attributeValue}*"`):s.push(`*${e.attributeValue}*`,`${e.attributeValue}*`,`*${e.attributeValue}`))),s}filterSuggestions(t){const{nameKey:e,attributes:s}=this.props,o=D(t),i=o.attributeName&&t.indexOf(":")>-1?s.findIndex(t=>t[e]===o.attributeName):-1,n=this.getAttribute(i),r=this.getSuggestions(n),a=i>-1?o.attributeValue:o.attributeName,l=r.filter(t=>F(a,t)).concat(this.getSuggestionAddons(n,o));this.setState({selectedIdx:i,prepended:o.prepended,operator:o.operator,negated:o.negated,suggestions:l,highlightedIdx:0})}acceptSuggestion(){const{nameKey:t,onSelect:e}=this.props,{suggestions:s,highlightedIdx:o,selectedIdx:i,prepended:n,operator:r}=this.state,a=this.getAttribute(i),l=s[o];e(`${n}${a?`${a[t]}:${r}${l}`:l}`,-1===i?":":"")}getOperators(){const t=[],e=this.getAttribute(this.state.selectedIdx);if(e)switch(e.type){case"int":case"float":t.push({name:"GT",char:">",active:">"===this.state.operator}),t.push({name:"LT",char:"<",active:"<"===this.state.operator}),t.push({name:"GTE",char:">=",active:">="===this.state.operator}),t.push({name:"LTE",char:"<=",active:"<="===this.state.operator})}return t}setOperator(t){const{value:e}=this.props,{negated:s,operator:o}=this.state;if("-"===t){const t=e.replace(/^-?(.*)/,(s?"":"-")+"$1");this.props.onSelect(t)}else{const s=D(e);s.operator=o===t?"":t,this.props.onSelect(function(t){const{prepended:e="",attributeName:s="",attributeValue:o="",operator:i=""}=t||{};return`${e}${s}:${i}${o}`}(s))}}render(){const t=this.props.footerComponent;/*#__PURE__*/return K(M,A({left:this.props.offsetX||0,top:this.props.offsetY||0},this.props.dropdownProps,{children:[/*#__PURE__*/O(G,A({},this.props.listProps,{ref:t=>this._list=t,children:this.state.suggestions.map((t,e)=>{const s=this.state.highlightedIdx===e;/*#__PURE__*/return O(q,A({active:s,onClick:this.acceptSuggestion,onMouseOver:()=>this.setState({highlightedIdx:e}),ref:s?t=>this._selected=t:void 0},this.props.selectorProps,{children:t}),e)})})),/*#__PURE__*/K(J,{children:[/*#__PURE__*/K(Z,{active:this.state.negated,onClick:()=>this.setOperator("-"),children:[/*#__PURE__*/O(tt,{children:"-"}),this.props.translations&&this.props.translations.negate?this.props.translations.negate:"NEGATE"]}),this.getOperators().map((t,e)=>/*#__PURE__*/K(Q,{active:t.active,onClick:()=>this.setOperator(t.char),children:[/*#__PURE__*/O(tt,{children:t.char}),t.name]},e))]}),this.props.keyboardHelpers&&/*#__PURE__*/K(U,{center:!0,children:[/*#__PURE__*/K(st,{children:[/*#__PURE__*/O(et,{children:"▲"}),/*#__PURE__*/O(et,{children:"▼"}),this.props.translations&&this.props.translations.navigate?this.props.translations.navigate:"to navigate"]}),/*#__PURE__*/K(st,{children:[/*#__PURE__*/O(et,{long:!0,children:"↵"}),this.props.translations&&this.props.translations.select?this.props.translations.select:"to select"]})]}),/*#__PURE__*/O(t,{})]}))}}ot.propTypes={value:o.string,nameKey:o.string,attributes:o.array,onSelect:o.func,onClose:o.func,offsetX:o.number,offsetY:o.number,keyboardHelpers:o.bool,footerComponent:o.func,dropdownProps:o.object,selectorProps:o.object,listProps:o.object,translations:o.object},ot.defaultProps={value:"",nameKey:"name",onSelect:()=>{},onClose:()=>{},keyboardHelpers:!0,footerComponent:()=>null};class it extends s{constructor(e){super(e),this.wrapperRef=/*#__PURE__*/t.createRef(),this.handleClickOutside=this.handleClickOutside.bind(this)}componentDidMount(){document.addEventListener("mousedown",this.handleClickOutside)}componentWillUnmount(){document.removeEventListener("mousedown",this.handleClickOutside)}handleClickOutside(t){this.wrapperRef&&!this.wrapperRef.current.contains(t.target)&&this.props.notify&&this.props.notify()}render(){/*#__PURE__*/return O("div",{ref:this.wrapperRef,children:this.props.children})}}let nt,rt,at,lt,pt,dt,ht,ut=t=>t;const ct=n("div")(nt||(nt=ut`
    position: relative;
    width: 100%;
`)),gt=n("div")(rt||(rt=ut`
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
`),g,b,h,u,c,d,p,m,y,v,w,x,k);gt.defaultProps={bg:"#FFFFFF",color:"#505050",border:"1px solid rgba(0, 0, 0, .1)",fontFamily:"monospace"};const bt=V,ft=S({prop:"placeholderColor",cssProperty:"color",key:"colors"}),mt=n(bt)(at||(at=ut`
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
`),ft);mt.defaultProps={lineHeight:"1.1rem",placeholderColor:"#D7D7D7"};const yt=n("div")(lt||(lt=ut`
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
`),t=>t.collapsed&&P(pt||(pt=ut`
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        `))),vt=n("span")(dt||(dt=ut`
    font: inherit;
`)),wt=S({prop:"tokenColor",cssProperty:"color",key:"colors"}),xt=n(vt)(ht||(ht=ut`
    position: relative;
    cursor: pointer;
    font-weight: 500;

    ${0}
`),wt);xt.defaultProps={tokenColor:"#2384FF"};class $t extends s{constructor(t){super(t),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onChange=this.onChange.bind(this),this.onAutosuggest=this.onAutosuggest.bind(this),this.onSelectValue=this.onSelectValue.bind(this),this.handleEnterKey=this.handleEnterKey.bind(this),this.shouldAutosuggest=this.shouldAutosuggest.bind(this),this.onClose=this.onClose.bind(this),this.extract=this.extract.bind(this),this.getCurrentChunk=this.getCurrentChunk.bind(this),this.buildOverlay=this.buildOverlay.bind(this),this.state={focused:!1,value:t.defaultValue,attributes:t.data,overlayComponents:[],dropdownClosed:!1,dropdownOpen:!1,dropdownValue:null,dropdownX:null,dropdownY:null}}componentDidMount(){this.setState({overlayComponents:this.buildOverlay(this.state.value)})}componentDidUpdate(t,e){const{value:s,attributes:o}=this.state;s!==e.value&&this.props.onChange(s),s===e.value&&o.length===e.attributes.length||this.setState({overlayComponents:this.buildOverlay(s)},this.onAutosuggest)}componentWillReceiveProps(t){const e={};void 0!==t.defaultValue&&(e.value=t.defaultValue),t.data&&(e.attributes=t.data),this.setState(e)}onFocus(t){this.setState({focused:!0},this.onAutosuggest)}onBlur(t){this.setState({focused:!1})}onKeyDown(t){13===t.keyCode&&this.handleEnterKey(t),37!==t.keyCode&&39!==t.keyCode||this.onClose()}onChange(t){this.setState({value:t.target.value})}onAutosuggest(){const{value:t}=this.state,{offsetLeft:e,offsetTop:s}=this._marker,{chunk:o}=this.getCurrentChunk(t),i=this.shouldAutosuggest(o);this.setState(i?{dropdownClosed:!1,dropdownOpen:!0,dropdownValue:o,dropdownX:e,dropdownY:s+25}:{dropdownOpen:!1})}onSelectValue(t,e=""){const{value:s}=this.state,{index:o,indexEnd:i}=this.getCurrentChunk(s),n=s.slice(0,o),r=s.slice(i),a=o+t.length+e.length;this.setState({value:`${n}${t}${e}${r}`,dropdownClosed:":"!==e},()=>{this._input.focus(),this._input.setSelectionRange(a,a)})}handleEnterKey(t){const e=document.activeElement===this._input;t.shiftKey||!e||this.state.dropdownOpen||(t.preventDefault(),this.props.onSubmit(this.state.value))}shouldAutosuggest(t){const{selectionStart:e}=this._input,{value:s,focused:o}=this.state,i=!s.charAt(e)||/[)\s]/.test(s.charAt(e)),n=i&&/[\s-(]/.test(s.charAt(e-1)),r=i&&/[^)\s]/.test(s.charAt(e-1));return o&&(!s||n||r&&!this.state.dropdownClosed)}onClose(t){this.setState({dropdownOpen:!1,dropdownClosed:t||!1})}extract(t){const{nameKeyIncludes:e}=this.props,{attributes:s}=this.state;return function(t,e,s){const o=[],i=E();let n;for(;null!==(n=i.exec(t));){if(e){const t=D(n,e,s);if(!t.attributeNameValid||!t.attributeValueValid)continue}o.push([n.index,i.lastIndex])}return o}(t,s,e)}getCurrentChunk(t){const{selectionStart:e}=this._input,s=this.extract(t),o=t.substring(0,e),i=o.match(/[^\s]*$/),n=i?o.lastIndexOf(i[i.length-1]):-1;let r=n;for(const[t,o]of s.reverse()){if(e>o&&n<t){r=o;break}if(e>t&&e<=o){r=t;break}if(n>t&&n<o){r=o;break}}const a=t.substring(r,e);return{index:r,indexEnd:r+a.length,chunk:a}}buildTokens(t,e=0){const s=[],o=this.extract(t);let i=0;return o.reduce((e,o)=>(s.push(t.substring(e[1],o[0])),s.push(/*#__PURE__*/O(xt,{tokenColor:this.props.inputProps.tokenColor,children:t.substring(o[0],o[1])},`token-${o[0]}`)),i=o[1],o),[null,0]),s.push(t.substring(i)),s.filter(Boolean)}buildOverlay(t){const{index:e}=this.getCurrentChunk(t),s=this.buildTokens(t.substring(0,e)),o=this.buildTokens(t.substring(e)||" ",e);return[s,/*#__PURE__*/O(vt,{style:{outline:this.props.debug?"1px solid red":"none"},ref:t=>this._marker=t,children:o},`after-${e}`)]}render(){const{nameKey:t,className:e,inputProps:s,placeholder:o,keyboardHelpers:i,collapseOnBlur:n,footerComponent:r,dropdownProps:a,selectorProps:l,listProps:p,alwaysLeft:d,translations:h}=this.props,{value:u,attributes:c,dropdownOpen:g,dropdownValue:b,dropdownX:f,dropdownY:m,overlayComponents:y}=this.state,v=!this.state.focused&&n;/*#__PURE__*/return O(it,{notify:this.onClose,children:/*#__PURE__*/K(ct,{className:e,children:[/*#__PURE__*/K(gt,A({},s,{onClick:()=>this._input.focus(),children:[/*#__PURE__*/O(yt,{collapsed:v,children:y}),/*#__PURE__*/O(mt,{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:s.autoFocus,maxRows:v?1:void 0,placeholder:o,placeholderColor:s.placeholderColor,value:u,onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onChange:this.onChange,ref:t=>this._input=t})]})),g&&/*#__PURE__*/O(ot,{keyboardHelpers:i,footerComponent:r,attributes:c,value:b,nameKey:t,onSelect:this.onSelectValue,onClose:this.onClose,offsetX:d?0:f,offsetY:m,dropdownProps:a,selectorProps:l,listProps:p,translations:h})]})})}}$t.propTypes={debug:o.bool,data:o.array,nameKey:o.string,nameKeyIncludes:o.array,defaultValue:o.string,placeholder:o.string,onChange:o.func,onSubmit:o.func,keyboardHelpers:o.bool,collapseOnBlur:o.bool,footerComponent:o.func,inputProps:o.object,dropdownProps:o.object,selectorProps:o.object,listProps:o.object,alwaysLeft:o.bool,translations:o.object},$t.defaultProps={data:[],nameKey:"name",nameKeyIncludes:["name"],defaultValue:"",onChange:()=>{},onSubmit:()=>{},placeholder:"Search",inputProps:{},dropdownProps:{},selectorProps:{},listProps:{}};export{$t as QueryAssist};
//# sourceMappingURL=lib.modern.mjs.map
