import Link from 'next/link';
import { FC } from 'react';
import './SocialList.css';
type SocialPropsType = {
  className?:string
}

export const SocialList:FC<SocialPropsType> = ({className}) => {
  return (
    <ul className={`list ${className}`}>
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
