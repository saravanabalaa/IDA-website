function sendEmail({email,subject,message}){
    return((resolve,reject)=>{
    var transporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
    user:"balabala9797000@gmail.com",
    pass:"709279@ae"
    }
    });
    const mail_configs={
    from:"balabala9797000@gmail.com",
    to: email,
    subject
    ,
    text
    ,
    };
    transporter.sendMail(mail_configs,function(error,info){
    if(error){
    console.log(error);
    return reject({message:`An error occured`})
    }
    return resolve({message:"Email send successfully"})
    });
    });
    }
    
    app.get("/",(req,res)=>{
    sendEmail(req.query)
    .then((response)=>response.send(response.message))
    .catch((error)=>res.status(500).send(error.message));
    });
    
    app.listen(port,()=>{
    console.log(`nodemailer is listening at http://localhost:${port}`);
    });