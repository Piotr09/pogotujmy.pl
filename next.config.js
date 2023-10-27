const path = require('path')

const withExportImages = require('next-export-optimize-images')


module.exports = withExportImages({
  output: 'export',
})

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cms.pogotujmy.pl', 'gc.pogotujmy.pl'],
    loader: 'imgix',
    path: '',
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/((?!przepisy).*)/:slug',
        destination: '/przepisy/:slug',
        permanent: true,
      },
      {
        source: '/:slug*\\.html\\',
        destination: '/przepisy/:slug',
        permanent: true,
      },
    ];
  },
}
