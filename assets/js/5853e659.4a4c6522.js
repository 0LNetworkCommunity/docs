"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[3782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},i="Wallet",o={unversionedId:"Tools/wallet",id:"Tools/wallet",title:"Wallet",description:"Description",source:"@site/docs/Tools/wallet.md",sourceDirName:"Tools",slug:"/Tools/wallet",permalink:"/documentation/Tools/wallet",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/Tools/wallet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"firstStepsSidebar",previous:{title:"Genesis",permalink:"/documentation/Tools/genesis"},next:{title:"Move",permalink:"/documentation/Tools/move/"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Core vs. Legacy Wallets",id:"core-vs-legacy-wallets",level:3},{value:"Legacy Wallet",id:"legacy-wallet",level:4},{value:"Core Wallet",id:"core-wallet",level:4},{value:"How to Use the CLI Tool",id:"how-to-use-the-cli-tool",level:2},{value:"Key Generation",id:"key-generation",level:3},{value:"Legacy Operations",id:"legacy-operations",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wallet"},"Wallet"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The Libra wallet tool provides essential functionalities for managing digital wallets within the Libra blockchain ecosystem. It is designed to handle digital currencies and assets through secure key management, account maintenance, and transaction processes."),(0,r.kt)("h3",{id:"core-vs-legacy-wallets"},"Core vs. Legacy Wallets"),(0,r.kt)("p",null,"The wallet tool comprises two main components: ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy"),". In previous Libra versions(V5 and below) the software used the legacy format, while Legacy wallets were migrated with the hard fork from V5 -> V6.9.0 it is recommended users now create wallets using HKDF. Here is an outline that represents different approaches and functionalities of each of the wallet types:"),(0,r.kt)("h4",{id:"legacy-wallet"},"Legacy Wallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compatibility"),": Maintains functionality and compatibility with older wallet versions. This includes handling legacy address formats and key derivation schemes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simpler Security Model"),": Features a less complex security model, evident from the unencrypted storage of mnemonics and simpler key management."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transition Support"),": Acts as a transitional component for users migrating from older systems to the newer, more secure core wallet system.")),(0,r.kt)("h4",{id:"core-wallet"},"Core Wallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modern Cryptography"),": Utilizes ed25519 and Hierarchical Key Derivation Function (HKDF) based on RFC 5869, aligning with current cryptographic standards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key Management"),": Manages a variety of key types, including mnemonic phrases, with a focus on security and compliance with modern standards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Future-Proof"),": The core wallet is an evolving component, indicating ongoing improvements and updates to maintain security and feature enhancements.")),(0,r.kt)("h2",{id:"how-to-use-the-cli-tool"},"How to Use the CLI Tool"),(0,r.kt)("p",null,"The wallet CLI tool offers a user-friendly command-line interface for interacting with the Libra wallet. Key functionalities include:"),(0,r.kt)("h3",{id:"key-generation"},"Key Generation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Syntax"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"libra keygen [--mnemonic <MNEMONIC>] [--output_dir <DIRECTORY>]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Function"),": Generates new keys and account addresses. Can recover accounts from mnemonics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To generate a new key and account address:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"libra keygen --output_dir /path/to/directory\n"))),(0,r.kt)("li",{parentName:"ul"},"To recover an account using a mnemonic:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'libra keygen --mnemonic "your mnemonic phrase here"\n')))))),(0,r.kt)("h3",{id:"legacy-operations"},"Legacy Operations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Syntax"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"legacy [--display] [--output_path <PATH>] [--keygen]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Function"),": Manages operations related to legacy wallets, including displaying private keys, saving keys to a specified path, and generating new keys in the legacy format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To display private keys in the legacy format:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"libra legacy --display\n"))),(0,r.kt)("li",{parentName:"ul"},"To save legacy keys to a file:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"libra legacy --output_path /path/to/keys\n"))),(0,r.kt)("li",{parentName:"ul"},"To generate new keys in the legacy format:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"libra legacy --keygen\n")))))),(0,r.kt)("hr",null),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);