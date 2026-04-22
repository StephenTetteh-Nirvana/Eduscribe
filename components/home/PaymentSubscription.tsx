import { CircleCheckBig } from "lucide-react";

const data = [
  {
    plan: "Basic",
    price: "Free",
    features: [
      "Access to basic writing services",
      "Limited revisions",
      "Email support",
    ],
  },
  {
    plan: "Pro",
    price: "₵50/mo",
    features: [
      "Access to all standard courses",
      "Downloadable study materials (PDFs & notes)",
      "Progress tracking dashboard",
      "Weekly quizzes and assessments",
      "Limited assignment feedback",
      "Community forum access",
      "Email support",
    ],
  },
  {
    plan: "Premium",
    price: "₵100/month",
    features: [
      "Everything in Pro",
      "Unlimited access to all premium courses",
      "Personalized learning paths",
      "1-on-1 mentorship sessions",
      "Unlimited assignment reviews & feedback",
      "Live interactive classes & webinars",
      "Certificate of completion",
      "Priority support (chat + email)",
      "Early access to new courses",
    ],
  },
];

const PaymentSubscription = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center md:px-10 py-5">
      {/* Heading  */}
        <h1 className="text-[var(--primaryTheme)] text-center text-[27px] lg:text-[40px] md:text-[35px] font-[900]"> 
          Choose Your Subscription Plan
        </h1>

      {/* Subscription Plans  */}
      <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3 md:gap-5 px-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-[var(--accentTheme)] 
            shadow-[var(--secondaryTheme)] shadow-md rounded-md p-5 flex flex-col gap-3 cursor-pointer"
          >
            <h1 className="text-[var(--accentTheme)] text-center text-[20px] font-[700]">
              {item.plan}
            </h1>
            <p className="text-center text-[25px] md:text-[30px] font-[600] text-[var(--primaryTheme)]">
              {item.price}
            </p>

            {/* Feature Listings  */}
            {item.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CircleCheckBig size={15} color="#17A589" />
                <p className="text-[16px] text-slate-600">{feature}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSubscription;
