"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import MenuItem from "./MenuItem";
import {
  FaFacebookF,
  FaTwitter,
  FaRss,
  FaGooglePlusG,
  FaDribbble,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Hero() {
  const { scrollY } = useScroll();

  const firstContentY = useTransform(scrollY, [0, 1000], [0, -200]);

  const secondContentY = useTransform(scrollY, [0, 1200], [0, -200]);

  const specialRef = useRef(null);

  const { scrollYProgress: specialProgress } = useScroll({
    target: specialRef,
    offset: ["start end", "end start"],
  });

  const thirdContentY = useTransform(specialProgress, [0, 1], [300, -300]);

  const chefsRef = useRef(null);

  const { scrollYProgress: chefsProgress } = useScroll({
    target: chefsRef,
    offset: ["start end", "end start"],
  });

  const springConfig = {
    stiffness: 55,
    damping: 22,
    mass: 0.6,
  };

  // LEFT CHEF: moves left with a 3D rotation
  const leftXRaw = useTransform(chefsProgress, [0, 0.45], [0, -380]);
  const leftRotateRaw = useTransform(chefsProgress, [0, 0.45], [35, 0]);
  const leftOpacityRaw = useTransform(chefsProgress, [0, 0.2], [0, 1]);

  const leftChefX = useSpring(leftXRaw, springConfig);
  const leftChefRotate = useSpring(leftRotateRaw, springConfig);
  const leftChefOpacity = useSpring(leftOpacityRaw, springConfig);

  // CENTER CHEF: zooms in and rotates into place
  const centerScaleRaw = useTransform(chefsProgress, [0, 0.45], [0.7, 1]);
  const centerRotateRaw = useTransform(chefsProgress, [0, 0.45], [-65, 0]);
  const centerYRaw = useTransform(chefsProgress, [0, 0.45], [50, 0]);
  const centerOpacityRaw = useTransform(chefsProgress, [0, 0.3], [0, 1]);

  const centerScale = useSpring(centerScaleRaw, springConfig);
  const centerRotate = useSpring(centerRotateRaw, springConfig);
  const centerY = useSpring(centerYRaw, springConfig);
  const centerOpacity = useSpring(centerOpacityRaw, springConfig);

  // RIGHT CHEF: moves right with a 3D rotation
  const rightXRaw = useTransform(chefsProgress, [0, 0.45], [0, 380]);
  const rightRotateRaw = useTransform(chefsProgress, [0, 0.45], [-35, 0]);
  const rightOpacityRaw = useTransform(chefsProgress, [0, 0.2], [0, 1]);

  const rightChefX = useSpring(rightXRaw, springConfig);
  const rightChefRotate = useSpring(rightRotateRaw, springConfig);
  const rightChefOpacity = useSpring(rightOpacityRaw, springConfig);

  const specialCards = [
    {
      image: "/dish1.jpg",
      name: "Roasted Chicken",
      price: "$55",
      rotateY: -35,
      rotateX: 12,
    },
    {
      image: "/dish2.jpg",
      name: "Baked Crab Cheese",
      price: "$66",
      rotateY: -15,
      rotateX: -10,
    },
    {
      image: "/dish3.jpg",
      name: "Foie Gras",
      price: "$99",
      rotateY: 15,
      rotateX: 10,
    },
    {
      image: "/dish4.jpg",
      name: "Cheese Shrimp",
      price: "$42",
      rotateY: 35,
      rotateX: -12,
    },
  ];

  return (
    <main>
      <section>
        <div className="relative h-screen w-full overflow-hidden">
          <img
            src="food1.jpg"
            alt="food"
            className="absolute min-h-screen w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.div
            className="relative z-20 flex h-full items-center justify-center"
            style={{ y: firstContentY }}
          >
            <div className="text-center text-white">
              <h2 className="text-6xl tracking-[0.2em] drop-shadow-lg">
                FRESH & DELICIOUS
              </h2>
              <p className="mt-5 text-xl ">
                Flavora – Modern Casual Dining Restaurant
              </p>
              <div className="mt-8 flex justify-center gap-5">
                <button className="rounded-full px-6 py-2 border border-white font-semibold">
                  BOOK NOW
                </button>
                <button className="rounded-full px-6 py-2  bg-amber-600/90 font-semibold hover:bg-white hover:text-black">
                  VIEW MENU
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* booking */}
      <motion.div
        className="relative z-20 h-150 w-full "
        style={{ y: secondContentY }}
      >
        <img
          src="/bg1.jpg"
          alt="background-image"
          className="h-full w-full object-cover"
        ></img>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute flex inset-0 ">
          <div className="w-1/2 h-full inset-0">
            <div className="absolute h-full w-120 inset-0 bg-black/90  left-50">
              <h2 className="text-white text-center mt-15 tracking-[0.2em] text-2xl">
                BOOK A TABLE
              </h2>
              <div className="mx-auto mt-6 h-[2px] w-16 bg-amber-500"></div>
              <div className="mt-12">
                <div className="grid grid-cols-3 gap-6 px-10">
                  <input
                    type="text"
                    placeholder="Date"
                    className="w-full bg-[#111116] px-4 py-3 text-gray-400 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Time"
                    className="w-full bg-[#111116] px-4 py-3 text-gray-400 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Person"
                    className="w-full bg-[#111116] px-4 py-3 text-gray-400 outline-none"
                  />
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6 px-10">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#111116] px-4 py-3 text-white outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-[#111116] px-4 py-3 text-white outline-none"
                  />
                </div>
                <div className="px-10">
                  <textarea
                    placeholder="Any Message?"
                    rows="6"
                    className="mt-8 w-full resize-none bg-[#111116] px-4 py-3 text-gray-400 outline-none"
                  />
                </div>
                <div className="mt-8 flex justify-center">
                  <button className="rounded-full bg-amber-600/90 px-5 py-2 font-semibold text-white hover:bg-black">
                    SUBMIT FORM
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="px-20 py-20">
              <h2 className="text-2xl tracking-[0.2em] text-white">
                WELCOME TO FLAVORA
              </h2>
              <h4 className="mt-3 text-xl italic text-amber-600/90 tracking-wide">
                The Art of Cookings
              </h4>
              <div className=" mt-15 h-[2px] w-16 bg-amber-600/90"></div>
              <p className="text-white text-xl mt-10">
                Welcome to Flavora, where delicious food meets memorable dining
                experiences. Explore our carefully prepared menu, featuring
                flavourful starters, satisfying main courses and chef's special
                creations. Whether you're planning a casual meal or a special
                gathering, discover something delicious at Flavora.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <section className="relative z-0" ref={specialRef}>
        <div className="relative -mt-60 h-[150vh] w-full overflow-hidden">
          <img
            src="/food2.jpg"
            alt="food"
            className="absolute inset-0 h-full w-full object-cover"
          ></img>
          <div className="absolute inset-0 bg-black/70"></div>
          <motion.div
            className="relative mt-50 z-20 "
            style={{ y: thirdContentY }}
          >
            <div className="text-center">
              <h2 className="text-white text-4xl font-semibold tracking-[0.2em]">
                TODAY'S SPECIAL
              </h2>
              <h4 className="text-amber-600/90 italic text-2xl ">
                Fresh and Delicious
              </h4>
              <div className="mx-auto mt-10 h-[2px] w-16 bg-amber-600/90"></div>
            </div>

            <div
              className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4"
              style={{ perspective: "1200px" }}
            >
              {specialCards.map((dish, index) => (
                <motion.div
                  key={dish.name}
                  initial={{
                    opacity: 0,
                    rotateY: dish.rotateY,
                    rotateX: dish.rotateX,
                    scale: 0.7,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    rotateY: 0,
                    rotateX: 0,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    rotateY: index % 2 === 0 ? 10 : -10,
                    rotateX: -8,
                    scale: 0.96,
                    z: 20,
                    transition: { duration: 0.35 },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                  className="group text-center text-xl text-white"
                >
                  {/* Rounded image */}
                  <div
                    className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/30"
                    style={{
                      transform: "translateZ(10px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.img
                      src={dish.image}
                      alt={dish.name}
                      className="h-55 w-55 rounded-2xl object-cover"
                      whileHover={{
                        scale: 0.96,
                        transition: { duration: 0.35 },
                      }}
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-70" />
                  </div>

                  <h3
                    className="mt-4 font-medium"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    {dish.name}
                  </h3>

                  <div className="mx-auto mt-3 h-px w-3/4 bg-amber-600/90" />

                  <h3
                    className="mt-3 font-semibold text-amber-600"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {dish.price}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="relative z-10 -mt-50"
        style={{ y: thirdContentY }}
      >
        <div className="bg-[#17171b] flow-root">
          {/* menu */}
          <div className="flex flex-col items-center py-20">
            <h2 className="text-white font-semibold tracking-wide text-2xl">
              Explore Our Restaurant Food Menu
            </h2>
            <p className="mt-2 text-xl italic text-amber-600/90 tracking-wide">
              Healthy & Tasty
            </p>
            <div className=" mt-8 h-[2px] w-16 bg-amber-600/90"></div>
          </div>
          <div className="flex gap-5 items-center justify-center -mt-8">
            <button className="border border-white px-4 py-3 text-white hover:text-amber-600">
              MAIN
            </button>
            <button className="border border-white px-4 py-3 text-white hover:text-amber-600">
              STARTER
            </button>
            <button className="border border-white px-4 py-3 text-white hover:text-amber-600">
              DRINKS
            </button>
          </div>
          {/* Menu Items */}
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-10 px-6 md:grid-cols-2">
            <MenuItem
              image="/dish1.jpg"
              name="Chicken Crispy Roll"
              price="$66"
              description="Tender chicken wrapped in a crispy golden coating, seasoned with aromatic spices and served with a delicious dipping sauce."
              direction={-80}
            />

            <MenuItem
              image="/dish2.jpg"
              name="Cheese Shrimp Roll"
              price="$42"
              description="Juicy shrimp combined with creamy melted cheese, wrapped in a crunchy layer for a rich and satisfying bite."
              direction={80}
            />

            <MenuItem
              image="/dish2.jpg"
              name="Baked Crab Cheese"
              price="$66"
              description="Fresh crab meat blended with creamy cheese and delicate seasonings, baked until golden and delicious."
              direction={-80}
            />

            <MenuItem
              image="/dish3.jpg"
              name="Crispy Squid"
              price="$54"
              description="Lightly seasoned squid rings coated in a crispy golden crust, offering a delightful crunch with every bite."
              direction={80}
            />

            <MenuItem
              image="/dish3.jpg"
              name="Foie Gras"
              price="$99"
              description="A rich and delicate gourmet speciality, carefully prepared and served with complementary flavours for an elegant dining experience."
              direction={-80}
            />

            <MenuItem
              image="/dish1.jpg"
              name="Roasted Chicken"
              price="$55"
              description="Juicy chicken roasted with aromatic herbs and spices, delivering a tender texture and deliciously savoury flavour."
              direction={80}
            />
          </div>
          {/* Restaurant */}
          <div className="mt-60 grid grid-cols-3 ">
            {/* Left Image */}
            <div className="h-80">
              <img
                src="/dish2.jpg"
                alt="Restaurant dining"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="flex h-80 flex-col items-center justify-center bg-[#0d0d0f] px-10 text-center">
              <h2 className="text-3xl italic text-white">Restaurant & Cafe</h2>

              <div className="mt-5 h-[2px] w-32 bg-amber-600/90"></div>

              <p className="mt-8 max-w-md text-sm leading-7 text-gray-400">
                At Flavora, every meal is an opportunity to enjoy great food and
                wonderful moments. From freshly prepared dishes to delightful
                beverages, we bring together delicious flavours and a welcoming
                atmosphere. Whether you're catching up with friends or enjoying
                a peaceful meal, make every visit a memorable experience.
              </p>
            </div>

            {/* Right Image */}
            <div className="h-80">
              <img
                src="/dish3.jpg"
                alt="Coffee cup"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Meet Our Team — Scroll Parallax */}
          <section ref={chefsRef} className="relative h-[100vh] bg-[#17171b]">
            {/* Stays in the viewport while the outer section scrolls */}
            <div
              style={{ perspective: "1200px" }}
              className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
            >
              {/* Heading */}
              <div className="mb-10 text-center">
                <h2 className="text-4xl font-semibold tracking-wide text-white">
                  The Chefs
                </h2>

                <p className="mt-3 text-2xl italic text-amber-600/90">
                 Today's Chef Special Dishes
                </p>

                <div className="mx-auto mt-8 h-[2px] w-16 bg-amber-600/90" />
              </div>

              {/* Chef Cards */}
              <div
                className="relative mx-auto h-[480px] w-full max-w-6xl"
                style={{
                  perspective: 700,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Left Chef */}
                <motion.div
                  style={{
                    x: leftChefX,
                    rotateY: leftChefRotate,
                    opacity: leftChefOpacity,
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute left-1/2 top-0 w-[280px] -translate-x-1/2 text-white"
                >
                  <img
                    src="/chef1.jpg"
                    alt="Ben Sheridan"
                    className="h-72 w-full object-cover"
                  />

                  <h3 className="mt-5 text-lg font-semibold">Ben Sheridan</h3>
                  <p className="text-gray-400">Master Chef</p>

                  <div className="mt-4 h-[2px] w-14 bg-amber-600/90" />

                  <p className="mt-4 leading-7 text-gray-400">
                    With a passion for culinary excellence, Ben brings
                    creativity and expertise to every dish.
                  </p>
                </motion.div>

                {/* Center Chef — remains in the center */}
                <motion.div
                  style={{
                    scale: centerScale,
                    rotateY: centerRotate,
                    y: centerY,
                    opacity: centerOpacity,
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute left-1/2 top-0 z-10 w-[280px] -translate-x-1/2 text-white"
                >
                  <img
                    src="/chef2.jpg"
                    alt="Sophie Lana"
                    className="h-72 w-full object-cover"
                  />

                  <h3 className="mt-5 text-lg font-semibold">Sophie Lana</h3>
                  <p className="text-gray-400">Senior Chef</p>

                  <div className="mt-4 h-[2px] w-14 bg-amber-600/90" />

                  <p className="mt-4 leading-7 text-gray-400">
                    Sophie combines creativity with a love for fresh ingredients
                    to create delightful dishes.
                  </p>
                </motion.div>

                {/* Right Chef */}
                <motion.div
                  style={{
                    x: rightChefX,
                    rotateY: rightChefRotate,
                    opacity: rightChefOpacity,
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute left-1/2 top-0 w-[280px] -translate-x-1/2 text-white"
                >
                  <img
                    src="/chef3.jpg"
                    alt="James Hoult"
                    className="h-72 w-full object-cover"
                  />

                  <h3 className="mt-5 text-lg font-semibold">James Hoult</h3>
                  <p className="text-gray-400">Guest Chef</p>

                  <div className="mt-4 h-[2px] w-14 bg-amber-600/90" />

                  <p className="mt-4 leading-7 text-gray-400">
                    James enjoys exploring new cooking techniques and bringing
                    fresh ideas to the kitchen.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* count */}
          <section className="bg-[#C99046] py-14">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 md:grid-cols-4">
              <div className="text-center text-white">
                <h2 className="text-5xl font-semibold">8330</h2>
                <p className="mt-3 font-semibold">Hours of Works</p>
              </div>

              <div className="text-center text-white">
                <h2 className="text-5xl font-semibold">248</h2>
                <p className="mt-3 font-semibold">Projects Complete</p>
              </div>

              <div className="text-center text-white">
                <h2 className="text-5xl font-semibold">852</h2>
                <p className="mt-3 font-semibold">Slice of Pizza</p>
              </div>

              <div className="text-center text-white">
                <h2 className="text-5xl font-semibold">615</h2>
                <p className="mt-3 font-semibold">Cups of Coffee</p>
              </div>
            </div>
          </section>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#111111] py-16 -mt-75">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 text-center md:grid-cols-3 md:text-left">
          {/* Copyright */}
          <div>
            <p className="text-sm text-gray-300">© Copyright 2024 - Flavora</p>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white font-bold text-2xl tracking-wide">
              Flavora
            </h1>
            <p className="text-amber-600 texl-xl">Resto & Cafe</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5 text-white md:justify-end">
            <a
              href="https://www.instagram.com/sathish_abi_04/"
              aria-label="Instagram"
              className="hover:text-amber-500"
            >
              <FaInstagram size={18} />
            </a>

            <a href="#" aria-label="Facebook" className="hover:text-amber-500">
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.youtube.com/@GreatIndianAsmr"
              aria-label="Youtube"
              className="hover:text-amber-500"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
