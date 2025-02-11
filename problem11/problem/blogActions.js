// Do not change the pre-written code.
// Make the necessary imports here.

import fs from 'fs';

export function writeBlog(filePath, blogContent) {
  fs.appendFileSync(filePath, blogContent, 'utf8');
}

export function publishBlog(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}


