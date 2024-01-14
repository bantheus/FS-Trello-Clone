import { Navbar } from "./_components/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="bg-slate-100 pb-20 pt-32">{children}</main>
    </div>
  );
}
