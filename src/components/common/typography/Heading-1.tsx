import { cn } from "@/utils/helpers/cn";
type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading1 = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        `text-[#4D4D4F] dark:text-[#F4F4F4] md:text-[clamp(24px,2.5vw,48px)] lg:leading-[3.65vw] text-[36px] leading-[12.8vw] md:leading-[5.8vw] font-bold lg:mb-10 mb-[30px] font-poppins`,
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default Heading1;
