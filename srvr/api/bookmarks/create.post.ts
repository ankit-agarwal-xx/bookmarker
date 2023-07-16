import * as Bookmarks from '../../src/bookmark';

export default defineEventHandler(async(event) => {
  const body= await readBody(event);

  return Bookmarks.add(body);
  });
