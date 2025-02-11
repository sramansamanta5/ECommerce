const notFound=(req,res,next)=>{
    const error=new Error(`Not Found -${req.originalUrl}`)
    res.status(404);
    next(error)
}


const errorHandler=(err,req,res,next)=>{
   
    const statuscode=res.statuscode === 200 ? 500 : res.statuscode

    let message=err.message

    //Check for bad ID
 
}