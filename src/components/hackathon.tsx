"use client";

import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { UserDetails } from "@/components/context/userContext";
import { hackathonDetails } from "@/lib/events";
import { EventRules } from "./events-card";
import { User } from "lucide-react";
export const Hackathon = () => {
  const { registrationDetails } = UserDetails();

  const registered = registrationDetails?.event.includes(
    hackathonDetails.title,
  );
  const dataFilled = registrationDetails?.fullName.length > 0;

  return (
    <div>
      <CardContainer className="z-10 animate-fade">
        <CardBody className="relative group/card w-auto h-auto rounded-xl p-6 border shadow-xl shadow-secondary hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-base-300/60 backdrop-blur-xl border-white/[0.3]">
          <CardItem
            translateZ="50"
            className="w-full text-xl font-bold text-neutral-600 dark:text-white flex justify-between"
          >
            {hackathonDetails.title}
            <span className="text-sm">
              <User className="w-4 h-4 inline mr-1 text-white" />
              3-4
            </span>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {hackathonDetails.description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={hackathonDetails.imageSrc}
              height={416}
              width={608}
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
                  onClick={() =>
                    document.getElementById(hackathonDetails.title).showModal()
                  }
                >
                  Rules
                </button>
                <dialog
                  id={hackathonDetails.title}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box md:min-w-fit">
                    <EventRules rules={hackathonDetails.rules} />
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
              {registered ? (
                <button className="badge badge-secondary">Registered</button>
              ) : (
                <>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() =>
                      document.getElementById(hackathonDetails.id).showModal()
                    }
                  >
                    Register
                  </button>
                  <dialog
                    id={hackathonDetails.id.toString()}
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
                              {hackathonDetails.title}
                            </span>
                            ?
                          </p>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-outline btn-warning mr-2">
                                cancel
                              </button>
                              <Link href={hackathonDetails.url}>
                                <button className="btn btn-accent">
                                  Team registration
                                </button>
                              </Link>
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
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};
