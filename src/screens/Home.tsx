import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Items from "../components/Items";
import { Grid, Button } from "@material-ui/core";
import { Category } from "../enums";
import { withRouter, RouteComponentProps } from "react-router";
import CartIcon from "@material-ui/icons/ShoppingCart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TabContainer(props: any) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing(1)
  },
  orderContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Home = (props: RouteComponentProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [items] = React.useState([
    {
      name: "Pork Sisig",
      qty: 0,
      category: Category.SAVORY
    },
    {
      name: "Pork Liempo",
      qty: 0,
      category: Category.SAVORY
    },
    {
      name: "Beef Tapa",
      qty: 0,
      category: Category.SAVORY
    },
    {
      name: "Chicken Inasal",
      qty: 0,
      category: Category.SAVORY
    },
    {
      name: "Pork Humba",
      qty: 0,
      category: Category.SAVORY
    },
    {
      name: "Bangus Spring Rolls",
      qty: 0,
      category: Category.SAVORY
    },
    {
      name: "Beef Caldereta",
      qty: 0,
      category: Category.SAVORY
    },
    {
      name: "Pork Binagoongan",
      qty: 0,
      category: Category.SAVORY
    },
    {
      name: "Coconut Milk Bangus Sardines",
      qty: 0,
      category: Category.HEALTHY
    },
    {
      name: "Soy-free Beef Tapa",
      qty: 0,
      category: Category.HEALTHY
    },
    {
      name: "Soy-free Chicken Pandan",
      qty: 0,
      category: Category.HEALTHY
    },
    {
      name: "Tuying Tinola",
      qty: 0,
      category: Category.HEALTHY
    },
    {
      name: "Vegan Phakbet",
      qty: 0,
      category: Category.HEALTHY
    },
    {
      name: "Coconut Amino Adobo",
      qty: 0,
      category: Category.HEALTHY
    }
  ]);

  function handleChange(event: any, newValue: any) {
    setValue(newValue);
  }

  return (
    <React.Fragment>
      <div className={classes.orderContainer}>
        <Button
          onClick={() => props.history.push(`/orders`)}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          <CartIcon className={classes.extendedIcon} />
          View Orders
        </Button>
      </div>

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            // variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label={Category.SAVORY} />
            <Tab label={Category.HEALTHY} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Grid container spacing={3}>
              {items.map((item: any) => {
                return (
                  item.category === Category.SAVORY && (
                    <Grid item xs={4}>
                      <Items name={item.name} />
                    </Grid>
                  )
                );
              })}
            </Grid>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Grid container spacing={3}>
              {items.map((item: any) => {
                return (
                  item.category === Category.HEALTHY && (
                    <Grid item xs={4}>
                      <Items name={item.name} />
                    </Grid>
                  )
                );
              })}
            </Grid>
          </TabContainer>
        )}
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default withRouter(Home);
