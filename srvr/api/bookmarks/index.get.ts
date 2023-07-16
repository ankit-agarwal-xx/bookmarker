import * as Bookmarks from '../../src/bookmark';

export default defineEventHandler(async(event) => {
  return Bookmarks.list();
});
