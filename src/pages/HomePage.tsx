import PlainLayout from "../layouts/PlainLayout";

function HomePage() {
  return (
    <PlainLayout className="w-screen h-screen flex-col bg-gray-200">
      <div className="flex-1 w-full h-screen flex items-center justify-center text-slate-900">
        <h1>Food Tickerr</h1>
      </div>
    </PlainLayout>
  );
}

export default HomePage;