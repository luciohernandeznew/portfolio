import { writing } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";

export default function Writing() {
  return (
    <SectionLayout className="overflow-hidden items-start w-full">
      <div className="w-full md:max-w-2/3 flex flex-col space-y-11 items-start">
        <SubHeading dark align={Align.Left}>
          thoughts
        </SubHeading>

        <div>
          <Heading size="sm" dark className="font-extrabold">
            It&apos;s in the works!
          </Heading>

          <p>Check back soon.</p>
        </div>
      </div>
      <Float config={writing} />
    </SectionLayout>
  );
}
