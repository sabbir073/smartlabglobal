import PrimaryButton from "@/components/common/button/PrimaryButton";
import ContentContainer from "@/components/layout/container/contentContainer";
import routes from "@/config/routes";
import { cn } from "@/utils/helpers/cn";

export default function JoinTeam({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "py-[40px] lg:py-[50px] mx-auto  dark:bg-[#101010] bg-[#414042]",
        className,
      )}
    >
      <ContentContainer className="md:text-left text-center gap-10 flex md:flex-row flex-col justify-between items-center">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div>
          <PrimaryButton
            variant="light"
            href={routes.joinUs}
          >
            Explore Opportunities
          </PrimaryButton>
        </div>
      </ContentContainer>
    </div>
  );
}
const content = `
<div>
  <h2 class="dark:text-[#F4F4F4] lg:text-[30px] text-[24px] font-semibold lg:mb-10 mb-[30px] tracking-tight text-[#F4F4F4]">Join Our Team</h2>
  <p class="dark:text-[#D9D9D9] text-sm leading-[1.7] text-[#F4F4F4]">Find your opportunity to show your talent!</p>
</div>
`;
