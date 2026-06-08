import ContentContainer from "@/components/layout/container/contentContainer";
import NeedHelpBanner from "@/assets/images/dummy/insights/need-help-bg.png";
import GmailIcon from "@/assets/images/gmail-icon.svg";
import PhoneIcon from "@/assets/images/phone-icon.svg";
import WhatsappIcon from "@/assets/images/whatsapp-icon.svg";
import Solution from "./components/Solution";
import "../../styles.scss";
import EventAgenda from "./components/EventAgenda";
import ImageComponent from "@/components/common/image";
import JoinTeam from "@/components/sections/JoinTeam";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import EventDetailsBanner from "./components/EventDetailsBanner";
import EndDate from "./components/EndDate";
import PreviousEvents from "./components/PreviousEvents";
import Link from "next/link";
import SafeHtml from "@/components/common/safeHtml";

export default function EventsDetailsPage({ data, settingsData }: any) {
  return (
    <div className="">
      <EventDetailsBanner data={data} />
      <ContentContainer className="details">
        <SafeHtml
          className="pt-10 md:pyt-20"
          content={data?.excerpt}
        />
        <EndDate data={data.end_date} />
      </ContentContainer>

      <Solution data={convertToPageSectionData(data.glance)} />

      <ContentContainer className="">
        {data?.agenda && (
          <EventAgenda data={convertToPageSectionData(data.agenda)} />
        )}
        <PreviousEvents data={convertToPageSectionData(data.previous_events)} />
      </ContentContainer>

      {/* bottom section */}
      <ContentContainer className="">
        <div className="2xl:mb-[100px] my-[70px] 2xl:py-[90px] py-[30px] px-6 relative">
          <ImageComponent
            src={NeedHelpBanner}
            alt=""
            className="absolute top-0 left-0 w-full h-full -z-[2]"
          />
          <div className="absolute top-0 left-0 h-full w-full -z-[1] bg-[#0000005E]"></div>
          <h3 className="lg:text-[30px] text-[24px] font-semibold text-white text-center">
            Need Help With Your Visit Or Booking?
          </h3>
          <div className="flex sm:flex-row flex-col 2xl:gap-[90px] lg:gap-10 gap-5 justify-center mt-12">
            {/* Email */}
            <Link
              href={`mailto:${settingsData.general.find((item: any) => item.slug === "email")
                ?.content
                }`}
              target="_blank"
              className="flex gap-[10px] py-[14px] px-5 bg-[#4D4D4F] rounded-full"
            >
              <ImageComponent
                src={GmailIcon}
                alt=""
                className="size-6 h-auto"
              />
              <p className="content-text font-semibold !text-white">E-mail</p>
            </Link>

            {/* WhatsApp */}
            <Link
              href={`https://wa.me/${settingsData.general
                .find((item: any) => item.slug === "whatsapp")
                ?.content.replace(/\+/g, "")}`}
              target="_blank"
              className="flex gap-[10px] py-[14px] px-5 bg-[#4D4D4F] rounded-full"
            >
              <ImageComponent
                src={WhatsappIcon}
                alt=""
                className="w-6 h-auto"
              />
              <p className="content-text font-semibold !text-white">Whatsapp</p>
            </Link>

            {/* Phone */}
            <Link
              href={`tel:${settingsData.general.find((item: any) => item.slug === "phone")
                ?.content
                }`}
              target="_blank"
              className="flex gap-[10px] py-[14px] px-5 bg-[#4D4D4F] rounded-full"
            >
              <ImageComponent
                src={PhoneIcon}
                alt=""
                className="size-6 h-auto"
              />
              <p className="content-text font-semibold !text-white">Call</p>
            </Link>
          </div>
        </div>
      </ContentContainer>
      <JoinTeam />
    </div>
  );
}
