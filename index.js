const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const userRoute = require("./routes/users");
const pinRoutes = require('./routes/pins');

dotenv.config();

app.use(cors({ credentials: true }));
app.use(express.json());

mongoose
.connect(process.env.MONGO_URL)
.then(() => {
	console.log("MongoDB connected");
})
.catch((err) =>{
	console.log(err);
});

app.use("/api/users", userRoute);
app.use('/api/pins', pinRoutes);

app.listen(process.env.PORT || 8080, ()=>{
	console.log('Server is running');
});