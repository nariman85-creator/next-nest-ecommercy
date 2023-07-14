"use client";
import Link from "next/link";
import Image from "next/image";
import "./Hero.css";
import image1 from "../../public/image/hero/image 40.png";
import image2 from "../../public/image/hero/image 42.png";
import image3 from "../../public/image/hero/image 43.png";
import ArrowRight from "../icons/ArrowRight";
import { ReactNode, useEffect, useState } from "react";
import { SocialList } from "../SocialList/SocialList";

interface HeroProp {
  children?: ReactNode | null;
}
export function Hero({ children }: HeroProp) {
  const [stepSlider, useStepSlider] = useState<number>(0);
  const onSliderAnimate = (inner: HTMLDivElement, item: HTMLDivElement) => {
    let sliderStart = 0;
    const indicators: NodeListOf<HTMLLIElement> = document.querySelectorAll(
      ".carousel-indicators__item"
    );
    setInterval(() => {
      sliderStart++;
      if (sliderStart >= inner.childElementCount) {
        sliderStart = 0;
        inner.style.transition = "all 0s";

        inner.style.transform = `translateX(-${
          sliderStart * item.offsetWidth
        }px)`;
      } else {
        inner.style.transition = "all .6s";

        inner.style.transform = `translateX(-${
          sliderStart * item.offsetWidth
        }px)`;
      }
      indicators.forEach((indicator, idx, indicatorList) => {
        if (indicator.classList.contains("show")) {
          indicator.classList.remove("show");
        }
        indicatorList[sliderStart].classList.add("show");
      });
    }, 2000);
  };
  useEffect(() => {
    const inner = document.querySelector(".carousel-inner") as HTMLDivElement;
    const item = document.querySelector(".carousel-item") as HTMLDivElement;
    onSliderAnimate(inner, item);
  }, []);

  return (
    <section className="hero">
      <div className="hero-wrapper hero-banner">
        <div className="container">
          {children ? children : null}
          <div className="hero-content">
            <div className="hero-shop__body">
              <div className="carousel hero-slider df prel">
                <SocialList />
                <div className="carousel-inner hero-carousel__inner">
                  <div className="carousel-item df">
                    <div className="carousel-left--side df">
                      <div>
                        <div className="carousel-caption">
                          <h3>SimpleWood Chair Collection</h3>
                          <p>
                            Find hand-curated collections that fit your style,
                            space, and budget.
                          </p>
                        </div>
                        <button className="btn shop-info--btn df">
                          shop now
                          <ArrowRight classname="arrow-right--icon" />
                        </button>
                      </div>
                    </div>
                    <div className="carousel-right--side">
                      <div className="carousel-item__content dgrid">
                        <div className="carousel-left__col">
                          {" "}
                          <div className="carousel-content__item ">
                            <Image
                              src={image1}
                              alt=""
                              width={100}
                              height={100}
                              className="carousel--image img"
                            />
                          </div>
                          <div className="carousel-content__item">
                            <Image
                              src={image2}
                              alt=""
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                        <div className="carousel-content__item">
                          <Image
                            src={image3}
                            alt=""
                            width={100}
                            height={100}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              width: "100%",
                              height: "100%",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="carousel-item df">
                    <div className="carousel-left--side df">
                      <div>
                        <div className="carousel-caption">
                          <h3>SimpleWood Chair Collection</h3>
                          <p>
                            Find hand-curated collections that fit your style,
                            space, and budget.
                          </p>
                        </div>
                        <button className="btn shop-info--btn df">
                          shop now
                          <ArrowRight classname="arrow-right--icon" />
                        </button>
                      </div>
                    </div>
                    <div className="carousel-right--side">
                      <div className="carousel-item__content dgrid">
                        <div className="carousel-left__col">
                          {" "}
                          <div className="carousel-content__item ">
                            <Image
                              src={image1}
                              alt=""
                              width={100}
                              height={100}
                              className="carousel--image"
                            />
                          </div>
                          <div className="carousel-content__item">
                            <Image
                              src={image2}
                              alt=""
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                        <div className="carousel-content__item">
                          <Image
                            src={image3}
                            alt=""
                            width={100}
                            height={100}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              width: "100%",
                              height: "100%",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="carousel-item df">
                    <div className="carousel-left--side df">
                      <div>
                        <div className="carousel-caption">
                          <h3>SimpleWood Chair Collection</h3>
                          <p>
                            Find hand-curated collections that fit your style,
                            space, and budget.
                          </p>
                        </div>
                        <button className="btn shop-info--btn df">
                          shop now
                          <ArrowRight classname="arrow-right--icon" />
                        </button>
                      </div>
                    </div>
                    <div className="carousel-right--side">
                      <div className="carousel-item__content dgrid">
                        <div className="carousel-left__col">
                          {" "}
                          <div className="carousel-content__item ">
                            <Image
                              src={image1}
                              alt=""
                              width={100}
                              height={100}
                              className="carousel--image"
                            />
                          </div>
                          <div className="carousel-content__item">
                            <Image
                              src={image2}
                              alt=""
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                        <div className="carousel-content__item">
                          <Image
                            src={image3}
                            alt=""
                            width={100}
                            height={100}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              width: "100%",
                              height: "100%",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="carousel-item df">
                    <div className="carousel-left--side df">
                      <div>
                        <div className="carousel-caption">
                          <h3>SimpleWood Chair Collection</h3>
                          <p>
                            Find hand-curated collections that fit your style,
                            space, and budget.
                          </p>
                        </div>
                        <button className="btn shop-info--btn df">
                          shop now
                          <ArrowRight classname="arrow-right--icon" />
                        </button>
                      </div>
                    </div>
                    <div className="carousel-right--side">
                      <div className="carousel-item__content dgrid">
                        <div className="carousel-left__col">
                          {" "}
                          <div className="carousel-content__item ">
                            <Image
                              src={image1}
                              alt=""
                              width={100}
                              height={100}
                              className="carousel--image"
                            />
                          </div>
                          <div className="carousel-content__item">
                            <Image
                              src={image2}
                              alt=""
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                        <div className="carousel-content__item">
                          <Image
                            src={image3}
                            alt=""
                            width={100}
                            height={100}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              width: "100%",
                              height: "100%",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-indicators">
                  <ul className="carousel-indicators__list list df">
                    <li className="carousel-indicators__item show"></li>
                    <li className="carousel-indicators__item"></li>
                    <li className="carousel-indicators__item"></li>
                    <li className="carousel-indicators__item"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
