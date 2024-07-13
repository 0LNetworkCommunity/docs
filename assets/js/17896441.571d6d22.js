"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[7918],{1310:(e,t,s)=>{s.d(t,{Z:()=>v});s(7294);var n=s(512),a=s(5281),i=s(2802),o=s(8596),l=s(3692),r=s(5999),c=s(4996),d=s(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.ZP)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.Z,{"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,d.jsx)(l.Z,{className:a,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function p(e){let{children:t,active:s,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function v(){const e=(0,i.s1)(),t=(0,o.Ns)();return e?(0,d.jsx)("nav",{className:(0,n.Z)(a.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:n,index:s,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:n,children:t.label})},s)}))]})}):null}},8292:(e,t,s)=>{s.r(t),s.d(t,{default:()=>U});var n=s(7294),a=s(833),i=s(902),o=s(5893);const l=n.createContext(null);function r(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,n.useContext)(l);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,o.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(512),m=s(7524),h=s(4966);function b(){const{metadata:e}=c();return(0,o.jsx)(h.Z,{previous:e.previous,next:e.next})}var x=s(3120),p=s(4364),v=s(5281),g=s(5999),j=s(3008);const f={tags:"tags_jXut",tag:"tag_QGVx"};function _(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(g.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.Z)(f.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:f.tag,children:(0,o.jsx)(j.Z,{...e})},e.permalink)))})]})}var Z=s(8268);function N(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,tags:a}=e,i=a.length>0,l=!!(t||s||n);return i||l?(0,o.jsxs)("footer",{className:(0,u.Z)(v.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.Z)("row margin-top--sm",v.k.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(_,{tags:a})})}),l&&(0,o.jsx)(Z.Z,{className:(0,u.Z)("margin-top--sm",v.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n})]}):null}var C=s(6043),k=s(3743);const L={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function T(e){let{collapsed:t,...s}=e;return(0,o.jsx)("button",{type:"button",...s,className:(0,u.Z)("clean-btn",L.tocCollapsibleButton,!t&&L.tocCollapsibleButtonExpanded,s.className),children:(0,o.jsx)(g.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const M={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function I(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,C.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.Z)(M.tocCollapsible,!i&&M.tocCollapsibleExpanded,s),children:[(0,o.jsx)(T,{collapsed:i,onClick:l}),(0,o.jsx)(C.z,{lazy:!0,className:M.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(k.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const w={tocMobile:"tocMobile_ITEo"};function B(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(I,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(v.k.docs.docTocMobile,w.tocMobile)})}var V=s(9407);function H(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(V.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var y=s(2503),E=s(4332);function A(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.Z)(v.k.docs.docMarkdown,"markdown"),children:[s&&(0,o.jsx)("header",{children:(0,o.jsx)(y.Z,{as:"h1",children:s})}),(0,o.jsx)(E.Z,{children:t})]})}var P=s(1310),F=s(2212);const R={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function S(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,m.i)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,o.jsx)(B,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,o.jsx)(H,{})}}(),{metadata:{unlisted:n}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.Z)("col",!s.hidden&&R.docItemCol),children:[n&&(0,o.jsx)(F.Z,{}),(0,o.jsx)(x.Z,{}),(0,o.jsxs)("div",{className:R.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(P.Z,{}),(0,o.jsx)(p.Z,{}),s.mobile,(0,o.jsx)(A,{children:t}),(0,o.jsx)(N,{})]}),(0,o.jsx)(b,{})]})]}),s.desktop&&(0,o.jsx)("div",{className:"col col--3",children:s.desktop})]})}function U(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.FG,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(S,{children:(0,o.jsx)(s,{})})]})})}},4966:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(5999),a=s(512),i=s(3692),o=s(5893);function l(e){const{permalink:t,title:s,subLabel:n,isNext:l}=e;return(0,o.jsxs)(i.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,o.jsx)("div",{className:"pagination-nav__label",children:s})]})}function r(e){const{previous:t,next:s}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(l,{...t,subLabel:(0,o.jsx)(n.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,o.jsx)(l,{...s,subLabel:(0,o.jsx)(n.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(512),a=s(5999),i=s(5281),o=s(4477),l=s(5893);function r(e){let{className:t}=e;const s=(0,o.E)();return s.badge?(0,l.jsx)("span",{className:(0,n.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,s)=>{s.d(t,{Z:()=>p});s(7294);var n=s(512),a=s(2263),i=s(3692),o=s(5999),l=s(143),r=s(5281),c=s(373),d=s(4477),u=s(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,u.jsx)(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:s,onClick:n,children:(0,u.jsx)(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,a.Z)(),{pluginId:o}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(o),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.Jo)(o),p=m??(v=x).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,n.Z)(t,r.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const s=(0,d.E)();return s.banner?(0,u.jsx)(x,{className:t,versionMetadata:s}):null}},3008:(e,t,s)=>{s.d(t,{Z:()=>l});s(7294);var n=s(512),a=s(3692);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=s(5893);function l(e){let{permalink:t,label:s,count:l,description:r}=e;return(0,o.jsxs)(a.Z,{href:t,title:r,className:(0,n.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[s,l&&(0,o.jsx)("span",{children:l})]})}}}]);