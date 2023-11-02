"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[1809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Use the Tower CLI",id:"use-tower-cli"},i=void 0,l={unversionedId:"Tools/tower/use-tower-cli",id:"Tools/tower/use-tower-cli",title:"Use the Tower CLI",description:"Tower CLI commands and options",source:"@site/docs/Tools/tower/use-tower-cli.md",sourceDirName:"Tools/tower",slug:"/Tools/tower/use-tower-cli",permalink:"/documentation/Tools/tower/use-tower-cli",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/Tools/tower/use-tower-cli.md",tags:[],version:"current",frontMatter:{title:"Use the Tower CLI",id:"use-tower-cli"},sidebar:"firstStepsSidebar",previous:{title:"Tower",permalink:"/documentation/Tools/tower/"},next:{title:"Validators",permalink:"/documentation/category/validators-1"}},s={},c=[{value:"Tower CLI commands and options",id:"tower-cli-commands-and-options",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Mining (Production Mode)",id:"mining-production-mode",level:2},{value:"Mining (Testing Mode)",id:"mining-testing-mode",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tower-cli-commands-and-options"},"Tower CLI commands and options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"libra-tower --help\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clap struct entry point for the tower cli\n\nUsage: libra-tower [OPTIONS] <COMMAND>\n\nCommands:\n  backlog  \n  start    \n  once     \n  zero     \n  help     Print this message or the help of the given subcommand(s)\n\nOptions:\n  -l, --local-mode\n          If the node is offline and tower needs to run in local mode without querying chain\n  -c, --config-file <CONFIG_FILE>\n          The optional path to an alternate path besides $HOME/.0L\n  -p, --profile <PROFILE>\n          nickname of the profile to use, if there is more than one. Defaults to first\n  -t, --test-private-key <TEST_PRIVATE_KEY>\n          optional, private key of the account. Otherwise this will prompt for mnemonic. Warning: intended for testing\n  -h, --help\n          Print help\n  -V, --version\n          Print version\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"If you don't already a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"libra.yml")," configuration file under path ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.libra"),", you may generate a new one with the following command (mnemonic needed): "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"libra config init\n")),(0,r.kt)("p",null,"Alternatively, the configuration folder can also be overwritten by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"libra config init --path <YOUR_CONFIG_PATH>\n")),(0,r.kt)("h2",{id:"mining-production-mode"},"Mining (Production Mode)"),(0,r.kt)("p",null,"If you wish to create the genesis proof AKA proof zero of the configured account, execute the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"libra-tower zero\n")),(0,r.kt)("p",null,"If everything went find, you should be able to see the file ",(0,r.kt)("inlineCode",{parentName:"p"},"proof_0.json")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_CONFIG_PATH>/vdf_proofs_<YOUR_PUBLIC_KEY>/"),"\nNow let us generate the proof #n 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"libra-tower once\n")),(0,r.kt)("p",null,"The above command will generate only one proof, which is good for testing purposes, but in production you may want to keep generating proofs automatically. This can be achieved with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"libra-tower start\n")),(0,r.kt)("p",null,"The previous command will keep generating proofs and submit them automatically, but what if for some reason you wish to submit them manually? We got you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"libra-tower backlog\n")),(0,r.kt)("h2",{id:"mining-testing-mode"},"Mining (Testing Mode)"),(0,r.kt)("p",null,"For testing purposes is not feasible to wait too long just to have a generated proof, therefore it's possible to generate proofs in 1 sec. Such can be achieved using any of the above mining commands, we just need environment variable instructing to generate a proof a testing mode. Eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MODE_0L=TESTING libra-tower zero\n")))}m.isMDXComponent=!0}}]);