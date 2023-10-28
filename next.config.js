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
        source: '/2023/06/czy-maka-orkiszowa-jest-zdrowa',
        destination: '/artykuly/czy-maka-orkiszowa-jest-zdrowa',
        permanent: true,
      },
      {
        source: '/2022/12/jaka-herbate-wybrac-co-pic-na-zime.html',
        destination: '/artykuly/jaka-herbate-wybrac-co-pic-na-zime',
        permanent: true,
      },
      {
        source: '/2021/09/kanapki-nie-musza-byc-nudne',
        destination: '/artykuly/kanapki-nie-musza-byc-nudne',
        permanent: true,
      },
      {
        source: '/inspiracje/wybierz-najlepsze-garnki-dla-siebie',
        destination: '/artykuly/garnki-dobrej-klasy-to-podstawa-w-kuchni-wybierz-najlepsze-garnki-dla-siebie',
        permanent: true,
      },
      {
        source: '/poradnik/jaki-blender-kupic',
        destination: '/artykuly/jaki-blender-kupic-na-co-zwrocic-uwage',
        permanent: true,
      },
      {
        source: '/recenzja/piekarnik-parowy-gotie-gpp-400-bakeandsteam-czy-warto',
        destination: '/artykuly/piekarnik-parowy-gotie-gpp-400-bakeandsteam-czy-warto',
        permanent: true,
      },
      {
        source: '/kuchnia-polska-jedna-z-najciekawszych-kuchni-swiata',
        destination: '/artykuly/kuchnia-polska-rarytas-dla-polakow-2',
        permanent: true,
      },
      {
        source: '/kulinaria-jako-doskonaly-lacznik-rowniez-w-sferze-biznesu',
        destination: '/artykuly/kulinaria-jako-doskonaly-lacznik-rowniez-sferze-biznesu',
        permanent: true,
      },
      {
        source: '/warsztaty-kulinarne-idealny-sposob-doskonalenia-umiejetnosci-gotowania',
        destination: '/artykuly/kuchnia-polska-rarytas-dla-polakow',
        permanent: true,
      },
      {
        source: '/najpyszniejsze-zagraniczne-slodycze-ktorych-musisz-sprobowac',
        destination: '/artykuly/najpyszniejsze-zagraniczne-slodycze-ktorych-musisz-sprobowac',
        permanent: true,
      },
      {
        source: '/grill-elektryczny-czy-warto-w-niego-zainwestowac',
        destination: '/artykuly/grill-elektryczny-warto-niego-zainwestowac',
        permanent: true,
      },
      {
        source: '/tajlandia-kulinarna-podroz-wsrod-niezwyklych-smakow',
        destination: '/artykuly/tajlandia-kulinarna-podroz-wsrod-niezwyklych-smakow',
        permanent: true,
      },
      {
        source: '/2016/12/6-obiadow-ktore-przygotujesz-30-minut.html',
        destination: '/artykuly/6-obiadow-ktore-przygotujesz-30-minut',
        permanent: true,
      },
      {
        source: '/bamix-wiecej-niz-zwykly-blender',
        destination: '/artykuly/bamix-wiecej-niz-zwykly-blender',
        permanent: true,
      },
      {
        source: '/2015/07/kurczak-po-meksykansku-z-pieczonymi-ziemniaczkami-recenzja-nozy-gerpol.html',
        destination: '/artykuly/kurczak-po-meksykansku-z-pieczonymi-ziemniaczkami-recenzja-nozy-gerpol',
        permanent: true,
      },
      {
        source: '/2015/08/zielony-makaron-z-brokulem-cukinia-i-fasolka-szparagowa-recenzja-nozy-gerpol.html',
        destination: '/artykuly/zielony-makaron-z-brokulem-cukinia-i-fasolka-szparagowa-recenzja-nozy-gerpol',
        permanent: true,
      },
      {
        source: '/2016/02/wyciskarka-wolnoobrotowa-hurom-hg-2g-recenzja.html',
        destination: '/artykuly/wyciskarka-wolnoobrotowa-hurom-hg-2g-recenzja',
        permanent: true,
      },
      {
        source: '/2016/09/recenzja-blendera-counter-intelligence-bs5.html',
        destination: '/artykuly/recenzja-blendera-counter-intelligence-bs5',
        permanent: true,
      },
      {
        source: '/2016/09/recenzja-prasy-do-oleju-counter-intelligence-oilpresso-lop-g3.html',
        destination: '/artykuly/recenzja-prasy-do-oleju-counter-intelligence-oilpresso-lop-g3',
        permanent: true,
      },
      {
        source: '/((?!przepisy) || (?!artykuly).*)/:slug',
        destination: '/przepisy/:slug*',
        permanent: true,
      },
      {
        source: '/:slug*\.html\\',
        destination: '/:slug*',
        permanent: true,
      },
    ];
  },
}
