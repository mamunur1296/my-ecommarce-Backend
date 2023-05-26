//not found  handelar 
const isNotFoundHandlar=(req,res,next)=>{
    const error= new Error(`not found:${req.originalUrl}`);
    res.status(404);
    next(error)
}

// defoult error handelar 

const isErrorHandlar=(err, req, res, next) => {
    // Set the status code for the response
    res.status(err.status || 500);
  
    // Log the error for debugging (optional)
    console.error(err);
  
    // Send a JSON response with the error message
    res.json({
      error: {
        message: err.message || 'Internal Server Error'
      }
    });
  }
  module.exports={
    isErrorHandlar,
    isNotFoundHandlar
  }