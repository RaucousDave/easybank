import MobileMenu from "./Menu";
export default function Navbar() {
  return (
    <>
      <nav className="px-6 py-6 xl:py-6 flex sticky z-20 justify-between bg-pureWhite items-center">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="md:flex hidden space-x-3  text-grayishBlue list-none">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </div>
        <div className="hidden md:flex">
          <button className="bg-gradient-to-r from-limeGreen to-brightCyan text-pureWhite px-6 py-2 rounded-full font-semibold transition hover:opacity-50">
            Request Invite
          </button>
        </div>
        <div>
          <MobileMenu />
        </div>
      </nav>
    </>
  );
}
