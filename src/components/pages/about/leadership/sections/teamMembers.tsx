"use client";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";
import ImageComponent from "@/components/common/image";
import NavLink from "@/components/common/link/NavLink";
import TabBar from "@/components/common/tab-bar";
import ContentContainer from "@/components/layout/container/contentContainer";
import { StaticImageData } from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

type IBoardMember = {
  name: string;
  designation: string;
  photo: StaticImageData;
  linkedin_profile: string;
  order_index: string;
};
type IBoards = {
  title: string;
  slug: string;
  subtitle: string;
  excerpt: string;
  order_index: string;
  items: IBoardMember[];
};

type Props = {
  data: IBoards[];
};

const TeamMembers = ({ data }: Props) => {
  const [teams, setTeams] = useState<Record<"name", string>[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [teamMembers, setTeamMembers] = useState<IBoardMember[]>([]);
  const membersGridRef = useRef(null);

  useEffect(() => {
    if (!data) return;

    const uniqueTeams = Array.from(new Set(data.map((team) => team.title))).map(
      (teamName) => ({ name: teamName }),
    );
    setTeams(uniqueTeams);
    setSelectedTeam(uniqueTeams[0].name);
    setTeamMembers([...(data?.[0]?.items ?? [])]);
  }, [data]);

  useEffect(() => {
    if (!data || !selectedTeam) return;
    setTeamMembers([
      ...(data?.filter((team) => team.title === selectedTeam)?.[0]?.items ??
        []),
    ]);
  }, [selectedTeam]);

  useLayoutEffect(() => {
    if (!membersGridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".member-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, membersGridRef);

    return () => ctx.revert();
  }, [selectedTeam]);

  const teamSelectHandler = ({ value }: any) => {
    setSelectedTeam(value);
  };

  return (
    <ContentContainer className="mb-24">
      <TabBar
        data={teams}
        displayKey="name"
        onItemClick={teamSelectHandler}
        value={teams[0]}
      />

      <div
        ref={membersGridRef}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 mt-4 lg:mt-10"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative flex flex-col w-full group member-item"
          >
            {member.linkedin_profile && (
              <NavLink
                href={member.linkedin_profile}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-2 top-2 z-10"
              >
                <LinkedinIcon />
              </NavLink>
            )}
            <ImageComponent
              src={member.photo}
              alt={member.name}
              className="w-full h-full aspect-[285/365] object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-300 ease-in-out mb-4"
            />
            <p className=" font-[600] text-[16px]">{member.name}</p>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};

export default TeamMembers;
