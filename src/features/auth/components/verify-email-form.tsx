import Otp from "@/components/ui/otp";
import Stepper from "./stepper";


export default function VerifyEmailForm() {
  return <>
      {/* header */}
    <header>
    <Stepper steps={4} currentStep={2}/>
    <h2 className="font-inter font-bold text-3xl text-gray-800 mt-2.5">Create Account</h2>
    </header>
     {/* description */}
    <div className="my-4">
       <h3 className="font-inter font-bold text-2xl text-blue-600 mb-2.5">Verify OTP</h3>
       <p className="font-mono text-gray-500">Please enter the 6-digits code we have sent to:</p>
       <span className="font-mono font-medium text-base text-gray-800 mr-2">user@example.com.</span>
       <button type="button" className="underline font-mono font-medium text-base text-blue-600 cursor-pointer">Edit</button>
    </div>

    {/* otp */}
    <div className="flex flex-col items-center py-2.5">
        <Otp/>
    </div>
    {/* verify button */}
    <button className="font-mono text-sm font-medium text-gray-800 w-full py-3.5 mt-10 cursor-pointer">Verify Code</button>

  
  </>
}
