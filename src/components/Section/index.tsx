import classNames from "classnames";
import { ReactNode } from "react";

declare type SectionProps = {
  children: ReactNode;
  title: string | ReactNode;
};

const Section = ({ children, title }: SectionProps) => {
  return (
    <div className={classNames("flex flex-col", { "space-y-4": title })}>
      {title && (
        <div className="text-xl font-semibold leading-7 text-gray-800">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Section;
