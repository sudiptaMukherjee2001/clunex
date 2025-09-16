'use client';
import { styled } from "@mui/system";

export const CustomBox=styled("div")(({
    display,
    justifyContent,
    alignItems,
    listStyle,
    padding,
    border,
    columnGap,
    fontWeight,
    fontSize
})=>({
    border:border,
display:display,
justifyContent:justifyContent,
alignItems:alignItems,
columnGap:columnGap,
listStyle:listStyle,
padding:padding,
fontSize:fontSize,
fontWeight:fontWeight
}))