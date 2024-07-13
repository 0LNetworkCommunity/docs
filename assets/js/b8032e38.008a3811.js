"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[7361],{3196:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=s(5893),i=s(1151);const t={sidebar_position:5,sidebar_label:"Genesis Ceremony",description:"Launch the 0L Network"},o="Genesis Ceremony",a={id:"validators/genesis",title:"Genesis Ceremony",description:"Launch the 0L Network",source:"@site/docs/validators/genesis.md",sourceDirName:"validators",slug:"/validators/genesis",permalink:"/validators/genesis",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/genesis.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Genesis Ceremony",description:"Launch the 0L Network"},sidebar:"tutorialSidebar",previous:{title:"Restore",permalink:"/validators/restore"},next:{title:"Post-Genesis Ceremony Registration",permalink:"/validators/register"}},l={},d=[{value:"The Purpose of the Genesis Ceremony",id:"the-purpose-of-the-genesis-ceremony",level:2},{value:"High Level Ceremony Steps",id:"high-level-ceremony-steps",level:2},{value:"Genesis Ceremony Steps",id:"genesis-ceremony-steps",level:2},{value:"1. Operator name and cleanup of previous binaries or testnet data",id:"1-operator-name-and-cleanup-of-previous-binaries-or-testnet-data",level:3},{value:"2. Get your static IP and open necessary ports",id:"2-get-your-static-ip-and-open-necessary-ports",level:3},{value:"3. Fetch source &amp; verify commit hash",id:"3-fetch-source--verify-commit-hash",level:3},{value:"4. Build and install the libra binaries",id:"4-build-and-install-the-libra-binaries",level:3},{value:"5. Account Preparation and Adding GitHub PAT (use classic with repo privileges)",id:"5-account-preparation-and-adding-github-pat-use-classic-with-repo-privileges",level:3},{value:"6. Export genesis ceremony repository and register for genesis",id:"6-export-genesis-ceremony-repository-and-register-for-genesis",level:3},{value:"7. PR Received",id:"7-pr-received",level:3},{value:"8. PR Merged",id:"8-pr-merged",level:3},{value:"9. Build JSON_Legacy from snapshot and ancestry",id:"9-build-json_legacy-from-snapshot-and-ancestry",level:3},{value:"10. All nodes added to <code>layout.yaml</code> users key",id:"10-all-nodes-added-to-layoutyaml-users-key",level:3},{value:"11. Make Genesis",id:"11-make-genesis",level:3},{value:"12. Start nodes!",id:"12-start-nodes",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"genesis-ceremony",children:"Genesis Ceremony"}),"\n",(0,r.jsx)(n.p,{children:"This guide outlines the essential steps for conducting a Genesis Ceremony in the 0L Network."}),"\n",(0,r.jsx)(n.h2,{id:"the-purpose-of-the-genesis-ceremony",children:"The Purpose of the Genesis Ceremony"}),"\n",(0,r.jsx)(n.p,{children:"A Genesis Ceremony is a pivotal event marking the creation of the network's genesis block \u2014 the foundational block that\nunderpins the entire blockchain.\nThe genesis of a network can begin with a blank state (0 balances) or with preserving the state of an earlier chain and\nmigrate to the new chain during the genesis ceremony. The latter approach is also known as a fork.\nIt is a crucial process that not only initiates the network but also involves migrating the network's state from an\nearlier version to the next version."}),"\n",(0,r.jsx)(n.p,{children:"Follow this document to navigate the process effectively, ensuring a smooth and successful launch or upgrade of the 0L\nNetwork."}),"\n",(0,r.jsx)(n.h2,{id:"high-level-ceremony-steps",children:"High Level Ceremony Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Operator Name & Cleanup"}),"\n",(0,r.jsx)(n.li,{children:"Static IP & Open Ports"}),"\n",(0,r.jsx)(n.li,{children:"Fetch Source & Verify Commit Hash"}),"\n",(0,r.jsxs)(n.li,{children:["Build ",(0,r.jsx)(n.code,{children:"libra-framework"})," Packages"]}),"\n",(0,r.jsx)(n.li,{children:"Account Preparation and Adding GitHub PAT"}),"\n",(0,r.jsxs)(n.li,{children:["Pre-Genesis Registration","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Stop"}),": Wait for the coordinator to merge all PR's. Step 8 can be done while you wait"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"PR Received"}),"\n",(0,r.jsx)(n.li,{children:"PR Merged"}),"\n",(0,r.jsx)(n.li,{children:"Build JSON_Legacy"}),"\n",(0,r.jsxs)(n.li,{children:["All Nodes Added to ",(0,r.jsx)(n.code,{children:"layout.yaml"})," Users Key","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Wait for the Coordinator"}),": Wait for the coordinator post-pre-genesis set closure and to add all genesis participants."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Pull from Genesis Repo and Build","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Wait for the Coordinator"}),": Wait for the coordinator's signal to start."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Start Nodes!"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Coordination happens via the 0L Discord server voice channels, and a Google Sheet will track participants at each. Each\nstep requires careful attention to the coordinator's instructions."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Only proceed with asynchronous steps after the coordinator confirms the previous sequential blocking steps as completed."})}),"\n",(0,r.jsx)(n.h2,{id:"genesis-ceremony-steps",children:"Genesis Ceremony Steps"}),"\n",(0,r.jsx)(n.h3,{id:"1-operator-name-and-cleanup-of-previous-binaries-or-testnet-data",children:"1. Operator name and cleanup of previous binaries or testnet data"}),"\n",(0,r.jsxs)(n.p,{children:["Provide your operator name (handle) in the ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690",children:"Genesis Worksheet"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["If you have participated in testnets, delete any previous forks of testnet repos (such as ",(0,r.jsx)(n.code,{children:"release-v6.9.0-rc.0-genesis-2"}),") from your GitHub repositories."]}),"\n",(0,r.jsxs)(n.p,{children:["Previous clones and testnets leave data in the ",(0,r.jsx)(n.code,{children:".libra"})," directory, clean those up by removing these directories"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf ~/libra-framework && rm -rf ~/.libra/libra-legacy-v6\nrm -rf ~/.libra/data && rm -rf ~/.libra/genesis && rm -rf ~/.libra/secure-data.json\nrm -f /usr/bin/libra && rm -rf /usr/local/bin/libra && rm -f ~/.cargo/bin/libra\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-get-your-static-ip-and-open-necessary-ports",children:"2. Get your static IP and open necessary ports"}),"\n",(0,r.jsx)(n.p,{children:"Fetch your external Static IP and set it aside"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s ipinfo.io | jq .ip\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The validator should have the following ports open: ",(0,r.jsx)(n.code,{children:"6180"}),", ",(0,r.jsx)(n.code,{children:"6181"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"6180"})," should be open on all interfacess ",(0,r.jsx)(n.code,{children:"0.0.0.0/0"}),", it's for consensus and uses noise encryption."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"6181"}),' is for the private validator fullnode network ("VFN"), the firewall should only allow the IP of the fullnode to access this port.']}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-fetch-source--verify-commit-hash",children:"3. Fetch source & verify commit hash"}),"\n",(0,r.jsx)(n.p,{children:"We suggest you start a new tmux session"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install tmux -y\ntmux new -t libra-node\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Clone the ",(0,r.jsx)(n.code,{children:"libra-framework"})," repository and make sure you are on the correct branch"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~\ngit clone https://github.com/0LNetworkCommunity/libra-framework\ncd ~/libra-framework\ngit fetch --all && git checkout release-6.9.0-rc.10\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ensure the commit hash matches your peers and the coordinator"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'git log -n 1 --pretty=format:"%H"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:["Confirm the git hash in the ",(0,r.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690",children:"Genesis Worksheet"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-build-and-install-the-libra-binaries",children:"4. Build and install the libra binaries"}),"\n",(0,r.jsx)(n.p,{children:"To use many of our genesis CLI tooling, we have to switch to its directory"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/libra-framework/tools/genesis\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If your directory structure setup is different from the default, you can override the defaults by exporting the following environment variables: ",(0,r.jsx)(n.code,{children:"SOURCE_PATH"}),", ",(0,r.jsx)(n.code,{children:"BINS_PATH"}),", ",(0,r.jsx)(n.code,{children:"DATA_PATH"}),". See the ",(0,r.jsx)(n.a,{href:"https://github.com/0LNetworkCommunity/libra-framework/blob/03d9f10bb539bda4c3f9de96e4a411971ec88d80/tools/genesis/Makefile#L7",children:"Makefile"})," for more details."]}),"\n",(0,r.jsx)(n.p,{children:"Install the source and reload bash"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install make -y\nEPOCH=692 make install && source ~/.bashrc\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:['Confirm with "done" in the ',(0,r.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690",children:"Genesis Worksheet"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"5-account-preparation-and-adding-github-pat-use-classic-with-repo-privileges",children:"5. Account Preparation and Adding GitHub PAT (use classic with repo privileges)"}),"\n",(0,r.jsxs)(n.p,{children:["Acquire ",(0,r.jsx)(n.a,{href:"https://github.com/settings/tokens",children:"GitHub Personal Access Token (PAT)"})," with repo privileges. Paste it aside."]}),"\n",(0,r.jsx)(n.p,{children:"If you are new and do not have an account, create one, carefully record your seed phrase, and keep it aside for later"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"libra wallet keygen\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Setup the validator configs and data directory ",(0,r.jsx)(n.code,{children:"~/.libra"})," (it is OK to refresh your configs)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"libra config validator-init\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieve Validator address and paste it aside"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"grep 'account_address' ~/.libra/public-keys.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Paste your GitHub PAT in the ",(0,r.jsx)(n.code,{children:"~/.libra/github_token.txt"})," file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano ~/.libra/github_token.txt\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:["Enter your Validator Address Static IP in the ",(0,r.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690",children:"Genesis Worksheet"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"6-export-genesis-ceremony-repository-and-register-for-genesis",children:"6. Export genesis ceremony repository and register for genesis"}),"\n",(0,r.jsx)(n.p,{children:"Export the genesis ceremony repository as an environment variable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export GIT_REPO=release-v6.9.0-genesis-registration\n"})}),"\n",(0,r.jsx)(n.p,{children:"Register for genesis"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make register\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:['Confirm with "done" in the ',(0,r.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690",children:"Genesis Worksheet"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Please wait for the coordinator at this step."})}),"\n",(0,r.jsx)(n.h3,{id:"7-pr-received",children:"7. PR Received"}),"\n",(0,r.jsx)(n.p,{children:"(coordinator confirms)"}),"\n",(0,r.jsx)(n.h3,{id:"8-pr-merged",children:"8. PR Merged"}),"\n",(0,r.jsx)(n.p,{children:"(coordinator merges your PR)"}),"\n",(0,r.jsx)(n.h3,{id:"9-build-json_legacy-from-snapshot-and-ancestry",children:"9. Build JSON_Legacy from snapshot and ancestry"}),"\n",(0,r.jsx)(n.p,{children:"Build the legacy json"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make legacy\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:["Confirm ",(0,r.jsx)(n.code,{children:"v5_recovery.json"})," md5 hash in the ",(0,r.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690",children:"Genesis Worksheet"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"10-all-nodes-added-to-layoutyaml-users-key",children:["10. All nodes added to ",(0,r.jsx)(n.code,{children:"layout.yaml"})," users key"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Please wait for the coordinator. Pre-genesis set closes here."})}),"\n",(0,r.jsx)(n.h3,{id:"11-make-genesis",children:"11. Make Genesis"}),"\n",(0,r.jsx)(n.p,{children:"Pull from the genesis repo and build genesis"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make genesis\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Confirm with "done" in the ',(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690",children:"Genesis Worksheet"}),"."]})]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Please wait for the coordinator."})}),"\n",(0,r.jsx)(n.h3,{id:"12-start-nodes",children:"12. Start nodes!"}),"\n",(0,r.jsx)(n.p,{children:"Wait for the coordinator, say a prayer, then start!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"libra node\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To disconnect from your tmux session ",(0,r.jsx)(n.code,{children:"CTRL + b"})," and then ",(0,r.jsx)(n.code,{children:"d"})," to disconnect. To reconnect you can use ",(0,r.jsx)(n.code,{children:"tmux a -t libra-node"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You could also consider running ",(0,r.jsx)(n.code,{children:"libra node"})," as a service ",(0,r.jsx)(n.a,{href:"detailed-instructions#setup-as-a-serviceoptional",children:"which is detailed here"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"End Of The Genesis Ceremony Steps."})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(7294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);