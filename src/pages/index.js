import Link from "next/link"
import Typewriter from 'typewriter-effect';
import Slides from "@/components/Slides";


const Landing = () => {

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 w-full h-screen flex flex-col space-y-7 justify-evenly ">
      <div className="lg:text-8xl text-5xl text-white font-custom p-7  h-[180px] sm:h-[150px] lg:h-[250px]">
        <Typewriter
          options={{
            delay: 70,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString("Hi, I'm CPA[i],")
              .start()
              .typeString("<br />Your Virtual Accountant");
          }}
        />
      </div>
      <Slides />
      <div className="flex justify-end mx-auto sm:mx-0 sm:pr-12 sm:pb-5">
        <div className=" hover:bg-primary-300 hover:text-white bg-white w-[300px] h-16 font-custom rounded-xl text-3xl flex justify-center items-center text-secondary-600">
          <Link href='/home'>Let's Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
