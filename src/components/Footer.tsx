import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "motion/react";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import QuickLinks from "./QuickLinks";
import { useScroll } from "@/Context/ScrollContext";
import { social } from "../../public/data/Social";
import { navOptions } from "../../public/data/Navigation";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const { scrollToSection } = useScroll();

  useGSAP(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top 40%",
        end: "bottom 20%",
        toggleActions: "play none play reverse",
      },
    });

    tl.from(".footer-h1-left span", {
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
    })
      .from(
        ".footer-h1-right span",
        {
          xPercent: 100,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )
      .from(
        ".links",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .from(".footer-h1-heading span", {
        yPercent: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(
        ".links span",
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

    return () => {
      tl.kill();
    };
  });

  return (
    <section
      id="contact"
      ref={footerRef}
      className="relative text-background flex flex-col justify-between h-max lg:min-h-screen lg:h-[90vh] p-6 lg:p-8 mt-20 bg-accent"
    >
      <div className="w-full h-full flex flex-col lg:flex-row items-start justify-between">
        {/* Heading section */}
        <div className="w-[60%] lg:w-2/5 h-full flex flex-col justify-between">
          {/* Let's create section */}
          <div className="w-full lg:w-[65%] uppercase text-4xl lg:text-5xl font-bold">
            <h1 className="footer-h1-left text-start overflow-hidden">
              <span className="block">Let&apos;s Design</span>
            </h1>
            <h1 className="footer-h1-right text-end overflow-hidden">
              <span className="block">Something</span>
            </h1>
            <h1 className="footer-h1-left text-start overflow-hidden">
              <span className="block">Amazing</span>
            </h1>
          </div>

          {/* Email section */}
          <div className="w-full h-full mt-20 lg:mt-0 flex flex-col justify-center">
            <div>
              <h2 className="footer-h1-heading text-base lg:text-lg font-medium text-background/80 overflow-hidden">
                <span className="block">Email</span>
              </h2>
              <motion.a
                href="mailto:hello@creativedesigner.com"
                whileHover="hover"
                className="links border-b border-b-background/60 pb-1 mt-1 flex justify-between items-center text-lg lg:text-xl font-bold overflow-hidden cursor-pointer no-underline text-background"
              >
                <motion.span className="block">
                  hello@creativedesigner.com
                </motion.span>

                <span className="relative text-xl overflow-hidden">
                  <motion.span
                    initial={{ y: "0%", x: "0%", rotate: -45 }}
                    variants={{ hover: { y: "-120%", x: "120%", rotate: -45 } }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="block overflow-hidden"
                  >
                    <FaArrowRight />
                  </motion.span>
                  <motion.span
                    initial={{ y: "120%", x: "-120%", rotate: -45 }}
                    variants={{ hover: { y: "0%", x: "0%", rotate: -45 } }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-0 left-0 leading-0 block -rotate-45 overflow-hidden"
                  >
                    <FaArrowRight />
                  </motion.span>
                </span>
              </motion.a>
            </div>
            <p className="links text-sm text-background/70 mt-4 overflow-hidden">
              <span className="block">
                Currently available for freelance projects and collaborations — let&apos;s create something extraordinary together.
              </span>
            </p>
          </div>
        </div>

        {/* Links section */}
        <div className="w-4/5 lg:w-[40%] flex flex-row items-start justify-center gap-10 mt-16 lg:mt-0">
          {/* Social links */}
          <div className="w-full">
            <h1 className="footer-h1-heading w-full text-base lg:text-xl overflow-hidden">
              <span className="block">Connect</span>
            </h1>
            <ul className="text-sm lg:text-lg font-medium">
              {social.map((social, idx) => (
                <QuickLinks
                  key={idx}
                  name={social.name}
                  link={social.url}
                  className="links"
                />
              ))}
            </ul>
          </div>
          
          {/* Quick links */}
          <div className="w-full">
            <h1 className="footer-h1-heading w-full text-base lg:text-xl overflow-hidden">
              <span className="block">Navigation</span>
            </h1>
            <ul className="text-sm lg:text-lg font-medium">
              {navOptions.map((nav, idx) => (
                <QuickLinks
                  key={idx}
                  name={nav.name}
                  className="links"
                  type="route"
                  onClick={() => {
                    if (nav.path.startsWith("#"))
                      scrollToSection(nav.path.slice(1));
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer big heading */}
      <h1 className="links relative p-3 lg:p-5 uppercase mt-32 lg:mt-0 text-4xl lg:text-6xl w-full font-bold flex justify-between overflow-hidden">
        <span className="block">Ready To Collaborate</span>

        <motion.span 
          whileHover="hover" 
          className="relative overflow-hidden cursor-pointer"
          onClick={() => scrollToSection("hero")}
          aria-label="Back to top"
        >
          <motion.span
            initial={{ y: "0%", x: "0%", rotate: -45 }}
            variants={{ hover: { y: "-120%", x: "120%", rotate: -45 } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block overflow-hidden"
          >
            <FaArrowRight />
          </motion.span>
          <motion.span
            initial={{ y: "120%", x: "-120%", rotate: -45 }}
            variants={{ hover: { y: "0%", x: "0%", rotate: -45 } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 leading-0 block overflow-hidden"
          >
            <FaArrowRight />
          </motion.span>
        </motion.span>
      </h1>
    </section>
  );
};

Footer.displayName = "Footer";
export default Footer;