function Footer() {
  return (
    <footer className="flex h-[170px] flex-col items-center justify-center gap-4 bg-black px-4 text-xl text-white">
      <ul className="flex flex-wrap items-center justify-center gap-4">
        <li>
          <a href="#" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Store Locator
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            FAQs
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            News
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </li>
      </ul>
      <p>
        Design &nbsp; by
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/aqeelhaiderdev"
        >
          &nbsp; Aqeel Haider
        </a>
      </p>
    </footer>
  );
}

export default Footer;
