"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import HyperText from "@/components/ui/hyper-text";
import { UserDetails } from "@/components/context/userContext";
import { getDetails, updateDetails } from "@/components/backend/firebase";
import { ChartNetwork, CheckIcon } from "lucide-react";
import { Globe } from "@/components/globe";
import { Feature } from "@/components/feature-card";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Link from "next/link";

export default function Workshop() {
  const features = [
    {
      title: "Unity",
      description: "Make your own games with Unity.",
      skeleton: <SkeletonOne id="Unity" />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "UI/UX Design",
      description:
        "Fundamentals of UI/UX design to craft a seamless experience and build your dream product!",
      skeleton: <SkeletonTwo id="UI/UX Design" />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Blockchain",
      description: "Introduction to Blockchain fundamentals",
      skeleton: <SkeletonThree id="Blockchain" />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Power BI",
      description: "Learn new skills with Power BI",
      skeleton: <SkeletonFour id="Power BI" />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 px-2 max-w-7xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-2xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with Knowledge
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From UI/UX to Blockchain and Game development to Business Intelligence
          we got it all. Our workshops cover everything you need to know for
          your adventure in industry.
        </p>
        <HyperText
          className="text-3xl md:text-5xl mt-8"
          text="Our Workshops:"
        />
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <Feature key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

const SkeletonOne = ({ id }) => {
  const { user, registrationDetails, setRegistrationDetails } = UserDetails();
  const handleUpdateEvent = async (title: string) => {
    const newEvent = {
      workshops: [...registrationDetails.workshops, title],
    };
    try {
      await updateDetails(user.email, newEvent);
      const details = await getDetails(user.email!);
      setRegistrationDetails(details);
      console.log(details);
    } catch (error) {
      console.error("Error updating details: ", error);
    } finally {
    }
  };
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className="relative flex py-8 px-2 gap-10 h-full">
        <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
          <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
            <Image
              src="/UnityWorkshop.jpeg"
              alt="header"
              width={300}
              height={400}
              className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
            />
          </div>
        </div>

        <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
        <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
      </div>
      <div className="absolute bottom-12 right-12 z-50">
        {registrationDetails?.workshops?.includes(id) ? (
          <div className="badge badge-success gap-2 h-8 rounded-lg">
            <CheckIcon className="w-4 h-4" />
            Registered
          </div>
        ) : (
          <>
            <InteractiveHoverButton
              text="Register"
              onClick={() => document.getElementById(id).showModal()}
            />
            <dialog id={id} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg font-audioWide">
                  Hello{" "}
                  <span className="ml-2">{registrationDetails?.fullName}</span>!
                </h3>
                {registrationDetails?.fullName.length > 0 ? (
                  <>
                    <p className="py-4">
                      Are you sure you want to register for{" "}
                      <span className="text-secondary-foreground">{id}</span>?
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn btn-outline btn-warning mr-2">
                          cancel
                        </button>
                        <button
                          onClick={() => handleUpdateEvent(id)}
                          className="btn btn-secondary"
                        >
                          Register
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="py-4">
                      Please fill in your personal details to register for this
                      event.
                    </p>
                    <div className="modal-action">
                      <Link href="/register">
                        <button className="btn">
                          Participant registration
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </dialog>
          </>
        )}
      </div>
    </BackgroundGradient>
  );
};
const SkeletonTwo = ({ id }) => {
  const { user, registrationDetails, setRegistrationDetails } = UserDetails();
  const handleUpdateEvent = async (title: string) => {
    const newEvent = {
      workshops: [...registrationDetails.workshops, title],
    };
    try {
      await updateDetails(user.email, newEvent);
      const details = await getDetails(user.email!);
      setRegistrationDetails(details);
      console.log(details);
    } catch (error) {
      console.error("Error updating details: ", error);
    } finally {
    }
  };
  const images = [
    "/AR_treasure_hunt.jpeg",
    "/UIUXWorkshop.jpeg",
    "/web-design.jpeg",
    "/relay_coding.jpeg",
    "/Hackathon.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className="relative flex flex-col items-start p-8 pb-16 gap-10 h-full overflow-hidden">
        <div className="flex flex-row -ml-20">
          {images.map((image, idx) => (
            <motion.div
              variants={imageVariants}
              key={"images-first" + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-row">
          {images.map((image, idx) => (
            <motion.div
              key={"images-second" + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              variants={imageVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute left-0 z-20 inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
        <div className="absolute right-0 z-20 inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
        <div className="absolute bottom-4 right-4 z-50">
          {registrationDetails?.workshops?.includes(id) ? (
            <div className="badge badge-success gap-2 h-8 rounded-lg">
              <CheckIcon className="w-4 h-4" />
              Registered
            </div>
          ) : (
            <>
              <InteractiveHoverButton
                text="Register"
                onClick={() => document.getElementById(id).showModal()}
              />
              <dialog id={id} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg font-audioWide">
                    Hello{" "}
                    <span className="ml-2">
                      {registrationDetails?.fullName}
                    </span>
                    !
                  </h3>
                  {registrationDetails?.fullName.length > 0 ? (
                    <>
                      <p className="py-4">
                        Are you sure you want to register for{" "}
                        <span className="text-secondary-foreground">{id}</span>?
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn btn-outline btn-warning mr-2">
                            cancel
                          </button>
                          <button
                            onClick={() => handleUpdateEvent(id)}
                            className="btn btn-secondary"
                          >
                            Register
                          </button>
                        </form>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="py-4">
                        Please fill in your personal details to register for
                        this event.
                      </p>
                      <div className="modal-action">
                        <Link href="/register">
                          <button className="btn">
                            Participant registration
                          </button>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </dialog>
            </>
          )}
        </div>
      </div>
    </BackgroundGradient>
  );
};

const SkeletonThree = ({ id }) => {
  const { user, registrationDetails, setRegistrationDetails } = UserDetails();
  const handleUpdateEvent = async (title: string) => {
    const newEvent = {
      workshops: [...registrationDetails.workshops, title],
    };
    try {
      await updateDetails(user.email, newEvent);
      const details = await getDetails(user.email!);
      setRegistrationDetails(details);
      console.log(details);
    } catch (error) {
      console.error("Error updating details: ", error);
    } finally {
    }
  };
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className="w-full  mx-auto bg-transparent group/image dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO: add buttons for registration and more info?*/}
          <ChartNetwork
            className="h-28 w-28 absolute z-10 inset-0 text-red-500 m-auto"
            strokeWidth={2}
          />
          <Image
            src="/BlockchainWorkshop.jpeg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
      <div className="absolute bottom-12 right-12 z-20">
        {registrationDetails?.workshops?.includes(id) ? (
          <div className="badge badge-success gap-2 h-8 rounded-lg">
            <CheckIcon className="w-4 h-4" />
            Registered
          </div>
        ) : (
          <>
            <InteractiveHoverButton
              text="Register"
              onClick={() => document.getElementById(id).showModal()}
            />
            <dialog id={id} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg font-audioWide">
                  Hello{" "}
                  <span className="ml-2">{registrationDetails?.fullName}</span>!
                </h3>
                {registrationDetails?.fullName.length > 0 ? (
                  <>
                    <p className="py-4">
                      Are you sure you want to register for{" "}
                      <span className="text-secondary-foreground">{id}</span>?
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn btn-outline btn-warning mr-2">
                          cancel
                        </button>
                        <button
                          onClick={() => handleUpdateEvent(id)}
                          className="btn btn-secondary"
                        >
                          Register
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="py-4">
                      Please fill in your personal details to register for this
                      event.
                    </p>
                    <div className="modal-action">
                      <Link href="/register">
                        <button className="btn">
                          Participant registration
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </dialog>
          </>
        )}
      </div>
    </BackgroundGradient>
  );
};
const SkeletonFour = ({ id }) => {
  const { user, registrationDetails, setRegistrationDetails } = UserDetails();
  const handleUpdateEvent = async (title: string) => {
    const newEvent = {
      workshops: [...registrationDetails.workshops, title],
    };
    try {
      await updateDetails(user.email, newEvent);
      const details = await getDetails(user.email!);
      setRegistrationDetails(details);
      console.log(details);
    } catch (error) {
      console.error("Error updating details: ", error);
    } finally {
    }
  };
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div>
        <p>PowerBi consist of analysing business with computer.</p>
      </div>
      <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
        <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
      </div>
      <div className="absolute bottom-12 right-12 z-20">
        {registrationDetails?.workshops?.includes(id) ? (
          <div className="badge badge-success gap-2 h-8 rounded-lg">
            <CheckIcon className="w-4 h-4" />
            Registered
          </div>
        ) : (
          <>
            <InteractiveHoverButton
              text="Register"
              onClick={() => document.getElementById(id).showModal()}
            />
            <dialog id={id} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg font-audioWide">
                  Hello{" "}
                  <span className="ml-2">{registrationDetails?.fullName}</span>!
                </h3>
                {registrationDetails?.fullName.length > 0 ? (
                  <>
                    <p className="py-4">
                      Are you sure you want to register for{" "}
                      <span className="text-secondary-foreground">{id}</span>?
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn btn-outline btn-warning mr-2">
                          cancel
                        </button>
                        <button
                          onClick={() => handleUpdateEvent(id)}
                          className="btn btn-secondary"
                        >
                          Register
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="py-4">
                      Please fill in your personal details to register for this
                      event.
                    </p>
                    <div className="modal-action">
                      <Link href="/register">
                        <button className="btn">
                          Participant registration
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </dialog>
          </>
        )}
      </div>
    </BackgroundGradient>
  );
};
