webpackJsonp([57,366],{852:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){if(Array.isArray(n)){for(var s=0,a=Array(n.length);s<n.length;s++)a[s]=n[s];return a}return Array.from(n)}var o=(a(183),a(182)),e=t(o),c=a(1),u=t(c),l=a(2);t(l);n.exports={content:[["p","\u70b9\u51fb\u5c55\u5f00\u8282\u70b9\uff0c\u52a8\u6001\u52a0\u8f7d\u6570\u636e\u3002"]],meta:{order:3,title:"\u5f02\u6b65\u6570\u636e\u52a0\u8f7d",filename:"components/tree/demo/dynamic.md",id:"components-tree-demo-dynamic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tree <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TreeNode <span class="token operator" >=</span> Tree<span class="token punctuation" >.</span>TreeNode<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >generateTreeNodes</span><span class="token punctuation" >(</span>treeNode<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> arr <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> key <span class="token operator" >=</span> treeNode<span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>eventKey<span class="token punctuation" >;</span>\n  <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> <span class="token number" >3</span><span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    arr<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`leaf </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>key<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>key<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> arr<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >setLeaf</span><span class="token punctuation" >(</span>treeData<span class="token punctuation" >,</span> curKey<span class="token punctuation" >,</span> level<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> loopLeaf <span class="token operator" >=</span> <span class="token punctuation" >(</span>data<span class="token punctuation" >,</span> lev<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> l <span class="token operator" >=</span> lev <span class="token operator" >-</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n    data<span class="token punctuation" >.</span><span class="token function" >forEach</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >.</span>length <span class="token operator" >></span> curKey<span class="token punctuation" >.</span>length<span class="token punctuation" >)</span> <span class="token operator" >?</span> item<span class="token punctuation" >.</span>key<span class="token punctuation" >.</span><span class="token function" >indexOf</span><span class="token punctuation" >(</span>curKey<span class="token punctuation" >)</span> <span class="token operator" >!==</span> <span class="token number" >0</span> <span class="token punctuation" >:</span>\n        curKey<span class="token punctuation" >.</span><span class="token function" >indexOf</span><span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >)</span> <span class="token operator" >!==</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >return</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token function" >loopLeaf</span><span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >,</span> l<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token keyword" >if</span> <span class="token punctuation" >(</span>l <span class="token operator" >&lt;</span> <span class="token number" >1</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        item<span class="token punctuation" >.</span>isLeaf <span class="token operator" >=</span> <span class="token boolean" >true</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token function" >loopLeaf</span><span class="token punctuation" >(</span>treeData<span class="token punctuation" >,</span> level <span class="token operator" >+</span> <span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >getNewTreeData</span><span class="token punctuation" >(</span>treeData<span class="token punctuation" >,</span> curKey<span class="token punctuation" >,</span> child<span class="token punctuation" >,</span> level<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> loop <span class="token operator" >=</span> <span class="token punctuation" >(</span>data<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>level <span class="token operator" >&lt;</span> <span class="token number" >1</span> <span class="token operator" >||</span> curKey<span class="token punctuation" >.</span>length <span class="token operator" >-</span> <span class="token number" >3</span> <span class="token operator" >></span> level <span class="token operator" >*</span> <span class="token number" >2</span><span class="token punctuation" >)</span> <span class="token keyword" >return</span><span class="token punctuation" >;</span>\n    data<span class="token punctuation" >.</span><span class="token function" >forEach</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>curKey<span class="token punctuation" >.</span><span class="token function" >indexOf</span><span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >)</span> <span class="token operator" >===</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >if</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n          <span class="token function" >loop</span><span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n          item<span class="token punctuation" >.</span>children <span class="token operator" >=</span> child<span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span>\n      <span class="token punctuation" >}</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token function" >loop</span><span class="token punctuation" >(</span>treeData<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token function" >setLeaf</span><span class="token punctuation" >(</span>treeData<span class="token punctuation" >,</span> curKey<span class="token punctuation" >,</span> level<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      treeData<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentDidMount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        treeData<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'pNode 01\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'0-0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'pNode 02\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'0-1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'pNode 03\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'0-2\'</span><span class="token punctuation" >,</span> isLeaf<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >100</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onSelect</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'selected\'</span><span class="token punctuation" >,</span> info<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onLoadData</span><span class="token punctuation" >(</span>treeNode<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token keyword" >new</span> <span class="token class-name" >Promise</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>resolve<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >const</span> treeData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>treeData<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n        <span class="token function" >getNewTreeData</span><span class="token punctuation" >(</span>treeData<span class="token punctuation" >,</span> treeNode<span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>eventKey<span class="token punctuation" >,</span> <span class="token function" >generateTreeNodes</span><span class="token punctuation" >(</span>treeNode<span class="token punctuation" >)</span><span class="token punctuation" >,</span> <span class="token number" >2</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> treeData <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token function" >resolve</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >1000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> loop <span class="token operator" >=</span> data <span class="token operator" >=</span><span class="token operator" >></span> data<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>name<span class="token punctuation" >}</span></span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span><span class="token function" >loop</span><span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span><span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeNode</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>name<span class="token punctuation" >}</span></span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >isLeaf</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>isLeaf<span class="token punctuation" >}</span></span> <span class="token attr-name" >disabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key <span class="token operator" >===</span> <span class="token string" >\'0-0-0\'</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> treeNodes <span class="token operator" >=</span> <span class="token function" >loop</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>treeData<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tree</span> <span class="token attr-name" >onSelect</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onSelect<span class="token punctuation" >}</span></span> <span class="token attr-name" >loadData</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onLoadData<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>treeNodes<span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tree</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){for(var s=[],a=n.props.eventKey,t=0;t<3;t++)s.push({name:"leaf "+a+"-"+t,key:a+"-"+t});return s}function s(n,s,a){var t=function p(n,a){var t=a-1;n.forEach(function(n){(n.key.length>s.length?0===n.key.indexOf(s):0===s.indexOf(n.key))&&(n.children?p(n.children,t):t<1&&(n.isLeaf=!0))})};t(n,a+1)}function a(n,a,t,p){var o=function e(n){p<1||a.length-3>2*p||n.forEach(function(n){0===a.indexOf(n.key)&&(n.children?e(n.children):n.children=t)})};o(n),s(n,a,p)}var t=e["default"].TreeNode,o=u["default"].createClass({displayName:"Demo",getInitialState:function(){return{treeData:[]}},componentDidMount:function(){var n=this;setTimeout(function(){n.setState({treeData:[{name:"pNode 01",key:"0-0"},{name:"pNode 02",key:"0-1"},{name:"pNode 03",key:"0-2",isLeaf:!0}]})},100)},onSelect:function(n){console.log("selected",n)},onLoadData:function(s){var t=this;return new Promise(function(o){setTimeout(function(){var e=[].concat(p(t.state.treeData));a(e,s.props.eventKey,n(s),2),t.setState({treeData:e}),o()},1e3)})},render:function(){var n=function a(n){return n.map(function(n){return n.children?u["default"].createElement(t,{title:n.name,key:n.key},a(n.children)):u["default"].createElement(t,{title:n.name,key:n.key,isLeaf:n.isLeaf,disabled:"0-0-0"===n.key})})},s=n(this.state.treeData);return u["default"].createElement(e["default"],{onSelect:this.onSelect,loadData:this.onLoadData},s)}});return u["default"].createElement(o,null)}}}});