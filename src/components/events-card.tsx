"use client";
import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { UserDetails } from "@/components/context/userContext";
import { getDetails, updateDetails } from "./backend/firebase";

type EventCardProps = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  url?: string | null;
  rules: { do: string[]; dont: string[] };
  team?: boolean;
};
export function EventCard({
  id,
  title,
  description,
  imageSrc,
  url = null,
  rules,
  team = false,
}: EventCardProps) {
  const {
    user,
    registrationDetails,
    setRegistrationDetails,
    loading,
    setLoading,
  } = UserDetails();
  const registered = registrationDetails?.event.includes(title);
  const dataFilled = registrationDetails?.fullName.length > 0;

  const handleUpdateEvent = async () => {
    setLoading(true);
    const newEvent = {
      event: [...registrationDetails.event, title],
    };
    try {
      await updateDetails(user.email, newEvent);
      const details = await getDetails(user.email!);
      setRegistrationDetails(details);
    } catch (error) {
      console.error("Error updating details: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="skeleton h-64 w-full"></div>
      ) : (
        <CardContainer className="z-10">
          <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black/10 backdrop-blur dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={imageSrc}
                height={url ? 576 : 416}
                width={url ? 448 : 608}
                className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <div>
                  <button
                    className="btn btn-sm"
                    onClick={() => document.getElementById(title).showModal()}
                  >
                    Rules
                  </button>
                  <dialog
                    id={title}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <EventRules rules={rules} />
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </CardItem>
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl text-xs font-bold"
              >
                {registered || team ? (
                  <button className="badge badge-secondary">Registered</button>
                ) : (
                  <>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => document.getElementById(id).showModal()}
                    >
                      Register
                    </button>
                    <dialog
                      id={id}
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg font-audioWide">
                          Hello{" "}
                          <span className="ml-2">
                            {registrationDetails?.fullName}
                          </span>
                          !
                        </h3>
                        {dataFilled ? (
                          <>
                            <p className="py-4">
                              Are you sure you want to register for{" "}
                              <span className="text-secondary-foreground">
                                {title}
                              </span>
                              ?
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-outline btn-warning mr-2">
                                  cancel
                                </button>
                                {url ? (
                                  <Link href={url}>
                                    <button className="btn btn-accent">
                                      Team registration
                                    </button>
                                  </Link>
                                ) : (
                                  <button
                                    onClick={handleUpdateEvent}
                                    className="btn btn-secondary"
                                  >
                                    Register
                                  </button>
                                )}
                              </form>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="py-4">
                              Please fill in your personal details to register
                              for this event.
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
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      )}
    </>
  );
}

function EventRules({ rules }: { rules: { do: string[]; dont: string[] } }) {
  return (
    <div className="mockup-code md:mockup-window">
      <pre data-prefix="$" className="bg-warning text-warning-content text-2xl">
        <code>Rules and Regulations</code>
      </pre>
      {rules?.do.map((rule, index) => (
        <pre
          key={index}
          data-prefix=">"
          className="text-success font-monoton text-lg "
        >
          <code>{rule}</code>
        </pre>
      ))}
      {rules?.dont.map((rule, index) => (
        <pre
          key={index}
          data-prefix=">"
          className="text-warning font-monoton text-lg"
        >
          <code>{rule}</code>
        </pre>
      ))}
    </div>
  );
}

