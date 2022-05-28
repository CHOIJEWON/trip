import basciInfo from './basciInfo';
import components from './components';
import paths from './paths';
import server from './server';
import tags from './tags';

const docs = {
  ...basciInfo,
  ...paths,
  ...server,
  ...tags,
  ...components
}

export default docs;