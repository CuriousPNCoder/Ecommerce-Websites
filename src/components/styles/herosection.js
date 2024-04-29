import React from "react";

const HeroSection = () => {
  return (
    <>
      <style>
        {`
        .gradient-text {
  background: linear-gradient(to right, #8a3ab9, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
          @media (max-width: 768px) {
            .hero-section {
              height: 40vh; /* Adjust the height as needed */
            }
            .mobile-view-heading{
                 display: none;
            }
          }
        `}
      </style>
      <section
        className=" bg-sky-100 hero-section"
        style={{
          // backgroundImage:
          //   "url('https://img.freepik.com/free-photo/fulllength-attractive-korean-guy-black-clothes-showing-thumbsup-holding-shopping-bags-yellow-b_1258-112408.jpg?t=st=1714112449~exp=1714116049~hmac=d1418e4188d85b70f8dca9cdcecd6eba90cc10db5ca431e108592f12f3003e4d&w=1060')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="max-w-2xl mb-4 text-zxl font-extrabold leading-4 md:text-5xl xl:text-6xl dark:text-sky-900">
              <span className="gradient-text text-4xl md:text-5xl xl:text-6xl">
                Enhancing Lives Through Technology
              </span>
            </div>
            <p className="max-w-2xl mb-6 font-light text-xl text-slate-900 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-900">
              Experience the power of connectivity and innovation with our sleek
              smartphones, offering cutting-edge features and exceptional
              performance for all your digital needs."
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">
              Purple to Blue
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-blue-500 rounded-lg border-gradient-to-br border-2 border-purple-600 group group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent  text-purple-600 dark:bg-transparent rounded-md group-hover:bg-opacity-0">
                Blue Text
              </span>
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="../../assets/hero-section.png" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
