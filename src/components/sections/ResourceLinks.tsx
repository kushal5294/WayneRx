import { FC } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { darkBlue } from "../../utils/constants";
import { resourceLinksData } from "../../utils/full-services-data";

export const ResourceLinks: FC = () => {
  return (
    <Container>
      <div className=" p-6 rounded-xl text-center mx-auto space-y-4 mt-5">
        <Title>Learn more</Title>
        <Paragraph>
          Navigate these helpful resources to better understand your
          medications.
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7 mb-11">
        {resourceLinksData.map(({ name, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 rounded-xl p-5 transition-all hover:shadow-md hover:border-gray-600 bg-white"
          >
            <div
              style={{ color: darkBlue }}
              className="text-lg font-semibold text-gray-900 mb-1"
            >
              {name}
            </div>
            <div className="text-sm text-gray-500 truncate">{url}</div>
          </a>
        ))}
      </div>
    </Container>
  );
};
