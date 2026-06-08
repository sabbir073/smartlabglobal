"use client";
import React from "react";
import convertToPageSectionData from "@/utils/helpers/convertToSectionData";
import Faq from "@/components/sections/faq";
import ServiceBanner from "./components/ServiceBanner";
import ServiceHighlight from "./components/ServiceHighlight";
import ServiceDeliverPurpose from "./components/ServiceDeleveryPurpose";
import ServiceApproach from "./components/ServiceApproach";
import ServiceAreaOfFocus from "./components/ServiceAreaOfFocus";
import ServiceAtGlance from "./components/ServiceAtGlance";
import ServiceSetApart from "./components/ServiceSetApart";
import ServiceCaseStudy from "./components/ServiceCaseStudy";
import AiService from "./1_ai/AiService";
import MlService from "./2_ml/MlService";
import SoftwareAppService from "./3_software_development/SoftwareAppService";
import CloudService from "./4_cloud/CloudService";
import CyberSecurity from "./5_cybersecurity/CyberSecurityService";
import ImmersiveService from "./6_immersive/ImmersiveService";
import StaffAugmentationService from "./7_staff-augmentation/StaffAugmentationService";

type Props = {
  data: any;
};
const SingleServicePage = ({ data }: Props) => {
  switch (data?.template_index?.toString()) {
    case "1":
      // case "artificial-intelligence":
      return <AiService data={data} />;
      break;
    case "2":
      // case "data-analytics-ml":
      return <MlService data={data} />;
      break;
    case "3":
      // case "custom-software-app-development":
      return <SoftwareAppService data={data} />;
      break;
    case "4":
      // case "cloud-solution":
      return <CloudService data={data} />;
      break;
    case "5":
      // case "cyber-security":
      return <CyberSecurity data={data} />;
      break;
    case "6":
      // case "immersive-technologies-ar-vr-3d-gaming":
      return <ImmersiveService data={data} />;
      break;
    case "7":
      // case "staff-augmentation":
      return <StaffAugmentationService data={data} />;
      break;

    default:
      break;
  }

  return <AiService data={data} />;
};

export default SingleServicePage;
