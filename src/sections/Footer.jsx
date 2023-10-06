import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-center items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer" width={150} height={46} />
          </a>
          <p className="text-slate-500 sm:max-w-sm mt-6">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-8 mt-8 ">
            {socialMedia.map((icon) => (
              <div
                className="flex items-center justify-center w-14 h-14 bg-white rounded-full"
                key={icon.alt}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={42}
                  height={42}
                  className="flex items-center justify-center bg-white rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 sm:gap-10 gap-20 justify-between flex-wrap">
          {footerLinks.map((links) => (
            <div key={links.title}>
              <h2 className="text-base text-[26px] font-montserrat mb-6">
                {links.title}
              </h2>
              {links.links.map((link) => (
                <div
                  key={link.name}
                  className="mt-2 hover:text-slate-600 cursor-pointer"
                >
                  <a href={link.link}>{link.name}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white-400 max-sm:items-center max-sm:flex-col">
        <div className="flex flex-1 justify-start font-montserrat items-center cursor-pointer gap-2">
          <img
            src={copyrightSign}
            alt="copyright"
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions.</p>
      </div>
    </footer>
  );
};

export default Footer;
