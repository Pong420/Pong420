const React = require('react');
const { Layout } = require('./src/components/Layout');

require('typeface-roboto');
require('typeface-raleway');
require('typeface-open-sans');

// @ts-check

/** @type {import('gatsby').GatsbyBrowser['wrapPageElement']} */
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
