import Avatar from "./Avatar";

const Hero = () => {
  return (
    <section className="bg-[url('/image-background.jpg')] bg-center bg-no-repeat bg-cover relative  h-screen mx-auto">
      {/* Message */}
      <div className="px-6 absolute inset-0 top-[132px] max-w-7xl mx-auto gap-6">
        <div>
          <h1 className="text-7xl text-white font-extrabold">
            Hey, This is for{" "}
            <span className="text-primary text-8xl">CodePen</span>
          </h1>
          <p className="hidden sm:block text-lg mt-9 text-white w-[500px]">
            {" "}
            It's just an attempt to make a 3D avatar using React Three Fiber, to
            create a 3D avatar, I used a 3D model from ReadyMePlayer and
            exported it, then I used the useGLTF hook to load the model and
            animations, and finally I used the useAnimations hook to play the
            animations.
          </p>
        </div>
      </div>
      {/* Avatar  */}
      <Avatar />
    </section>
  );
};

export default Hero;
