const express = require('express');
const app = express();
const bodyParse = require('body-parser')
const constantData = require('./constant/constant');
const { db } = require('./model/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger/index');
const { authMiddleware } = require("./middleware/index");


const studentRoute = require('./rootHandler/student.router');
const courseRoute = require('./rootHandler/course.router');
const staffRoute = require('./rootHandler/staff.router');
const authRoute = require('./rootHandler/auth.router');

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/student",authMiddleware, studentRoute);
app.use("/course",authMiddleware, courseRoute);
app.use("/staff",authMiddleware, staffRoute);
app.use("/auth", authRoute);

app.get('/', (req, res) => {
    res.send('this is server side')
})

app.listen(constantData.PORT, async () => {
    console.log("server is listening at", constantData.PORT);
    await db.sync()
})