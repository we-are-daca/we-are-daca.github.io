import React from "react";
import { ShareButtons, generateShareIcon } from "react-share";
import "./common.css";

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

const FacebookIcon = generateShareIcon("facebook");
const TwitterIcon = generateShareIcon("twitter");

const Info = props => (
  <div className="share-container">
    <div className="share">
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
    <div className="share-padded">
      <TwitterShareButton url={window.location.href}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
    <div className="share-separator" />
  </div>
);

export default Info;
