import React from 'react'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"
import * as styles from './share-bar.module.css'

const ShareBar = ({
  shareURL,
  title,
}) => (
  <div className={styles.shareBar}>
    <EmailShareButton
      url={shareURL}
      subject={title || "Email"}
    >
      <EmailIcon size={32} round />
    </EmailShareButton>

    <FacebookShareButton
      url={shareURL}
      title={title || "Facebook"}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    <LinkedinShareButton
      url={shareURL}
      title={title || "Linkedin"}
    >
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>

    <RedditShareButton
      url={shareURL}
      title={title || "Reddit"}
    >
      <RedditIcon size={32} round />
    </RedditShareButton>

    <TelegramShareButton
      url={shareURL}
      title={title || "Telegram"}
    >
      <TelegramIcon size={32} round />
    </TelegramShareButton>

    <TumblrShareButton
      url={shareURL}
      title={title || "Tumblr"}
    >
      <TumblrIcon size={32} round />
    </TumblrShareButton>

    <TwitterShareButton
      url={shareURL}
      title={title || "Twitter"}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>

    <WhatsappShareButton
      url={shareURL}
      title={title || "Whatsapp"}
    >
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
  </div>
)

export default ShareBar
