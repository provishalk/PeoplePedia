import Image from "next/image";
import Link from "next/link";
import React from "react";
import Script from 'next/script';

const HomePage = () => {
  return (
    <div>
      <header className="bg-white py-8">
        <Script
          id="custom-script"
          src="https://cdn.convrrt.com/libs/popup/widget.js"
          strategy="beforeInteractive"
      >
        {`
          (function (w, d, s, o, f, js, fjs) {
            w[o] = w[o] || function () {
              (w[o].q = w[o].q || []).push(arguments);
            };
            (js = d.createElement(s)),
              (fjs = d.getElementsByTagName(s)[0]);
            js.id = o;
            js.src = f;
            js.async = 1;
            fjs.parentNode.insertBefore(js, fjs);
          })(
            window,
            document,
            "script",
            "_cvt",
            "https://cdn.convrrt.com/libs/popup/widget.js"
          );
          _cvt("init", {
            orgID: 'mailmodo',
            projectID: "0004ede9-b0b1-55d5-b0b2-819243f1c0ea_f5ad2069-61cf-4503-8b70-7e7b6eae5812",
            popupID: "ec25ac2c-7a17-45be-94e8-13f093af2e6e"
          });
        `}
      </Script>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Welcome to PeoplePedia
          </h1>
          <p className="text-lg text-gray-600 text-center mt-4">
            The ultimate platform for connecting people and sharing knowledge.
          </p>
          <div className="flex justify-center mt-8">
            <Link
              href="/directory"
              className="bg-purple-500 text-white py-3 px-6 rounded-lg font-bold mr-4"
            >
              Browse Directory
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Discover a World of Knowledge
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:px-10">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Connect with Experts
              </h3>
              <p className="text-gray-600">
                PeoplePedia allows you to connect with industry experts from
                various fields, providing you with valuable insights and advice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Share Your Knowledge
              </h3>
              <p className="text-gray-600">
                Contribute to the community by sharing your expertise and
                experiences with others, helping them learn and grow.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Collaborate with Peers
              </h3>
              <p className="text-gray-600">
                Connect and collaborate with like-minded individuals, fostering
                meaningful discussions and expanding your network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 2xl:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Meet Our Animated Characters
          </h2>
          <div className="flex items-center justify-center">
            <Image
              src="/Images/how-it-works.png"
              alt="How It Works"
              className="max-w-full"
              width={666}
              height={375}
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">
            Explore Our People Directory
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Discover a diverse community of individuals on PeoplePedia who are
            eager to share their knowledge and connect with like-minded
            individuals.
          </p>
          <div className="flex justify-center">
            <Link
              href="/directory"
              className="bg-purple-500 text-white py-3 px-6 rounded-lg font-bold"
            >
              Browse Directory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
