import React from "react";
import CompanyOverview from "./CompanyOverview/CompanyOverview";
import Team from "./Team/Team";
import Customer from "./Customer/Customer";
import Contact from "./Contact/Contact";

function About() {
  return (
    <div className="flex flex-col gap-4">
      <CompanyOverview />
      <Team />
      <Customer />
      <Contact />
    </div>
  );
}

export default About;
