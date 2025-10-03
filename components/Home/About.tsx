import React from "react";
import {
  BadgeCheck,
  ShieldCheck,
  Wallet,
  Rocket,
  CreditCard,
  Gift,
} from "lucide-react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24" id="why">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <img src="/home3.png" />
        </div>
        <div className="About ">
          <div className="text-6xl font-bold">
            Why we are <br /> about to turn{" "}
            <span
              className="inline-block bg-[#F8D57E] p-4 text-5xl rounded-[20px] origin-center scale-y-[-1]"
              aria-label="heads"
            >
              HEADS
            </span>
          </div>
          <p className="mt-4">
            At SmoothRent, we believe in a future where finding and renting a
            home is as seamless as a few clicks. Our platform is designed with
            you in mind, making the rental process not just easy, but enjoyable.
          </p>

          {/* Four reasons we’re turning heads */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-5 border rounded-xl hover:shadow-sm transition">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                <BadgeCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">Verified people & properties</h3>
                <p className="text-sm text-gray-600">
                  Vetted listings, landlords, and KYC-backed tenants reduce
                  fraud and time-wasting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border rounded-xl hover:shadow-sm transition">
              <div className="p-2 rounded-lg bg-green-50 text-green-600">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">Secure, digital process</h3>
                <p className="text-sm text-gray-600">
                  From viewings to agreements and payments—organized, traceable,
                  and safe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border rounded-xl hover:shadow-sm transition">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <Wallet className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">Seamless rent collection</h3>
                <p className="text-sm text-gray-600">
                  Automated reminders, receipts, and transparent payouts for
                  peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border rounded-xl hover:shadow-sm transition">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                <Rocket className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">Faster matches, fewer hassles</h3>
                <p className="text-sm text-gray-600">
                  Smart matching, qualified leads, and streamlined workflows for
                  speed.
                </p>
              </div>
            </div>

            {/* New: Flexible payments */}
            <div className="flex items-start gap-4 p-5 border rounded-xl hover:shadow-sm transition">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <CreditCard className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">Flexible payments</h3>
                <p className="text-sm text-gray-600">
                  Flexible options that fit your cash flow—split, schedule, and
                  stay on track.
                </p>
              </div>
            </div>

            {/* New: Earn on referral incentives */}
            <div className="flex items-start gap-4 p-5 border rounded-xl hover:shadow-sm transition">
              <div className="p-2 rounded-lg bg-pink-50 text-pink-600">
                <Gift className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">Earn on referral incentives</h3>
                <p className="text-sm text-gray-600">
                  Invite friends or partners and earn rewards when they join or
                  transact.
                </p>
              </div>
            </div>
          </div>
          {/* End reasons */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
