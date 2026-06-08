"use client";
import { cn } from "@/utils/helpers/cn";
import ButtonComponent, { BaseButtonProps } from ".";
import { useDarkMode } from "@/hooks/useDarkMode";
import NavLink from "../link/NavLink";

type Props = BaseButtonProps & {
  className?: string;
  variant?: "dark" | "light" | "outlined";
  href?: string;
  openInNewTab?: boolean;
};
const PrimaryButton = ({
  className,
  variant,
  href,
  openInNewTab,
  ...props
}: Props) => {
  const { isDarkMode } = useDarkMode();

  const baseStyle = "px-[21px] py-[14px]  rounded-full text-[14px] font-semibold active:scale-95 max-h-[50px] transition-colors duration-300 ease-in-out";

  const btnType: Record<NonNullable<Props["variant"]>, string> = {
    dark: `${baseStyle} border-[1px] border-[#414042] bg-[#414042] hover:bg-transparent dark:hover:border-none  dark:bg-[#D9D9D9] text-[#F4F4F4] hover:text-[#414042] dark:text-[#414042] `,
    light: `${baseStyle} border-[1px] border-[#414042] bg-[#FFFFFF] hover:bg-transparent dark:border-[#FFFFFF]  hover:border-white text-[#414042]  hover:text-white`,
    outlined: `${baseStyle} border-[1px] border-[#414042] bg-transparent hover:bg-[#414042] hover:text-[#F4F4F4] dark:border-[#F4F4F4] dark:hover:bg-[#F4F4F4] text-[#414042] dark:text-[#F4F4F4] dark:hover:text-[#414042]`,
  };

  const BtnComponent = <ButtonComponent
    className={cn(
      "",
      btnType[
      isDarkMode
        ? "outlined"
        : variant || ("dark" as keyof typeof btnType)
      ],
      className,
    )}
    {...props}
  />

  if (href) {
    return <NavLink href={href} target={openInNewTab ? "_blank" : "_self"}>
      {BtnComponent}
    </NavLink>
  }

  return (BtnComponent);
};

export default PrimaryButton;
