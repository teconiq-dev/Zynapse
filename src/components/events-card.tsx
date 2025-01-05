"use client";
import Link from "next/link";
import Image from "next/image";
import { UserDetails } from "@/components/context/userContext";
import { getDetails, updateDetails } from "./backend/firebase";

export function EventCard({ title, description, imageSrc, url = null }) {
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
        <div className="skeleton h-56 w-full"></div>
      ) : (
        <div className="card bg-base-100 image-full w-full shadow-xl rounded-lg">
          <figure className="rounded-lg overflow-hidden">
            <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end mt-8">
              {registered ? (
                <button className="badge badge-secondary">Registered</button>
              ) : (
                <>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => document.getElementById(title).showModal()}
                  >
                    Register
                  </button>
                  <dialog
                    id={title}
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
        </div>
      )}
    </>
  );
}

function Modal({ children }) {
  return (
    <dialog className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">{children}</div>
    </dialog>
  );
}
