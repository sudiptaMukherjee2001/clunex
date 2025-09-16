import { CustomBox } from '@/style/CustomBox.style'
import React from 'react'

const Navbar = () => {
  return (
    // Navbar container start
<CustomBox
as="nav"
display="flex"
justifyContent="space-between"
padding="10px 20px"
border="1px solid yellow"
fontWeight="bold"
fontSize="2rem"
>
    {/* Product name start */}
  <CustomBox
  as="header"
  >
    Clunex
  </CustomBox>
  {/* Product name start */}

{/* Navigation items start */}
  <CustomBox
  as="ul"
  listStyle="none"
    display="flex"
    alignItems="center"
    border="1px solid red"
    columnGap="2.7rem"
    fontSize="1.7rem"
  >
    <CustomBox
    as="li"
    >
        Home
    </CustomBox> 
    <CustomBox
    as="li"
    >
        About us
    </CustomBox> 
    <CustomBox
    as="li"
    >
        Services
    </CustomBox> 
    <CustomBox
    as="li"
    >
        Contact us
    </CustomBox> 
    
  </CustomBox>



</CustomBox>
// Navbar container end
  )
}

export default Navbar