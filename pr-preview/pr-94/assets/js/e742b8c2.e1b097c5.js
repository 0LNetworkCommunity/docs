"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[1888],{9537:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var t=n(5893),r=n(1151);const a={},o=void 0,s={id:"archive/canonical/technical/Delay_Towers_Pt_0",title:"Delay_Towers_Pt_0",description:"A high\\-throughput chain with a fair launch",source:"@site/docs/archive/canonical/technical/Delay_Towers_Pt_0.md",sourceDirName:"archive/canonical/technical",slug:"/archive/canonical/technical/Delay_Towers_Pt_0",permalink:"/pr-preview/pr-94/archive/canonical/technical/Delay_Towers_Pt_0",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/archive/canonical/technical/Delay_Towers_Pt_0.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Libra_Liberated",permalink:"/pr-preview/pr-94/archive/canonical/Libra_Liberated"},next:{title:"Delay_Towers_Pt_1",permalink:"/pr-preview/pr-94/archive/canonical/technical/Delay_Towers_Pt_1"}},l={},h=[{value:"A high-throughput chain with a fair launch",id:"a-high-throughput-chain-with-a-fair-launch",level:2},{value:"TL;DR",id:"tldr",level:2},{value:"The Tradeoff",id:"the-tradeoff",level:2},{value:"Delay Towers",id:"delay-towers",level:2},{value:"The Experiment",id:"the-experiment",level:2},{value:"To be continued",id:"to-be-continued",level:2},{value:"Full Series",id:"full-series",level:2}];function c(e){const i={a:"a",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"a-high-throughput-chain-with-a-fair-launch",children:"A high-throughput chain with a fair launch"}),"\n",(0,t.jsx)(i.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,t.jsx)(i.p,{children:"A fair launch of a high-throughput layer-1 blockchain is happening."}),"\n",(0,t.jsx)(i.p,{children:"You won't need to buy anything or otherwise pay a centralized organization for access. The goal is to create a new standard in blockchain bootstrapping through Delay Towers."}),"\n",(0,t.jsx)(i.p,{children:"There's a new layer-1 chain that wants to exist. It wants to have these characteristics:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"High-throughput"}),"\n",(0,t.jsx)(i.li,{children:"Faster finality time"}),"\n",(0,t.jsx)(i.li,{children:"Fair launch"}),"\n",(0,t.jsx)(i.li,{children:"Establishing a persistent identity"}),"\n",(0,t.jsx)(i.li,{children:"Permissionless access"}),"\n",(0,t.jsx)(i.li,{children:"Engender decentralization"}),"\n",(0,t.jsx)(i.li,{children:"Regulatory certainty"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Centralized launches of Proof of Stake networks are an unsatisfactory strategy for bootstrapping a community-led public good. No disrespect meant to projects that have launched in such a way, there was just no credible technical alternative, possibly until now."}),"\n",(0,t.jsx)(i.h2,{id:"the-tradeoff",children:"The Tradeoff"}),"\n",(0,t.jsx)(i.p,{children:'If you are looking for a blockchain with fast finality, you are likely evaluating a derivative of the Byzantine Fault Tolerance (BFT) consensus system. Research on BFT consensus has progressed from designs requiring multiple rounds of communication to finalize a block, up to the latest breakthroughs of "consensus linearity" and "pipelining", which produce systems where the throughput is limited only by the network connection latency.'}),"\n",(0,t.jsx)(i.p,{children:"To achieve the benefits of BFT, the networks require establishing identities for validators to participate in the consensus protocol. Currently, most blockchains rely on either of these: Proof of Authority (PoA) for private consortia and Proof of Stake (PoS) for permissionless environments. PoA lacks credible neutrality due to centralized validator membership control, and PoS suffers from a lack of diversity of participants and high inequality while raising numerous significant regulatory concerns. The novel Delay Towers are an alternative mechanism to establish persistent identity in permissionless environments."}),"\n",(0,t.jsx)(i.h2,{id:"delay-towers",children:"Delay Towers"}),"\n",(0,t.jsxs)(i.p,{children:["Delay Towers are a Proof of Elapsed Time to build persistent identities. Drawing inspiration from the paper\xa0",(0,t.jsx)(i.a,{href:"https://docs.google.com/document/d/1eRTAe3szuIoZEloHvRMtZlrU7t2un4UVQ8LarpU3LNk/edit?usp=sharing",children:'"Sybil-resistant network identities from dedicated hardware"'}),'by Dominic Williams, the proposed design extends the idea of "puzzle towers" with\xa0',(0,t.jsx)(i.a,{href:"https://eprint.iacr.org/2018/601.pdf",children:"Verifiable Delay Functions (VDFs)"}),"VDFs are cryptographic primitives for providing a guarantee that a lower bound of time has elapsed."]}),"\n",(0,t.jsx)(i.p,{children:'In this protocol every node in a network has a Delay Tower, which is composed of linearly chained proofs. A chain of Delay Tower blocks produces a guarantee of cumulative work done by a node in the network. Each proof extends from the previous one (using one proof as the preimage to the next block), building the tower "higher"; creating a series of sequential proofs of work. Unlike traditional Proof of Work puzzle algorithms that are parallelizable and probabilistic, "mining" a Delay Tower is sequential and deterministic. Since VDFs cannot be parallelized, they do not benefit significantly from alternative hardware such as GPUs. The delay towers enable persistent identities by providing a permissionless and non-forgeable identity for miners.'}),"\n",(0,t.jsx)(i.p,{children:"Delay Towers establish an identity for miners, and can be used as a metric to quantify a node's commitment to a network, and subsequently rank it for the purpose of choosing inclusion in the validator quorum at every epoch. This is achievable, in part due to a significant cost to participate in the network. One has to dedicate resources to build their towers and a high exit penalty to recreate their identity due to lost work. And the cost goes up over time as all nodes continue to extend their towers."}),"\n",(0,t.jsx)(i.p,{children:"It is not feasible to apply infinite money or resources to forge a tower, the time taken cannot meaningfully be reduced. A forgery will take approximately the same amount of time as the original. As such, a Delay Tower becomes a permissionless and non-forgeable identity that is fast to verify; valuable in its own right."}),"\n",(0,t.jsx)(i.h2,{id:"the-experiment",children:"The Experiment"}),"\n",(0,t.jsx)(i.p,{children:"An experimental network ran successfully for nearly 1 year without interruption. It used a Delay Tower protocol for assigning consensus power for a modern BFT blockchain architecture. This is the first publication in a series of articles which will summarize the protocol, and discuss the attractive features that were observed in the experiment, such as:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Providing persistent identity which aids in Sybil resistance in BFT consensus."}),"\n",(0,t.jsx)(i.li,{children:"Offer a more diverse distribution than usual, to anyone with minimal computational resources."}),"\n",(0,t.jsx)(i.li,{children:"Levelling the playing field, with a linear function the advantage of the miners at genesis goes down over time."}),"\n",(0,t.jsx)(i.li,{children:"With minimal computations and no wasted cycles, delay towers offer an eco-friendly alternative to PoW approaches."}),"\n",(0,t.jsx)(i.li,{children:"Offering a mechanism to bootstrap a BFT network without selling tokens (ICOs), venture-backed foundations, or airdrops."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"to-be-continued",children:"To be continued"}),"\n",(0,t.jsx)(i.p,{children:"Instructions for mining the new chain will materialize in the coming weeks.\xa0"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"full-series",children:"Full Series"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"http://openlibra.blog/2021/11/01/delay-towers-part-0/",children:"A high-throughput chain with a fair launch"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"http://openlibra.blog/2021/11/05/delay-towers-part-1/",children:"Puzzle Towers for BFT"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"http://openlibra.blog/2021/11/08/delay-towers-part-2/",children:"From Puzzle Towers and VDFs to Delay Towers"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"http://openlibra.blog/2021/11/12/part-3-a-delay-towers-implementation-on-bft/",children:"Implementation on BFT"})}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>o});var t=n(7294);const r={},a=t.createContext(r);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);