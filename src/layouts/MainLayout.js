import TopNavBar from "../components/TopNavBar";

function MainLayout({ children }) {
  return (
    <>
      <TopNavBar />
      <main className="container mt-4">
        {children}
      </main>
    </>
  );
}

export default MainLayout;
