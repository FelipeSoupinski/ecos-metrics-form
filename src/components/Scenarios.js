import { useMemo } from "react";

const Scenarios = ({ scenarioIndex = 0, scenarios }) => {
  const currScenario = useMemo(
    () => scenarios?.[scenarioIndex],
    [scenarioIndex, scenarios]
  );

  const formatTextList = (textList = []) => {
    let formattedTextList = '';
    for (const [index, text] of textList.entries()) {
      if (index === textList.length - 1) {
        formattedTextList += `- ${text}.`;
      } else {
        formattedTextList += `- ${text}; `;
      }
    }
    return formattedTextList;
  }

  return (
    <>
      <p className="text-justify">
        <b>{currScenario?.title}</b> {currScenario?.text} Current challenges include:
      </p>
      <div className="text-justify">
        <span>{formatTextList(currScenario?.list)}</span>
      </div>
    </>
  );
};

export default Scenarios;
