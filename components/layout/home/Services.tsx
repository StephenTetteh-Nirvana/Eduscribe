import { BookText } from "lucide-react";

const services = [
  {
    title: "Core Academic Writing Services",
    description:
      "We provide comprehensive academic writing support including essays, research papers, dissertations, literature reviews, and coursework tailored to meet academic standards and individual requirements."
  },
  {
    title: "Professional & Consulting Services",
    description:
      "Expert guidance and consulting services for academic planning, research methodology, proposal development, and project structuring to help students and professionals achieve their goals efficiently."
  },
  {
    title: "Quality Assurance Services",
    description:
      "Rigorous editing, proofreading, plagiarism checks, formatting, and compliance reviews to ensure all work meets high academic and professional quality standards before submission."
  },
  {
    title: "Academic Fields Covered",
    description:
      "Support across a wide range of disciplines including humanities, social sciences, business, engineering, healthcare, and natural sciences, ensuring subject-specific expertise for every project."
  }
];

const Services = () => {
    return (
        <div className="mt-5">
          <h1 className="text-[32px] text-center font-[900] text-[var(--primary)]">What We Offer</h1>

          {/* Services Cards  */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 px-10 md:px-3">
            {services.map((service, index) => (
                <div key={index} className="border border-slate-300 rounded-md p-5">
                    <div className="bg-[var(--accent)] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <BookText color="white" />
                    </div>

                    <div className="mt-2">
                      <h1 className="text-[20px] md:text-[16px] font-[600] text-[var(--primary)]">{service.title}</h1>
                      <p className="text-[12px] md:mt-1 text-slate-600">{service.description}</p>
                    </div>
                </div>
            ))}
          </section>
        </div>
    )

}

export default Services