(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/components/Hint/doc.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var r=t("../wttj-front/node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),c=t("./docz.styled.js"),s=t("./src/components/Hint/index.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var b=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=f(this,d(n).call(this,e))).layout=null,t}var t,r,u;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=l(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:n},o.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"hint"}},"Hint"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Said state information, use on Field."),o.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"variants"}},"Variants"),o.a.createElement(c.b,{__codesandbox:"undefined",__position:0,__code:'<Hint>default</Hint>\n<Hint variant="warning">warning</Hint>\n<Hint variant="error">error</Hint>',__scope:{props:this?this.props:t,Playground:c.b,Hint:s.a}},o.a.createElement(s.a,null,"default"),o.a.createElement(s.a,{variant:"warning"},"warning"),o.a.createElement(s.a,{variant:"error"},"error")),o.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),o.a.createElement(a.f,{of:s.a}))}}])&&p(t.prototype,r),u&&p(t,u),n}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/components/Hint/index.js":function(e,n,t){"use strict";var r=t("../wttj-front/node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=t("./src/utils/variants.js"),c=t("./src/theme/helpers.js"),s=i.d.div.withConfig({componentId:"jda5mr-0"})(function(e){return Object(i.c)(["font-family:",";color:",";",";margin-top:",";"],Object(c.a)("fontFamilies.texts"),Object(a.c)(e.variant),Object(c.b)("fields.hint"),Object(c.a)("space.sm"))});t.d(n,"a",function(){return u});var u=function(e){var n=e.children,t=e.variant;return o.a.createElement(s,{variant:t},n)};u.__docgenInfo={description:"",methods:[],displayName:"Hint",props:{children:{type:{name:"node"},required:!1,description:"Node component from parent"},variant:{type:{name:"enum",value:[{value:"'warning'",computed:!1},{value:"'error'",computed:!1}]},required:!1,description:"Variant of component"}}}},"./src/utils/variants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"c",function(){return c}),t.d(n,"b",function(){return u});var r=t("./src/theme/helpers.js");function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=function(e,n){return n?"error":e?"warning":void 0},a={error:"colors.danger.500",warning:"colors.warning.500",info:"colors.info.500"},c=function(e){var n=a[e];return n?Object(r.a)(n):null},s=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){o(e,n,t[n])})}return e}({blue:"colors.sub.blue",default:"colors.nude.300",green:"colors.sub.green",orange:"colors.sub.orange",pink:"colors.sub.pink",primary:"colors.primary.500",purple:"colors.sub.purple",red:"colors.sub.red",secondary:"colors.secondary.500",turquoize:"colors.sub.turquoize",yellow:"colors.sub.yellow"},a),u=function(e){var n=s[e];return n?Object(r.a)(n):null}}}]);
//# sourceMappingURL=src-components-hint-doc.cc185a27bdd95a6c12e5.js.map