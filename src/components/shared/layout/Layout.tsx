import Header from "../header/Header";

const LayoutProvider = (href: string) =>
  function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Header href={href} />
        <div className="px-7">{children}</div>
      </>
    );
  };

export default LayoutProvider;
