import React, { Suspense } from 'react';
import CustomLoader from '../CustomLoader/CustomLoader';
import { Tittle } from "./Tab.styled";

const DummyTable = React.lazy(() => import('../../tabs/DummyTable/DummyTable'));
const DummyList = React.lazy(() => import('../../tabs/DummyList/DummyList'));
const DummyChart = React.lazy(() => import('../../tabs/DummyChart/DummyChart'));


export const Tab = ({ tabs, tabId }) => {
  const currentTab = tabs.find((tab) => {
  
    return tab.id.toString() === tabId
  });

  if (!currentTab) {
    return <div>Tab not found</div>;
  }

  let TabContent;

  switch (currentTab.path) {
    case 'tabs/dummyTable.js':
      TabContent = DummyTable;
      break;
    case 'tabs/dummyList.js':
      TabContent = DummyList;
      break;
    case 'tabs/dummyChart.js':
      TabContent = DummyChart;
      break;
    default:
      return <div>Component not found</div>;
  }

  return (
    <div>
      <Tittle>{currentTab.title}</Tittle>
      <Suspense fallback={<CustomLoader />}>
        <TabContent />
      </Suspense>
    </div>
  );
};



