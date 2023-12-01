import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="flex justify-evenly items-center w-full h-10 bg-slate-800  asbolute ">
        {/* ?Heading section */}
        <div className=" flex gap-2  items-center heading-section  w-1/4">
          <img
            src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
            alt=""
            className="h-6 w-6"
          />

          <NavLink to="/">
            <h2 className="text-xl font-extrabold text-gray-200">
              React Redux 2023/024
            </h2>
          </NavLink>
        </div>
        {/* NavLink section */}
        <ul className="flex justify-evenly items-center  w-1/4 text-white font-sans ">
          <NavLink to={"prlv/reference"}>
            <li className="text-xl cursor-pointer hover:text-black">
              Reference
            </li>
          </NavLink>{" "}
          <NavLink to={"prlv/simple"}>
            <li className="text-xl  cursor-pointer hover:text-black">Simple</li>
          </NavLink>
          <NavLink to={"prlv/medium"}>
            <li className="text-xl cursor-pointer hover:text-black">Medium</li>
          </NavLink>
          <NavLink to={"prlv/hard"}>
            <li className="text-xl cursor-pointer hover:text-black">Hard</li>
          </NavLink>
        </ul>

        {/* ?Search Bar Section */}
        <div className="container-search flex justify-end gap-2  w-1/4">
          <input type="text" id="" placeholder="search..." className=" px-1" />
          <button className=" px-1  bg-cyan-600 " type="submit">
            search
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
