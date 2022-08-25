import {
  ClockIcon,
  CursorClickIcon,
  HeartIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";
import Feature from "./FeatureItem";

function Features() {
  return (
    <section className="container mt-24 flex flex-col items-center">
      <h2 className="text-[32px] font-bold text-center sm:text-left">
        App was Built Specifically for You
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

      <Feature
        Icon={CursorClickIcon}
        title="SLA Performance Control"
        iconBgColor="#02897A"
        description="Automate tracking your SLAs performance!"
      />
      <Feature
        Icon={UsersIcon}
        iconBgColor="#4D8DFF"
        title="Keep your Team aligned"
        description="Automate notifications to your Slack!"
      />
      <Feature
        Icon={HeartIcon}
        iconBgColor="#740A76"
        title="Missed SLA Analysis"
        description="Deep dives into the right data!"
      />
      <Feature
        Icon={ClockIcon}
        iconBgColor="#F03E3D"
        title="Hourly Reports"
        description="The right data for any timeframe!"
      />
      </div>

      <a href="sladivex@gmail.com"><button>Get in touch now!</button></a>

    </section>
  );
}

export default Features;
