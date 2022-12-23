const errorHandler = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode ?? 500;
  res.status(err.statusCode).send({
    status: statusCode,
    message: err.message,
  });
};

export default errorHandler;
