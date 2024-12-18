import React from "react";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
        {description}
      </p>
    </div>
  );  
};

export default Heading;
