"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[683],{9525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(5893),o=t(1151);const s={},a="Editing Documents",d={id:"edit-docs/editing",title:"Editing Documents",description:"Conventions",source:"@site/docs/edit-docs/editing.md",sourceDirName:"edit-docs",slug:"/edit-docs/editing",permalink:"/pr-preview/pr-103/edit-docs/editing",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/edit-docs/editing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Write Docs",permalink:"/pr-preview/pr-103/category/write-docs"}},l={},c=[{value:"Conventions",id:"conventions",level:2},{value:"Filenames",id:"filenames",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Titles",id:"titles",level:3},{value:"Don&#39;t use metadata",id:"dont-use-metadata",level:5},{value:"Menu Labels",id:"menu-labels",level:3},{value:"Images",id:"images",level:4},{value:"Submit edits",id:"submit-edits",level:2},{value:"A Casual Edit",id:"a-casual-edit",level:3},{value:"Heavy Users",id:"heavy-users",level:3},{value:"Get your own repo set up",id:"get-your-own-repo-set-up",level:4},{value:"Branch",id:"branch",level:4},{value:"Submit",id:"submit",level:5}];function r(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"editing-documents",children:"Editing Documents"}),"\n",(0,i.jsx)(n.h2,{id:"conventions",children:"Conventions"}),"\n",(0,i.jsx)(n.h3,{id:"filenames",children:"Filenames"}),"\n",(0,i.jsxs)(n.p,{children:['filenames are in "kebab case", lowercase, with dash for spaces. The file extension should always be ',(0,i.jsx)(n.code,{children:".md"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Like this:\n",(0,i.jsx)(n.code,{children:"this-is-a-file.md"})]}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,i.jsxs)(n.p,{children:["At the top of an ",(0,i.jsx)(n.code,{children:".md"})," file you may include some metadata which Docusaurus will be able to read and use for parts of the UX (e.g. titles, is it hidden, menu position)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"---\ntitle: \"Menu Title\"\nsidebar_label: 'My Title'\nsidebar_position: 5\nhidden: true\ndescription: 'Shows this on mouseover'\n---\n"})}),"\n",(0,i.jsx)(n.h3,{id:"titles",children:"Titles"}),"\n",(0,i.jsxs)(n.p,{children:["There are two ways to set the title in docusaurus. Either set it in the metadata, or put a top level section header ",(0,i.jsx)(n.code,{children:"# This Title"}),".\nYou should always have a document that begins with a section title."]}),"\n",(0,i.jsx)(n.h5,{id:"dont-use-metadata",children:"Don't use metadata"}),"\n",(0,i.jsxs)(n.p,{children:["You should not include a ",(0,i.jsx)(n.code,{children:"title"})," field in metadata, instead you should carefully consider the actual header in the document."]}),"\n",(0,i.jsx)(n.h3,{id:"menu-labels",children:"Menu Labels"}),"\n",(0,i.jsxs)(n.p,{children:["The fallback behavior for menu link names will be the filename, e.g.: ",(0,i.jsx)(n.code,{children:"this-is-a-file"}),".\nHowever if your Doc begins with a header title, e.g.: ",(0,i.jsx)(n.code,{children:"# My Article"}),", then the menu label will be exactly that.\nTo override both cases you can include this item to the metadata: ",(0,i.jsx)(n.code,{children:"sidebar_label: Actual Label"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"images",children:"Images"}),"\n",(0,i.jsxs)(n.p,{children:["Do not link externally to images. Place copies of images in the ",(0,i.jsx)(n.code,{children:"./docs/assets"})," folder."]}),"\n",(0,i.jsx)(n.p,{children:"Then you can link with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"![](../../assets/the-image.png) `\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note: image names need to follow the same convention."}),"\n",(0,i.jsx)(n.h2,{id:"submit-edits",children:"Submit edits"}),"\n",(0,i.jsx)(n.h3,{id:"a-casual-edit",children:"A Casual Edit"}),"\n",(0,i.jsx)(n.p,{children:"Make the change using GitHub directly. You'll need a GitHub account for this. A pull request will be created."}),"\n",(0,i.jsx)(n.h3,{id:"heavy-users",children:"Heavy Users"}),"\n",(0,i.jsxs)(n.p,{children:["You'll need to fork this ",(0,i.jsx)(n.code,{children:"documentation"})," repo into your own GitHub account."]}),"\n",(0,i.jsx)(n.h4,{id:"get-your-own-repo-set-up",children:"Get your own repo set up"}),"\n",(0,i.jsxs)(n.p,{children:["Create a fork of this repository on your own account,  it will look like this: ",(0,i.jsx)(n.code,{children:"my-account/documentation"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"branch",children:"Branch"}),"\n",(0,i.jsxs)(n.p,{children:["Make a new branch for each major change you are going to make. You'll always branch from your ",(0,i.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Important: don't make your edits on the  ",(0,i.jsx)(n.code,{children:"main"})," branch of your fork. You'll want to keep that one clean, so you can sync from this canonical repo (there's a helpful button on the GitHub interface to do this for you)."]}),"\n",(0,i.jsxs)(n.p,{children:["At the end of this you'll have a branch named for example: ",(0,i.jsx)(n.code,{children:"some-new-edits"}),", that lives on ",(0,i.jsx)(n.code,{children:"my-account/documentation"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"submit",children:"Submit"}),"\n",(0,i.jsxs)(n.p,{children:["Then send that branch as a pull request back to the community's repo. I.e.: the ",(0,i.jsx)(n.code,{children:"some-edits"})," branch of ",(0,i.jsx)(n.code,{children:"my-account/documentation"}),", will then be proposed as a change to ",(0,i.jsx)(n.code,{children:"main"})," of ",(0,i.jsx)(n.code,{children:"0LNetworkCommunity/documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var i=t(7294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);