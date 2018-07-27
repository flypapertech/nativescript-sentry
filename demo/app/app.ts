﻿import { Sentry } from 'nativescript-sentry';
import * as application from 'tns-core-modules/application';
// const dsn = 'https://6073dd1015a344ce9028507b5c7abd34:4770c1cecb904a568c85f1682c87fc83@watson.mysns.pt/3';

const dsn = 'https://32b722746f244e44831ea8d6bfb87250@sentry.io/197242';
Sentry.init(dsn);

application.start({ moduleName: 'main-page' });
