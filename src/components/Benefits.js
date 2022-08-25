import React from "react";
import BenefitItem from "./BenefitItem";
import { CheckIcon } from "@heroicons/react/solid";

function Benefits() {
  return (
    <section className="container mt-24 space-y-24">
      <BenefitItem
        image="./images/benefit-1.svg"
        heading1="Unlimited Power for"
        heading2="your CS Reports"
        description="SLA Dive provides you with ready-made powerful Google Sheets Dashboards to track the right metrics!
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Customisable reports</h5>
            <p>
              Track the performance of SLAs coherently and seperately hourly, daily or weekly! 
            </p>
          </div>
        )}
      />

      <BenefitItem
        image="./images/benefit-2.svg"
        heading1="Facilitate your"
        heading2="Deep Dives"
        description="SLA Dives exports all the hit SLAs to allow you deep dive into them easily! "
        Content={() => (
          <div className="flex flex-col space-y-6">
            <CheckedItem
              bgColor="#FF9900"
              text="Never wonder why your SLA performance isn't as expected anymore."
            />
            <CheckedItem
              bgColor="#F03E3D"
              text="Deep dive easily"
            />
            <CheckedItem
              bgColor="#4D8DFF"
              text="Customise your reports unlimitely."
            />
          </div>
        )}
      />

      <BenefitItem
        image="./images/benefit-3.svg"
        heading1="Keep your team accountable with"
        heading2="Slack Integration"
        description="Integrate with Slack to send a notification message to your channels whenever an SLA is hit"
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Take action proactively</h5>
            <p>
              While deep dive is important, it's better to save your SLAs on the spot!
            </p>
          </div>
        )}
      />
    </section>
  );
}

export default Benefits;

function CheckedItem({ bgColor, text }) {
  return (
    <div>
      <div className="flex items-center space-x-6">
        <div style={{ background: `${bgColor}` }} className="rounded-xl p-1.5">
          <CheckIcon className="h-8 text-white" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
