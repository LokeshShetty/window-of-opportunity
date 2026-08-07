export type AccordionItem = {
  label: string;
  body: string;
};

export type AccordionProps = {
  items: AccordionItem[];
  labelledBy?: string;
};
