import _ from "lodash";
import all from "../../../posts/*.md";

export const posts = _.chain(all)
  .map(transform)
  .orderBy("date", "desc")
  .value();

export function findPost(permalink) {
  return _.find(posts, { permalink });
}

function transform({ filename, metadata, html }) {
  const permalink = resolveBlogLink(filename);

  // 2020-08-05-my-go-foray.md -> take the date
  const creationDate = filename.substring(0, 10);
  const date = new Date(creationDate);

  return { ...metadata, filename, permalink, html, date };
}

/**
 * Given a file `posts/2020-08-05-my-go-foray.md` -> outputs `my-go-foray`
 *
 * @param {string} filename
 *
 * @returns sanitized path
 */
function resolveBlogLink(filename) {
  const filenameWithoutDate = filename.substring(11);
  const permalink = filenameWithoutDate.replace(/.md$/, "");
  return permalink;
}
