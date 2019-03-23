const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withCss(withSass());

/* module.exports = withSass({
    exportPathMap: async function (defaultPathMap) {

        const datos = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ5eDTRPGrt5URTq156neafV8&key=${apiMap.mapapi}&language=es`);
        const reviews = datos.data.result.reviews;

        return {
            '/': {
                page: '/', query: {
                    reviews
                }
            },
            '/about': { page: '/nosotros' },
            '/contact': { page: '/contacto' },
            '/services': { page: '/servicios' }
        }
    }
}) */

/* module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
} */
