/**
 * Problem-02: OTP Validation for Zapshift
⚠️ Function Name Must be validOtp()

Zapshift কোম্পানি তাদের প্রোডাক্ট ডেলিভারি করার সময় OTP পাঠায়। কিন্তু কিছু লোক Fraud OTP ব্যবহার করে প্রোডাক্ট রিসিভ করে ফেলে। তাই তোমার কাজ হলো একটি ফাংশন বানানো, যা OTP সঠিক কিনা চেক করবে। 
ফাংশনটি একটি Boolean (true/false) রিটার্ন করবে। যদি ইনপুটটি সঠিক ফরম্যাটে না থাকে তবে Invalid  রিটার্ন করবে। 

Input :  ইনপুট হবে একটি string.

Output: 
Boolean true বা false রিটার্ন করবে
  
Validation Rules: 
১. OTP অবশ্যই ৮ অক্ষরের (length) হতে হবে। 
২. OTP অবশ্যই "ph-" দিয়ে শুরু হতে হবে।
*/

function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }
  if (otp.length === 8 && otp.startsWith("ph-")) {
    return true;
  } else {
    return false;
  }
}
let Validation = validOtp("ph-10985");
console.log(Validation);
