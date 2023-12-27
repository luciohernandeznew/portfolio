import { SiUpwork } from "react-icons/si";
import { Badge } from "./Badge";
import { projects } from "./Float/config";
import Float from "./Float/Float";
import { openInNewTab } from "./helper";
import { SectionLayout } from "./Layout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";

export default function Writing() {
  return (
    <SectionLayout className="w-full items-start">
      <div className="md:max-w-2/3 flex w-full flex-col items-start space-y-11">
        <SubHeading dark align={Align.Left}>
          projects
        </SubHeading>

        <a href="https://technology.panasonic.eu/av-digital-world/" className="underline whitespace-nowrap">Panasonic CONNECT</a>

        <a href="https://crossy-road-omega.vercel.app/" className="underline whitespace-nowrap"> Crossy Road game</a>

        
        {/* <div>
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="It's in the works!" />
          </Heading>

          <p>Check back soon.</p>
        </div> */}

        <p className="whitespace-pre-line text-xs font-bold">
          Meanwhile, this site is being built & designed with NextJS,
          TypeScript, Tailwind CSS, GSAP & Figma
        </p>
      </div>
       
       
      
      <Float config={projects} />
    </SectionLayout>
  );
}
