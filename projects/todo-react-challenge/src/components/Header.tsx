import logo from "../../public/logo.svg";

export const Header = () => {
  return (
    <header className="bg-gray-700 flex flex-1 justify-center py-20 px-3">
      <img src={logo} alt="logo" />
    </header>
  );
};
