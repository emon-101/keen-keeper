import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#244D3F]">
        <div className="md:w-4/5 md:mx-auto mx-4">
          <div className="pt-20 pb-8 space-y-6">
            {/* Title */}
            <div className="flex flex-col justify-center items-center space-y-4 max-w-md mx-auto">
              <Image
                src="/images/logo-xl.png"
                loading="eager"
                alt="Footer Logo"
                width={400}
                height={60}
                className="w-full h-full"
              />
              <p className="opacity-80 text-white text-center">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
              </p>
            </div>

            {/* social links */}
            <div className="text-center space-y-4">
              <p className="text-xl font-medium text-white">Social Links</p>
              <div className="flex justify-center items-center gap-3">
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                />
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className="divider mt-10 mb-8"></div>
          <div className="flex md:flex-row flex-col gap-10 justify-between text-[#FAFAFA] opacity-50">
            <p className="leading-6">© 2026 KeenKeeper. All rights reserved.</p>
            <p className="leading-6 flex gap-3">
              <span>Privacy Policy</span> <span>Terms of Service</span>{" "}
              <span>Cookies</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
