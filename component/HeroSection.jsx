import { CustomBox, GradientButton } from '@/style/CustomBox.style'
import { Typography } from '@mui/material'
import React from 'react'

const HeroSection = () => {
    return (
        <CustomBox
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            // border={"2px solid oklch(70.9% 0.01 56.259)"}
            PaddingBlock={"2rem"}
            // Width="60%"
            // Margin={"rem auto"}
            RowGap={"2rem"}
            // BorderRadius="1rem"
            height={"100vh"}
            Background={`radial-gradient(
    circle at top left,
    rgba(99, 102, 241, 0.2) 0%,
    rgba(168, 85, 247, 0.2) 25%,
    rgba(236, 72, 153, 0.2) 50%,
    rgba(15, 23, 42, 1) 100%
  )`}
  marginTop={"5rem"}
//   marginBottom={"30rem"}
            
        >
            {/* main header start */}
            <CustomBox
                Width="60%"


            >
                <Typography variant="h2" textAlign={"center"}>
                    Clunex – <br /> Your Intelligent Cloud Companion
                </Typography>
            </CustomBox>
            {/* sub header start */}
            <CustomBox>
                <Typography variant="h6" textAlign={"center"}>
                    Simplify EC2 management with automation, monitoring, and backups in one place. <br />
                    Experience cloud management like never before.
                </Typography>
            </CustomBox>
            <CustomBox display="flex" alignItems="center" columnGap="1rem">
                {/* <Link href={"#contact-section"}> */}
                <GradientButton
                 BackgroundImage='linear-gradient(to right, #3182ce, #805ad5)'
                >
                    Get started
                </GradientButton>
                <GradientButton
                Border="2px solid rgb(255 255 255 / 0.9)"
                >
                    Learn more
                </GradientButton>
               
            </CustomBox>
        </CustomBox>
    )
}

export default HeroSection