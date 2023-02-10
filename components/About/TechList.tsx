import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { Badge } from "../Badge";
import { tech } from "./config";

export default function TechList() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return (
      <>
        {tech.map((t, i) => (
          <span key={`${t.name}-${i}`}>{`${t.name}${
            i === tech.length - 2 ? " and " : ", "
          }`}</span>
        ))}
      </>
    );
  }

  return (
    <>
      {tech.map((t, i) => (
        <Fragment key={t.name}>
          <Badge key={t.name} icon={t.icon} size={isMobile ? "sm" : undefined}>
            {t.name}
          </Badge>
          {i === tech.length - 2 ? "and " : ", "}
        </Fragment>
      ))}
    </>
  );
}
