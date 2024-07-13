"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[5968],{4810:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=r(5893),o=r(1151);const t={title:"Running a fullnode/vfn/validator node with docker",sidebar_position:8,sidebar_label:"Docker setup",description:"Running a fullnode/vfn/validator node with docker"},a=void 0,l={id:"validators/with-docker-setup",title:"Running a fullnode/vfn/validator node with docker",description:"Running a fullnode/vfn/validator node with docker",source:"@site/docs/validators/with-docker-setup.md",sourceDirName:"validators",slug:"/validators/with-docker-setup",permalink:"/validators/with-docker-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/with-docker-setup.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Running a fullnode/vfn/validator node with docker",sidebar_position:8,sidebar_label:"Docker setup",description:"Running a fullnode/vfn/validator node with docker"},sidebar:"tutorialSidebar",previous:{title:"VFN",permalink:"/validators/vfn-setup"},next:{title:"Hot Upgrades",permalink:"/validators/hot-upgrades"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build the libra node docker image (both for single or double IPv4)",id:"build-the-libra-node-docker-image-both-for-single-or-double-ipv4",level:2},{value:"Single IP setup",id:"single-ip-setup",level:2},{value:"Create the docker-compose file",id:"create-the-docker-compose-file",level:3},{value:"Ensure your configuration files are in place.",id:"ensure-your-configuration-files-are-in-place",level:3},{value:"Run tower",id:"run-tower",level:3},{value:"Create the docker-compose file (double IP)",id:"create-the-docker-compose-file-double-ip",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"WIP",type:"danger",children:(0,i.jsxs)(n.p,{children:["This page is a work in progress.",(0,i.jsx)(n.br,{}),"\n","Tread carefully."]})}),"\n",(0,i.jsxs)(n.p,{children:["The canonical way of running the standard 0L setup, is to have two machines, one for the validator node, and one for the fullnode that acts as the gateway of the validator to the world (see ",(0,i.jsx)(n.a,{href:"/validators/vfn-setup",children:"VFN here"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"This page describes how to setup a node with docker, which provides a convenient way to hit the ground running without managing packages and installation on the host machine."}),"\n",(0,i.jsx)(n.p,{children:"In addition, a validator can take an advantage of this configuration and run both the validator node and the VFN on the same machine. This would require a second network interface with a new IPv4 address. See further details below."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This guide would not cover those"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ubuntu 22.04"}),"\n",(0,i.jsx)(n.li,{children:"Docker"}),"\n",(0,i.jsx)(n.li,{children:"docker compose"}),"\n",(0,i.jsx)(n.li,{children:"sudo access"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"build-the-libra-node-docker-image-both-for-single-or-double-ipv4",children:"Build the libra node docker image (both for single or double IPv4)"}),"\n",(0,i.jsx)(n.p,{children:"Place this Dockerfile somewhere in your system (~/workspace/SOME_NAME/Dockerfile):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Dockerfile\n\n# Use Debian 11 image as the base for the build stage\nFROM debian:11 as build\n\n# Set the PATH environment variable to include the Rust Cargo bin directory\nENV PATH="/root/.cargo/bin:${PATH}"\n\n# Install system dependencies required for building the project\n# These include compilers, development tools, libraries, and other utilities\nRUN apt-get update -y -q && apt-get install -y -q \\\n  build-essential \\\n  curl \\\n  cmake \\\n  clang \\\n  git \\\n  libgmp3-dev \\\n  libssl-dev \\\n  llvm \\\n  lld \\\n  pkg-config \\\n  ca-certificates \\\n  update-ca-certificates \\\n  && rm -rf /var/lib/apt/lists/*\n\n\n# Install Rust using rustup and set the default toolchain to stable\nRUN curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y\n\n# Install Rust packages with Cargo\nRUN cargo install toml-cli      # Command-line tool to manipulate TOML files\nRUN cargo install sccache       # Shared Compilation Cache to speed up recompiles\n\n# Arguments that can be overridden at build time\nARG REPO=https://github.com/0LNetworkCommunity/libra-framework.git\nARG BRANCH=main\n\n# Set the working directory to /root\nWORKDIR /root\n\n# Clone the specified branch or release tag from the given repository\nRUN echo "Checking out \'${BRANCH}\' from \'${REPO}\' ..." \\\n  && git clone ${REPO} \\\n  && cd libra-framework \\\n  && git fetch --all && git checkout ${BRANCH} \\\n  && echo "Commit hash: $(git rev-parse HEAD)"\n\n# Set the working directory to the cloned repository\nWORKDIR /root/libra-framework\n\n# Build the specified Rust packages as release binaries\nRUN cargo build --release \\\n     -p libra \\\n     -p libra-genesis-tools \\\n     -p libra-txs \\\n     -p diem-db-tool\n\n# Start a new, final image to reduce size using Debian 11 slim variant\nFROM debian:11-slim as production\n\n# Copy the built binaries from the \'build\' stage to the \'production\' image\nCOPY --from=build [ \\\n  "/root/libra-framework/target/release/libra", \\\n  "/root/libra-framework/target/release/libra-genesis-tools", \\\n  "/root/libra-framework/target/release/libra-txs", \\\n  "/root/libra-framework/target/release/diem-db-tool", \\\n  "/usr/local/bin/"]\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"In the same folder you placed the Dockerfile, run the following commands to build the image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -t openlibra:main .\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will take several minutes, depends on your machine. A community image might be available in the future from docker hub. There is a value also in building your own image and not relying on a centralized image."}),"\n",(0,i.jsx)(n.p,{children:"Ensure image was built successfully"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker images | grep openlibra\n\nopenlibra      main                     b64dbca39f51   9 minutes ago   153MB\n"})}),"\n",(0,i.jsx)(n.h2,{id:"single-ip-setup",children:"Single IP setup"}),"\n",(0,i.jsx)(n.h3,{id:"create-the-docker-compose-file",children:"Create the docker-compose file"}),"\n",(0,i.jsx)(n.p,{children:"Place the following docker-compose.yaml file in the same folder as the Dockerfile:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# docker-compose.yaml\n\n##########      Defaults    #############\nx-defaults: &defaults\n  image: "openlibra:main"\n  restart: "on-failure"\n  pid: host \n  ulimits:\n    nproc: 500000\n    nofile: 500000\n  volumes:\n    - "node_data:/root/.libra"\n\nx-util-defaults: &util-defaults\n  <<: *defaults\n  restart: "no"\n  command: [ "tail", "-f", "/dev/null" ]\n\nversion: "3.8"\nservices:\n  ##########  Main services   #############\n\n  fullnode:\n    <<: *defaults\n    container_name: "0l-fullnode"\n    cpuset: "0"\n    command:\n      [\n        "libra",\n        "node",\n        "--config-path",\n        "/root/.libra/fullnode.yaml"\n      ]\n    ports:\n      - "6180:6180"\n      - "6181:6181"\n      - "6182:6182"\n      - "8080:8080"\n      - "9101:9101"\n\n  validator:\n    <<: *defaults\n    container_name: "0l-validator"\n    cpuset: "0"\n    command:\n      [\n        "libra",\n        "node",\n        "--config-path",\n        "/root/.libra/validator.yaml"\n      ]\n    ports:\n      - "6180:6180"\n      - "6181:6181"\n      - "6182:6182"\n      - "8080:8080"\n      - "9101:9101"\n\n  vfn:\n    <<: *defaults\n    container_name: "0l-vfn"\n    cpuset: "0"\n    command:\n      [\n        "libra",\n        "node",\n        "--config-path",\n        "/root/.libra/vfn.yaml"\n      ]\n    ports:\n      - "6180:6180"\n      - "6181:6181"\n      - "6182:6182"\n      - "8080:8080"\n      - "9101:9101"\n      \n  tower: # needs mnemonic injection\n   <<: *defaults\n   container_name: "0l-tower"\n   cpuset: "1"\n   stdin_open: true\n   tty: true\n   command:\n     [\n       "libra",\n       "tower",\n       "start",\n     ]\n\n  shell:\n   <<: *util-defaults\n   container_name: 0l-shell\n\nvolumes:\n  node_data:\n    driver: local\n    driver_opts:\n      type: none\n      o: bind\n      device: "~/.libra"\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"ensure-your-configuration-files-are-in-place",children:"Ensure your configuration files are in place."}),"\n",(0,i.jsxs)(n.p,{children:["Depends on which service you wish to run (fullnode/validator/vfn), you'd need to place the relevant yaml files in the ",(0,i.jsx)(n.code,{children:"~/.libra"})," folder."]}),"\n",(0,i.jsx)(n.p,{children:"Run the following commands based on your needs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"libra config fullnode-init\n\n# or\n\nlibra config validator-init\n\n# or\n\nlibra config validator-init --vfn\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that you'd need to replace your user home path in the template default ",(0,i.jsx)(n.code,{children:"data_dir"}),", and the ",(0,i.jsx)(n.code,{children:"genesis_file_location"})," to point to ",(0,i.jsx)(n.code,{children:"/root/.libra/...rest_of_path_unchanged"})]}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of modified ",(0,i.jsx)(n.code,{children:"fullnode.yaml"})," relevant entries:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"...\n\nbase:                   \n  data_dir: '/root/.libra/data'\n\nexecution:\n  genesis_file_location: '/root/.libra/genesis/genesis.blob'\n...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Start the desired service with ",(0,i.jsx)(n.code,{children:"docker compose"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose up -d fullnode\n\n# or\n\ndocker compose up -d validator\n\n# or vfn or tower, etc.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Ensure the node is running by examining the updated ",(0,i.jsx)(n.code,{children:"ledger_version"})," over few seconds"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"watch 'curl localhost:8080/v1/ | jq'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or check the container logs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose logs -f --tail 50 fullnode\n\n# or replace fullnode with validator or vfn\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"If the version is 0 or you're having connectvitiy issues",type:"warning",children:(0,i.jsxs)(n.p,{children:["Do the manual DB restore as described in the ",(0,i.jsx)(n.a,{href:"/validators/restore#clone-and-build-the-epoch-archive-mainnet-repository",children:"Restore section"})," and then ",(0,i.jsx)(n.a,{href:"/validators/restore#how-to-clean-the-database-and-sync-to-the-latest-state-again",children:"clean and sync"})]})}),"\n",(0,i.jsx)(n.h3,{id:"run-tower",children:"Run tower"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose run tower\n"})}),"\n",(0,i.jsx)(n.h2,{id:"create-the-docker-compose-file-double-ip",children:"Create the docker-compose file (double IP)"}),"\n",(0,i.jsx)(n.admonition,{title:"WIP Beyond this line",type:"warning"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Dual NIC setup"})}),"\n",(0,i.jsx)(n.p,{children:"Part 1: Configure second IP"}),"\n",(0,i.jsxs)(n.p,{children:["Using Netplan (default ubuntu network manager), edit your ",(0,i.jsx)(n.code,{children:"/etc/netplan/01-netcfg.yaml"})]}),"\n",(0,i.jsx)(n.p,{children:"Identify your ethernet id (enp5s0 in this example), add the second IP to its addresses list"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"network:\n  version: 2\n  renderer: networkd\n  ethernets:\n    enp5s0:\n      addresses:\n        - 188.primary.ip.here/32\n        - 188.secondary.ip.here/32 # <--- add this line\n        - primary:ip:v:6/64\n      routes:\n        - on-link: true\n          to: 0.0.0.0/0\n          via: your.ip.subnet.mask\n        - to: default\n          via: fe80::1\n      nameservers:\n        addresses:\n          - some.ip.v.4\n          - some.ip.v.6\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Apply changes\n",(0,i.jsx)(n.code,{children:"sudo netplan apply"})]}),"\n",(0,i.jsxs)(n.p,{children:["Confirm changes\n",(0,i.jsx)(n.code,{children:"ip addr"})]}),"\n",(0,i.jsx)(n.p,{children:"Under the modified interface, you should see the second IP address"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host \n       valid_lft forever preferred_lft forever\n2: enp5s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000\n    link/ether c8:7f:tag:tag:tag brd ff:ff:ff:ff:ff:ff\n    ############\n    inet your.primary.ip.here/32 scope global enp5s0\n       valid_lft forever preferred_lft forever\n    inet your.secondary.ip.here/32 scope global enp5s0 # <--- make sure second IP appears here\n       valid_lft forever preferred_lft forever\n    ############\n    inet6 primary:ip:v:6/64 scope global \n       valid_lft forever preferred_lft forever\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var i=r(7294);const o={},t=i.createContext(o);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);