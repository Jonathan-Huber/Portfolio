// Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <span className="text-xl font-heading font-bold border border-white px-2 py-1.5 ">
          JH
        </span>

        {/* Liens sociaux */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Jonathan-Huber"
            aria-label="GitHub"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-9 h-9 transition-transform duration-300 hover:rotate-180"
              aria-hidden="true"
            >
              <path
                d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-huber-26b696198/"
            aria-label="LinkedIn"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 192"
              className="w-10 h-10 transition-transform duration-300 hover:rotate-180"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="30"
                y="30"
                width="132"
                height="132"
                rx="16"
                stroke="currentColor"
                strokeWidth="12"
              />

              <path
                d="M66 86v44"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="66" cy="64" r="8" fill="currentColor" />

              <path
                d="M126 130v-26c0-9.941-8.059-18-18-18s-18 8.059-18 18v26"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a
            href="mailto:ton.email@gmail.com"
            aria-label="Gmail"
            title="Gmail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 192"
              className="w-10 h-10 transition-transform duration-300 hover:rotate-180"
              fill="none"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeWidth="12"
                strokeLinejoin="round"
                d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
              />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Jonathan Huber
        </div>
      </div>
    </footer>
  );
}

export default Footer;
