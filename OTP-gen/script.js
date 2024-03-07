// let generateOTP = () => {
//     //Define the length of the OTP
//     const otpLength = 6;
  
//     // Generate a random numeric OTP with exactly 6 digits
//     const otp = Math.floor(100000 + Math.random() * 900000);
  
//     //Display the generated OTP
//     document.getElementById("otpDisplay").innerText = `${otp}`;
//   };
  
//   document.getElementById("generateBtn").addEventListener("click", generateOTP);
//   window.addEventListener("load", generateOTP);

let generateOtp =()=>
{
  let otpLength=4;
  let otp =Math.floor(1000+Math.random()*9000)
  document.getElementById("otpDisplay").innerHTML=`${otp}`;

};
document.getElementById("generateBtn").addEventListener("click",generateOtp);
window.addEventListener("load",generateOtp);