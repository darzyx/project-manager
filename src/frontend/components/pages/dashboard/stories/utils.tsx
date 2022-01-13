import { SemanticWIDTHSNUMBER } from "semantic-ui-react";

import { StoriesType, StoryPrioritiesType, StoryType } from "api/stories";

import { ActiveSortStateType } from "frontend/components/pages/dashboard/Dashboard";
import { getKeys } from "frontend/utils";

type StoryColumnGroupStateType = { [sortableValueName: string]: StoryType[] };

export const isOfTypeSemanticWIDTHSNUMBER = (
  arrayLen: number
): arrayLen is SemanticWIDTHSNUMBER => {
  return Array.from({ length: 16 }, (_, i) => i + 1).includes(arrayLen);
};

const sortByPriority = (
  a: StoryType,
  b: StoryType,
  prioritiesKeys: (keyof StoryPrioritiesType)[]
) => {
  for (let i = 0; i < prioritiesKeys.length; i++) {
    if (a.priority.name === prioritiesKeys[i]) {
      if (b.priority.name === prioritiesKeys[i]) {
        return 0;
      } else {
        return -1;
      }
    } else if (b.priority.name === prioritiesKeys[i]) {
      return 1;
    }
  }
  return 0;
};

export const getStoryColumnGroup = (
  stories: StoriesType,
  priorities: StoryPrioritiesType,
  activeMenuItem: ActiveSortStateType
) => {
  const storiesValues = Object.values(stories);
  const prioritiesKeys = getKeys(priorities);
  const activeSortableValues = Object.values(activeMenuItem.value);
  const storyColumnGroupResult: StoryColumnGroupStateType = {};
  for (let i = 0; i < activeSortableValues.length; i++) {
    const activeSortableValue = activeSortableValues[i];
    const storyColumnResult: StoryType[] = storiesValues
      .filter(
        (story) => story[activeMenuItem.key].name === activeSortableValue.name
      )
      .sort((a, b) => sortByPriority(a, b, prioritiesKeys));
    storyColumnGroupResult[activeSortableValue.name] = storyColumnResult;
  }
  return storyColumnGroupResult;
};
