import TiltedCard from "@/components/ui/tilted-card";
import { workshopDetails } from "@/lib/workshops";
import Link from "next/link";
import { UserDetails } from "@/components/context/userContext";
import { getDetails, updateDetails } from "@/components/backend/firebase";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
import { ClockIcon } from "lucide-react";

export const WorkshopCards = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      {workshopDetails.map((workshop) => (
        <div
          key={workshop.id}
          className="min-h-screen flex w-full flex-col items-center justify-center p-2 md:p-10"
          style={{
            backgroundImage: `url("${workshop.bgimageSrc}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "80vh",
          }}
        >
          <div className="p-5 py-10 md:px-36 md:py-14 bg-base-300/50 backdrop-blur-lg shadow shadow-purple-400 flex flex-wrap justify-between gap-2 items-center w-full h-full">
            <div className="flex-1">
              <TiltedCard
                imageSrc={workshop.imageSrc}
                altText={workshop.title}
                captionText={workshop.title}
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text p-4 m-1 bg-purple-600/10 backdrop-blur-lg font-audioWide font-bold">
                    {workshop.title}
                  </p>
                }
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-between max-w-xl p-5 gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl text-purple-300 leading-tight font-bold font-audioWide">
                  {workshop.title}
                </h3>
                <div className="flex items-center gap-2 font-audioWide text-amber-400">
                  <ClockIcon className="inline" /> <span>{workshop.time}</span>
                </div>
                {workshop.person.name && (
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-xs text-red-200">led by:</span>
                    <div>
                      <span className="font-exo2 font-bold block">
                        {workshop.person.name}
                      </span>
                      <span className="font-thin">
                        {workshop.person.designation}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <TextAnimate animation="blurInDown">
                {workshop.description}
              </TextAnimate>
              <Image
                src={workshop.companyLogo}
                alt="company logo"
                width={300}
                height={200}
              />
              <RegisterWorkshopButton id={workshop.id} title={workshop.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const RegisterWorkshopButton = ({ id, title }) => {
  const { user, registrationDetails, setRegistrationDetails } = UserDetails();
  const registered = registrationDetails?.workshops?.includes(title);
  const dataFilled = registrationDetails?.fullName.length > 0;

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
    <>
      {registered ? (
        <button className="badge badge-accent p-4 rounded-xl">
          Registered
        </button>
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
              {dataFilled ? (
                <>
                  <p className="py-4">
                    Are you sure you want to register for{" "}
                    <span className="text-secondary-foreground">{title}</span>?
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-outline btn-warning mr-2">
                        cancel
                      </button>
                      <button
                        onClick={() => handleUpdateEvent(title)}
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
                    Please fill in your personal details before registering for
                    this event. You can come back and add this event later...
                  </p>
                  <div className="modal-action">
                    <Link href="/register">
                      <button className="btn">Participant registration</button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </dialog>
        </>
      )}
    </>
  );
};

