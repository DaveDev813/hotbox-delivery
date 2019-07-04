import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Category } from "../enums";
import defaultImg from "../images/default.png";
import {
  InputLabel,
  Input,
  FormControl,
  Grid,
  Button,
  CardMedia
} from "@material-ui/core";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme: any) => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export interface ItemTypes {
  name: string;
  qty: number;
  category: Category;
}

const Items: React.FC<Partial<ItemTypes>> = props => {
  const classes = useStyles();
  const { name } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={defaultImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControl fullWidth className="">
              <InputLabel htmlFor="adornment-amount">Qty</InputLabel>
              <Input
                type="number"
                id="adornment-amount"
                // value={values.amount}
                // onChange={handleChange("amount")}
                // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => toast(`${name} has been added to orders`)}
            >
              Add Order
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Items;
