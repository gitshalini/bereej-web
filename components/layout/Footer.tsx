import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100 px-8 py-16 bg-white w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start  md:px-8">
        <div>
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Link
              className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
              href="/"
            >
              <Image
                alt="logo"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/favicon.png"
              />
              <span className="font-medium text-black">Bereej Technology</span>
            </Link>
          </div>
          <div className="mt-2 ml-2">
            © Bereej Technologies Private Limited. All Rights Reserved{" "}
            {currentYear}.
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 font-bold">
              Pages
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 list-none space-y-4">
              <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800 "
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/services"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  Services
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/case-studies"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  Case Studies
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/careers"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  Careers
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/contact"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 font-bold">
              Socials
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 list-none space-y-4">
              <li className="list-none">
                <Link
                  href="https://x.com/BereejTech"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  Twitter
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800 "
                  href="https://www.linkedin.com/company/bereej/posts/?feedView=all"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 font-bold">
              Company
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 list-none space-y-4">
              <li className="list-none">
                <Link
                  href="/about"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  About Us
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/our-values"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  Our Values
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/our-team"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  Leadership
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/why-choose-us"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  Why Choose Us
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/testimonials"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  Testimonials
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/faq"
                  className="transition-colors hover:text-text-neutral-800"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center uppercase mt-20 text-5xl md:text-9xl lg:text-[6rem] xl:text-[8rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 inset-x-0">
        Bereej Technology
      </p>
    </footer>
  );
}
