"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function EventCard({
  title,
  description,
  imageSrc,
  name,
  registered = false,
  dataFilled = false,
}) {
  return (
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
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Register
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg font-audioWide">
                    Hello <span className="ml-2">{name}</span>!
                  </h3>
                  {dataFilled ? (
                    <>
                      <p className="py-4">
                        Are you sure you want to register for this event?
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-outline btn-warning mr-2">
                            cancel
                          </button>
                          <button className="btn btn-secondary">
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
    </div>
  );
}
