import React from "react";

export default function Social() {
  const socials = [
    { site: "github", url: "https://github.com/tatia-burdett", icon: "github"},
    { site: "linkedin", url: "https://www.linkedin.com/in/tatjanaburdett/", icon: "linkedin" },
    { site: "gmail", url: "mailto:tatiaburdett@gmail.com", icon: "mailbox"},
    { site: "calendly", url: "mailto:tatiaburdett@gmail.com", icon: "calendar-date"},
  ];

  const mapped = socials.map((platform, index) => (
    <a 
      key={index} 
      className="btn btn-outline-secondary" 
      href={platform.url} 
      target="_blank">
      <i className={`fs-2 bi bi-${platform.icon}`}></i>
    </a>
  ));

  return <div className="m-3 btn-group-vertical">{mapped}</div>;
}
