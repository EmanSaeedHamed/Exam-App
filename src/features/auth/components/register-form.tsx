import EmailForm from "./email-form";
import UserInfoForm from "./user-info-form";
import VerifyEmailForm from "./verify-email-form";

export default function RegisterForm() {
  
  return <>
     <div className="py-60">
       <div className="max-w-[452px] mx-auto">
        {/* <EmailForm/> */}
        {/* <VerifyEmailForm/> */}
        <UserInfoForm/>
       </div>
     </div>
  </>
}
