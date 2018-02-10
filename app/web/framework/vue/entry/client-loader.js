'use strict';

module.exports = function () {
  this.cacheable();
  return `
    import render from 'client';
    import Page from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    export default render({ ...Page });
  `;
};
