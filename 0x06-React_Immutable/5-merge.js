import { List, Map } from 'immutable';

function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}

export {
  concatElements,
  mergeElements
};
