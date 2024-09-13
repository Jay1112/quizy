import LazyImage from "../components/ui/LazyImage";
import PlainLayout from "../layouts/PlainLayout";
import QuizyLogo from "../assets/media/images/Quizy.png";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <PlainLayout className="flex-col">
      <div className="flex-1 w-full screen flex flex-col items-center justify-center text-slate-900 animated animatedFadeInUp fadeInUp">
        <div className="flex-1 w-full pt-6">
          <LazyImage
            src={QuizyLogo}
            width={500}
            height={500}
            imageStyle="max-w-[300px] rounded-full mx-auto"
            alt="quizy logo"
          />
          <h1 className="poppins text-4xl text-center mt-6 text-white">Quizy</h1>
        </div>
        <div className="w-full p-2 flex items-center justify-center">
          <Button
            clickHandler={() => navigate("/sign-in/")}
            buttonStyle="tracking-wide border-2 border-slate-900 bg-slate-900 active:bg-transparent md:max-w-[400px] w-full py-4 rounded-full poppins text-xl text-white transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </PlainLayout>
  );
}

export default HomePage;
