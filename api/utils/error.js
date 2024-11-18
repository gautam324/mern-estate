export const errorHandler =(statsCode,message)=>{
    const error=new Error();
    error.statusCode=statsCode;
    error.message=message;
    return error;
};