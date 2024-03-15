import chef from "../../assets/images/chef-image.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-5 lg:mt-12 relative">
      <div className="absolute z-10 top-5 lg:top-1/3 lg:left-36 inset-x-auto">
        <h1 className="text-center text-white text-lg lg:text-[52px] font-bold lg:leading-[66px]">
          Discover an exceptional cooking <br />
          class tailored for you!
        </h1>

        <p className="text-white text-xs lg:text-lg lg:leading-7 text-center mt-1 lg:mt-6">
          Our restaurant takes pride in crafting exquisite dishes that not only tantalize your taste
          buds but also create an unforgettable <br />
          culinary journey, ensuring every bite is a delightful experience for our esteemed
          customers.
        </p>

        <div className="mt-3 lg:mt-10 text-center">
          <button className="btn bg-[#0BE58A] border-none px-0 lg:px-6 rounded-3xl text-[#150B2B] text-base lg:text-xl font-normal lg:font-semibold leading-none lg:leading-6">Explore Now</button>
          <button className="btn btn-outline text-white ml-6 border-white lg:px-4 rounded-3xl text-xl lg:font-semibold lg:leading-6">Our Feedback</button>
        </div>
      </div>

      <div className="z-0">
        <img className="object-cover" src={chef} alt="" />
      </div>
    </div>
  );
};

export default Banner;
