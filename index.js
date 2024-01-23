const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/se",(req,res) => {

		let name = req.body.name;
		let txt = "phone"+req.body.phone+"query"+req.body.query;
	
		let transporter = nodemailer.createTransport({
		
				service:"gmail",
				auth:{
					user:"mayur.react.aug@gmail.com",
					pass:"avsfycxcotqquwsw"
				}
		})
	
		let mailOptions = {
			from:"mayur.react.aug@gmail.com",
			to:"sahilthalari02@gmail.com",
			subject:"Enquiry from" + name,
			text:txt
		}
		
		transporter.sendMail(mailOptions,(err, info) => {
		
					if(err)
						res.status(500).json({success:true,message:"server error"});

					else
						res.status(200).json({success:true,message:"email sent"});

		
		})
});

app.listen(9000, () => {console.log("ready @ server @ 9000");});