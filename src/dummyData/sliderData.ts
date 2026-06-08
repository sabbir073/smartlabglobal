import Capability1 from "@/assets/images/dummy/capabilities/capability-1.png"
import IndustryService from "@/assets/images/dummy/industry/Industry_Service.jpg"

import { StaticImageData } from "next/image"
import { CoinIcon, EducationIcon, GovIcon, HealthIcon, RetailIcon, WalletIcon, WifiIcon } from '@/assets/icons'

type IIndustry = {
  banner: StaticImageData,
  icon: React.FC,
  title: string,
}

export const IndustryData: IIndustry[] = [
  {
    title: "Financial Services & Banking",
    banner: Capability1,
    icon: WalletIcon,

  },
  {
    icon: WifiIcon,
    title: "Telecommunications",
    banner: IndustryService,

  },
  {
    icon: HealthIcon,
    title: "Healthcare",
    banner: Capability1,

  },
  {
    icon: RetailIcon,
    title: "Retail & E-Commerce",
    banner: IndustryService,

  },
  {
    icon: GovIcon,
    title: "Government",
    banner: Capability1,

  },
  {
    icon: EducationIcon,
    title: "Education",
    banner: IndustryService,

  },

  {
    icon: CoinIcon,
    title: "Insurance",
    banner: Capability1,

  },
  {
    icon: WalletIcon,
    title: "Financial Services & Banking",
    banner: IndustryService,

  },
  {
    icon: WifiIcon,
    title: "Telecommunications",
    banner: Capability1,

  },
  {
    icon: HealthIcon,
    title: "Healthcare",
    banner: IndustryService,

  },
  {
    icon: RetailIcon,
    title: "Retail & E-Commerce",
    banner: Capability1,

  },
  {
    icon: GovIcon,
    title: "Government",
    banner: IndustryService,

  },
  {
    icon: EducationIcon,
    title: "Education",
    banner: Capability1,

  },

  {
    icon: CoinIcon,
    title: "Insurance",
    banner: IndustryService,

  },
]
