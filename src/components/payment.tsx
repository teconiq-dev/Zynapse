import Link from "next/link";
import { useState } from "react";
import QRCode from "react-qr-code";

export const Payment = ({ count = 2, event = "Hackathon" }) => {
  const paymentUrl = `upi://pay?pa=vijayakrishnan1018@okhdfcbank&pn=Zynapse2025&tn=${event}&am=${count * 100}&cu=INR`;

  const [showQR, setShowQR] = useState(true);
  return (
    <div className="form-control mt-14 w-full flex items-center justify-center gap-4 border-t border-secondary py-5">
      <h2 className="text-xl">Payment - UPI</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            UPI ID -{" "}
            <span className="text-red-200">vijayakrishnan1018@okhdfcbank</span>
          </span>
        </label>
        <label className="label">
          <span className="label-text">
            Phone No - <span className="text-red-200">8086743397</span>
          </span>
        </label>
      </div>
      <label className="label">
        <span className="label-text">
          <span className="text-red-200">Rs.100 </span>per head
        </span>
      </label>
      <div className="form-control hidden lg:block">
        <label className="label cursor-pointer">
          <span className="label-text">Show QR Code</span>
          <input
            type="checkbox"
            className="checkbox-secondary ml-2 h-5 w-5"
            checked={showQR}
            onChange={() => setShowQR(!showQR)}
          />
        </label>
      </div>
      {showQR && (
        <div className="w-fit h-fit bg-secondary hidden lg:block">
          <QRCode value={paymentUrl} fgColor="purple" />
        </div>
      )}
      <label className="label">
        <span className="label-text text-center">
          <span className="text-red-300">
            Make sure to do payment before submitting registrations
          </span>
        </span>
      </label>
      <div className="flex flex-col justify-center items-center lg:hidden">
        <a href={paymentUrl} target="_blank">
          <button type="button" className="btn btn-accent">
            Pay Now
          </button>
        </a>
      </div>
    </div>
  );
};
