import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
import { List, ListProps } from "@mui/material";

//container
export const NavbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: '4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}));

//Logo


///List
interface MyListProps extends ListProps {
    type: 'row' | 'block'; 
  }

export const MyList = styled(List)<MyListProps>(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'
}))

