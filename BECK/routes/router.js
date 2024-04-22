const router = require("express").Router()

const UserRouter = require("./User")

router.use("/", UserRouter)

module.exports = router