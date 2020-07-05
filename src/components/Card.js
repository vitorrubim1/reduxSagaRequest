import * as React from "react";

import { useDispatch, useSelector } from "react-redux";
import { requestRepositories } from "../services/ducks/repositories";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
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
  Box,
  CircularProgress,
} from "@material-ui/core";
import { Pagination, Alert } from "@material-ui/lab";
import githubImage from "../assets/gitImage.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    margin: "2.5vh auto auto",
  },
  rootInput: {
    display: "flex",
    alignItems: "center",
    maxWidth: 400,
    margin: "2.5vh auto auto",
  },
  rootPagination: {
    maxWidth: 370,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    background: "#333333",
  },
  inline: {
    display: "inline",
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
    margin: "auto auto",
    marginTop: "2vh",
    height: "100px",
    width: "100px",
  },
}));

export function MyCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const [page, setPage] = React.useState(1);
  const [user, setUser] = React.useState("");

  const repos = useSelector((state) => state.repos);
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(requestRepositories(user, page));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(requestRepositories(user));
  }

  React.useEffect(() => {
    if (user) {
      handleClick();
    }
  }, [page]);

  //Colapse
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
        {/* {console.log(setUser)} */}
        <Paper component="form" elevation={10} className={classes.rootInput}>
          <InputBase
            className={classes.input}
            placeholder="Search for a user on github"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={handleSubmit}
          >
            <SearchIcon />
            {repos.loading && <CircularProgress style={{ color: "#333333" }} />}
          </IconButton>
        </Paper>
      </Box>

      <Box>
        {!!repos.data.length && (
          <Card key={repos.id} className={classes.root} elevation={10}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  {user.substring(0, 1).toUpperCase()}
                </Avatar>
              }
              title={repos.data[0].owner.login}
              subheader={repos.location}
            />
            {/* {console.log(repos.data[index()].stargazers_count)} */}
            <CardMedia
              component="img"
              height="auto"
              image={repos.data[0].owner.avatar_url}
            />
            <CardContent>
              <Typography variant="body1" color="textSecondary">
                {repos.data[0].owner.html_url}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <PeopleAltIcon />
              <Typography
                variant="body1"
                style={{ marginLeft: "10px", fontSize: "18px" }}
                color="textSecondary"
              >
                {repos.followers}
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
                Repositories
              </Typography>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <List className={classes.root}>
                  <Divider variant="inset" component="li" />
                  {repos.data.map((repositories) => (
                    <>
                      <ListItem key={repos.id} alignItems="flex-start">
                        <ListItemText
                          primary={repositories.name}
                          secondary={
                            <React.Fragment>
                              {repositories?.description}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </>
                  ))}
                  <Box className={classes.rootPagination}>
                    <Pagination
                      count={10}
                      page={page}
                      onChange={handleChange}
                      disabled={repos.data.length !== 30}
                    />
                  </Box>
                </List>
              </CardContent>
            </Collapse>
          </Card>
        )}
      </Box>
      {repos.error && (
        <Alert
          variant="filled"
          severity="error"
          elevation={8}
          className={classes.rootInput}
          style={{ width: "370px", fontWeight: "bold", fontSize: "17px" }}
        >
          User not found :(
        </Alert>
      )}
    </Box>
  );
}
