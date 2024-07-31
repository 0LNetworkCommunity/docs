"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[8417],{4086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(5893),a=n(1151);const s={},r=void 0,o={id:"archive/econ/The_Rulebook_at_Genesis",title:"The_Rulebook_at_Genesis",description:"As you can see in our write ups mentioned above, we do things a little differently around here",source:"@site/docs/archive/econ/The_Rulebook_at_Genesis.md",sourceDirName:"archive/econ",slug:"/archive/econ/The_Rulebook_at_Genesis",permalink:"/pr-preview/pr-87/archive/econ/The_Rulebook_at_Genesis",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/archive/econ/The_Rulebook_at_Genesis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"university-of-toronto-msrg",permalink:"/pr-preview/pr-87/archive/community programs/university-of-toronto-msrg"},next:{title:"a-brief-overview-of-system-policies",permalink:"/pr-preview/pr-87/archive/econ/a-brief-overview-of-system-policies"}},l={},d=[{value:"Rewards:",id:"rewards",level:3},{value:"Requirements:",id:"requirements",level:3},{value:"Validator Rewards:",id:"validator-rewards",level:3},{value:"End Users Mining:",id:"end-users-mining",level:3},{value:"Transferability:",id:"transferability",level:3},{value:"Sponsoring Programs in the Community:",id:"sponsoring-programs-in-the-community",level:3},{value:"Background",id:"background",level:2},{value:"Earning Credit",id:"earning-credit",level:2},{value:"Guaranteed Minimum Transaction Fee",id:"guaranteed-minimum-transaction-fee",level:2},{value:"Identity Subsidy",id:"identity-subsidy",level:2},{value:"Transferring Credits",id:"transferring-credits",level:2},{value:"Community Wallets",id:"community-wallets",level:3},{value:"Slow Wallets",id:"slow-wallets",level:3}];function h(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"As you can see in our write ups mentioned above, we do things a little differently around here: We had no venture investors, there is no premine, no foundation with tokens, and anyone with a laptop can participate and earn coins. Here's a quick reference to the policies implemented at genesis:"}),"\n",(0,i.jsx)(t.h3,{id:"rewards",children:"Rewards:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Rewards are paid at the end of each "Epoch", daily at 16:00 UTC.'}),"\n",(0,i.jsx)(t.li,{children:"The majority of the rewards will go to Validator Nodes, you'll need a cloud host to be successful at this (you can't do this with a laptop, and you need to be somewhat technical). Transaction fees are the principal source of rewards, but they can be augmented by Guaranteed Minimum subsidies."}),"\n",(0,i.jsx)(t.li,{children:'End Users on the other hand, can receive an Identity Subsidy for creating durable identities through Delay Towers. This is a system "mining pool".'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://siasky.net/TAAnqdoTyTo8vyr82sWC_bO9CpRUJ7oFU-v4l7PFSng94A/rewards.png",alt:""})}),"\n",(0,i.jsx)(t.h3,{id:"requirements",children:"Requirements:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We do not do Proof of Stake, instead preventing Sybil accounts is done through Delay Towers, a sybil resistance technique we invented."}),"\n",(0,i.jsx)(t.li,{children:"It uses Proofs of elapsed time which are done by the `tower` app on cloud machines, or the `carpe` desktop all for end users"}),"\n",(0,i.jsx)(t.li,{children:"Validators are required to build Delay Towers, they must produce 6 delay proofs per day in order to gain admission to the validator set, and also to remain."}),"\n",(0,i.jsx)(t.li,{children:"End Users can optionally build Delay Towers to establish a persistent identity (and perhaps later join as a validator), and there is a reward for that."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"validator-rewards",children:"Validator Rewards:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Securing the network is done by a maximum of 100 delegations of "Validator Nodes". This is very valuable work to the network.'}),"\n",(0,i.jsx)(t.li,{children:"At the start of the network each Validator Node has typically 1 entity or person behind it (a delegation of 1)."}),"\n",(0,i.jsx)(t.li,{children:"To become a candidate for a Validator Node, all that is required is to run the configuration tool, and to have any existing Validator in a current validator set send an onboarding transaction. (it's not a vote by the validator set to include a new validator.)"}),"\n",(0,i.jsx)(t.li,{children:"While it doesn't take group permission to onboard a new validator, existing validators are rate-limited from creating endless accounts. They can only onboard a new prospective validator every 14 days/epochs."}),"\n",(0,i.jsxs)(t.li,{children:['The budget for Validator subsidies is "thermostatic", it goes up or down depending on the total number of Validator Nodes doing work successfully.',"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If the network is about to fail, with only 4 nodes on the network, the budget the network has for security, exactly 8,400,000 coins (the maximum). The 4 nodes share the 8,400,000 coins, 2,100,000 each."}),"\n",(0,i.jsx)(t.li,{children:"On the other extreme when the network is reaching its technical performance limit, there is no reason to subsidize Validators. At 100 Validator nodes, the total budget is 0, and the 100 validators will share the transaction fees the network produces."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"The validator subsidy only exists in the absence of sufficient transaction fees. It is a Guaranteed Minimum, which is net of transaction fees. So hypothetically if the network has 4 nodes, and hence the security budget is 8,400,000, however the total transaction fees are already above this number (e.g. 10,000,000), there is no need to subsidize the guaranteed minimum, there are no new Coins minted. This prevents unnecessary inflation."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"end-users-mining",children:"End Users Mining:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Anyone with a laptop and with an ordinary account (End Users) can receive coins for creating a Delay Tower (proofs of elapsed time), as a basis for durable identity. We also call this mining."}),"\n",(0,i.jsx)(t.li,{children:"At genesis the protocol provides a subsidy for end users building up their identity."}),"\n",(0,i.jsx)(t.li,{children:'The reward pool for all miners is exactly the equivalent of one Validator Node\'s rewards in a given day. This can be thought of as a single system subsidized "mining pool".'}),"\n",(0,i.jsx)(t.li,{children:"It is a smaller reward compared to Validator Nodes. So, end users are encouraged to run Validator Nodes or pool together to share rewards of validator nodes. Future mining pools are up to the community to design and create."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"transferability",children:"Transferability:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"There are no restrictions on ordinary 0L accounts (end user accounts). But there are voluntary restrictions people can place on their account: Slow Wallet and Community Wallet tags"}),"\n",(0,i.jsx)(t.li,{children:"Though End users accounts receive relatively smaller amounts of coins for the Identity Subsidy, their accounts have no restrictions on transferability."}),"\n",(0,i.jsxs)(t.li,{children:["Slow Wallets","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Early participants of a network may receive generous subsidies, but they are prevented from dumping on less sophisticated users, these are Slow Wallets. All validator node accounts, where a majority of rewards flow to must be Slow Wallets."}),"\n",(0,i.jsx)(t.li,{children:"At genesis Slow Wallets currently cannot transfer Coins between accounts. At epoch 100, they get 10,000 coins unlocked per epoch (day)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Community Wallets","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Community Wallets are optional settings which allow greater transparency, and also allow owners of the account to help prevent fraud. This designation of wallet is useful for anyone wishing to set up a program for the community benefit."}),"\n",(0,i.jsx)(t.li,{children:"And it also appoints all addresses in the validator set to be observers of the wallet, and they can slow down transactions by vetoing. With sufficient Vetoes the transaction gets rejected."}),"\n",(0,i.jsx)(t.li,{children:"Community Wallets can only make transfers to Slow Wallets."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"sponsoring-programs-in-the-community",children:"Sponsoring Programs in the Community:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Autopay aims to make it trivially easy for early coin holders to send to development programs within the community."}),"\n",(0,i.jsx)(t.li,{children:"At this stage of the network Autopay can only send to wallets tagged Community Wallets, this is a benefit of being a Community Wallet."}),"\n",(0,i.jsx)(t.li,{children:"At time of writing, there are approximately 12 programs that have elected to use Community Wallets."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,i.jsx)(t.p,{children:"Like most smart contract platforms, the 0L System requires spending of credits (GAS Coins) for running smart contract computations on the system. These resources are allocated according to specific rules encoded in the core logic of the system."}),"\n",(0,i.jsx)(t.h2,{id:"earning-credit",children:"Earning Credit"}),"\n",(0,i.jsx)(t.p,{children:"Anyone can earn credits for themselves by performing computational work on the system. No permission is required. The OL network is a marketplace: of sellers of computation (Validators), and buyers of computation (End Users). The marketplace does not receive a fee. Instead the Validators receive the entirety of the Coins earned for the services performed."}),"\n",(0,i.jsx)(t.p,{children:"Since the transaction fees may not be sufficient inducement for a seller of computation to join as a Validator, the network has Guaranteed Minimum Transaction Fee, which is subsidized in certain network conditions."}),"\n",(0,i.jsx)(t.h2,{id:"guaranteed-minimum-transaction-fee",children:"Guaranteed Minimum Transaction Fee"}),"\n",(0,i.jsx)(t.p,{children:"At times when the network is insecure (with very few validators), the transaction fees flowing through the marketplace may not be attractive enough for a prospective seller of compute power to join."}),"\n",(0,i.jsx)(t.p,{children:"The Guaranteed Minimum provides a baseline earnings which the Validator can rely on. A network Subsidy makes up the difference between what actual transactions fees were paid, and what is justifiable as a minimum payment. If the Guaranteed Minimum is 10 Coins given a network condition, but the transaction fees amounted to 3 coins, then the network creates new credits amounting to 7 Coins, and thus pays the total of 10 to the validator. Supposing the minimum guaranteed calculated by the algorithm is instead 1 Coin per validator, and the same 3 coins were due from transaction feed, then the network does not create any new Coins, and pays the 3 coins to the validator (in excess of the 1 Coin the network considered a justifiable minimum)."}),"\n",(0,i.jsx)(t.p,{children:"The network's operating software encodes a schedule of the minimal accepted earnings given certain network conditions. The formula is intentionally simple. When there are four validators on the network (near failure) the guaranteed minimum is at its highest. When there are 100 validators on the network, (the transaction throughput is exponentially diminished beyond that amount in BFT networks) the network has excess compute power, and the minimum guaranteed is zero Coins. This means that at 100 validators the validators should expect to earn only the transaction fees flowing through the network. For easy comprehension by prospective validators the schedule is a straight line from 4 to 100 validators."}),"\n",(0,i.jsx)(t.p,{children:"This Auction aims to ensure the network always pays for security when it needs it, but does not overpay when it is not necessary to do so. It will appear generous at times, and miserly at others, but it should attract the necessary users."}),"\n",(0,i.jsx)(t.p,{children:"Note, these allocation rules make some assumptions about BFT, that there is a super majority of honest actors and that the most committed validators are included in the validator set (proof of weight from Delay Towers)"}),"\n",(0,i.jsx)(t.h2,{id:"identity-subsidy",children:"Identity Subsidy"}),"\n",(0,i.jsxs)(t.p,{children:["0L's identity subsidy mechanism relies on Validators creating Delay Towers (",(0,i.jsx)(t.a,{href:"https://siasky.net/EABaWAXFy3Ztx1vVIpOfScjkRaTb1GrFeGRwqFKd6V-hAg",children:"https://siasky.net/EABaWAXFy3Ztx1vVIpOfScjkRaTb1GrFeGRwqFKd6V-hAg"}),") which provide a persistent, and non-forgeable identity."]}),"\n",(0,i.jsx)(t.p,{children:"It is important for the network to have as many users as possible creating durable identities, i.e producing Delay Towers. It has a number of benefits: allowing users not yet set up as validators to create identities, allows fullnodes to receive some compensation for providing replication services, and allows the VDF delay mechanism to be tested in a wide variety of hardware configurations so that the difficulty can be periodically adjusted."}),"\n",(0,i.jsx)(t.p,{children:"While these activities are useful and deserve a meaningful subsidy, they are also low effort and cannot compete with the earnings to Validators (which are critical). This work is also less useful as the network matures, and has higher security (from Validator participation). Also the identity subsidy is highly gameable, and can lead to exploits by sophisticated users. The economics are designed such that those sophisticated users will be incentivized instead to run Validator nodes."}),"\n",(0,i.jsx)(t.p,{children:'To balance the needs of validators, and exploits possible, miners thus share the equivalent of 1 Validator\'s Guaranteed Minimum in every epoch. The identity subsidy is an example of a "mining pool", where the end users share the rewards of one validator node. At genesis the protocol is sponsoring this single mining pool. We expect future mining pools to be an emergent property of the network, as end users seek to receive more rewards, from naturally diminishing rewards to the single system mining pool'}),"\n",(0,i.jsx)(t.h2,{id:"transferring-credits",children:"Transferring Credits"}),"\n",(0,i.jsx)(t.p,{children:'Transfers of credits are unlimited for End User accounts (plain accounts). If an End User is running a "miner" and creating a tower, those credits are freely transferable.'}),"\n",(0,i.jsx)(t.p,{children:"There two categories of accounts that have opt-in rules for transfers"}),"\n",(0,i.jsx)(t.h3,{id:"community-wallets",children:"Community Wallets"}),"\n",(0,i.jsx)(t.p,{children:"These are wallets that have elected to have community oversight. If a person or entity would like to increase the credibility of that wallet (e.g to create a program), they may opt to have the transfers be slowed down or ultimately rejected. More details here:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Community wallets typically will receive funds from AutoPay, if anyone wishes to automatically donate a % of their credits."}),"\n",(0,i.jsx)(t.li,{children:"Sending automatic payments is easy. It is also encouraged socially. On the current network Validator Nodes are voluntarily opting into donating on average more than 50% of their rewards."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"slow-wallets",children:"Slow Wallets"}),"\n",(0,i.jsx)(t.p,{children:"Since transferring credits by early users can cause undesirable effects (e.g. creating markets and dumping credits on lesser informed users), the earliest members, and the ones most likely to accumulate large amounts of credits are rate-limited in transferring funds. Transferability also interferes with the ability of the auction for security. The exception is transferring credits to Community Wallets. Those transfers are unlimited."}),"\n",(0,i.jsx)(t.p,{children:"There are accounts that have elected to have restricted transferability. Those are designated Slow Wallets. To join a Validator Set a prospective user must have a Slow Wallet."}),"\n",(0,i.jsx)(t.p,{children:"Carpe diem \u270a\u2600\ufe0f"}),"\n",(0,i.jsx)(t.p,{children:"\xa0"})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(7294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);