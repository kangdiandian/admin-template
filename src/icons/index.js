import Vue from 'vue';
import IconSvg from '@/components/IconSvg';

Vue.component('icon-svg', IconSvg);

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const svgFile = require.context('./svg', false, /\.svg$/);
requireAll(svgFile);
