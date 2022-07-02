const errorHandler = (error, req, res, next) => {
    console.log("error: ", error);
    let status = 500
    let message = "Internat Server Error"
}

module.exports = errorHandler