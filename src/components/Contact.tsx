import { Mail, PhoneIcon } from "lucide-react";
import { contact } from "@/lib/contact";
import Link from "next/link";
import { TextAnimation } from "./TextAnimation";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-wrap gap-16 justify-evenly w-full py-24 px-2 md:px-6 lg:px-10"
    >
      <div className="flex flex-col items-start justify-between">
        <TextAnimation>
          <h2 className="text-3xl md:text-5xl font-monoton font-bold my-8">
            Contact
          </h2>
        </TextAnimation>
        <TextAnimation mode="slideInRight">
          <div className="space-y-8">
            <div>
              <Mail size={32} className="mx-auto mr-2 inline" />
              <Link href="mailto:email.zynapse.in">
                <span className="badge badge-ghost">email.zynapse.in</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-start md:justify-evenly items-center gap-4">
              {contact.map((c, i) => (
                <div key={i} className="flex justify-center items-center">
                  <PhoneIcon size={34} className="mx-auto mr-2 inline" />
                  <div className="flex flex-col gap-2">
                    <span className="badge badge-neutral">{c.name}</span>
                    <span className="badge badge-ghost">
                      <Link href={`tel:${c.value}`}>{c.value}</Link>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TextAnimation>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8309693568867!2d76.33264297623344!3d10.030803472501493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c434d5b48f9%3A0xe577acf938f6350e!2sBharata%20Mata%20College!5e0!3m2!1sen!2sin!4v1736761521957!5m2!1sen!2sin"
        width="400"
        height="250"
        className="border-0 rounded-lg"
        loading="lazy"
      ></iframe>
    </div>
  );
};
