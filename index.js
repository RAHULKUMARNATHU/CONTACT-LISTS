//require libraries

const express = require('express');
const path = require('path');
const port = 8000;

const db =require('./config/mongoose')
const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
//uses  only read the form data //not params 
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


// Declearing variable

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


// render to home page 
app.get('/',function(req , res){
//    console.log(__dirname)
    // console.log(req)
    // res.send('<h1>cool , it is running! or is it ?<\h1>');

    return res.render('home' , {
        title: "My Contacts List",
        contact_list : contactList
    });
});

// render to practice page 
app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"Let us play with EJS"
    })
})



// post request i.e for add button 

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



// delete contact list functions
app.get('/delete-contact' , function(req,res){
   
    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);


    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
        return res.redirect('back')
    }

});
// request Params
// app.get('/delete-contact/:phone' , function(req,res){
//     console.log(req.params)
//     let phone = req.params.phone;


// });

// listening port here

app.listen(port , function(err){
    if(err){
        console.log('Error in Running the server' ,err)
    }
    console.log('Yup! My Express Server is running on Port ' , port )
});