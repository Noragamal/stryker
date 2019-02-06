import KarmaTestRunner from './KarmaTestRunner';
import { declareClassPlugin, PluginKind } from 'stryker-api/plugin';

export const strykerPlugins = [
  declareClassPlugin(PluginKind.TestRunner, 'karma', KarmaTestRunner)
];
