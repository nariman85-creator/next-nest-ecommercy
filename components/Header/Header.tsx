"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEvent, useEffect, useState } from "react";

import ArrowDown from "../ArrowDown";
import { Logo } from "../icons/Logo";
import { Input } from "../Input";

import "./Header.css";

interface HeaderProps {
  fill?: string;
}
const langItems: { [key: string]: string } = {
  en: "English",
  ru: "Russian",
};
const moneyItems: { [key: string]: string } = { en: "USD", ru: "RUB" };

export default function Header({ fill }: HeaderProps) {
  let lang: string = navigator.language;
  const [langvalue, setLangValue] = useState<string>(langItems[lang]);
  const [monValue, setMonValue] = useState<string>(moneyItems[lang]);
  const [langState, setLangState] = useState<boolean>(false);
  const [monState, setMonState] = useState<boolean>(false);
  const onFocusAndHideHandle = () => {
    return (e: MouseEvent) => {
      const targetItem = e.target as SVGElement;
      if (targetItem.id === "lang") {
        setLangState(!langState);
      }
      if (targetItem.id === "money") {
        setMonState(!monState);
      }
    };
  };
  const onChangeText = (fn: Function) => {
    return (e: React.MouseEvent) => {
      const anchor = e.target as HTMLAnchorElement;
      const value = anchor.firstChild?.nodeValue;
      if (anchor.id === "lang") {
        setLangState(false);
        fn(value);
      }
      if (anchor.id === "money") {
        setMonState(!monState);
        fn(value);
      }
    };
  };
  const params = usePathname().replace("/", "");
  useEffect(() => {
    const link = document.querySelectorAll(".shop-pagination__list a");
    link.forEach((a) => {
      if (a.classList.contains("active")) {
        a.classList.remove("active");
      }
      if (params === "") {
        if (a.firstChild?.nodeValue?.toLowerCase() === "home") {
          a.classList.add("active");
        }
      }
      if (a.firstChild?.nodeValue?.toLowerCase() === params) {
        a.classList.add("active");
      }
    });
  }, [params]);

  return (
    <header className={`header`} style={{ backgroundColor: fill ?? "" }}>
      <div className="container">
        <div className="header-content">
          <div className="header-top">
            <div className="header-content__item">
              <Input placeholder="Search" inputType="search" />
            </div>
            <div className="header-content__item">
              <div className="shop-logo">
                <Link href={"/"}>
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="header-content__item">
              <nav className="nav-user__tools">
                <ul className="user-tools__list df">
                  <li className="user-tools__item prel df wrap-collapsed--item ">
                    <div className=" tools-item df user-tools--lang">
                      <span className="lang-text collapsed--text">
                        {langvalue}
                      </span>
                      <span
                        className="icon--box down--icon"
                        onClick={onFocusAndHideHandle()}
                      >
                        <ArrowDown
                          className={`lang-icon collapsed--icon ${
                            langState ? "flip" : ""
                          }`}
                          id="lang"
                        />
                      </span>
                    </div>
                    <ul className="collapsed user-tools__item--lang ">
                      {langState &&
                        Object.values(langItems)
                          .filter((lang) => lang !== langvalue)
                          .map((lang, idx, arr) => {
                            return (
                              <li
                                className="collapsed-item collapsed--text"
                                data-target="lang"
                                key={idx + 1}
                              >
                                <Link
                                  href={"#"}
                                  key={idx + lang}
                                  onClick={onChangeText(setLangValue)}
                                  data-lang={lang}
                                  id="lang"
                                >
                                  {lang}
                                </Link>
                              </li>
                            );
                          })}
                    </ul>
                  </li>
                  <li className="user-tools__item prel">
                    <div className=" tools-item df">
                      <span className="money-text collapsed--text">
                        {monValue}
                      </span>
                      <span
                        className="icon--box down--icon"
                        onClick={onFocusAndHideHandle()}
                      >
                        <ArrowDown
                          className={`lang-icon collapsed--icon ${
                            monState ? "flip" : ""
                          }`}
                          id="money"
                        />
                      </span>
                    </div>

                    <ul
                      className="collapsed user-tools__item--monetary user-tools__item--lang"
                      data-target="money"
                    >
                      {monState &&
                        Object.values(moneyItems).map((money, idx, arr) => {
                          if (money === monValue) return;

                          return (
                            <li
                              className="collapsed-item collapsed--text"
                              data-target="lang"
                              key={idx + 1}
                            >
                              <Link
                                href={"#"}
                                key={idx + lang}
                                onClick={onChangeText(setMonValue)}
                                data-lang={lang}
                                id="money"
                              >
                                {money}
                              </Link>
                            </li>
                          );
                        })}
                      <li className="collapsed-item">{monState}</li>
                    </ul>
                  </li>
                  <li className="user-tools__item">
                    <Link href={"#"}>
                      <span className="like-icon"></span>
                    </Link>
                  </li>
                  <li className="user-tools__item">
                    <Link href={"#"}>
                      <span className="logIn-icon"></span>
                    </Link>
                  </li>
                  <li className="user-tools__item">
                    <Link href={"#"}>
                      <span className="not-icon"></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <nav className="nav shop-pagination	">
            <ul className="shop-pagination__list df">
              <li className="shop-pagination__item">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="shop-pagination__item">
                <Link href={"/products"}>products</Link>
              </li>
              <li className="shop-pagination__item">
                <Link href={"elements"}>elements</Link>
              </li>
              <li className="shop-pagination__item">
                <Link href={"/pages"}>pages</Link>
              </li>
              <li className="shop-pagination__item">
                <Link href={"/shop"}>shop</Link>
              </li>
              <li className="shop-pagination__item">
                <Link href={"/sale"}>sale</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
