import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import NoticeCard from '../components/NoticeCard.js';
import Typography from '@mui/material/Typography';
import noticesText from "../data/notices.json";


export default function NestedList() {
    const notices = noticesText.notices;
    
    
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className="bg-shapes">
        <Container
        component="main"
        maxWidth="sm"
        sx={{ minHeight: "90vh" }}
        style={{ display: "flex", justifyContent: "center" }}
        >
            <List 
            sx={{ maxWidth: "sm", bgcolor: 'background.paper' }} 
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <Typography variant="h4" style={{ display: "flex", justifyContent: "center" }}>
                    Notices
                </Typography>
            }
            >

                    {notices.map((data, index) => {
						return <NoticeCard 
                            key={index} 
                            heading={data.heading} 
                            noticeText={data.notice} 
                            date={data.date} 
                        />
					})}

            {/* <NoticeCard />
            <NoticeCard />
            <NoticeCard /> */}

            </List>
        </Container>
    </Box>
  );
}
