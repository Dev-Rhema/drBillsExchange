import { useEffect, useState } from "react";
import logo from "../src/assets/images/drbillslogo.png";
import bannerImg from "../src/assets/images/BannerImg.png";
import vCards from "../src/assets/images/virtualCards.png";
import crypto from "../src/assets/images/crypto.png";
import multicurrency from "../src/assets/images/multicurrency.png";
import giftCards from "../src/assets/images/giftCards.png";
import connecting from "../src/assets/images/connecting.png";
import how from "../src/assets/images/how_it_work.png";
import downloadApp from "../src/assets/images/downloadApp.jpg";
import signup from "../src/assets/images/signup.jpg";
import fundWallet from "../src/assets/images/fundWallet.jpg";
import faqImg from "../src/assets/images/faqImg.png";
import convertMoney from "../src/assets/images/convertMoney.jpg";

import { Button, IPhoneButton, AndroidButton } from "./components/Button";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import { Heading } from "./components/Heading";
import CardSwap, { Card } from "./components/CardSwap";
import { div } from "three/tsl";
import {
  RotatingText,
  RotatingTextContainer,
} from "./components/animate-ui/primitives/texts/rotating";
import { title } from "motion/react-client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/Accordion";
import DomeGallery from "./components/DomeGallery";
import { MobileDome } from "./components/MobileDome";
import { MainDome } from "./components/Dome";
import Footer from "./components/Footer";

const FAQs = [
  {
    id: 1,
    question: "What is Dr Bills Exchange",
    answer:
      "Dr Bills Exchange is a secure digital financial platform that lets you manage wallets, trade crypto, create virtual USD cards, and send money worldwide with confidence.",
  },
  {
    id: 2,
    question: "Is Dr Bills Exchange secure?",
    answer:
      "Yes. Dr Bills Exchange uses industry-standard encryption and multi-factor authentication to keep your funds and personal data safe at all times.",
  },
  {
    id: 3,
    question: "How long does verification take?",
    answer:
      "Identity verification typically takes between a few minutes to 24 hours depending on the documents submitted and review queue.",
  },
  {
    id: 4,
    question: "How do virtual USD cards work?",
    answer:
      "Virtual USD cards are instantly generated digital cards that you can use for online payments worldwide, funded directly from your Dr Bills Exchange wallet.",
  },
  {
    id: 5,
    question: "How are gift card exchanges processed?",
    answer:
      "Simply select the gift card type, enter the card details, and receive your equivalent value in your wallet within minutes after our team verifies the card.",
  },
];

const Security = [
  {
    id: 1,
    text: "Bank-level encryption",
  },
  {
    id: 2,
    text: "Secure KYC verification",
  },
  {
    id: 3,
    text: "Transparent transaction history",
  },
  {
    id: 4,
    text: "PIN protection",
  },
];

const Steps = [
  {
    id: 1,
    title: "Download App",
    subtitle:
      "Get Dr Bills Exchange from the App Store or Google Play and set up your account in minutes.",
    img: downloadApp,
  },
  {
    id: 2,
    title: "Create Your Account",
    subtitle:
      "Sign up in minutes and complete a quick verification process to secure your account and unlock all features.",
    img: signup,
  },
  {
    id: 3,
    title: "Fund Your Wallet",
    subtitle:
      "Add NGN or USD to your wallet easily and prepare to send, swap, or trade whenever you need.",
    img: fundWallet,
  },
  {
    id: 4,
    title: "Send, Swap or Spend",
    subtitle:
      "Trade crypto, pay bills, create virtual cards, or send money worldwide all from one secure and easy-to-use app.",
    img: convertMoney,
  },
];

const Features = [
  {
    id: 1,
    title: "Multi-Currency Wallet",
    subtitle:
      "Hold and manage NGN and USD in one place. View balances, track transactions, and swap currencies instantly with transparent rates.",
    img: multicurrency,
  },
  {
    id: 2,
    title: "Crypto Made Simple",
    subtitle:
      "Buy, sell, send, and receive crypto with ease. Enjoy a clean interface designed to make crypto transactions fast and beginner-friendly.",
    img: crypto,
  },
  {
    id: 3,
    title: "Virtual USD Cards",
    subtitle:
      "Create virtual dollar cards for online payments. Fund instantly from your wallet and shop securely on global platforms without limits.",
    img: vCards,
  },
  {
    id: 4,
    title: "Bills & Gift Cards",
    subtitle:
      "Pay airtime, data, electricity, and cable TV effortlessly. Convert gift cards to cash and track every exchange in real time.",
    img: giftCards,
  },
  {
    id: 5,
    title: "Global Payments",
    subtitle:
      "Send money internationally with confidence. Enjoy secure, transparent cross-border transactions.",
    img: connecting,
  },
];

function App() {
  const [navWhite, setNavWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavWhite(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <nav
        className={`z-1000 fixed w-full flex justify-between items-center py-2 px-20 max-2xl:px-10 max-md:px-4 transition-colors duration-300 ${
          navWhite
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="">
          <img src={logo} alt="" className="w-40 max-lg:w-32" />
        </div>
        <Button
          className={
            navWhite
              ? "bg-[#1A315B] text-white"
              : "bg-[#1A315B] text-white px-4 py-2"
          }
          name="Download Now"
          href="#ready-to-get-started"
        />
      </nav>
      <section
        id="home"
        className="bgImg min-h-screen w-full   px-20  grid grid-cols-5 max-md:grid-cols-1 justify-between items-center py-20 max-2xl:px-10 max-xl:py-16 max-xl:pt-20 max-md:px-4 gap-6 scroll-mt-24"
      >
        <div className="col-span-3 flex flex-col gap-10 max-xl:gap-6 max-lg:gap-4 text-[#1A315B]">
          <p className="">All in one payment app →</p>
          <p className="text-8xl font-bold max-2xl:text-6xl max-lg:text-5xl max-md:text-3xl">
            Manage Global Payments in One App
          </p>
          <p className="text-md w-[60%] max-2xl:w-[80%] max-lg:text-sm">
            Manage NGN and USD wallets, trade crypto, create virtual dollar
            cards, pay bills, and send international payments all from one
            secure and easy-to-use app.
          </p>
          <div className="text-white flex gap-2">
            <AndroidButton className="bg-gray-200 text-[#1A315B]" />
            <IPhoneButton />
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center ">
          <img
            src={bannerImg}
            alt=""
            className="w-70 max-2xl:w-58 max-lg:w-45"
          />
        </div>
      </section>
      <section
        id="features"
        className="px-20 my-10 flex flex-col gap-8 max-lg:gap-2 max-md:px-4 max-lg:px-10 scroll-mt-24"
      >
        <Heading title="Features" />
        <div className="flex justify-between max-lg:flex-col gap-6 max">
          <div className="w-[40%] max-lg:w-full">
            <p className="text-3xl text-[#1A315B] inline max-lg:text-2xl gap-2 items-center w-full max-md:text-sm">
              <span className="">
                <RotatingTextContainer
                  text={[
                    "Crypto exchange",
                    "Bill payment",
                    "Virtual USD Cards",
                    "Gift Cards",
                    "Global Payments",
                  ]}
                  duration={2000}
                >
                  Everything You Need in One App
                  <RotatingText className="  font-serif text-5xl font-bold max-lg:text-3xl max-md:text-2xl text-[#1A315B]" />
                </RotatingTextContainer>
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2  gap-4 w-[60%] max-lg:w-full max-md:grid-cols-1 max-lg:gap-2">
            {Features.map((feature) => (
              <div className="bg-gray-100 flex gap-4 flex-col px-6 pt-4  rounded-2xl text-[#1A315B] max-lg:gap-2">
                <p className="text-2xl font-semibold max-md:text-xl">
                  {feature.title}
                </p>
                <p className="max-lg:text-sm">{feature.subtitle}</p>
                <div className="flex items-center justify-center h-full">
                  <img
                    src={feature.img}
                    alt=""
                    className="w-50 h-full max-lg:w-40"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="how-it-works"
        className="mt-10 p-10 max-lg:px-0 bg-gray-100 scroll-mt-24"
      >
        <Heading title="How it works" subtitle="Get Started in Minutes" />
        <div className="">
          <div className=" w-full text-white  h-full flex items-center justify-center">
            <div className="w-full overflow-visible  ">
              <ScrollStack useWindowScroll className="text-white">
                {Steps.map((step, index) => (
                  <ScrollStackItem
                    key={step.id}
                    itemClassName={
                      index % 2 === 0
                        ? "bg-blue-400 flex-row-reverse"
                        : "bg-[#1A315B]"
                    }
                  >
                    <div className="flex flex-col gap-4 max-md:gap-2">
                      <p className="text-4xl max-lg:text-3xl max-md:text-sm font-semibold">
                        {step.title}
                      </p>
                      <p className="text-2xl max-lg:text-xl max-md:text-[12px]">
                        {step.subtitle}
                      </p>
                    </div>
                    <div className=" w-[40%] max-lg:w-[50%] flex items-center justify-center">
                      <img
                        src={step.img}
                        alt=""
                        className="h-100 max-xl:h-70 rounded-2xl max-md:h-50"
                      />
                    </div>
                  </ScrollStackItem>
                ))}
              </ScrollStack>
            </div>
          </div>
        </div>
      </section>
      <section
        id="security"
        className="bg-[#1A315B] text-white px-20 py-6 max-lg:py-4 flex flex-col items-center justify-between gap-6 max-md:px-4 scroll-mt-24"
      >
        <div className="text-white inline-flex flex-col gap-2 items-center justify-center text-center w-full">
          <p className="text-3xl font-bold  max-md:text-2xl max-lg:text-3xl border-blue-400 border-b-3 inline">
            Security
          </p>
          <p className="text-2xl">Built for Security & Trust</p>
        </div>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
          {Security.map((securityItem) => (
            <div
              key={securityItem.id}
              className="col-span-1 border-2 rounded-2xl px-6 py-2 backdrop-filter backdrop-blur-lg bg-opacity-10 bg-gray-100 text-[#1A315B] text-center justify-center max-md:text-sm max-md:px-4 max-sm:px-2"
            >
              {securityItem.text}
            </div>
          ))}
        </div>
      </section>
      <section
        id="faq"
        className="bg-gray-100 text-[#1A315B] px-20 py-12 max-lg:py-4 flex flex-col items-center justify-between gap-6 max-md:px-4 scroll-mt-24"
      >
        <Heading title="FAQs" subtitle="Frequently Asked Questions" />
        <div className="flex max-md:flex-col justify-between gap-6">
          <div className="w-[40%] max-md:w-full">
            <img src={faqImg} alt="" className="max-md:scale-75" />
          </div>
          <Accordion
            defaultValue={["item-1"]}
            className="w-[60%] max-md:w-full"
          >
            {FAQs.map((faq, index) => (
              <AccordionItem key={faq.id} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section
        id="we-do-it-all"
        className="bg-white text-[#1A315B] px-20  py-12 max-lg:py-8 flex flex-col items-center justify-between gap-6 max-md:px-4 scroll-mt-24"
      >
        <Heading title="We do it all!" />
        <div>
          <div className="max-lg:hidden">
            <MainDome />
          </div>
          <div className="max-lg:block hidden">
            <MobileDome />
          </div>
        </div>
      </section>
      <section
        id="ready-to-get-started"
        className="bg-[#1A315B] text-white py-16 md:py-24 scroll-mt-24"
      >
        <div className="mx-auto  px-4 md:px-8">
          <div className="flex flex-col justify-center gap-2 text-center">
            <h2 className=" font-semibold text-5xl max-lg:text-3xl max-md:text-2xl">
              Are You Ready to Get Started?
            </h2>
            <p className="text-xl max-md:text-sm">
              Download Dr Bills Exchange today and take control of your global
              finances. Manage wallets, trade crypto, create virtual USD cards &
              send payments worldwide.
            </p>
            <div className="mt-8 flex gap-2 items-center justify-center">
              <IPhoneButton name="Apple Store" />
              <AndroidButton name="Google Play" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
