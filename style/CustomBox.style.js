'use client';
import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const CustomBox = styled(Box)(({
    display,
    justifyContent,
    alignItems,
    listStyle,
    padding,
    border,
    columnGap,
    fontWeight,
    fontSize,
    Width,
    RowGap,
    Margin,
    PaddingBlock,
    BorderRadius,
    Background,
    Opacity,
    BackdropFilter,
    WebkitBackdropFilter,
    BoxShadow
}) => ({
    border: border,
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    columnGap: columnGap,
    listStyle: listStyle,
    padding: padding,
    fontSize: fontSize,
    fontWeight: fontWeight,
    width: Width,
    margin: Margin,
    rowGap: RowGap,
    paddingBlock: PaddingBlock,
    borderRadius: BorderRadius,
    background: Background,
}))
export const GradientButton = styled(Button)(({
    width,
    BackgroundImage,
    Border,
    padding,
}) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontSize: "1rem",
    color: "#fff",
    width: width,
    height: '2.25rem', // same as h-9
    padding: padding ? padding : '1.5rem 1rem', // py-6 px-4
    borderRadius: '0.5rem', // rounded-lg
    border: Border ? Border : '1px solid rgba(255, 255, 255, 0.1)', // border-white/10
    backgroundImage: BackgroundImage,
    boxShadow: '0 0 20px rgba(159, 122, 234, 0.2)', // similar to shadow-purple-500/20
    transition: 'all 0.3s ease-in',
    cursor: 'pointer',
    transform: 'none',
    backgroundColor: 'rgba(74, 74, 138, 0.2)',
    textTransform: 'capitalize', // capitalize text

    '&:hover': {
        backgroundImage: 'linear-gradient(to right, #2b6cb0, #6b46c1)',
        transform: 'scale(1.05)',
    },

}))
export const NavList = styled("ul")(({ columnGap, fontSize }) => ({
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  columnGap: columnGap || "2.7rem",
  fontSize: fontSize || "1.7rem",
  margin: 0,
  padding: 0, // ensures no default browser padding
}));


export const NavbarContainer = styled("nav")(
  ({ width, BackgroundImage, Border, padding }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: width || "100%",
    zIndex: 1200,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: padding || "20px",
    fontWeight: "bold",
    fontSize: "2rem",

    background: "rgba(15, 15, 30, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",

    border: Border,
    backgroundImage: BackgroundImage,
  })
);
