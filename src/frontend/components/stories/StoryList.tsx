import stories, { StorySortableValueType } from "api/stories";
import { DashboardColumnSortsKeyType } from "api/dashboard";

import StoryItem from "frontend/components/stories/StoryItem";

type StoryListPropsType = {
  activeSortKey: DashboardColumnSortsKeyType;
  activeSortValueItem: StorySortableValueType;
};

const StoryList = ({
  activeSortKey,
  activeSortValueItem,
}: StoryListPropsType) => (
  <div>
    {Object.values(stories)
      .sort(() => 0.5 - Math.random())
      .filter((story) => story[activeSortKey].name === activeSortValueItem.name)
      .map((story, index) => (
        <StoryItem key={index} story={story} />
      ))}
  </div>
);

export default StoryList;
