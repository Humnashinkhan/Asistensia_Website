
const OurClient = () => {

 
  return (
    <div className="w-full h-72 overflow-hidden">
      <h4 className="text-[#413e66] text-[36px] font-bold text-center pt-10">Our Clients</h4>
      <div className="relative pt-8">
        {/* Scrolling Container */}
        <div 
        className="flex md:space-x-6 overflow-x-auto animate-scroll whitespace-nowrap md:ml-60 md:mr-64">
          {/* Images */}
          <img
            className="h-10 opacity-50 hover:opacity-100"
            alt="img1"
            src="https://asistensia.com/assets/clients/spin_my_planet-dba94f7d2645bd110d28e19378f588ec56350a5a976db955c697f4e1c8091e68.png"
          />
          <img
            className="h-10 opacity-50 hover:opacity-100"
            alt="img2"
            src="https://asistensia.com/assets/clients/zensports_exchange-b36910c302441429794b225602413c5298c9c164bafc40ab3d981fd40a1ff048.png"
          />
          <img
            className="h-10 opacity-50 hover:opacity-100"
            alt="img3"
            src="https://asistensia.com/assets/clients/gresb-b1800c15bcf73d1d7a940af00a32ef4cedcdd8ee255c257701a3f1266b0b66ac.png"
          />
          <img
            className="h-10 opacity-50 hover:opacity-100"
            alt="img4"
            src="https://asistensia.com/assets/clients/spin_my_planet-dba94f7d2645bd110d28e19378f588ec56350a5a976db955c697f4e1c8091e68.png"
          />
          <img
            className="h-10 opacity-50 hover:opacity-100"
            alt="img5"
            src="https://asistensia.com/assets/clients/zensports_exchange-b36910c302441429794b225602413c5298c9c164bafc40ab3d981fd40a1ff048.png"
          />
          <img
            className="h-10 opacity-50 hover:opacity-100"
            alt="img6"
            src="https://asistensia.com/assets/clients/gresb-b1800c15bcf73d1d7a940af00a32ef4cedcdd8ee255c257701a3f1266b0b66ac.png"
          />
        </div>
      </div>
    </div>
  );
};

export default OurClient;
