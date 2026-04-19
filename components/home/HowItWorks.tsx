const data = [
  {
    number: 1,
    title: "Register",
    description:
      "Register an account with us to access our wide range of academic writing services.",
  },
  {
    number: 2,
    title: "Choose Your Service",
    description:
      "Select from our variety of academic writing services tailored to your needs.",
  },
  {
    number: 3,
    title: "Get Your Work",
    description:
      "Receive your completed academic work delivered to you on time.",
  },
];

const HowItWorks = () => {
  return (
    <div className=" w-full mt-15 px-3 md:pl-10 py-5">
      <h1 className="text-[var(--primaryTheme)] text-center text-[27px] lg:text-[40px] md:text-[35px] font-[900]">
        Get Started With EDUSCRIBE
      </h1>

      {/* Work Roadmap  */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-2 mt-5 lg:mt-10">
        {data.map((item, index) => (
          // Service Card
          <div
            key={index}
            className="flex flex-row gap-2 h-[60px] md:flex-col lg:mx-auto"
          >
            <div
              className="bg-[var(--primaryTheme)] w-5 h-5 md:w-10 md:h-10 rounded-full 
              flex items-center justify-center text-white font-[600] flex-shrink-0 text-[10px] md:mx-auto md:text-[15px]"
            >
              {item.number}
            </div>

            <div className="md:flex md:flex-col md:gap-2 md:items-center md:justify-center">
              <h1 className="text-[15px] md:text-[18px] lg:text-[20px] font-[700] text-[var(--primaryTheme)] md:text-center">
                {item.title}
              </h1>
              <p className="text-[11px] md:text-center md:text-[13px] md:w-[210px] lg:w-[250px] lg:mt-1 font-[700] text-[var(--primaryTheme)]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
