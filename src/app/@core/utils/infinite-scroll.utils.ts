import { IInfiniteScrollTarget } from '../interfaces/infinite-scroll-target.interface/infinite-scroll-target.interface';

/* eslint-disable prefer-arrow/prefer-arrow-functions */
export function infiniteScrollLocal(
  activeList: any[],
  fullList: any[],
  limitList = 20,
  infiniteTarget?: IInfiniteScrollTarget
) {
  let index = activeList.length;
  const limit = activeList.length + limitList;

  for (index; index < limit && index < fullList.length; index++) {
    activeList.push(fullList[index]);
  }

  if (infiniteTarget) {
    infiniteTarget.complete();
    if (activeList.length === fullList.length) {
      infiniteTarget.disabled = true;
    }
  }

  return activeList;
}
