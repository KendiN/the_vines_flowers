import { useTheme } from "@emotion/react";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../styles/banner";
import { Typography } from "@mui/material";

const Banner = () => {

    const theme = useTheme();

    return (
        <BannerContainer>
            <BannerImage sx={{
                height:'460px',
                width: '300px'
            }}src="/images/flowers5.png"/>

            <BannerContent>
                <Typography variant="h6" sx={{fontSize: '11px'}}>
                CREATIVELY INSPIRED BY Nature
                </Typography>

                <BannerTitle variant="h5">
                    The Vine Flowers
                </BannerTitle>

                <BannerDescription variant="h1">
                THE VINES FLOWERS IS A FULL SERVICE FLORIST + HOME, GARDEN, & GIFT SHOP. 
                WE CARRY FRESH FLOWERS, PLANTS, CURATED GIFT COLLECTIONS, HOME & GARDEN 
                DECOR, MICHIGAN MADE PRODUCTS, & MORE
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
     
    )

}

export default Banner;