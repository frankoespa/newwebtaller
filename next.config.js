const withSass = require('@zeit/next-sass')
module.exports = withSass()

/* module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
} */
