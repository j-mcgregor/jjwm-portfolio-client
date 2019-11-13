import * as Nav from './nav';
import * as App from './app';
import * as Home from './home';
import * as About from './about';
import * as Skills from './skills';
import * as Footer from './footer';
import * as Portfolio from './portfolio';

export default {
  ...App,
  ...About,
  ...Nav,
  ...Home,
  ...Skills,
  ...Portfolio,
  ...Footer
};