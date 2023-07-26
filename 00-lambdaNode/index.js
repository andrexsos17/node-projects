
exports.handler = async (event, context) => {
    console.log(`Event: `, event);
   var result = "hi";;;
      if(event.param1 === 1){
          result = "soy un result";
          throw new BaseError("soy un error",500,"soy errror2",false);
      }else{
          return {
              code: 400,
              message: {
                  msg:"soy un error",
                  statusCode: 400
              },
            };
      }
    return result;
  };
  
  class BaseError extends Error {
      name;
      httpCode;
      isOperational;
      
      constructor(name, httpCode, description, isOperational) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
      
        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
      
        Error.captureStackTrace(this);
      }
  }