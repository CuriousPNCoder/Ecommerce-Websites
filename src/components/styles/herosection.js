import React from "react";

const HeroSection = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .hero-section {
              height: 20vh; /* Adjust the height as needed */
            }
            .mobile-view-heading{
                 display: none;
            }
          }
        `}
      </style>
      <section
        className="bg-white hero-section"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/fulllength-attractive-korean-guy-black-clothes-showing-thumbsup-holding-shopping-bags-yellow-b_1258-112408.jpg?t=st=1714112449~exp=1714116049~hmac=d1418e4188d85b70f8dca9cdcecd6eba90cc10db5ca431e108592f12f3003e4d&w=1060')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-4 md:text-5xl xl:text-6xl dark:text-black">
              A batter way
            </h1>
            <p className="mobile-view-heading max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              We will try to sale products in very low price. Manage all
              customer problems in few second that feels you best services.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Check Out
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
            <a
              href="#"
              className="mobile-view-heading inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Any Problem?
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
