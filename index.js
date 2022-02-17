const express = require('express');
const path = require('path');
const port = 8000;

const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded())
app.use(express.static('assets'));



//middleware1
app.use(function(req , res , next){
    console.log('middleware 1 called');
    next();
});

//middleware2
app.use(function(req , res , next){
    console.log('middleware 2 called');
    next();
});
var contactList = [
    {
        name:"SwaRa",
        phone:"9572239086"
    },
    {
        name:"Nathu",
        phone:"9575239088"
    },
    {
        name:"Rahul",
        phone:"9574239088"  
}
]



app.get('/',function(req , res){
//    console.log(__dirname)
    // console.log(req)
    // res.send('<h1>cool , it is running! or is it ?<\h1>');

    return res.render('home' , {
        title: "My Contacts List",
        contact_list : contactList
    });
});


app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"Let us play with EJS"
    })
})


app.post('/create-contact',function(req,res){
//     console.log(req.body);
//     console.log(req.body.name);
//    console.log(req.body.phone);

    // return res.redirect('/practice');

    // contactList.push({
    //     name: req.body.name,
    //     phone:req.body.phone
    // });
    // return res.redirect('/')

    contactList.push(req.body);
    return res.redirect('back');
});

app.listen(port , function(err){
    if(err){
        console.log('Error in Running the server' ,err)
    }
    console.log('Yup! My Express Server is running on Port ' , port )
});