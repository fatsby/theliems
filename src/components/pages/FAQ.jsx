import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


function FAQ() {
    return (
        <div id="faq">
            <span className="relative flex justify-center mt-12">
                {/* Gradient Line */}
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>
            </span>

            <h1 className="font-bold text-4xl text-center mt-2">Frequently Asked Questions</h1>

            <div className="mt-6 flex justify-center">
                <Accordion type="single" collapsible>

                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl text-yellow-500">Why did you make this website?</AccordionTrigger>
                        <AccordionContent className="text-lg text-justify">
                            With the purpose of honouring not just the greatest but also the most beloved minds at EIU. Only professors who are loved by many could appear here.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl">Are you using this website to direct hate towards certain professors?</AccordionTrigger>
                        <AccordionContent className="text-lg text-justify">
                        This list is created solely to honor and appreciate esteemed professors who have made a significant impact on their students and academic communities. It is not intended to compare, criticize, or spread negativity toward any other faculty members. Every educator contributes uniquely to the learning environment, and this recognition is a celebration of excellence, not exclusion.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl text-yellow-500">Why is Teacher A not on the list?</AccordionTrigger>
                        <AccordionContent className="text-lg text-justify">
                        You can nominate your favorite educator by filling out this form. <a className="underline" href="" target="_blank" rel="noreferrer">Click here</a>.
                        We will add them to the web if there are enough nominations.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    );
}

export default FAQ;