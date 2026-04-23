import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { items } from "@/FAQ"
import { BadgeQuestionMark, CircleQuestionMark } from "lucide-react"


const FAQ = () => {
  return (
    <div className="mt-15 w-full flex flex-col gap-5 items-center justify-center pb-10">
        {/* Heading  */}
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--primaryTheme)]">Got Questions?</h2>

        {/* Q & As  */}
        <div className="w-[97%] md:w-[70%] px-4">

        <Accordion
          type="single"
          collapsible
          className="mx-auto -mt-10"
        >
            {items.map((item,idx) => (
                <div key={idx} className="bg-slate-100 mt-5 px-5 py-2 rounded-[8px] flex items-center gap-2">
                  <div className="">
                    <CircleQuestionMark />
                  </div>
                  <AccordionItem key={item.value} value={item.value} className="flex flex-col flex-1">
                    <AccordionTrigger className="cursor-pointer">{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                </div>
            ))}
          </Accordion>
        </div>
    </div>

  )
}

export default FAQ
