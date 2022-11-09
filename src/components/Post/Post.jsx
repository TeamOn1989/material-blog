import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Collapse} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import './index.module.css';
import dayjs from 'dayjs';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));





function Post({image, title, author = {}, text, created_at, avatar, email}) {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={author.avatar && author.avatar} aria-label="recipe">
           {author.name.slice(0, 1).toUpperCase()} 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title={author.name !== '' ? author.name : author.email}
        subheader={dayjs(created_at).format('dddd, MMMM D, YYYY h:mm')}
      />
       <CardMedia
        component="img"
        height="194"
        image={image}
        alt={`Изображение ${title}`}
      />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">

        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
           {text}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Post;
