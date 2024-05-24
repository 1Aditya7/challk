import Image from "next/image"
import RegisterForm from "@/components/ui/signup"

function Dashboard() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[600px] gap-6">
          <div className="grid flex gap-2 text-center">
            <img src="https://www.nmit.ac.in/img/nitte-nmit-logo.png"/>
            <h3 className="text-2xl font-bold">WELCOME!</h3>
          </div>
          <div className="grid gap-4">
            <RegisterForm/>
          </div>

        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://www.nmit.ac.in/img/slider-1/home-admissions-rights.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    
  )
}
export default Dashboard;
