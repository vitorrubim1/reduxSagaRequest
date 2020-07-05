import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Divider, 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Collapse, 
  IconButton, 
  Avatar, 
  Paper,
  InputBase,
  Box
} from '@material-ui/core';
import './App.css';
import githubImage from './assets/gitImage.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.background.paper,
    margin: '3vh auto auto'
  },
  rootInput: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 345,
    margin: '5vh auto auto'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    background: '#333333',
    // linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)
  },
  inline: {
    display: 'inline',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  imgGit: {
    margin: 'auto auto',
    height: '100px',
    width: '100px',
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <CardMedia 
        component="img"
        className={classes.imgGit}
        image={githubImage}
      />
      <Box>
        <Paper component="form" elevation={6} className={classes.rootInput}>
          <InputBase
            className={classes.input}
            placeholder="Search for a user on github"
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box>
        <Card className={classes.root} elevation={6}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              V
            </Avatar>
          }
          title="Vitor Rubim"
          subheader="Itaquaquecetuba, SP"
        />
        <CardMedia
          component="img"
          height="auto"
          image="https://avatars3.githubusercontent.com/u/48107882?v=4"
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary">
            you are the only representative of your dreams.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <PeopleAltIcon /> 
            <Typography variant="body1" style={{ marginLeft: "10px", fontSize: "18px" }} color="textSecondary">
              18
            </Typography>      
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon /> 
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            Repositórios
          </Typography>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <List className={classes.root}>

        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="airCnC"
            secondary={
              <React.Fragment>
                {" Aircnc é um serviço online comunitário para as pessoas anunciarem e reservarem acomodações, e meios de hospedagem para desenvolvedores."}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="googleChart"
            secondary={
              <React.Fragment>
                {" grafico interativo usando uma biblioteca do google e o framework material ui"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  </Box>
  );
}