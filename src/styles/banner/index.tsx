import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    background: "#F4BAC9",
}));

export const BannerImage = styled('img')(({src}) => ({
    src: 'url(${src})',
    width: '500px',
}));

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding: '30px'
}));

export const BannerTitle = styled(Typography)(() => ({
    lineHeight: 1.5,
    fontSize: '30px',
    marginBottom: '8px',
}));

export const BannerDescription = styled(Typography)(() => ({
    lineHeight: 1.25,
    fontSize: '14px', 
    marginBottom: '3em'
}));