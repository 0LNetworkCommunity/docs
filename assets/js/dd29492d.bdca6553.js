"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[8460],{1942:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=n(5893),r=n(1151);const t={sidebar_position:2,sidebar_label:"0L Sybil Resistance",description:"0L's innovation is mechanism design"},a="0L Sybil Resistance",o={id:"validators/0l-sybil-resistance",title:"0L Sybil Resistance",description:"0L's innovation is mechanism design",source:"@site/docs/validators/0l-sybil-resistance.md",sourceDirName:"validators",slug:"/validators/0l-sybil-resistance",permalink:"/validators/0l-sybil-resistance",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/0l-sybil-resistance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"0L Sybil Resistance",description:"0L's innovation is mechanism design"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/validators/getting-started"},next:{title:"Validator Quickstart",permalink:"/validators/validator-quickstart"}},l={},d=[{value:"TL;DR: Process",id:"tldr-process",level:2},{value:"Algorithm Steps for Proof of Fee (PoF) and Musical Chairs",id:"algorithm-steps-for-proof-of-fee-pof-and-musical-chairs",level:3},{value:"Proof of Fee (PoF)",id:"proof-of-fee-pof",level:4},{value:"Musical Chairs",id:"musical-chairs",level:4},{value:"Proof of Fee (POF)",id:"proof-of-fee-pof-1",level:2},{value:"Reward Thermostat",id:"reward-thermostat",level:3},{value:"Musical Chairs",id:"musical-chairs-1",level:2},{value:"Vouching",id:"vouching",level:2},{value:"Examples",id:"examples",level:2},{value:"Examples of Validators Not Entering the Set",id:"examples-of-validators-not-entering-the-set",level:3}];function h(e){const i={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"0l-sybil-resistance",children:"0L Sybil Resistance"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.em,{children:"PoF and musical chairs attempt to minimize (not eliminate) the surface area for governance: of negotiating setting inflation rate, rewards rate, validator set size, and voting in/out members of validator set."})}),"\n",(0,s.jsx)(i.p,{children:"In the context of the Libra framework, the integration of Proof of Fee (PoF), Musical Chairs methods, and the Reward Thermostat mechanism addresses the common issue of networks overpaying for security. PoF optimizes validator selection based on bids, balancing experienced and new participants, which aids in cost-effective security management. The Reward Thermostat further enhances this model by dynamically adjusting validator rewards based on bidding patterns, reducing rewards when bids are consistently low and increasing them when bids are high, thus maintaining economic sustainability. Musical Chairs contributes by dynamically adjusting the validator set size based on actual network performance, preventing the unnecessary expansion of the set and contributing to cost efficiency. This holistic approach, in line with the Libra framework, aims to achieve robust security without excessive costs, ensuring a more efficient and economically sustainable blockchain ecosystem. Operating under the principle of equal voting power per validator, PoF, Musical Chairs, and the Reward Thermostat together offer a balanced, performance-oriented framework for blockchain networks."}),"\n",(0,s.jsx)(i.h2,{id:"tldr-process",children:"TL;DR: Process"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"algorithm-steps-for-proof-of-fee-pof-and-musical-chairs",children:"Algorithm Steps for Proof of Fee (PoF) and Musical Chairs"}),"\n",(0,s.jsx)(i.h4,{id:"proof-of-fee-pof",children:"Proof of Fee (PoF)"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Bid Submission:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Validators submit their bids for the auction process."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Bid Evaluation:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Bids are ordered and evaluated based on the amount."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Validator Selection:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Top bidders are selected until all available seats are filled."}),"\n",(0,s.jsx)(i.li,{children:"Maintain a 2/3 majority of proven validators from the previous epoch."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Jail Reputation Check:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Assess validators\u2019 jail records for reliability."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Finalization:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Confirm the final list of validators."}),"\n",(0,s.jsx)(i.li,{children:"Determine the lowest accepted bid and set it as the fee for all."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Reward Thermostat Adjustment:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Dynamically adjust the rewards for validators based on the network's bidding behavior."}),"\n",(0,s.jsx)(i.li,{children:"Decrease rewards if bids are consistently low, suggesting the reward is overly generous."}),"\n",(0,s.jsx)(i.li,{children:"Increase rewards if bids are consistently high, indicating the reward is not enticing enough."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"musical-chairs",children:"Musical Chairs"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Performance Monitoring:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Track and evaluate validators\u2019 performance metrics."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Set Size Adjustment:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"If 100% compliance, increase validator set size by one."}),"\n",(0,s.jsx)(i.li,{children:"If less than 5% failure, maintain current size."}),"\n",(0,s.jsx)(i.li,{children:"If more than 5% failure, reduce size to the number of compliant validators."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Validator Assessment:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Review validators\u2019 performance for the current epoch."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Selection for Next Epoch:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Based on performance, determine validators for the next epoch."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Adaptation:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Adjust the algorithm parameters based on overall network health and performance."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"proof-of-fee-pof-1",children:"Proof of Fee (POF)"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsxs)(i.p,{children:["OL Network uses the ",(0,s.jsx)(i.a,{href:"https://github.com/0LNetworkCommunity/libra-framework",children:"Libra Framework"})," that uses an experimental algorithm called Proof of Fee(PoF) to determine the validator selection. Libra Framework's sybil resistance mechanism stands apart from the more commonly known frameworks like Proof of Stake (PoS), Delegated Proof of Stake (DPoS), and Proof of Work (PoW), which are prevalent in many other blockchain networks. Instead of following these established paradigms, 0L Network employs a unique auction-based system for validator selection and rewards."]}),"\n",(0,s.jsx)(i.p,{children:"In this system, validators are required to submit bids as part of a competitive auction process. The number of available seats for validators is dynamic, and these seats are allocated based on the bid amounts. The bids are evaluated in descending order, and the highest bidders are granted validator status until all the seats are filled. A critical aspect of this mechanism is that all participating validators, regardless of their individual bid amounts, will eventually pay the same fee \u2014 equal to the lowest accepted bid in the auction."}),"\n",(0,s.jsxs)(i.p,{children:["For a deeper understanding of this distinctive approach, you can delve into the conceptual and operational intricacies detailed in the following papers: ",(0,s.jsx)(i.a,{href:"https://0l.network/2022/10/15/proof-of-fee-part-1/",children:"Part 1"})," & ",(0,s.jsx)(i.a,{href:"https://0l.network/2022/10/20/proof-of-fee-part-2-a-proposal/",children:"Part 2"})]}),"\n",(0,s.jsx)(i.h3,{id:"reward-thermostat",children:"Reward Thermostat"}),"\n",(0,s.jsx)(i.p,{children:"The Reward Thermostat in the 0L Network's Proof of Fee (PoF) system functions by adjusting the validator rewards in response to their bidding patterns. It decreases rewards when bids are consistently low, indicating that the rewards are more than adequate, and increases them when bids are high, suggesting that the current rewards might not be sufficiently motivating for validators. This adaptive mechanism maintains economic sustainability and aligns validator incentives with the network's ongoing performance and stability."}),"\n",(0,s.jsx)(i.p,{children:"Incorporating the Reward Thermostat into the PoF system involves specific steps to adjust validator rewards in response to their bidding behavior:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Monitor Bidding Behavior:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The system analyzes bid percentages over a set number of epochs. It looks at the average bid percentage over the past 5 or 10 epochs."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Adjust Rewards Based on Bid Levels:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"If bids are consistently low (e.g., below a 50% threshold for several epochs), this suggests that the current rewards are overly generous. In response, the system decreases rewards. A typical reduction might be by 5% for a short trend or 10% for a longer trend."}),"\n",(0,s.jsx)(i.li,{children:"Conversely, if bids are consistently high (e.g., above a 95% threshold for several epochs), indicating that rewards are not enticing enough, the system also decreases rewards. This reduction could also be by 5% or 10%, depending on the duration of the trend."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Implement Reward Changes:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"These adjustments are applied to the baseline reward. For example, if the baseline reward is 1,000 tokens and a 5% decrease is triggered, the new reward would be 950 tokens."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Feedback Loop for Continuous Adjustment:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The system continuously monitors bidding behavior and makes adjustments in each epoch, ensuring that the rewards remain aligned with validator motivations and the network's economic conditions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This mechanism ensures that rewards are neither too generous nor too unattractive, maintaining a balance that encourages efficient network operation while aligning with validators' economic incentives."}),"\n",(0,s.jsx)(i.h2,{id:"musical-chairs-1",children:"Musical Chairs"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.p,{children:'The Libra Framework features an innovative algorithm known as "Musical Chairs" to dynamically determine the optimal number of validators. This approach diverges from traditional fixed-capacity models in blockchain networks, offering a more flexible and performance-based system.'}),"\n",(0,s.jsx)(i.p,{children:"In Musical Chairs, the size of the validator set is not static but fluctuates based on the real-time performance of the network. This method relies on a set of specific performance metrics to assess the efficiency and compliance of validators. The process ensures that the network remains robust, secure, and efficient without being overburdened by an unnecessarily large number of validators."}),"\n",(0,s.jsx)(i.p,{children:"Further insights into this novel mechanism can be explored in PoF publications"}),"\n",(0,s.jsx)(i.h2,{id:"vouching",children:"Vouching"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.p,{children:"There is also a distinctive \"vouching\" system that is intricately woven into its sybil resistance mechanism. This system plays a pivotal role in establishing and maintaining the network's integrity and security, complementing the Proof of Fee (PoF) and Musical Chairs models. Vouching in the 0L Network is designed to effectively navigate and utilize the trust graph, making it a cornerstone of the network's overall governance and functionality."}),"\n",(0,s.jsx)(i.p,{children:"Vouching is primarily applied in the context of validators however it could be utilized in other places within the network in the future. In this system, each validator is required to secure vouches from two existing validators who must come from distinct ancestry trees. This means that the endorsing validators cannot be part of the same lineage or hierarchical chain of account creation, ensuring a broad and diverse base of trust."}),"\n",(0,s.jsx)(i.p,{children:"The vouching process is governed by specific rules to ensure its effectiveness and integrity:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Expiration of Vouches:"})," Each vouch is designed with a finite lifespan, expiring after 90 epochs. This temporal limitation necessitates active and ongoing participation in the network's trust-building processes."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Economic Aspect:"})," Obtaining a vouch incurs a cost of 1000 microlibra. Rather than functioning as a mere fee, this amount is burned. This signifies a substantial commitment on the part of the voucher and adds a layer of economic deterrence against insincere or inauthentic vouching."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"examples-of-validators-not-entering-the-set",children:"Examples of Validators Not Entering the Set"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"High Bid Scenario:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"All bids from validators are significantly higher than the network's threshold, leading to a situation where there aren't enough seats for all high bidders. This can happen if the validators overestimate the required bid amount."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Limited Seat Availability:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The number of available seats is less than the number of validators willing to participate. In such cases, even validators with reasonably high bids might not get selected."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Performance-Based Exclusion in Musical Chairs:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"A validator who fails to meet the performance standards set by the network (e.g., uptime, block validation success rate) may be excluded from the next epoch's validator set, regardless of their bid in the PoF process."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Failure to Meet Qualification Criteria:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Validators not meeting essential criteria such as sufficient funds, minimum vouches, or having a history of being jailed in the previous round, will be excluded regardless of their bid."}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>a});var s=n(7294);const r={},t=s.createContext(r);function a(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);