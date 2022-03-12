import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({heading, noticeText, date}) {
  return (
    <Card sx={{ maxWidth: "sm", mb: 4 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">

          {noticeText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ pl: 1 }}>Download</Button>
        <Typography size="small" sx={{ ml: "auto" }}>{date}</Typography>
      </CardActions>
    </Card>
  );
}
