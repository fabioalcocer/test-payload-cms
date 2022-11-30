import { buildConfig } from 'payload/config';
import Examples from './collections/Examples';
import Users from './collections/Users';
import Media from './collections/Media';
import Products from './collections/Products';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Products,
    Media
  ],
});
