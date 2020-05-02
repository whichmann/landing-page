import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import avatar_ap from "./../media/ap.png";
import avatar_tp from "./../media/1.jpg";
import avatar_ar from "./../media/ar.jpg";
import avatar_eb from "./../media/eb.jpg";
import avatar_kk from "./../media/kk.jpg";
import avatar_mk from "./../media/mk.jpg";
import avatar_pk from "./../media/pk.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "142px",
    paddingBottom: "15px",
    marginBottom: "15px",
    width: "100%",
    maxWidth: "5000px",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  rootlayout: {
    flexGrow: 1
  },
  paper: {
    // padding: theme.spacing(3),
    // paddingBottom: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
  }
}));

var topper = {
  marginTop: "6vh"
};

const avatarMargins = {
  marginRight: "17px"
}

const ONas = () => {
  const classes = useStyles();

  return (
    <Container className={"wide-container"} style={topper}>
      <Row>
        <Col md={6} sm={12}>
          {" "}
          <List className={classes.root + " paper-override"}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Adam Poniatowski"
                  src={avatar_ap}
                  className={classes.large}
                  style={avatarMargins}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Adam Poniatowski"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      założyciel, koordynator odpowiedzialny za matematykę oraz
                      przygotowanie mentalne
                      <br />
                    </Typography>
                    {"Doświadczenie - 10 lat"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Col>

        <Col md={6} sm={12}>
          <List className={classes.root + " paper-override"}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Ewa Bone"
                  src={avatar_eb}
                                    className={classes.large}
                  style={avatarMargins}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Ewa Bone"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      psycholog, odpowiedzialna za przygotowanie mentalne
                      <br />
                    </Typography>
                    {"Doświadczenie - 13 lat"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
          <List className={classes.root + " paper-override"}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Paulina Kaletha"
                  src={avatar_pk}
                                    className={classes.large}
                  style={avatarMargins}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Paulina Kaletha"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      specjalistka d/s promocji i reklamy odpowiedzialna za
                      język niemiecki
                      <br />
                    </Typography>
                    {"Doświadczenie - 3 lata"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Col>
 
        <Col md={6} sm={12}>
          {" "}
          <List className={classes.root + " paper-override"}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Adrianna Ryńska"
                  src={avatar_ar}
                                    className={classes.large}
                  style={avatarMargins}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Adrianna Ryńska"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      odpowiedzialna za język polski
                      <br />
                    </Typography>
                    {"Doświadczenie - 8 lat"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
          <List className={classes.root + " paper-override"}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Martyna Klinkusz"
                  src={avatar_mk}
                                    className={classes.large}
                  style={avatarMargins}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Martyna Klinkusz"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      odpowiedzialna za matematykę
                      <br />
                    </Typography>
                    {"Doświadczenie - 2 lata"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          </Col>

          <Col md={6} sm={12}>
          <List className={classes.root + " paper-override"}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Kacper Kędzierski"
                  src={avatar_kk}
                                    className={classes.large}
                  style={avatarMargins}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Kacper Kędzierski"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      odpowiedzialny za matematykę
                      <br />
                    </Typography>
                    {"Doświadczenie - 2 lata"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
          {" "}
          <List className={classes.root + " paper-override"}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Tomek Poniatowski"
                  src={avatar_tp}
                                    className={classes.large}
                  style={avatarMargins}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Tomek Poniatowski"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      założyciel, koordynator odpowiedzialny za matematykę oraz
                      przygotowanie mentalne
                      <br />
                    </Typography>
                    {"Doświadczenie - 10 lat"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Col>

        <Col md={6} sm={12}>
          {" "}
          <List className={classes.root + " paper-override"}>
            <ListItem alignItems={"flex-start"}>

              <ListItemText
                primary={<b>Dołącz do nas!</b>}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      <br />
                      Jeśli jesteś zainteresowany dołączeniem do naszej ekipy, prześlij swoje CV na adres 
                    </Typography>
                    {" rozmaturzeni@gmail.com"}
                      <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Col>
      </Row>
    </Container>
  );
};

export default ONas;