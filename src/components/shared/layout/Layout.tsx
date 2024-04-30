import Header from "../header/Header";

const LayoutProvider = (href: string, withThumbnail?: boolean) =>
  function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Header href={href} withThumbnail={withThumbnail} />
        <div className="px-7">{children}</div>
      </>
    );
  };

export default LayoutProvider;
