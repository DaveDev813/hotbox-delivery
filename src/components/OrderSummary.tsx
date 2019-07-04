import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OrderList from "./OrderList";
export default function OrderSummary() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <Grid container spacing={3}>
        <OrderList />
      </Grid>
    </React.Fragment>
  );
}
