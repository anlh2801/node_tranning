class ValidationError extends Error {
    constructor(message) {
      super(message);
    }
  }

// Init Erorr
let ServerError = new ValidationError("Internal Server Error");
ServerError.code = 500;

let Unauthorized = new ValidationError("Tocken invalid");
Unauthorized.code = 401

function sendRes(res, error){
    res.status(error.code).send({
        message: error.message,
      });
}

module.exports = {
    sendRes,
    ServerError : ServerError,
    Unauthorized : Unauthorized
};


