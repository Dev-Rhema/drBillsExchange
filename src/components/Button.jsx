import React from "react";
import apple from "../assets/images/apple.png";
import playStore from "../assets/images/playStore.png";

const sharedButtonStyles =
  "inline-flex min-w-[180px] items-center justify-center gap-2 py-3 h-full px-8 font-semibold rounded-4xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] max-lg:min-w-[160px] max-lg:px-6 max-lg:py-2 max-md:min-w-[150px] max-md:py-2 max-md:px-4 max-lg:font-medium max-md:text-sm";

export const Button = ({
  name,
  className,
  href,
  target,
  rel,
  icon,
  iconAlt = "",
  ...props
}) => {
  const buttonClasses = `${sharedButtonStyles} bg-[#1A315B] ${className || ""}`;
  const content = (
    <>
      {icon ? (
        <img src={icon} alt={iconAlt} className="w-5 h-5 object-contain" />
      ) : null}
      <span>{name}</span>
    </>
  );

  if (href) {
    const isExternalLink = /^https?:\/\//i.test(href);
    const anchorTarget = target || (isExternalLink ? "_blank" : "_self");
    const anchorRel =
      rel || (isExternalLink ? "noopener noreferrer" : undefined);

    return (
      <a
        href={href}
        target={anchorTarget}
        rel={anchorRel}
        className={buttonClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

export const IPhoneButton = ({
  name = "App Store",
  className = "",
  href = "https://apps.apple.com/app/drbills-exchange/id6762533638",
  ...props
}) => {
  return (
    <Button
      name={name}
      className={`bg-blue-400 text-white ${className} px-4 py-2`}
      href={href}
      icon={apple}
      iconAlt="Apple logo"
      {...props}
    />
  );
};

export const AndroidButton = ({
  name = "Play Store",
  className = "",
  href = "https://play.google.com/store/apps/details?id=com.drbillsexchange.mobile",
  ...props
}) => {
  return (
    <Button
      name={name}
      className={`border border-[#1A315B] bg-white text-[#1A315B] ${className} px-4 py-2`}
      href={href}
      icon={playStore}
      iconAlt="Google Play logo"
      {...props}
    />
  );
};
