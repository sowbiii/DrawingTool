const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")

const EmployeeModel=require('./models/Employee')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")


app.post('/Log', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await EmployeeModel.findOne({ email: email });

        if (user) {
            if (user.password === password) {
                res.status(200).json("Success");
            } else {
                res.status(400).json("The password is incorrect");
            }
        } else {
            res.status(404).json("No record existed");
        }
    } catch (error) {
        console.log("error", error);
        res.status(500).json({"message": error});
    }
});


app.post('/register',async(req,res)=>{
    console.log("req", req.body);
    try {
        const {name, email, password} = req.body
        var employee = new EmployeeModel({
            name,
            email,
            password
        })
        await employee.save()
        res.status(200).json({"message": "success"})
    } catch (error) {
        console.log("error", error);
        res.status(400).json({"message": error})
    }
    // EmployeeModel.create(req.body)
    //  .then(employees=>res.json(employees))
    //  .catch(err=>res.json(err))
   

})

app.listen(4000,()=>{
    console.log("Server is running")

})


// C:\Users\Admin\Downloads\Drawing>cd server

// C:\Users\Admin\Downloads\Drawing\server>nodemon index.js