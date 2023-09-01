module.exports = {
    listen: function(app,PORT){
        app.listen(PORT,()=>{
            console.log("Server started, port " + PORT)
        });
    }
}