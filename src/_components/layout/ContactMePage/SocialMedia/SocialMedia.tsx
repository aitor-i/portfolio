import Link from "next/link";

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import styles from "./SocialMedia.module.css";

export const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <div className={styles.socialMediaLink}>
        <Link
          href={"https://github.com/aitor-i"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={"3rem"} />
        </Link>
      </div>
      <div className={styles.socialMediaLink}>
        <Link
          href={"https://twitter.com/aitori9_i"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={"3rem"} />
        </Link>
      </div>
      <div className={styles.socialMediaLink}>
        <Link
          href={"https://www.linkedin.com/in/aitor-i-5b1b1b1b2/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={"3rem"} />
        </Link>
      </div>
    </div>
  );
};
