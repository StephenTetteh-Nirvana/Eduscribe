const data = [
    {
        number: 1,
        title: "Register",
        description: "Register an account with us to access our wide range of academic writing services."
    },
    {
        number: 2,
        title: "Choose Your Service",
        description: "Select from our variety of academic writing services tailored to your needs."
    },
    {
        number: 3,
        title: "Get Your Work",
        description: "Receive your completed academic work delivered to you on time."
    }
]

const HowItWorks = () => {
    return (
        <div className=" w-full mt-5 px-10">
          <h1 className="text-[var(--primary)] text-center text-[30px] font-[900]">How It Works</h1>

          {/* Work Roadmap  */}
          <div className="flex flex-col gap-2 md:flex-row">
           {data.map((item, index) => (
           
            <div key={index} className="flex flex-row gap-2 h-[60px]">
              <div className="bg-[var(--primary)] w-8 h-8 rounded-full 
                flex items-center justify-center text-white font-[600] flex-shrink-0 text-[14px]"
              >
                {item.number}
              </div>

              <div>
                <h1 className="text-[12px] font-[700] text-[var(--primary)]">{item.title}</h1>
                <p className="text-[10px]">{item.description}</p>                
              </div>
            </div>
           ))}


          </div>
        </div>
    )
}

export default HowItWorks;