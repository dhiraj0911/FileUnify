// Front-end
import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
// UI
import 'bootstrap/dist/css/bootstrap.min.css';
import MeAsset from "../assets/img/me.png";
import MetamaskAsset from "../assets/img/metamask.png";
import Filecoin from "../assets/img/filecoin.png";
import Ipfs from "../assets/img/ipfs.png";
import FVM from "../assets/img/fvm.png"

// Contract
import FileUnify from "../contracts/FileUnify.json";
import getWeb3 from "../getWeb3";

class Me extends Component {
  state = {
    web3: null, accounts: null, contract: null,
    activeAccount: 'Anonymous',
    tagline: 'You are offline, connect to metamask to continue.'
  }

  componentDidMount = async () => {
    const web3 = await getWeb3();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = FileUnify.networks[networkId];
    const instance = new web3.eth.Contract(FileUnify.abi,
      deployedNetwork && deployedNetwork.address,
    );
    this.setState({ web3, contract: instance})
    setInterval(async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        this.setState({ accounts });
        if(this.state.activeAccount !== accounts[0]){
          var active = accounts[0];
          this.setState({ activeAccount: active })
          this.setState({ tagline: "You are now online on FileUnify!"})
        }
      } catch (error) {
        alert(`You are offline, connect to metamask to continue.`);
        console.error(error);
      }
    }, 500)
  }

  render () {
    return (
      <section id="Me" className="p-5">
        <MetaTags>
          <title>Me</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta id="meta-description" name="description" content="Ethereum x IPFS DApp." />
          <meta id="og-title" property="og:title" content="FileUnify" />
        </MetaTags>

        <div className="container">
          <center className="lead">
            <b>{"Support Me :)"}<br /></b>
            <br/>
            <span className="fs-6 fw-bold">
            Filecoin Address: f1aq5sg2r53ws3tlki77phxdjwac3pcblsk7syaaq <br />
            Ethereum Address: 0x62D02613ed56119705165942cc724f207899D1C4<br />
            
            </span>
          </center>
          <div className="justify-content-between">
            <div>
              <img src={MeAsset} className="mx-auto d-block" alt="" width="20%" height="20%" />
            </div>

            <div className="px-3 d-flex align-items-center justify-content-center">
              <h1>Me</h1>
            </div>

            <div className="px-3 pt-3 d-flex align-items-center justify-content-center">
              <p className="lead text-center">
                Good Day, <span className="fs-6 fw-bold">{this.state.activeAccount}!</span><br />
                {this.state.tagline}
              </p>
            </div>

            <hr />
            
          </div>
        </div>
      
        <section id="store" className="px-5 pb-5">
        <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md text-center">
                <img src={FVM} className="img-fluid" width="50%" height="50%" alt="" />
              </div>
              <div className="col-md p-5">
                <h2>Filecoin Virtual Machine</h2>
                <p className="lead">
                FVM is a runtime environment for smart contracts on the Filecoin network.
                </p>
                <p>
                Filecoin Virtual Machine is an EVM-compatible programmability layer on the Filecoin network
                </p>
                <a href="https://fvm.filecoin.io/" className="btn btn-light mt-3" target="_blank" rel="noreferrer">
                  <i className="bi bi-chevron-right"></i> FVM
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md text-center">
                <img src={Ipfs} className="img-fluid" width="50%" height="50%" alt="" />
                <img src={Filecoin} className="img-fluid" width="50%" height="50%" alt="" />
              </div>
              <div className="col-md p-5">
                <h2>IPFS and Filecoin</h2>
                <p className="lead">
                 IPFS and Filecoin are complementary protocols for storing and sharing data in the distributed web.
                </p>
                <p>
                  IPFS is a peer-to-peer hypermedia protocol
                  designed to preserve and grow humanity's knowledge
                  by making the web upgradeable, resilient, and more open.<br></br>
                  Filecoin is an open-source, public cryptocurrency and digital payment system intended to be a blockchain-based cooperative digital storage and data retrieval method.
                </p>
                <a href="https://ipfs.io/" className="btn btn-light mt-3" target="_blank" rel="noreferrer">
                  <i className="bi bi-chevron-right"></i> IPFS
                </a>&nbsp;&nbsp;&nbsp;    
                <a href="https://filecoin.io/" className="btn btn-light mt-3" target="_blank" rel="noreferrer">
                  <i className="bi bi-chevron-right"></i> Filecoin
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Me;