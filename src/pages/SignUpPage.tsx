import SignUpForm from "../components/sign-up/SignUpForm"
import PlainLayout from "../layouts/PlainLayout"

function SignUpPage() {
  return (
    <PlainLayout className="w-screen h-screen bg-[#ffffff] flex items-center justify-start">
      <div className="flex-1 flex items-center justify-center">
        <SignUpForm/>
      </div>
    </PlainLayout>
  )
}

export default SignUpPage