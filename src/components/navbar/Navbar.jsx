import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  return (
    <header className="bg-white mb-4">
      <nav className="flex gap-20 flex-row justify-around px-8 py-4 items-center md:w-[90%] m-auto ">
        <div className="flex flex-row flex-auto lg:gap-28 gap-10 items-center">
          <div className="text-4xl text-blue-600 font-semibold">SajiloMart</div>
          <div className="flex flex-row justify-between max-w-sm w-full items-center text-xl font-light">
            <span className="nav-header">Home</span>
            <span className="nav-header">About</span>
            <span className="nav-header">Contact us</span>
          </div>
        </div>
        <div className="flex max-w-sm justify-end px-4 items-center text-xl font-light">
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              />
          </Search>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
