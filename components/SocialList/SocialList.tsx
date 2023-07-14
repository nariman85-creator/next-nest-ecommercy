import Link from 'next/link';
import React from 'react'

export const SocialList = () => {
  return (
    <ul className="list social-list">
      <li className="social-item">
        <Link href={"#"}>
          <span className="icon-box facebook"></span>
        </Link>
      </li>
      <li className="social-item">
        <Link href={"#"}>
          <span className="icon-box tweeter"></span>
        </Link>
      </li>

      <li className="social-item">
        <Link href={"#"}>
          <span className="icon-box youtube"></span>
        </Link>
      </li>

      <li className="social-item">
        {" "}
        <Link href={"#"}>
          <span className="icon-box google"></span>
        </Link>
      </li>
    </ul>
  );
}
