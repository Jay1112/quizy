import SignInForm from "../components/sign-in/SignInForm"
import PlainLayout from "../layouts/PlainLayout"

function SignInPage() {
  return (
    <PlainLayout className="w-screen h-screen flex items-stretch justify-start">
      <div className="flex-1 flex items-center justify-center">
        <SignInForm/>
      </div>
    </PlainLayout>
  )
}

export default SignInPage