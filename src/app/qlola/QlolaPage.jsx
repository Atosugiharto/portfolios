/* eslint-disable no-unused-vars */
import qlolaLogo from "../../assets/qlola/qlola-logo.png";
import qlolaLogin from "../../assets/qlola/ss-login-qlola.png";
import footerQlola from "../../assets/qlola/footer-qlola.png";
import qlolaService from "../../assets/qlola/ss-service-qlola.png";
import reactLogo from "../../assets/qlola/react-logo.png";
import viteLogo from "../../assets/qlola/vite-logo.png";
import githubLogo from "../../assets/qlola/github-logo.png";
import tailwindLogo from "../../assets/qlola/tailwindcss-logo.png";
import jsLogo from "../../assets/qlola/js-logo.png";

const QLolaPage = () => {
  const datas = {
    desc: "QLola by BRI is a new innovative product that offers an Integrated Corporate Solution Platform. With a single login (Single Sign-On), you can access multiple BRI products and services, including Cash Management, Trade Finance, Supply Chain Management, and more, streamlining your business activities. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium nisi commodi sapiente autem a veritatis quasi? Quod cumque suscipit obcaecati, impedit animi quos eveniet facere sapiente blanditiis nostrum? Dolorum!",
    href: "https://qlola.bri.co.id/",
    logo: qlolaLogo,
    ssLogin: qlolaLogin,
    ssService: qlolaService,
    ssFooter: footerQlola,
  };

  const techs = [reactLogo, viteLogo, jsLogo, githubLogo, tailwindLogo];

  return (
    <div className="bg-pageBackground p-8 flex flex-col gap-4 min-h-screen text-textSecondary">
      {/* Bagian atas */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Kolom kiri */}
        <div className="flex flex-col gap-2 md:w-1/5">
          <div className="bg-cardBackground py-2 px-4 rounded-lg flex justify-center">
            <img
              src={datas.logo}
              alt="Qlola Logo"
              className="h-10 md:h-20 w-auto"
            />
          </div>
          <div className="bg-cardBackground py-2 px-4 rounded-lg text-black">
            <h2 className="font-bold mb-1 tracking-wider">URL</h2>
            <p>Frontend Developer</p>
            <a href={datas.href} className="text-textSecondary">
              {datas.href}
            </a>
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="bg-cardBackground py-2 px-4 rounded-lg flex-1">
          {/* <h2 className="text-xl mb-2 font-bold tracking-wider ">QLOLA</h2> */}
          <div className="relative inline-block mb-3">
            <span className="relative z-10 text-xl font-bold tracking-wider">
              QLOLA
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-200 z-0"></span>
          </div>
          <p>{datas.desc}</p>
        </div>
      </div>

      {/* Bagian tengah */}
      <div className="flex flex-col justify-center items-center gap-4 bg-cardBackground py-2 px-4 rounded-lg">
        <h2 className="text-3xl font-bold my-4 uppercase tracking-wider">
          capture website
        </h2>
        <div className="flex flex-col items-center gap-4">
          <img
            src={datas.ssLogin}
            alt="Screenshot Login"
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={datas.ssService}
            alt="Screenshot Service"
            className="w-full rounded-t-lg"
          />
          <img
            src={datas.ssFooter}
            alt="Screenshot Footer"
            className="w-full rounded-b-lg"
          />
        </div>
      </div>

      {/* Bagian bawah */}
      <div className="flex flex-col gap-4 rounded-lg md:flex-row w-full">
        <div className="md:w-7/12 bg-cardBackground py-2 px-4 rounded-lg">
          <p className="text-center text-lg font-bold uppercase tracking-wider mb-1 text-black">
            Technology
          </p>
          <div className="flex gap-4 justify-center">
            {techs.map((tech, index) => (
              <img
                key={index}
                src={tech}
                alt={`Tech logo ${index}`}
                className="h-10 w-auto"
              />
            ))}
          </div>
        </div>
        <div className=" bg-cardBackground py-2 px-4 rounded-lg md:w-3/12 font-bold uppercase text-black">
          <h2 className="mb-1 tracking-wider">company</h2>
          <ul className="list-disc px-5">
            <li className="text-xs">Bank BRI</li>
          </ul>
        </div>
        <div className="py-2 px-4 rounded-lg md:w-2/12 bg-yellow-300"></div>
      </div>
    </div>
  );
};

export default QLolaPage;
