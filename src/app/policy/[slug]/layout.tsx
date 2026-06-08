import JoinTeam from "@/components/sections/JoinTeam";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow">
      {children}
      <JoinTeam />
    </div>
  );
}
