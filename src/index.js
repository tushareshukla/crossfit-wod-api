const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
// const v1Router = require('./v1/routes')
//for testing purpose
// app.get('/', (req,res)=>{
//     res.send("<h2> Its working!</h2>")
// });

//app.use("/api/v1",v1Router);
app.use("/api/v1/workouts", v1WorkoutRouter);
app.listen(PORT, () => {
  console.log(`API Is lsitening on the ${PORT}`);
});
