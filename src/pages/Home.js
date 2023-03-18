import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import image2 from "../assets/image2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import image5 from "../assets/img5.png";
import image6 from "../assets/img6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import arrow from "../assets/arrow.png";
import appleIcon from "../assets/apple-icon.png";
import mail from "../assets/mail.png";
import playstoreIcon from "../assets/playstore-icon.png";
import zoopla from "../assets/zoopla.png";
import constructconnect from "../assets/constructconnect.png";
import zillow from "../assets/zillow.png";
import realtor from "../assets/realtor.png";
import housing from "../assets/housing.png";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () => {
  const [findOption, setFindOption] = React.useState({
    sale: true,
    rent: false,
  });

  const [faQuestions, setFaQuestions] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false
  })

  const [sidebar, setSidebar] = React.useState(false);

  const companies = [
    {
      image: zoopla,
      name: "zoopla",
      className: "mix-blend-difference opacity-70 h-8 w-auto lg:h-10",
    },
    {
      image: constructconnect,
      name: "constructconnect",
      className: "mix-blend-difference opacity-70 h-8 w-auto lg:h-10",
    },
    {
      image: zillow,
      name: "zillow",
      className: "mix-blend-difference opacity-70 h-8 w-auto lg:h-10",
    },
    {
      image: realtor,
      name: "realtor",
      className: "mix-blend-difference opacity-70 h-8 w-auto lg:h-10",
    },
    {
      image: housing,
      name: "housing",
      className: "opacity-70 h-8 w-auto lg:h-10",
    },
  ];

  const properties = [
    {
      icon: image4,
      header: "Effortless management",
      text: "Manage properties and pay rent remotely with ease",
    },
    {
      icon: image5,
      header: "Affordable prices",
      text: "Purchase or rent homes and lands at affordable prices",
    },
    {
      icon: image6,
      header: "Easy discovery",
      text: "Easily find properties near you or across the country",
    },
  ];


  const faqs = [
    {
      question: "What is Renta?",
      answer:
        "Lorem ipsum dolor isit gtera hgdtsj nnagsr huter kassdn gstteya ldhyst ehhd ahys sllkf wyets jjuye sksnc lkos sooelfh msinfht sjahhs dhdggsts ammshfn gatsrre sbbagst",
      name: 'first',
      state: faQuestions.first
    },
    {
      question: "When was Renta created?",
      answer:
        "Lorem ipsum dolor isit gtera hgdtsj nnagsr huter kassdn gstteya ldhyst ehhd ahys sllkf wyets jjuye sksnc lkos sooelfh msinfht sjahhs dhdggsts ammshfn gatsrre sbbagst",
        name: 'second',
        state: faQuestions.second
    },
    {
      question: "What is the aim of Renta?",
      answer:
        "Lorem ipsum dolor isit gtera hgdtsj nnagsr huter kassdn gstteya ldhyst ehhd ahys sllkf wyets jjuye sksnc lkos sooelfh msinfht sjahhs dhdggsts ammshfn gatsrre sbbagst",
      name: 'third',
      state: faQuestions.third
    },
    {
      question: "What is Renta capable of?",
      answer:
        "Lorem ipsum dolor isit gtera hgdtsj nnagsr huter kassdn gstteya ldhyst ehhd ahys sllkf wyets jjuye sksnc lkos sooelfh msinfht sjahhs dhdggsts ammshfn gatsrre sbbagst",
      name: 'fourth',
      state: faQuestions.fourth
    },
    {
      question: "Can I invest in Renta?",
      answer:
        "Lorem ipsum dolor isit gtera hgdtsj nnagsr huter kassdn gstteya ldhyst ehhd ahys sllkf wyets jjuye sksnc lkos sooelfh msinfht sjahhs dhdggsts ammshfn gatsrre sbbagst",
      name: 'fifth',
      state: faQuestions.fifth
    },
    {
      question: "How may i contact Renta?",
      answer:
        "Lorem ipsum dolor isit gtera hgdtsj nnagsr huter kassdn gstteya ldhyst ehhd ahys sllkf wyets jjuye sksnc lkos sooelfh msinfht sjahhs dhdggsts ammshfn gatsrre sbbagst",
      name: 'sixth',
      state: faQuestions.sixth
    },
  ];

  const search = (e) => {
    const current = e.target.innerHTML;
    // alert(current);
    // console.log(e.target.innerHTML);
    if (current === "For sale") {
      setFindOption((prevState) => {
        return {
          ...prevState,
          sale: true,
          rent: false,
        };
      });
    } else {
      //do something
      setFindOption((prevState) => {
        return {
          ...prevState,
          sale: false,
          rent: true,
        };
      });
    }

    // setFindOption((prevState)=>{
    //   return {
    //     ...prevState,
    //     rent: !prevState.rent
    //   }
    // })
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (findOption.sale === true) {
      alert("Sales not available right now!");
    } else {
      alert("Rent not available right now!");
    }
  };

  const showFaq = (e) => {
    // console.log(e);
    const current = e.name
    if(current === 'first'){
      setFaQuestions((prevState)=>{
        return {
          ...prevState,
          first: !prevState.first,
          second: false,
          third: false,
          fourth: false,
          fifth: false,
          sixth: false
        }
      })
    } else if (current === 'second'){
      setFaQuestions((prevState)=>{
        return {
          ...prevState,
          first: false,
          second: !prevState.second,
          third: false,
          fourth: false,
          fifth: false,
          sixth: false
        }
      })
    } else if (current === 'third'){
      setFaQuestions((prevState)=>{
        return {
          ...prevState,
          first: false,
          second: false,
          third: !prevState.third,
          fourth: false,
          fifth: false,
          sixth: false
        }
      })
    } else if (current === 'fourth'){
      setFaQuestions((prevState)=>{
        return {
          ...prevState,
          first: false,
          second: false,
          third: false,
          fourth: !prevState.fourth,
          fifth: false,
          sixth: false
        }
      })
    } else if (current === 'fifth'){
      setFaQuestions((prevState)=>{
        return {
          ...prevState,
          first: false,
          second: false,
          third: false,
          fourth: false,
          fifth: !prevState.fifth,
          sixth: false
        }
      })
    } else if (current === 'sixth'){
      setFaQuestions((prevState)=>{
        return {
          ...prevState,
          first: false,
          second: false,
          third: false,
          fourth: false,
          fifth: false,
          sixth: !prevState.sixth
        }
      })
    }
  }

  const scrollToTop = () => {
    // alert('Hey man! M here')
    window.scrollTo(0, 0);
  }

  if(sidebar){
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }

  React.useEffect(()=>{
    Aos.init({ duration: 2000});
  }, []);

  return (
    <>
      <Header setSidebar={setSidebar} sidebar={sidebar} />

      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

      <main className="mt-8 lg:mt-16 flex flex-col justify-center bg-bg">
        <section className="h-660 bg-herosection bg-cover bg-center relative flex flex-col items-center justify-center gap-7">
          <div className="mb-3 absolute w-70 transform -translate-y-1/2 top-20 sm:-translate-y-0 sm:left-5 sm:top-12 lg:top-14 lg:w-96">
            <motion.img animate={{rotate: [0, 360]}} transition={{repeat: Infinity, type: 'tween', duration: 8 }} src={image2} alt={"stamp"} />
          </div>

          <div className="w-5/6 flex flex-col gap-3 mt-5 sm:mt-0">
            <motion.h1 animate={{x: [-300, 0]}} transition={{delay: 0.3, type:'spring'}} className="font-bold text-white text-4xl leading-tight tracking-wider lg:text-5xl">
              Discover the perfect property
            </motion.h1>
            <motion.p animate={{x: [300, 0]}} transition={{delay: 0.3, type:'spring'}} className="text-customWhite text-sm font-light md:text-lg">
              Find real estate to purchase, rent and sell without hassle.
            </motion.p>
          </div>

          <div className="bg-white p-3 pb-5 rounded-md w-5/6 md:pb-7 lg:w-2/3">
            <div className="flex justify-around font-bold">
              <button
                className="hover:text-customBlue transition ease-in-out delay-100 lg:text-lg"
                onClick={search}
              >
                For sale
              </button>
              <button
                className="hover:text-customBlue transition ease-in-out delay-100 lg:text-lg"
                onClick={search}
              >
                To rent
              </button>
            </div>
            <div className="w-full bg-slate-200 h-1 rounded-md mt-1 mb-3 relative">
              {findOption.sale && (
                <div className="absolute bg-slate-200 rounded-lg h-1 w-1/2 left-0 flex justify-center">
                  <div className="bg-customBlue w-32 rounded-lg z-50 h-full sm:w-40"></div>
                </div>
              )}
              {findOption.rent && (
                <div className="absolute bg-slate-200 rounded-lg h-1 w-1/2 right-0 flex justify-center">
                  <div className="bg-customBlue w-32 rounded-lg z-50 h-full sm:w-40"></div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 lg:px-10">
              <p className="text-base text-left font-bold md:text-base lg:text-lg">
                Search city or state
              </p>
              <form
                className="flex flex-col gap-2 md:flex-row md:gap-4"
                onSubmit={submitSearch}
              >
                <input
                  placeholder="e.g Lekki or Enugu"
                  className="h-10 outline outline-customGray outline-2 px-3 w-full rounded-lg focus:outline-customBlue focus:shadow-md focus:outline-2 mb-2 md:mb-0 md:outline-1"
                />
                <button className="flex flex-row gap-2 justify-center items-center bg-customBlue w-full py-2 rounded-md text-white md:w-56 md:py-2 md:outline md:outline-1 md:outline-customBlue md:items-center">
                  <i>
                    <AiOutlineSearch />
                  </i>
                  <p>Search</p>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="relative p-10 gap-x-10 gap-y-6 px-8 overflow-hidden bg-customGray">
          <div className="flex animate absolute left-0 w-400 py-2 px-5 bg-customGray lg:w-200">
            {companies?.map((company, key) => {
              return (
                <div className="flex items-center justify-around w-1/2">
                  <img
                    src={company.image}
                    alt={company.name}
                    className={`${company.className}`}
                  />
                </div>
              );
            })}
            {companies?.map((company, key) => {
              return (
                <div className="flex items-center justify-around w-1/2">
                  <img
                    src={company.image}
                    alt={company.name}
                    className={`${company.className}`}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className="px-5 py-5 flex flex-col items-center gap-8 md:flex-row md:justify-around">
          <div data-aos='fade-up' className="flex flex-col md:text-left md:w-390">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              We simply offer the best.
            </h1>
            <p className="text-base text-center mt-2 md:text-left lg:text-xl">
              Settle in your dream home with Renta, we provide the best home
              options for families all around the country.
            </p>
            <div className="flex flex-row gap-6 justify-center mt-6 md:justify-start lg:justify-between">
              <div className="flex flex-col text-left">
                <h1 className="text-xl text-orange-400 font-bold lg:text-3xl">
                  500+
                </h1>
                <p className="text-xs text-customWhite lg:text-sm">
                  Listed properties
                </p>
              </div>
              <div className="flex flex-col text-left">
                <h1 className="text-xl text-orange-400 font-bold lg:text-3xl">
                  100+
                </h1>
                <p className="text-xs text-customWhite lg:text-sm">
                  Happy customers
                </p>
              </div>
              <div className="flex flex-col text-left">
                <h1 className="text-xl text-orange-400 font-bold lg:text-3xl">
                  35
                </h1>
                <p className="text-xs text-customWhite lg:text-sm">
                  Award winnings
                </p>
              </div>
            </div>
          </div>

          <div data-aos='fade-right' className="h-auto w-auto md:w-348 lg:w-548">
            <img src={image3} alt="family-img" className="w-full h-auto" />
          </div>
        </section>

        <section className="py-4 flex flex-col gap-5 px-5 sm:px-2 sm:items-center md:flex-row md:flex-wrap md:justify-center lg:mb-10 xl:gap-8">
          {properties?.map((item, key) => {
            return (
              <div className="flex flex-col items-center p-7 bg-white rounded-lg h-235 justify-center sm:w-376">
                <img src={item.icon} alt="icon" className="w-70" />
                <h1 className="text-customBlue text-lg font-bold">
                  {item.header}
                </h1>
                <p>{item.text}</p>
              </div>
            );
          })}
        </section>

        <section className="bg-customBlue px-4 flex flex-col md:flex-row md:justify-around lg:h-345 lg:gap-5 lg:w-95 lg:rounded-xl lg:place-self-center lg:justify-around">
          <div className="mb-5 flex justify-center md:mb-0 lg:hidden">
            <img src={image8} alt="phone-img" />
          </div>
          <div data-aos='fade-up' className="hidden lg:flex lg:h-full lg:justify-center lg:max-w-476">
            <img src={image7} alt="phone-img" />
          </div>
          <div data-aos='fade-down' className="pb-5 md:w-450 flex flex-col justify-center md:pb-0">
            <div className="flex flex-col text-center mb-6 items-center gap-3 md:items-start md:mb-4">
              <h1 className="text-white font-bold text-2xl sm:text-3xl">
                Download the Renta app
              </h1>
              <p className="text-customGold w-5/6 text-center sm:text-lg md:text-left">
                Download the Renta mobile app to begin your seamless journey and
                find your perfect property.
              </p>
            </div>

            <div className="mt-3 flex flex-col gap-4 md:flex-row">
              <a
                href="https://appstore.com/renta"
                target={"_blank"}
                rel="noreferrer"
                className="bg-white py-3 px-4 rounded-2xl flex flex-row gap-5 items-center justify-center w-full h-65 hover:bg-customGray transition ease-in-out delay-100 md:w-200"
              >
                <img src={appleIcon} alt="apple-icon" />
                <p className="text-sm">
                  Available on <br />
                  <strong className="text-base">App Store</strong>
                </p>
              </a>
              <a
                href="https://playstore.com/renta"
                target={"_blank"}
                rel="noreferrer"
                className="bg-white py-3 px-4 rounded-2xl flex flex-row gap-5 items-center justify-center w-full h-65 hover:bg-customGray transition ease-in-out delay-100 md:w-200"
              >
                <img src={playstoreIcon} alt="apple-icon" />
                <p className="text-sm">
                  Available on <br />
                  <strong className="text-base">Play store</strong>
                </p>
              </a>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="px-5 flex flex-col gap-4">
            <h1 className="font-bold text-4xl">FAQs</h1>
            <p>
              You’ve got questions, we have answers. You can contact us if you
              have more questions.
            </p>
          </div>
          <div className="mt-5 flex flex-col items-center gap-5 lg:px-10 lg:py-5 lg:grid lg:grid-cols-2 lg:align-items-center xl:justify-center">
            {faqs?.map((faq, index) => {
              return (
                <div key={index} className="w-90 bg-white py-5 px-5 rounded-lg lg:w-full lg:flex lg:flex-col">
                  <div className="flex flex-row font-bold justify-between text-lg lg:w-full">
                    <h1>{faq.question}</h1>
                    <i className="cursor-pointer" onClick={()=>showFaq(faq)}>
                      {!faq.state ? <BiChevronDown /> : <BiChevronUp />}
                    </i>
                  </div>
                  {faq.state && <hr />}
                  {faq.state && <p className="text-left text-justify mt-2">
                    {faq.answer}
                  </p>}
                </div>
              );
            })}
          </div>
        </article>

        <section className="bg-customBlue py-10 flex flex-col items-center md:flex-row md:justify-around lg:px-5 lg:justify-around lg:w-95 lg:rounded-lg place-self-center">
          <div className="hidden md:flex md:items-center">
            <img src={image9} alt='img' />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-80 flex flex-col gap-4">
              <h1 className="text-customGold font-bold text-3xl">Join Waitlist</h1>
              <p className="text-white tracking-wider">Be amongst the pioneers of Renta, join the waitlist to get started.</p>
            </div>
            <div className="bg-customGray h-53 flex flex-row items-center justify-between pl-3 pr-0.5 w-90 rounded-lg mt-10">
              <img src={mail} alt='icon' />
              <input 
                placeholder="Enter your email address"
                className="h-full px-2 bg-customGray w-4/5 focus:outline-none"
              />
              <button className="bg-customBlue text-white px-7 h-52 rounded-xl sm:px-12">
                Join
              </button>
            </div>
          </div>
          <div className="hidden lg:items-center lg:flex">
            <img 
              src={arrow}
              alt='icon'
            />
          </div>
        </section>
      </main>

      <Footer scroll={scrollToTop} />
    </>
  );
};

export default Home;
