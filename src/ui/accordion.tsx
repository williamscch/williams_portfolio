import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

interface AccordionContextType {
  value?: string;
  onValueChange: (val: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

const Accordion: React.FC<{
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => {
  const [value, setValue] = React.useState<string | undefined>();
  const onValueChange = (val: string) => {
    setValue((prev) => (prev === val ? undefined : val));
  };

  return (
    <AccordionContext.Provider value={{ value, onValueChange }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem: React.FC<{
  value: string;
  className?: string;
  children?: React.ReactNode;
}> = ({ value, className, children }) => {
  return (
    <div data-value={value} className={cn("border-b", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ itemValue?: string }>, {
              itemValue: value,
            })
          : child
      )}
    </div>
  );
};

const AccordionTrigger: React.FC<{
  className?: string;
  children?: React.ReactNode;
  itemValue?: string;
}> = ({ className, children, itemValue }) => {
  const ctx = React.useContext(AccordionContext);
  const isOpen = ctx?.value === itemValue;

  return (
    <button
      type="button"
      onClick={() => itemValue && ctx?.onValueChange(itemValue)}
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
};

const AccordionContent: React.FC<{
  className?: string;
  children?: React.ReactNode;
  itemValue?: string;
}> = ({ className, children, itemValue }) => {
  const ctx = React.useContext(AccordionContext);
  const isOpen = ctx?.value === itemValue;

  if (!isOpen) return null;

  return <div className={cn("pb-4 pt-0 text-sm", className)}>{children}</div>;
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
