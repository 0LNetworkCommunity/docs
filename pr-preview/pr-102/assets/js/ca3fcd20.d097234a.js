"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[6822],{4223:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(5893),o=i(1151);const a={},s="Scorpion's Claw Recommendation",r={id:"archive/proposals/scorpions_claw_proposal",title:"Scorpion's Claw Recommendation",description:"Community Wallet Analytics and V7 Hard Fork Parameters [DRAFT]",source:"@site/docs/archive/proposals/scorpions_claw_proposal.md",sourceDirName:"archive/proposals",slug:"/archive/proposals/scorpions_claw_proposal",permalink:"/pr-preview/pr-102/archive/proposals/scorpions_claw_proposal",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/archive/proposals/scorpions_claw_proposal.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"proposal_2210_8_infrastructure_escrow_funding",permalink:"/pr-preview/pr-102/archive/proposals/proposal_2210_8_infrastructure_escrow_funding"},next:{title:"spring_forward\xa0",permalink:"/pr-preview/pr-102/archive/proposals/spring_forward\xa0"}},l={},c=[{value:"Community Wallet Analytics and V7 Hard Fork Parameters [DRAFT]",id:"community-wallet-analytics-and-v7-hard-fork-parameters-draft",level:2},{value:"Background",id:"background",level:2},{value:"Design Philosophy",id:"design-philosophy",level:3},{value:"0L Network Policies",id:"0l-network-policies",level:3},{value:"Slow Wallets",id:"slow-wallets",level:4},{value:"Community Wallets",id:"community-wallets",level:4},{value:"Match Index",id:"match-index",level:4},{value:"The Equilibrium",id:"the-equilibrium",level:3},{value:"Boundaries and Consequences",id:"boundaries-and-consequences",level:4},{value:"Harvesting",id:"harvesting",level:3},{value:"Spraying",id:"spraying",level:3},{value:"Transfer Bug",id:"transfer-bug",level:3},{value:"Principal Accounts involved",id:"principal-accounts-involved",level:3},{value:"Sham Community Programs",id:"sham-community-programs",level:4},{value:"Sybil Validator Accounts",id:"sybil-validator-accounts",level:4}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"scorpions-claw-recommendation",children:"Scorpion's Claw Recommendation"}),"\n",(0,t.jsx)(n.h2,{id:"community-wallet-analytics-and-v7-hard-fork-parameters-draft",children:"Community Wallet Analytics and V7 Hard Fork Parameters [DRAFT]"}),"\n",(0,t.jsx)(n.p,{children:"April 9th 2024"}),"\n",(0,t.jsx)(n.h1,{id:"tldr",children:"TL;DR"}),"\n",(0,t.jsx)(n.p,{children:"Operation Scorpion\u2019s Claw identified 4.012 billion LIBRA involved in instances of abuse of the community wallet tooling; approximately 4% of the total supply."}),"\n",(0,t.jsx)(n.p,{children:"A methodical approach was used to programmatically identify participating accounts. The endeavor took four weeks because"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"new tools were developed"}),"\n",(0,t.jsx)(n.li,{children:"new technologies implemented"}),"\n",(0,t.jsx)(n.li,{children:"platform software updated"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The result is a list of 436 accounts. If validators decide, they can now run a version of a network aiming to exclude dishonest accounts. The dishonest accounts which currently contain 3,768,939,592 LIBRA."}),"\n",(0,t.jsx)(n.p,{children:"There was a handful of abuse cases. However, the vast majority of the exploit was conducted by a long-term community member who has publicly declared ownership of the accounts originating the exploit."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"6DA2B828F3018637379203940C639A95"}),"\n",(0,t.jsx)(n.li,{children:"27E9577869ADFD677DBA9C940DEECE0A"}),"\n",(0,t.jsx)(n.li,{children:"988B8C3B7E55B6E5126884E02C8F166E"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A hard fork is recommended, and should happen with a validator ceremony open to the public and using a clean database using the version 7.0.0 software release."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXfpdWi_O_kHFqEKhvBDfr41QGlcBVH2As0u3xr5Hd0Fxb0IN9N8rBHfvFI5u76rOGSKZZFa36kWdY77XqVWhpRhSgptePszHNlvZJ-tptwfzZsp-WNkvVQLQyg4JTAe2N-uZDuTfhuO2I5XAuao1-1q84B1?key=UdkA8jBMllBve2WagZXXwA",alt:"image"})}),"\n",(0,t.jsx)(n.h1,{id:"what-happened",children:"What Happened"}),"\n",(0,t.jsx)(n.p,{children:'In preparation for the release of the 0L Network v7 Mainnet, analytics contributors ran a comprehensive on-chain analysis of all user-generated events \u2013 code named \u201cScorpion\u2019s Claw\u201d. This meticulous examination revealed several instances of abuse, predominantly to the Donor Voice accounts ("community wallets") which are a great source of pride of the 0L community.'}),"\n",(0,t.jsx)(n.p,{children:"Before a report on these abuses could be completed, the rogue players discovered the operation was underway and began to drain accounts into OTC markets. Some validators responded by stopping their nodes, preferring to wait for the final report and remediation recommendations than to continue participating on a network with that behavior. Many community members were interested in a Hard Fork. This report provides the facts, and basis for which a hard fork could be conducted."}),"\n",(0,t.jsx)(n.p,{children:"Operation Scorpion\u2019s Claw identified 4.012 billion LIBRA involved in these instances of abuse, or approximately 4% of the total supply."}),"\n",(0,t.jsx)(n.p,{children:"In this report, a list of the accounts involved in the abuse has been developed by strictly adhering to the following goals:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A deterministic approach for inclusion criteria."}),"\n",(0,t.jsx)(n.li,{children:"Maximum removal of misappropriated supply."}),"\n",(0,t.jsx)(n.li,{children:"Minimal adverse impact to uninvolved parties."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This endeavor yielded a final list of 436 accounts, holding 3,768,939,592 LIBRA."}),"\n",(0,t.jsx)(n.p,{children:"Scorpion's Claw proposes that on a new network, these accounts will be excluded by being rendered inaccessible. As such, the associated supply will be permanently removed from circulation. These actions signify an exclusion rate of the total amount of dishonestly appropriated coins of 94%."}),"\n",(0,t.jsx)(n.p,{children:"As with any hard fork the prior software would remain available to those who wish to continue on the prior chain. Though the recommendation of this report is that such a chain would not be popular with users for social and economic reasons, users and validators remain free to use that version of the chain if they so choose."}),"\n",(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.h3,{id:"design-philosophy",children:"Design Philosophy"}),"\n",(0,t.jsx)(n.p,{children:"The 0LNetwork community champions self-correcting systems instead of rigid white list driven systems with authoritarian control. Many 0L designers are informed by Karl Popper's vision of an open society and naturally self-correcting systems. This open approach to design and operations, while prone to exploitation, is essential for progress and encourages boundary testing that allows policy to evolve naturally. Exploitation and innovation are often distinguishable only in retrospect so open systems are necessarily open to what will later prove to be fraud. Eliminate any opportunity for exploitation and one also eliminates any opportunity for evolution. Exploit and evolve. We regard the tradeoff with equanimity."}),"\n",(0,t.jsx)(n.p,{children:"Blockchains are probabilistic, not deterministic, systems. Hard forks in this paradigm are viewed not as indicators of failure nor guarantees of success, but as strategic adjustments that are vital to the longevity and success of a robust network which is resistant to abuse and central control."}),"\n",(0,t.jsx)(n.p,{children:"0L's Approach to open policies:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Emphasize the absence of absolute guarantees, lean on probabilities."}),"\n",(0,t.jsx)(n.li,{children:"Reject the need for foundational authority, embrace open participation."}),"\n",(0,t.jsx)(n.li,{children:"Recognize the constructive role of exploits and boundary-pushing by participants."}),"\n",(0,t.jsx)(n.li,{children:"Accept hard forks as evolutionary steps within the policy framework, aimed for continuous improvement."}),"\n",(0,t.jsx)(n.li,{children:"Invite a dynamic interaction with policies, where challenges are opportunities for advancement."}),"\n",(0,t.jsx)(n.li,{children:"Underscore the importance of adaptability and innovation in navigating open policies."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this paradigm hard forks are viewed not as indicators of failure (nor success) but as strategic adjustments that are vital to the longevity and success of a robust network."}),"\n",(0,t.jsx)(n.h3,{id:"0l-network-policies",children:"0L Network Policies"}),"\n",(0,t.jsx)(n.h4,{id:"slow-wallets",children:"Slow Wallets"}),"\n",(0,t.jsx)(n.p,{children:"Ordinary wallets don\u2019t limit transfer amounts and have no balance restrictions. Transactions are immediate in the typical wallet a user would initialize (e.g. in Carpe)."}),"\n",(0,t.jsx)(n.p,{children:"Early participants in a network may receive generous subsidies, but the chain\u2019s policies should be designed in such a way as to prevent early participants from dumping on less sophisticated users. To address this need, rewards are sent to Slow Wallets (SW) rather than regular wallets. All validator node accounts, where a majority of rewards flow, are Slow Wallets. Slow Wallets have a drip mechanism that unlocks its balance in increments of 35k coins per epoch until the full balance eventually becomes unlocked."}),"\n",(0,t.jsx)(n.h4,{id:"community-wallets",children:"Community Wallets"}),"\n",(0,t.jsx)(n.p,{children:'0L Network chain provides tools and patterns for communities to self-fund their activities with LIBRA. One pattern is the Donor Voice participatory payments together with Matching Donation Index, a.k.a., informally "Community Wallets".'}),"\n",(0,t.jsx)(n.p,{children:'Unlike traditional systems, the core innovation here is that there is no whitelist or global governance structure. 0L Network had no pre-mine state, and designs such as "founder rewards" are antithetical to our design philosophy.'}),"\n",(0,t.jsx)(n.p,{children:"A Community Wallet (CW) is instantiated not only with a number of on-chain tools (smart contracts), but also with off-chain commitments. Without going into further detail, a user could create a CW (on chain), and ask for donations (off chain). Those donations would also serve as a way to index a Matching Donations list, which validators and other contributors could opt-into (more below)."}),"\n",(0,t.jsx)(n.p,{children:"Notably, this open system is probabilistic, it was known in advance that it was likely that this would be abused (and as you see below, it was). So there are a number of conditions a CW owner, opts-into by instantiating Donor Voice covenants on their account:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"That account can only transfer coins to a Slow Wallet"}),"\n",(0,t.jsx)(n.li,{children:"Proposed transfer takes three epochs (days) to finalize."}),"\n",(0,t.jsx)(n.li,{children:"During this period, Donors to have the opportunity to veto a transaction."}),"\n",(0,t.jsx)(n.li,{children:"Sequential vetoes to the account will freeze it from doing future transfers."}),"\n",(0,t.jsx)(n.li,{children:"Since V6.9.0, Donor Voice enabled accounts are required to be multi-sigs."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The astute reader will notice, the probabilistic equilibrium depends on players."}),"\n",(0,t.jsx)(n.p,{children:"With an insufficient number of players observing Donor Voice accounts, or misplaced trust in observers of those accounts, abuse will take place. This is not a surprise, and was known from the start. A trade-off in playing open games."}),"\n",(0,t.jsx)(n.h4,{id:"match-index",children:"Match Index"}),"\n",(0,t.jsx)(n.p,{children:"In many blockchains there is programmatic removal of coins from supply. Without going into much detail, there are cases when a user should pay competitively for a resource (e.g. transaction ordering), but the cost of providing that value is not proportional to the fee. One pattern is to exclude from the new network - colloquially, \u201cburn\u201d - the difference, and remove it from circulation permanently (see for example Ethereum's EIP 1551)."}),"\n",(0,t.jsx)(n.p,{children:"Typically the reason for burning instead of redirecting, is that burns prevent a kind of exploit loop where attackers can harvest the redirect. This is true, but it is also a missed opportunity and 0L Network proposed a market driven experiment."}),"\n",(0,t.jsx)(n.p,{children:"There is also an opt-in alternative built into all accounts, that allows any user to redirect burns attributed to their accounts to community programs. Strictly speaking: a Donor Voice enabled account usually elects to be a part of Matching Index. This means instead of permanently removing the excess coins, validators can use them to fund any community's programs."}),"\n",(0,t.jsx)(n.p,{children:"When a miner or validator opted into making matching donations to a CW, certain regular programmatic removal of coins, would instead recycle coins to the Match Index. (People have compared this mechanism as akin to implementations in the crypto industry of Quadratic Finance, without the quadratic nature of votes)."}),"\n",(0,t.jsx)(n.h3,{id:"the-equilibrium",children:"The Equilibrium"}),"\n",(0,t.jsx)(n.p,{children:"The intersection of Community Wallets and Matching Donations was designed to create a healthy tension:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Community Wallet Creation: Any community member has the power to create a Community Wallet, allowing for community participation in a diverse set of initiatives."}),"\n",(0,t.jsx)(n.li,{children:"Influence through Donations: By donating to these wallets, individual community members can influence the allocation of matching donations. This system is designed to encourage community support."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'To the objection that more controls were necessary, the old adage of payment processing applies: "I can promise you zero fraud, as long as you receive zero payments".'}),"\n",(0,t.jsx)(n.h4,{id:"boundaries-and-consequences",children:"Boundaries and Consequences"}),"\n",(0,t.jsx)(n.p,{children:"We've mentioned on-chain constraints to these accounts. It's also worth highlighting that the economic game involving community wallet, exists offline too. The blockchain serves as a coordination layer for the game, it is not the boundary of the game. All users of community wallet tooling should have the expectation that the laws and norms of society continue to apply (code is not law)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Social: Community backlash or loss of trust among peers."}),"\n",(0,t.jsx)(n.li,{children:"Legal: Potential legal actions based on the severity and nature of the manipulation."}),"\n",(0,t.jsx)(n.li,{children:"Hard Fork: In extreme cases, the network might undergo a hard fork \u2014 a significant change to the protocol software and database which contain any rules the new network participants choose to enforce, for example: dropping accounts."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"the-exploits",children:"The Exploits"}),"\n",(0,t.jsx)(n.p,{children:"This section explains the three types of abuse by community wallet creators which led to the hard fork decision."}),"\n",(0,t.jsx)(n.h3,{id:"harvesting",children:"Harvesting"}),"\n",(0,t.jsx)(n.p,{children:"The Harvesting exploit involves skewing the matching donations algorithm by donating to a community wallet under the control of one validator with the only purpose of collecting coins from unsuspecting Match Index donors."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Harvesting is the act of creating a Community Wallet, then:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creating multiple accounts (usually Validators)"}),"\n",(0,t.jsx)(n.li,{children:"Programming them to funnel their donations and locked coins to the CW they control."}),"\n",(0,t.jsx)(n.li,{children:"By doing so, the bad actors are increasing their CW balance while also creating the perception their Community Wallet is highly valued and directing more donations from the rest of the validators and the community as a whole."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The image below is an example of the harvesting exploit. The blue nodes (validators), made AUTOPAY (blue lines) to a community wallet (orange node). In the case presented below, you can see two CWs that the validators that participated in the Sybil attack donated to (one above the validators, one below):"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXdDv0XeO11HLUR0NFbfKZkIMu33cTFNOtVs8jrwbHF45XecHE4tZO7MGQBUeeOIHGUAXh6G2cB5oqCxKdHVsRQh41wjG5r0OIEthoJwlz2-HYC78Ic5EDcNfp8a7sYfq9X6VXbVogCm3nyWrqYs9NljeDqT?key=UdkA8jBMllBve2WagZXXwA",alt:"image"})}),"\n",(0,t.jsx)(n.h3,{id:"spraying",children:"Spraying"}),"\n",(0,t.jsx)(n.p,{children:"Spraying exploits circumvent the standard Slow Wallet time-locking algorithm by dividing payments into several Slow Wallets."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["By design, a Community Wallet only makes payments to a Slow Wallet.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Coins that are sent from CW to a SW first enter a \u201cbucket\u201d of \u201clocked\u201d coins."}),"\n",(0,t.jsx)(n.li,{children:"They vest and then eventually transition to an unlocked state at a rate of 35,000 coins per epoch."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Spraying is the act of creating multiple Slow Wallets and then sending CW_PAYMENT to them in parallel. Doing so linearly increases the number of unlocked coins. Instead of the allowed 35k unlocked coins per epoch, this exploit multiplies the effect by the number of slow wallets involved in the exploit."}),"\n",(0,t.jsxs)(n.li,{children:["In the image below, the purple nodes represent slow wallets, and the green lines represent CW_PAYMENTs. In this case 2773 payment events were made to 433 slow wallets.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"That means that every epoch, the owner of that network accumulated 15.1 million unlocked coins."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXdedjYc4qNdnT7RzmvLX2vZNgrF0SiobpUAFrQT-X3k69OxssdhXIE0FXbblYocdKintniwjcMx9tde51PD587GAJaABy6J8rFkwQgnClMVj_KH1tHTvC5YBFvCJJMB2ssQGrBiW3jPRR9lq8EXwBjyinQ?key=UdkA8jBMllBve2WagZXXwA",alt:"image"})}),"\n",(0,t.jsx)(n.h3,{id:"transfer-bug",children:"Transfer Bug"}),"\n",(0,t.jsx)(n.p,{children:"A regression to the codebase was introduced during the v6.9.0 upgrade."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The codebase regression manifested in the ability of a CW to make ordinary transfers. This meant bypassing all Donor Voice governance including donor observability, and restricting to Slow Wallets."}),"\n",(0,t.jsx)(n.li,{children:"The bug exploit can be seen in the image below with the red lines (transfers) from the CW (orange) to the nodes around it. In this particular case, you can see it exhibits also the first (multiple validators donate to it) and second exploits (making many payments to a multitude of Slow Wallets)."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXdg4tqkagkrHnHtGSOaOQgul_UDCLG2v1RFp3R1eKigc8Y3Psx6XsAeClqxwkF2nnvSFciXTP2hslnlOvMZiw2EaatK0dacqEncm2JRL3-W9c6xQOTbNTcbYoRgA1Aj-1Pl6VPW3i0I3WFkt-kDtO8B9ION?key=UdkA8jBMllBve2WagZXXwA",alt:"image"})}),"\n",(0,t.jsx)(n.h1,{id:"case-1-principal-exploit",children:"CASE 1 Principal Exploit"}),"\n",(0,t.jsx)(n.p,{children:"We will not cover each exploit in detail. However CASE 1 is exceptional because of the exploit size, there were approximately 3,614,811,756 (3.6 Billion) unlocked coins in possession of an individual (the largest unlocked coin stake by perhaps 30x). This is approximately 3.6% of the network supply."}),"\n",(0,t.jsx)(n.h3,{id:"principal-accounts-involved",children:"Principal Accounts involved"}),"\n",(0,t.jsx)(n.p,{children:"There are many hundreds of accounts created by a single exploiter. This is verifiable by observing the path of account creation from a seed set of a few accounts."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXfiR_6nWttmM-i-0e5digE-8N3Z3HfFC1cQZtQR0Jy3imt67q44yYlFVMgKsp7vJN1iP6af1pfNBxbGQdy3kF7wBJrmEstINS4NaTCorV3tks6jtYr8kemVaK_f_u3W_9aGiB06Q6xLnVFIQLj_tiO9KWyy?key=UdkA8jBMllBve2WagZXXwA",alt:"image"})}),"\n",(0,t.jsx)(n.p,{children:"If the relationships of these few nodes are expanded, the flow of funds goes through these nodes:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lh7-rt.googleusercontent.com/docsz/AD_4nXd2GfTBgsrE6jEFLkeSFOyQJjaRaNyQb5FuBgV1ExEoMjf489bfdS9WKX4o8B7khcS_ibHawRgYAvZLInFWt76e6heG-Y24kA5XrT-W_oWzZ5Nuz1jj1Je42ou5bEACLroPMZgszHp3EDoNQccJCcv2bCE?key=UdkA8jBMllBve2WagZXXwA",alt:"image"})}),"\n",(0,t.jsx)(n.h4,{id:"sham-community-programs",children:"Sham Community Programs"}),"\n",(0,t.jsx)(n.p,{children:"The community wallets involved in this case are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"7B61439A88060096213AC4F5853B598E"}),"\n",(0,t.jsx)(n.li,{children:"5E68026887147DE0EA9CA90962C25A41"}),"\n",(0,t.jsx)(n.li,{children:"97DCBC6BFAA7EDF00F9002DAAED49C46"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'There is no information publicly available about these "community" programs. Different from other credible and well regarded programs in the community. Their principal source of funding was from "validators" nodes which the individual publicly associated themselves with. Due to the nature of Match Index (described above), many other validators became unwitting contributors to these accounts (the "harvesting" exploit).'}),"\n",(0,t.jsx)(n.h4,{id:"sybil-validator-accounts",children:"Sybil Validator Accounts"}),"\n",(0,t.jsx)(n.p,{children:'Community wallets could not reasonably accumulate much capital unless they solicited donations from many people. But if an individual had acquired access to many "validators" with high reward potential, they could do so. (Note, acquiring multiple validators was also outside the stated norms of the community. Several validators were notified publicly that you should not try to run multiple validators even though you might be able to get around some of the constraints).'}),"\n",(0,t.jsx)(n.p,{children:"In this case, the exploiter had ownership of the following validator addresses:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"6DA2B828F3018637379203940C639A95"}),"\n",(0,t.jsx)(n.li,{children:"15B291FFCA97895D726E8AA9A5BE6A2A"}),"\n",(0,t.jsx)(n.li,{children:"5DC8C3878E99E9FD12EBDEFA1803D332"}),"\n",(0,t.jsx)(n.li,{children:"C5162C65FDE8C9D9CA9B564E41A54003"}),"\n",(0,t.jsx)(n.li,{children:"988B8C3B7E55B6E5126884E02C8F166E"}),"\n",(0,t.jsx)(n.li,{children:"7D299BF3D624E937C23302D8B5E3A1B2"}),"\n",(0,t.jsx)(n.li,{children:"99E4EE712E2A57F694344D288A0FC27A"}),"\n",(0,t.jsx)(n.li,{children:"9F1D8C66883768F167A097FF4C58DE88"}),"\n",(0,t.jsx)(n.li,{children:"C0FFEE1A3393516D27B72B28464EAA5F"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"the-hard-fork-goals",children:"The Hard Fork Goals"}),"\n",(0,t.jsx)(n.p,{children:"Once validators realized the magnitude of the exploit, they and core contributors responded by stopping their nodes preferring to await a full analysis and recommendation."}),"\n",(0,t.jsx)(n.p,{children:"The recommendation here is to perform a hard fork of the 0L Network, which maintains all properties of the canonical chain except that it does not migrate the accounts involved in the abuse of the system\u2019s hardcoded rules and prevents the abuse of those hardcoded rules from taking place again."}),"\n",(0,t.jsx)(n.p,{children:"Punishment is not an end-goal. The recommendation is to simply remove abusive accounts, while perhaps setting a non-binding social precedent signaling that a decentralized group of validators are capable of taking, and willing to take, coordinated action to prevent abuse and will not run software that allows abuse."}),"\n",(0,t.jsx)(n.h1,{id:"the-process",children:"The Process"}),"\n",(0,t.jsx)(n.p,{children:"The first part of the process involved defining the exploit types. The effort had three key objectives: ensure accuracy, capture as much questionable activity as possible, and avoid penalizing innocent parties all while still being deterministic."}),"\n",(0,t.jsx)(n.p,{children:"The Goals were to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Find all the community wallets that participated in the defined exploits."}),"\n",(0,t.jsx)(n.li,{children:"For each of them, via pattern matching, identify and collect a list of the nodes that participated in the scheme."}),"\n",(0,t.jsx)(n.li,{children:"Identify edge cases where the common patterns did not apply or the scheme operator attempted to obfuscate their actions or balance by spreading nodes via common \u201csuperspreaders\u201d like the Discord onboarders."}),"\n",(0,t.jsx)(n.li,{children:"Ensure no common, widely known accounts were present on the list such as Discord onboarders."}),"\n",(0,t.jsx)(n.li,{children:"Leave every harvesting case with a single validator node (both as a show of grace and to reward their legitimate contribution to the network)."}),"\n",(0,t.jsx)(n.li,{children:"Applying a 200K LIBRA balance threshold to reduce the impact to innocent parties who might be caught up accidentally in the exploit. This approach led to 45.58% of the accounts being excluded from further examination, ensuring the focus of remediation on more chief offenders (see table A in appendix)."}),"\n",(0,t.jsx)(n.li,{children:"A single database command should generate a list of accounts without human intervention."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This whole process was written in several Cypher language (graph DB) queries and packaged into a Python tool that can be run by anyone to produce an identical checksum of the final list. This tool and the queries have been made public in the following directory on GitHub: ",(0,t.jsx)(n.a,{href:"https://github.com/0LNetworkCommunity/scorpions-claws",children:"https://github.com/0LNetworkCommunity/scorpions-claws"}),"."]}),"\n",(0,t.jsx)(n.h1,{id:"the-result",children:"The Result"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"436 accounts excluded from new network"}),"\n",(0,t.jsx)(n.li,{children:"Total LIBRA excluded from new network (\u201cburned\u201d): 3,768,939,592"}),"\n",(0,t.jsx)(n.li,{children:"Circulating LIBRA burned: 1,419,359,988"}),"\n",(0,t.jsx)(n.li,{children:"Locked LIBRA burned: 640,266,766"}),"\n",(0,t.jsx)(n.li,{children:"Community Wallet LIBRA burned: 1,709,312,837"}),"\n",(0,t.jsx)(n.li,{children:"Community Wallet excluded from new network: 6"}),"\n",(0,t.jsx)(n.li,{children:"Historical validator accounts excluded from new network: 11"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"actions-needed-by-the-coin-holders",children:"Actions Needed by The Coin Holders"}),"\n",(0,t.jsx)(n.p,{children:"No action is required by community members who were not involved in the exploits. The transition to the hard fork and all subsequent version upgrades will occur seamlessly and automatically."}),"\n",(0,t.jsx)(n.h1,{id:"other-mitigations-in-place",children:"Other Mitigations in Place"}),"\n",(0,t.jsx)(n.p,{children:"What does the future look like and what more needs to be done?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Bug exploit was fixed in January 2024 in an on-chain upgrade."}),"\n",(0,t.jsxs)(n.li,{children:["A new off-chain monitoring infrastructure will be built post v7.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This will improve network visualization and investigative capabilities. The tools that have been developed and utilized during this exploit analysis, will be available soon for public use."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["A dedicated Community Wallets page in explorer will provide valuable insights and live CW activity.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The community and contributors will continue to report any discovered exploits, rather than taking advantage of them to the detriment of the rest of the community."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["There is no more easy money left.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A majority of the exploits occurred during a time in the evolution of the network where exploits like harvesting could be rewarded. That time has passed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"acknowledgments",children:"Acknowledgments"}),"\n",(0,t.jsx)(n.p,{children:"Special thanks to the Scorpion's Claw task force and all the contributors who worked tirelessly over weeks to resolve these issues on behalf of the extended community. Your commitment to the network is greatly appreciated, and the community is very thankful for your efforts."}),"\n",(0,t.jsx)(n.p,{children:"A very sincere and heartfelt thank you also to the wider community for your patience and support throughout this process."}),"\n",(0,t.jsx)(n.h1,{id:"appendix",children:"Appendix"}),"\n",(0,t.jsxs)(n.p,{children:["Scorpion\u2019s Claw Farm Report: ",(0,t.jsx)(n.a,{href:"https://docs.google.com/document/d/e/2PACX-1vQXu7IISWJIAYQ1OG--ETtdaqE7tYG5Gs0kxDkwfRWZAD0W7SFVdb_EgoN8IqHyTj3DXIhF1okYLFT2/pub",children:"https://docs.google.com/document/d/e/2PACX-1vQXu7IISWJIAYQ1OG--ETtdaqE7tYG5Gs0kxDkwfRWZAD0W7SFVdb_EgoN8IqHyTj3DXIhF1okYLFT2/pub"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(7294);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);