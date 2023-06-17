import React from "react";
import MetaTags from 'react-meta-tags';
import StoreAsset from "../assets/img/store.png";
import OwnershipAsset from "../assets/img/ownership.png";
import TransferAsset from "../assets/img/transfer.png";
import MeAsset from "../assets/img/me.png";

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home">
      <MetaTags>
      <title>FileUnify</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta id="meta-description" name="description" content="Ethereum x IPFS DApp." />
        <meta id="og-title" property="og:title" content="MyApp" />
      </MetaTags>

      <section className="bg-dark text-light p-5 text-left">
        <div className="container">
          <div className="d-sm-flex">
            <div>
              <h1>Welcome to <span className="text-warning">FileUnify</span></h1>
              <p className="lead">
                
              FileUnify is a revolutionary <span className="fw- text-warning">DApp</span> that harnesses the strengths of 
              <span className="fw text-warning"> IPFS </span>and <span className="fw text-warning">FVM</span> to provide a safe and reliable 
               storage solution for <span className="fw text-warning">humanity&apos;s </span>most important information. With innovative features like 
              ownership <span className="fw text-warning"> transfer,</span> owner<span className="fw text-warning"> checking,</span> and asset <span className="fw text-warning">retrieval.</span>
              {/* <span className="fw-bold text-warning">
                <br/>
                <br/>
                FileUnify</span> is the go-to platform for safeguarding digital assets or documents. */}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="store" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={StoreAsset} className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <h2>Store!</h2>
              <p className="lead">
                Where our journey begins.
              </p>
              <p>
                The first step is the easiest. We are fully aware that simplicity is everything
                so we make the process of saving your files as simple as saving your money in your piggy bank.
                IPFS will take care of your files while our smart contracts will record your transactions
                securely on the blockchain.
              </p>
              <a href="/store" class="btn btn-dark mt-3 text-white">
                <i class="bi bi-chevron-right"></i> Store
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="ownership" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Ownership?</h2>
              <p className="lead">
                You own everything.
              </p>
              <p>
                Thanks to the blockchain technology and <span className="fw-bold text-warning">InterPlanetary File System</span>,
                your files are safe with us. This ownership page lets you manage all your files,
                and amazingly allows you to transfer ownership of those files.
                Other users on this network can receive the files you transfer and again, blockchain will take care of the rest.
              </p>
              <a href="/ownership" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Ownership
              </a>
            </div>
            <div className="col-md">
              <img src={OwnershipAsset} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="transfer" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={TransferAsset} className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <h2>Transfer!</h2>
              <p className="lead">
                From you to your fella.
              </p>
              <p>
                Yes you can do ownership transfer!
                FileUnify lets you transfer ownership of your stored files.
                We thank our sole developer who have grown us to this extent.
                All you need is your file and address of the recipient.
                Don't worry, it's all free because we implement ownership transfer with non-payable rules.
              </p>
              <a href="/transfer" class="btn btn-dark mt-3 text-white">
                <i class="bi bi-chevron-right"></i> Transfer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="me" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Me.</h2>
              <p className="lead">
                You.
              </p>
              <p>
                No need for registration, everything will be taken care of by <span className="fw-bold text-warning">Metamask</span>.
                Just set up your wallet, connect to our network and you are ready to go.
                All you need is to keep your private key safe with you.
                We can handle everything but your account is yours, so make sure you don't make any fatal mistake.
              </p>
              <a href="/me" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Me
              </a>
            </div>
            <div className="col-md">
              <img src={MeAsset} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;