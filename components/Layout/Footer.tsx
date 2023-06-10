import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-500 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link href="/terms-of-service">
            <span className="text-white hover:text-gray-300 cursor-pointer">
              Terms of Service
            </span>
          </Link>
          <Link href="/privacy-policy">
            <span className="text-white hover:text-gray-300 cursor-pointer">
              Privacy Policy
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:text-gray-300 cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
        <div className="mt-4 text-center text-gray-300">
          &copy; {new Date().getFullYear()} PeoplePedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
