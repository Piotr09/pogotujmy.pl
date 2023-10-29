const path = require('path')

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
        source: "/przepis/zupa-krem-ze-swiezych-pomidorow.html",
        destination: "/przepisy/zupa-krem-ze-swiezych-pomidorow",
        permanent: true,
      },
      {
        source: "/przepis/wigilijny-barszcz-czerwony-na-zakwasie",
        destination: "/przepisy/wigilijny-barszcz-czerwony-na-zakwasie",
        permanent: true,
      },
      {
        source: "/2019/11/domowa-pita-z-hummusem-kurczakiem-i-warzywami",
        destination: "/przepisy/domowa-pita-z-hummusem-kurczakiem-i-warzywami",
        permanent: true,
      },
      {
        source: "/2023/06/czy-maka-orkiszowa-jest-zdrowa",
        destination: "/artykuly/czy-maka-orkiszowa-jest-zdrowa",
        permanent: true,
      },
      {
        source: "/2022/12/jaka-herbate-wybrac-co-pic-na-zime",
        destination: "/artykuly/jaka-herbate-wybrac-co-pic-na-zime",
        permanent: true,
      },
      {
        source: "/2019/11/domowa-pita-z-hummusem-kurczakiem-i-warzywami",
        destination: "/przepisy/domowa-pita-z-hummusem-kurczakiem-i-warzywami",
        permanent: true,
      },
      {
        source: "/przepis/kokosowe-ciasto-dyniowe-z-brzoskwiniami",
        destination: "/przepisy/ciasto-dyniowe-orzechami-granatem-kremem-mascarpone-2",
        permanent: true,
      },
      {
        source: "/przepis/owsianka-z-syropem-z-agawy-i-swiezymi-owocami",
        destination: "/przepisy/owsianka-miodem-swiezymi-owocami-2",
        permanent: true,
      },
      {
        source: "/przepis/szakszuka-z-papryka-i-brokulem",
        destination: "/przepisy/szakszuka-z-papryka-cukinia-i-awokado-2",
        permanent: true,
      },
      {
        source: "/przepis/ciasto-ucierane-ze-sliwkami",
        destination: "/przepisy/ciasto-ucierane-ze-sliwkami-pogotujmy-pl",
        permanent: true,
      },
      {
        source: "/przepis/drozdzowki-z-truskawkami-i-kruszonka",
        destination: "/przepisy/drozdzowki-morelami-kruszonka-2",
        permanent: true,
      },
      {
        source: "/przepis/kotlety-mielone-mlodymi-ziemniakami",
        destination: "/przepisy/kotlety-mielone-mlodymi-ziemniakami-buraczkami-2",
        permanent: true,
      },
      {
        source: "/2019/07/zupa-ze-swiezych-pomidorow.html",
        destination: "/przepisy/zupa-ze-swiezych-pomidorow",
        permanent: true,
      },
      {
        source: "/przepis/kruche-ciasto-z-truskawkami-i-rabarbarem",
        destination: "/przepisy/szarlotka-kruchym-ciescie-2/",
        permanent: true,
      },
      {
        source: "/przepis/ciasto-drozdzowe-z-truskawkami-i-kruszonka",
        destination: "/przepisy/ciasto-drozdzowe-ze-sliwkami-kruszonka-2",
        permanent: true,
      },
      {
        source: "/przepis/drozdzowki-z-serem",
        destination: "/przepisy/przepisy/drozdzowki-z-budyniem-2",
        permanent: true,
      },
      {
        source: "/przepis/salatka-z-fasolka-szparagowa-i-pomidorami",
        destination: "/przepisy/przepisy/przepisy/salatka-grecka-2/",
        permanent: true,
      },
      {
        source: "/przepis/kruche-babeczki-z-bita-smietana-i-morelami",
        destination: "/przepisy/przepisy/kruche-babeczki-domowym-budyniem-truskawkami-2",
        permanent: true,
      },
      {
        source: "/przepis/makaron-ze-szparagami-w-sosie-pomidorowym",
        destination: "/przepisy/makaron-z-papryka-i-fasolka-szparowa-w-sosie-pomidorowym-2",
        permanent: true,
      },
      {
        source: "/przepis/sernik-zimno-z-galaretka-i-borowkami",
        destination: "/przepisy/sernik-zimno-galaretka-2",
        permanent: true,
      },
      {
        source: "/przepis/risotto-ze-szparagami-i-pomidorami",
        destination: "/przepisy/risotto-ze-szparagami-2",
        permanent: true,
      },
      {
        source: "/przepis/pavlova-z-bita-smietana-i-owocami",
        destination: "/przepisy/pavlova-owocami-sezonowymi-2",
        permanent: true,
      },
      {
        source: "/przepis/leniwe-ze-smietana-i-truskawkowym-musem",
        destination: "/przepisy/leniwe-2",
        permanent: true,
      },
      {
        source: "/przepis/spaghetti-carbonara-z-brokulem-i-mozzarella",
        destination: "/przepisy/spaghetti-carbonara-2",
        permanent: true,
      },
      {
        source: "/przepis/jajka-z-chrzanowym-majonezem",
        destination: "/przepisy/jajka-ziolowym-majonezem-2",
        permanent: true,
      },
      {
        source: "/przepis/meksykanskie-taco",
        destination: "/przepisy/nalesniki-meksykanskim-stylu-2",
        permanent: true,
      },
      {
        source: "/przepis/krucha-tarta-cytrynowa-z-beza",
        destination: "/przepisy/tarta-z-kremem-mascarpone-i-truskawkami-2-2",
        permanent: true,
      },
      {
        source: "/przepis/serowe-rogaliki-kruche-z-dzemem",
        destination: "/przepisy/serowe-rogaliki-z-dzemem",
        permanent: true,
      },
      {
        source: "/przepis/burgery-wolowe-z-panierowanym-serem-i-sosem-chili",
        destination: "/przepisy/pikantne-burgery-wolowe-2",
        permanent: true,
      },
      {
        source: "/przepis/pizza-z-salami-papryka-i-bazylia",
        destination: "/przepisy/kopytka-dyniowe-z-rozmarynowym-maslem",
        permanent: true,
      },
      {
        source: "/przepis/pizza-z-salami-papryka-i-bazylia",
        destination: "/przepisy/pizza-salami-papryka-pieczarkami-2",
        permanent: true,
      },
      {
        source: "/przepis/zupa-dyniowo-pomidorowa",
        destination: "/przepisy/dyniowa-zupa-krem-2/",
        permanent: true,
      },
      {
        source: "/przepis/paczki-z-dzemem",
        destination: "/przepisy/donuty-najlepsze-amerykanskie-paczki-2",
        permanent: true,
      },
      {
        source: "/przepis/salatka-z-kurczakiem-boczkiem-i-awokado",
        destination: "/przepisy/salatka-rukola-kurczakiem-curry-papryka-oliwkami-2",
        permanent: true,
      },
      {
        source: "/przepis/obledne-ciasto-jablkowo-gruszkowe-z-owocowym-budyniem-i-kremem",
        destination: "/przepisy/ciasto-podwojnie-jablkowe-2",
        permanent: true,
      },
      {
        source: "/przepis/aromatyczne-skrzydelka-z-kurczaka-z-pikantnym-ryzem",
        destination: "/przepisy/pieczone-podudzia-z-kurczaka-z-pomaranczowym-ryzem-2",
        permanent: true,
      },
      {
        source: "/przepis/muffiny-gruszkowo-cynamonowe",
        destination: "/przepisy/ciasto-podwojnie-jablkowe-2",
        permanent: true,
      },
      {
        source: "/przepis/makaron-kurczakiem-fasolka-szparagowa-sokiem-pomidorowym",
        destination: "/przepisy/makaron-fasolka-szparagowa-swiezymi-pomidorami-2",
        permanent: true,
      },
      {
        source: "/przepis/tarta-z-bita-smietana-i-jagodami",
        destination: "/przepisy/tarta-z-kremem-mascarpone-i-truskawkami-2",
        permanent: true,
      },
      {
        source: "/przepis/makaron-z-kurkami-i-kurczakiem-w-sosie-smietanowym",
        destination: "/przepisy/makaron-kurkami-sosie-smietanowym-2",
        permanent: true,
      },
      {
        source: "/przepis/babeczki-bananowe-z-kawalkami-czekolady",
        destination: "/przepisy/najlepsze-babeczki-czekoladowo-bananowe-2",
        permanent: true,
      },
      {
        source: "/przepis/frytki-warzywne-z-batatow-marchwi-buraka-i-selera",
        destination: "/przepisy/pieczone-bataty-2",
        permanent: true,
      },
      {
        source: "/przepis/mleczny-koktajl-truskawkowo-bananowy1",
        destination: "/przepisy/mleczny-koktajl-truskawkowo-bananowy",
        permanent: true,
      },
      {
        source: "/przepis/salatka-z-rukola-kurczakiem-curry-papryka-i-oliwkami",
        destination: "/przepisy/salatka-rukola-kurczakiem-curry-papryka-oliwkami/",
        permanent: true,
      },
      {
        source: "/przepis/makaron-z-brokulami-i-kurczakiem",
        destination: "/przepisy/makaron-brokulami-kurczakiem",
        permanent: true,
      },
      {
        source: "/przepis/idealny-torcik-bezowy-z-truskawkami-i-malinami",
        destination: "/przepisy/idealny-torcik-bezowy-truskawkami-malinami",
        permanent: true,
      },
      {
        source: "/przepis/pikantna-zupa-z-miesem-mielonym-i-warzywami",
        destination: "/przepisy/pikantna-zupa-miesem-mielonym-warzywami",
        permanent: true,
      },
      {
        source: "/przepis/najlepszy-przepis-na-faworki",
        destination: "/przepisy/najlepszy-przepis-faworki",
        permanent: true,
      },
      {
        source: "/przepis/pizza-z-salami-papryka-i-pieczarkami",
        destination: "/przepisy/pizza-salami-papryka-pieczarkami",
        permanent: true,
      },
      {
        source: "/przepis/gulasz-wieprzowy-z-papryka-i-pieczarkami",
        destination: "/przepisy/gulasz-wieprzowy-papryka-pieczarkami",
        permanent: true,
      },
      {
        source: "/przepis/makaron-carbonara",
        destination: "/przepisy/spaghetti-carbonara/",
        permanent: true,
      },
      {
        source: "/przepis/tort-czekoladowy-z-wisniami-i-mascarpone",
        destination: "/przepisy/przepis-tort-czekoladowy-z-wisniami-i-mascarpone",
        permanent: true,
      },
      {
        source: "/przepis/schab-pieczony-w-rekawie",
        destination: "/przepisy/schab-pieczony-rekawie",
        permanent: true,
      },
      {
        source: "/przepis/karpatka-z-kremem-budyniowym",
        destination: "/przepisy/karpatka-kremem-budyniowym",
        permanent: true,
      },
      {
        source: "/przepis/salatka-z-awokado-mandarynkami-i-granatem",
        destination: "/przepisy/salatka-awokado-mandarynkami-granatem",
        permanent: true,
      },
      {
        source: "/przepis/kruche-tartaletki-makiem",
        destination: "/przepisy/kruche-babeczki-makiem/",
        permanent: true,
      },
      {
        source: "/przepis/szakszuka-z-pieczona-papryka-awokado-i-rukola",
        destination: "/przepisy/szakszuka-z-papryka-cukinia-i-awokado-copy",
        permanent: true,
      },
      {
        source: "/przepis/cynamonowe-buleczki-z-zurawina",
        destination: "/przepisy/cynamonowe-buleczki-zurawina/",
        permanent: true,
      },
      {
        source: "/przepis/pulpeciki-z-parmezanem-w-sosie-pieczarkowym",
        destination: "/przepisy/pulpeciki-parmezanem-sosie-pieczarkowym",
        permanent: true,
      },
      {
        source: "/2017/09/kurczak-sosie-pomidorowym-kaparami",
        destination: "/przepisy/kurczak-sosie-pomidorowym-kaparami",
        permanent: true,
      },
      {
        source: "/2017/09/salatka-kasza-bulgur-cukinia-ciecierzyca",
        destination: "/przepisy/salatka-z-kasza-bulgur-pomidorami-i-feta",
        permanent: true,
      },
      {
        source: "/2017/09/ciasto-jamajka-galaretka-bananami",
        destination: "/przepisy/ciasto-jamajka-galaretka-bananami/",
        permanent: true,
      },
      {
        source: "/2017/09/domowa-pita-falafelem-warzywami-sosem-jogurtowym",
        destination: "/przepisy/domowa-pita-falafelem-warzywami-sosem-jogurtowym",
        permanent: true,
      },
      {
        source: "/2017/09/ciasto-drozdzowe-ze-sliwkami-kruszonka",
        destination: "/przepisy/ciasto-drozdzowe-ze-sliwkami-kruszonka",
        permanent: true,
      },
      {
        source: "/2017/09/salatka-jajkiem-ogorkiem-awokado",
        destination: "/przepisy/salatka-jajkiem-ogorkiem-awokado",
        permanent: true,
      },
      {
        source: "/2017/08/lody-dwoch-skladnikow-mlekiem-skondensowanym-trzech-smakach",
        destination: "/przepisy/lody-dwoch-skladnikow-mlekiem-skondensowanym-trzech-smakach",
        permanent: true,
      },
      {
        source: "/2017/08/hiszpanskie-leczo-chorizo-ziemniakami",
        destination: "/przepisy/hiszpanskie-leczo-chorizo-ziemniakami",
        permanent: true,
      },
      {
        source: "/2017/08/bruschetta-mozzarella-pomidorami",
        destination: "/przepisy/bruschetta-mozzarella-pomidorami",
        permanent: true,
      },
      {
        source: "/2017/08/najlepsze-ciasto-ucierane-borowkami",
        destination: "/przepisy/najlepsze-ciasto-ucierane-borowkami",
        permanent: true,
      },
      {
        source: "/2017/08/torcik-waniliowym-kremem-mascarpone-owocami-lata",
        destination: "/przepisy/torcik-waniliowym-kremem-mascarpone-owocami-lata",
        permanent: true,
      },
      {
        source: "/2017/08/stek-rostbefu-pieczonymi-batatami",
        destination: "/przepisy/stek-rostbefu-pieczonymi-batatami",
        permanent: true,
      },
      {
        source: "/przepis/aromatyczna-zupa-z-kurczakiem-i-warzywami",
        destination: "/przepisy/aromatyczna-zupa-kurczakiem-warzywami",
        permanent: true,
      },
      {
        source: "/2017/08/tarta-truskawkami-czeresniami/",
        destination: "/przepisy/tarta-truskawkami-czeresniami",
        permanent: true,
      },
      {
        source: "/2017/08/tarta-rustykalna-owocami-lata",
        destination: "/przepisy/tarta-rustykalna-owocami-lata",
        permanent: true,
      },
      {
        source: "/2017/08/kotlety-mielone-inaczej-pomidorowa-glazura",
        destination: "/przepisy/kotlety-mielone-inaczej-pomidorowa-glazura",
        permanent: true,
      },
      {
        source: "/2017/08/gulasz-wieprzowy-cydrem",
        destination: "/przepisy/gulasz-wieprzowy-cydrem",
        permanent: true,
      },
      {
        source: "/2017/08/spaghetti-bolognese",
        destination: "/przepisy/spaghetti-bolognese",
        permanent: true,
      },
      {
        source: "/2016/08/makaron-z-brokuem-w-sosie-smietanowym",
        destination: "/przepisy/makaron-brokulem-sosie-smietanowym",
        permanent: true,
      },
      {
        source: "/2016/02/salatka-z-brokulem-feta-i-granatem",
        destination: "/przepisy/salatka-brokulem-feta-granatem",
        permanent: true,
      },
      {
        source: "/2017/07/waniliowa-kawa-mrozona",
        destination: "/przepisy/waniliowa-kawa-mrozona",
        permanent: true,
      },
      {
        source: "/przepis/frittata-ze-szparagami-i-serem-feta",
        destination: "/przepisy/frittata-ze-szparagami-serem-feta",
        permanent: true,
      },
      {
        source: "/shake-truskawkowy",
        destination: "/przepisy/shake-truskawkowy",
        permanent: true,
      },
      {
        source: "/przepis/burgery-czarnego-ryzu",
        destination: "/przepisy/wegetarianskie-burgery-ryzu-fasoli",
        permanent: true,
      },
      {
        source: "/prosty-szybki-piernik-najlepszy",
        destination: "/przepisy/prosty-szybki-piernik-najlepszy",
        permanent: true,
      },
      {
        source: "/przepis/makaron-klopsikami-sosem-pomidorowym",
        destination: "/przepisy/makaron-klopsikami-sosie-pomidorowym",
        permanent: true,
      },
      {
        source: "/przepis/salatka-makaronowa-wloskim-stylu",
        destination: "/przepisy/salatka-makaronowa-we-wloskim-stylu",
        permanent: true,
      },
      {
        source: "/przepis/zupa-krem-bialych-szparagow",
        destination: "/przepisy/zupa-bialych-szparagow/",
        permanent: true,
      },
      {
        source: "/2016/04/zupa-krem-pietruszkowo-gruszkowa",
        destination: "/przepisy/zupa-krem-pietruszkowo-gruszkowa",
        permanent: true,
      },
      {
        source: "/2017/04/jak-zrobic-ciasto-na-pizze",
        destination: "/przepisy/jak-zrobic-ciasto-na-pizze",
        permanent: true,
      },
      {
        source: "/salatka-meksykanska-serem-czerwona-fasola",
        destination: "/przepisy/salatka-meksykanska-serem-czerwona-fasola",
        permanent: true,
      },
      {
        source: "/2017/03/pikantne-burgery-wolowe",
        destination: "/przepisy/pikantne-burgery-wolowe",
        permanent: true,
      },
      {
        source: "/2015/04/deser-bananowo-karmelowy",
        destination: "/przepisy/deser-bananowo-karmelowy",
        permanent: true,
      },
      {
        source: "/2016/02/mini-pavlova-z-borowkami",
        destination: "/przepisy/mini-pavlova-borowkami/",
        permanent: true,
      },
      {
        source: "/2017/02/jak-zrobic-nalesniki",
        destination: "/przepisy/jak-zrobic-nalesniki",
        permanent: true,
      },
      {
        source: "/przepis/kanapki-z-wedzonym-lososiem-i-winogronami",
        destination: "/przepisy/kanapki-z-wedzonym-lososiem-i-winogronami-2",
        permanent: true,
      },
      {
        source: "/2017/01/mleko-sezamowe-jak-zrobic",
        destination: "/przepisy/mleko-sezamowe-jak-zrobic",
        permanent: true,
      },
      {
        source: "/przepis/domowa-galaretka-mandarynkowa-z-kaki",
        destination: "/przepisy/domowa-galaretka-kaki-mandarynkami",
        permanent: true,
      },
      {
        source: "/jak-zrobic-i-z-czym-podawac-hummus",
        destination: "/przepisy/zrobic-czym-podawac-hummus",
        permanent: true,
      },
      {
        source: "/przepis/koktajl-ze-szpinakiem-gruszka-i-pomarancza",
        destination: "/przepisy/koktajl-ze-szpinakiem-gruszka-pomarancza",
        permanent: true,
      },
      {
        source: "/przepis/Sok-multiwitamina-z-mango-i-batatem",
        destination: "/przepisy/sok-multiwitamina-z-mango-i-batatem",
        permanent: true,
      },
      {
        source: "/przepis/pierogi-z-kapusta-i-grzybami",
        destination: "/przepisy/pierogi-z-kapusta-i-grzybami",
        permanent: true,
      },
      {
        source: "/przepis/sok-z-granatu-jablek-i-pomaranczy",
        destination: "/przepisy/sok-granatu-jablek-pomaranczy",
        permanent: true,
      },
      {
        source: "/2016/12/drozdzowa-strucla-makowa",
        destination: "/przepisy/drozdzowa-strucla-makowa/",
        permanent: true,
      },
      {
        source: "/2016/09/zakrecone-cynamonowe-buleczki",
        destination: "/przepisy/zakrecone-cynamonowe-buleczki",
        permanent: true,
      },
      {
        source: "/przepis/szarlotka-na-kruchym-ciescie",
        destination: "/przepisy/szarlotka-kruchym-ciescie/",
        permanent: true,
      },
      {
        source: "/przepis/zupa-krem-z-dyni-i-cukinii",
        destination: "/przepisy/zupa-krem-z-dyni-cukinii",
        permanent: true,
      },
      {
        source: "/przepis/sok-z-winogron-mango-i-ananasa",
        destination: "/przepisy/sok-winogron-mango-ananasa",
        permanent: true,
      },
      {
        source: "/przepis/pizza-hawajska",
        destination: "/przepisy/pizza-hawajska-z-szynka-ananasem",
        permanent: true,
      },
      {
        source: "/przepis/czekoladowe-babeczki-czerwona-porzeczka",
        destination: "/przepisy/przepis-czekoladowe-babeczki-czerwona-porzeczka",
        permanent: true,
      },
      {
        source: "/przepis/pierogi-ruskie",
        destination: "/przepisy/przepis-pierogi-ruskie",
        permanent: true,
      },
      {
        source: "/2016/11/najlepszy-domowy-makaron-jak-zrobic",
        destination: "/przepisy/najlepszy-domowy-makaron-jak-zrobic",
        permanent: true,
      },
      {
        source: "/2016/11/muffiny-dyniowe-z-dodatkiem-jablka",
        destination: "/przepisy/muffiny-dyniowe-z-dodatkiem-jablka",
        permanent: true,
      },
      {
        source: "/wegetarianskie-burgery-z-baklazanem-i-dodatkami",
        destination: "/przepisy/wegetarianskie-burgery-z-baklazanem",
        permanent: true,
      },
      {
        source: "/2016/04/kanapki-ze-szparagami-jajkiem-i-sosem-holenderskim",
        destination: "/przepisy/kanapki-ze-szparagami-jajkiem-sosem-holenderskim",
        permanent: true,
      },
      {
        source: "/kanapki-z-burakiem-rukola-i-serem-feta",
        destination: "/przepisy/kanapki-z-burakiem-rukola-i-serem-feta/",
        permanent: true,
      },
      {
        source: "/2016/06/szparagi-z-jajkiem-w-koszulce-i-sosem-holenderskim",
        destination: "/przepisy/szparagi-jajkiem-koszulce-sosem-holenderskim",
        permanent: true,
      },
      {
        source: "/przepis/pizza-z-kurczakiem-curry-i-brokulami",
        destination: "/przepisy/pizza-kurczakiem-curry-brokulami",
        permanent: true,
      },
      {
        source: "/2016/10/frittata-z-pomidorami-i-papryka",
        destination: "/przepisy/frittata-pomidorami-czerwona-papryka",
        permanent: true,
      },
      {
        source: "/2016/09/kanapki-z-awokado-feta-i-rukola",
        destination: "/przepisy/kanapki-awokado-feta-rukola",
        permanent: true,
      },
      {
        source: "/2016/09/najlepszy-sok-warzywny",
        destination: "/przepisy/najlepszy-sok-warzywny/",
        permanent: true,
      },
      {
        source: "/2016/09/salatka-z-rukola-figami-i-szynka-parmenska",
        destination: "/przepisy/salatka-rukola-figami-szynka-parmenska//",
        permanent: true,
      },
      {
        source: "/2016/09/sok-pina-colada",
        destination: "/przepisy/sok-pina-colada",
        permanent: true,
      },
      {
        source: "/2016/09/dyniowa-zupa-krem",
        destination: "/przepisy/dyniowa-zupa-krem/",
        permanent: true,
      },
      {
        source: "/2016/08/makaron-z-kurczakiem-pesto-i-zielonymi-warzywami",
        destination: "/przepisy/makaron-kurczakiem-pesto-zielonymi-warzywami",
        permanent: true,
      },
      {
        source: "/2016/08/kasza-bulgur-z-warzywami-i-jajkiem",
        destination: "/przepisy/kasza-bulgur-warzywami-jajkiem",
        permanent: true,
      },
      {
        source: "/2016/08/zupa-z-pieczonej-marchewki-i-batata-z",
        destination: "/przepisy/zupa-pieczonej-marchewki-batata-czarnuszka",
        permanent: true,
      },
      {
        source: "/2016/08/najlepsze-bulki-hamburgerowe/",
        destination: "/przepisy/najlepsze-bulki-hamburgerowe/",
        permanent: true,
      },
      {
        source: "/2016/07/pudding-chia-z-owocami",
        destination: "/przepisy/pudding-chia-owocami/",
        permanent: true,
      },
      {
        source: "/2016/07/koktajl-z-melonem-brzoskwinia-i-wanilia",
        destination: "/przepisy/koktajl-melonem-brzoskwinia-wanilia/",
        permanent: true,
      },
      {
        source: "/2016/07/idealny-pieczony-kurczak",
        destination: "/przepisy/idealny-pieczony-kurczak",
        permanent: true,
      },
      {
        source: "/2016/07/gazpacho-czyli-chlodnik-pomidorowy",
        destination: "/przepisy/gazpacho-hiszpanski-chlodnik-pomidorowy/",
        permanent: true,
      },
      {
        source: "/2016/07/lody-czeresniowe",
        destination: "/przepisy/lody-czeresniowe",
        permanent: true,
      },
      {
        source: "/2016/06/grillowane-szparagi-z-pomidorkami-koktajlowymi",
        destination: "/przepisy/grillowane-szparagi-pomidorkami-koktajlowymi",
        permanent: true,
      },
      {
        source: "/2016/06/salatka-z-brokulem-jajkiem-i-rzodkiewka",
        destination: "/przepisy/salatka-brokulem-jajkiem-rzodkiewka",
        permanent: true,
      },
      {
        source: "/2016/05/sorbet-truskawkowo-arbuzowy",
        destination: "/przepisy/sorbet-truskawkowo-arbuzowy/",
        permanent: true,
      },
      {
        source: "/2016/05/salatka-z-ryzem-kurczakiem-i-grillowanymi-warzywami",
        destination: "/przepisy/salatka-ryzem-kurczakiem-grillowanymi-warzywami",
        permanent: true,
      },
      {
        source: "/2016/05/cytrynowe-risotto-z-kurczakiem-i-salsa-z-awokado",
        destination: "/przepisy/cytrynowe-risotto-kurczakiem-salsa-awokado",
        permanent: true,
      },
      {
        source: "/2016/05/babeczki-z-rabarbarem-i-kruszonka",
        destination: "/przepisy/babeczki-rabarbarem-maslana-kruszonka",
        permanent: true,
      },
      {
        source: "/2016/05/kotleciki-mielone-z-feta-i-ziemniaczanymi-talarkami",
        destination: "/przepisy/kotleciki-mielone-feta-ziemniaczanymi-talarkami",
        permanent: true,
      },
      {
        source: "/2016/05/kurczak-ze-szparagami-w-sosie-bearnaise",
        destination: "/przepisy/kurczak-ze-szparagami-sosie-bearnaise",
        permanent: true,
      },
      {
        source: "/2016/05/ryz-jasminowy-z-botwinka-i-kurczakiem",
        destination: "/przepisy/ryz-jasminowy-botwinka-kurczakiem/",
        permanent: true,
      },
      {
        source: "/2016/05/pomaranczowe-orzezwienie-pelna-szklanka-zdrowia-4",
        destination: "/przepisy/pomaranczowe-orzezwienie",
        permanent: true,
      },
      {
        source: "/2016/04/pudding-ryzowy-z-mascarpone-sosem-i-owocami",
        destination: "/przepisy/pudding-ryzowy-mascarpone-sosem-owocami/",
        permanent: true,
      },
      {
        source: "/2016/04/chipsy-z-jarmuzu",
        destination: "/przepisy/chipsy-z-jarmuzu/",
        permanent: true,
      },
      {
        source: "/2016/04/pizza-z-grillowana-cukinia-papryka-i-feta",
        destination: "/przepisy/pizza-z-grillowana-cukinia-papryka-i-feta",
        permanent: true,
      },
      {
        source: "/2016/04/pizza-z-mozzarella-oliwkami-i-szynka-parmenska",
        destination: "/przepisy/pizza-mozzarella-oliwkami-szynka-parmenska/",
        permanent: true,
      },
      {
        source: "/przepis/babeczki-a-la-brownie-z-gruszka",
        destination: "/przepisy/babeczki-a-la-brownie-gruszka/",
        permanent: true,
      },
      {
        source: "/2016/04/pierogi-ze-szpinakiem-i-twarogiem",
        destination: "/przepisy/pierogi-ze-szpinakiem-twarogiem",
        permanent: true,
      },
      {
        source: "/2016/03/miodownik",
        destination: "/przepisy/miodownik",
        permanent: true,
      },
      {
        source: "/2016/03/domowe-mleko-roslinne-pelna-szklanka-zdrowia-3",
        destination: "/przepisy/domowe-mleko-roslinne/",
        permanent: true,
      },
      {
        source: "/2016/03/jajka-z-ziolowym-majonezem",
        destination: "/przepisy/jajka-ziolowym-majonezem",
        permanent: true,
      },
      {
        source: "/2016/03/jajka-faszerowane-z-wedzonym-lososiem",
        destination: "/przepisy/jajka-faszerowane-wedzonym-lososiem",
        permanent: true,
      },
      {
        source: "/2016/03/czerwony-zastrzyk-energii-pelna-szklanka-zdrowia-2",
        destination: "/przepisy/czerwony-zastrzyk-energii",
        permanent: true,
      },
      {
        source: "/2016/03/salatka-z-rukola-jablkiem-i-rodzynkami",
        destination: "/przepisy/salatka-rukola-jablkiem-rodzynkami",
        permanent: true,
      },
      {
        source: "/2016/03/zapiekane-jajko-w-awokado",
        destination: "/przepisy/zapiekane-jajko-awokado/",
        permanent: true,
      },
      {
        source: "/2016/03/burgery-z-rwana-wieprzowina",
        destination: "/przepisy/burgery-rwana-wieprzowina",
        permanent: true,
      },
      {
        source: "/2016/02/wegetarianskie-burgery",
        destination: "/przepisy/wegetarianskie-burgery/",
        permanent: true,
      },
      {
        source: "/2016/02/domowe-tagliatelle-z-tunczykiem-i-pomidorami",
        destination: "/przepisy/domowe-tagliatelle-tunczykiem-pomidorami",
        permanent: true,
      },
      {
        source: "/2016/02/odprezajaca-zielen-pelna-szklanka-zdrowa-1",
        destination: "/przepisy/odprezajaca-zielen-pelna-szklanka-zdrowa-1",
        permanent: true,
      },
      {
        source: "/przepis/salatka-z-awokado-feta-i-borowkami",
        destination: "/przepisy/salatka-awokado-feta-borowkami",
        permanent: true,
      },
      {
        source: "/2016/02/czekoladowy-deser-jaglany-z-borowkami",
        destination: "/przepisy/czekoladowy-deser-jaglany-borowkami",
        permanent: true,
      },
      {
        source: "/2016/02/salatka-z-granatem-pomarancza-i-feta",
        destination: "/przepisy/salatka-granatem-pomarancza-feta",
        permanent: true,
      },
      {
        source: "/2016/02/zupa-porowo-ziemniaczana",
        destination: "/przepisy/zupa-porowo-ziemniaczana",
        permanent: true,
      },
      {
        source: "/2016/01/pizza-z-mozzarella-pomidorami-i-rukola",
        destination: "/przepisy/pizza-mozzarella-pomidorami-rukola",
        permanent: true,
      },
      {
        source: "/2016/01/apple-pie",
        destination: "/przepisy/apple-pie",
        permanent: true,
      },
      {
        source: "/2016/01/makaron-w-sosie-pomidorowym-z-parmezanem",
        destination: "/przepisy/makaron-sosie-pomidorowym-parmezanem",
        permanent: true,
      },
      {
        source: "/2016/01/kanapka-z-grillowana-cukinia-salami-i-serem-brie",
        destination: "/przepisy/kanapka-grillowana-cukinia-salami-serem-brie/",
        permanent: true,
      },
      {
        source: "/2016/01/zupa-krem-z-selera",
        destination: "/przepisy/zupa-krem-selera",
        permanent: true,
      },
      {
        source: "/2015/12/swiateczne-bezowe-ciasteczka-kokosowo-cytrynowe",
        destination: "/przepisy/swiateczne-bezowe-ciasteczka-kokosowo-cytrynowe/",
        permanent: true,
      },
      {
        source: "/2015/12/swiateczne-pierniczki",
        destination: "/przepisy/swiateczne-pierniczki",
        permanent: true,
      },
      {
        source: "/2015/12/salatka-z-awokado-gruszka-i-granatem",
        destination: "/przepisy/salatka-awokado-gruszka-granatem/",
        permanent: true,
      },
      {
        source: "/2015/11/quiche-z-szynka-pomidorami-i-rukola",
        destination: "/przepisy/quiche-szynka-pomidorami-rukola",
        permanent: true,
      },
      {
        source: "/2015/11/zielony-makaron-z-fasolka-szparagowa-i-cukinia",
        destination: "/przepisy/zielony-makaron-fasolka-szparagowa-cukinia/",
        permanent: true,
      },
      {
        source: "/2015/11/kanapki-z-maslem-pietruszkowym-jajkiem-i-rzodkiewka",
        destination: "/przepisy/kanapki-maslem-pietruszkowym-jajkiem-rzodkiewka",
        permanent: true,
      },
      {
        source: "/2015/11/zielone-smoothie-ze-szpinakiem-jablkiem-i-mango",
        destination: "/przepisy/zielone-smoothie-ze-szpinakiem-jablkiem-mango",
        permanent: true,
      },
      {
        source: "/przepis/aromatyczne-szaszlyki-z-kurczakiem-cukinia-i-papryka",
        destination: "/przepisy/aromatyczne-szaszlyki-kurczakiem-cukinia-papryka",
        permanent: true,
      },
      {
        source: "/2015/10/ciasto-dyniowe-z-orzechami-granatem-i-kremem-mascarpone",
        destination: "/przepisy/ciasto-dyniowe-orzechami-granatem-kremem-mascarpone",
        permanent: true,
      },
      {
        source: "/2015/10/najlepsze-amerykanskie-pancakes",
        destination: "/przepisy/najlepsze-amerykanskie-pancakes",
        permanent: true,
      },
      {
        source: "/2015/10/pyszny-losos-w-ziolach-i-test-patelni-tescoma",
        destination: "/przepisy/pyszny-losos-pieczony-ziolach-test-patelni-tescoma",
        permanent: true,
      },
      {
        source: "/2015/10/szakszuka-czyli-jajka-gotowane-w-pomidorach",
        destination: "/przepisy/szakszuka-czyli-jajka-gotowane-pomidorach",
        permanent: true,
      },
      {
        source: "/2015/10/nalesniki-gryczane-z-kurczakiem-pomidorem-i-awokado",
        destination: "/przepisy/nalesniki-gryczane-kurczakiem-pomidorem-awokado",
        permanent: true,
      },
      {
        source: "/2015/10/tosty-z-mascarpone-figami-i-orzechami",
        destination: "/przepisy/tosty-mascarpone-figami-orzechami",
        permanent: true,
      },
      {
        source: "/2015/10/test-patelni-ballarini",
        destination: "/przepisy/test-patelni-ballarini/",
        permanent: true,
      },
      {
        source: "/tosty-z-awokado-jajkiem-w-koszulce-i-salsa-pomidorowa",
        destination: "/przepisy/tosty-awokado-jajkiem-koszulce-salsa-pomidorowa",
        permanent: true,
      },
      {
        source: "/2015/09/pelnoziarniste-nalesniki-z-rukola-figami-i-szynka-parmenska",
        destination: "/przepisy/pelnoziarniste-nalesniki-rukola-figami-szynka-parmenska",
        permanent: true,
      },
      {
        source: "/2015/09/papryki-faszerowane-w-meksykanskim-stylu",
        destination: "/przepisy/papryki-faszerowane-meksykanskim-stylu/",
        permanent: true,
      },
      {
        source: "/2015/09/proste-buleczki-ze-slonecznikiem",
        destination: "/przepisy/proste-buleczki-ze-slonecznikiem/",
        permanent: true,
      },
      {
        source: "/2015/09/makaron-z-pesto-z-rukoli",
        destination: "/przepisy/makaron-pesto-rukoli/",
        permanent: true,
      },
      {
        source: "/2015/08/udka-pieczone-z-cytryna-i-rozmarynem",
        destination: "/przepisy/udka-pieczone-cytryna-rozmarynem",
        permanent: true,
      },
      {
        source: "/2016/08/puszyste-placki-z-jogurtem-i-borowkami",
        destination: "/przepisy/puszyste-placki-jogurtem-borowkami/",
        permanent: true,
      },
      {
        source: "/2015/08/najlepsze-wegetarianskie-leczo",
        destination: "/przepisy/najlepsze-wegetarianskie-leczo",
        permanent: true,
      },
      {
        source: "/2015/08/ciasto-3-bit-bez-pieczenia",
        destination: "/przepisy/ciasto-3-bit-bez-pieczenia",
        permanent: true,
      },
      {
        source: "/2015/08/tagliatelle-z-indykiem-kurkami-i-fasolka-szparagowa",
        destination: "/przepisy/tagliatelle-indykiem-kurkami-fasolka-szparagowa/",
        permanent: true,
      },
      {
        source: "/przepis/makaron-z-fasolka-szparagowa-i-swiezymi-pomidorami",
        destination: "/przepisy/makaron-fasolka-szparagowa-swiezymi-pomidorami",
        permanent: true,
      },
      {
        source: "/2015/08/kanapka-z-roszponka-mozzarella-i-szynka-parmenska",
        destination: "/przepisy/kanapka-roszponka-mozzarella-szynka-parmenska",
        permanent: true,
      },
      {
        source: "/2015/07/pavlova-z-owocami-sezonowymi",
        destination: "/przepisy/pavlova-owocami-sezonowymi/",
        permanent: true,
      },
      {
        source: "/2015/07/makaron-z-pesto-z-suszonych-pomidorow",
        destination: "/przepisy/makaron-pesto-suszonych-pomidorow",
        permanent: true,
      },
      {
        source: "/2015/07/zupa-krem-z-mlodej-marchewki",
        destination: "/przepisy/zupa-krem-mlodej-marchewki",
        permanent: true,
      },
      {
        source: "/2015/07/kanapki-z-masem-koperkowym-i-dodatkami",
        destination: "/przepisy/kanapki-maslem-koperkowym-dodatkami",
        permanent: true,
      },
      {
        source: "/2015/07/makaron-z-baklazanem-w-sosie-pomidorowym",
        destination: "/przepisy/makaron-baklazanem-sosie-pomidorowym",
        permanent: true,
      },
      {
        source: "/2015/07/kotlety-mielone-z-mlodymi-ziemniakami-i-buraczkami",
        destination: "/przepisy/kotlety-mielone-mlodymi-ziemniakami-buraczkami/",
        permanent: true,
      },
      {
        source: "/2015/06/kurczak-balsamiczny-z-mlodymi-ziemniakami-i-salatka-z-ogorkiem",
        destination: "/przepisy/kurczak-balsamiczny-mlodymi-ziemniakami-salatka-ogorkiem",
        permanent: true,
      },
      {
        source: "/2015/06/koktajl-bananowy",
        destination: "/przepisy/koktajl-bananowy/",
        permanent: true,
      },
      {
        source: "/2015/06/mini-serniczki-z-sosem-karmelowym-i-owocami",
        destination: "/przepisy/mini-serniczki-sosem-karmelowym-owocami/",
        permanent: true,
      },
      {
        source: "/2015/06/ogorki-malosolne",
        destination: "/przepisy/ogorki-malosolne",
        permanent: true,
      },
      {
        source: "/2015/06/idealny-na-stres-koktajl-owocowy-z-melisa",
        destination: "/przepisy/idealny-stres-koktajl-owocowy-melisa/",
        permanent: true,
      },
      {
        source: "/2015/05/szparagi-z-jajkiem-i-koperkowym-sosem-holenderskim",
        destination: "/przepisy/szparagi-z-jajkiem-i-koperkowym-sosem-holenderskim",
        permanent: true,
      },
      {
        source: "/2015/05/szparagi-zapiekane-w-ciescie-francuskim",
        destination: "/przepisy/szparagi-zapiekane-ciescie-francuskim",
        permanent: true,
      },
      {
        source: "/2015/05/penne-ze-szparagami-i-szynka-szwarcwaldzka",
        destination: "/przepisy/penne-ze-szparagami-szynka-szwarcwaldzka",
        permanent: true,
      },
      {
        source: "/2015/05/koktajl-arbuzowo-truskawkowy",
        destination: "/przepisy/koktajl-arbuzowo-truskawkowy",
        permanent: true,
      },
      {
        source: "/2015/05/szpraragowa-zupa-krem",
        destination: "/przepisy/szparagowa-zupa-krem",
        permanent: true,
      },
      {
        source: "/2015/05/bajaderki-czyli-slodkie-ziemniaczki",
        destination: "/przepisy/bajaderki-czyli-slodkie-ziemniaczki",
        permanent: true,
      },
      {
        source: "/2015/05/rolada-zyrafa",
        destination: "/przepisy/rolada-zyrafa/",
        permanent: true,
      },
      {
        source: "/2015/04/drozdzowki-z-dzemem-i-serem",
        destination: "/przepisy/drozdzowki-dzemem-serem",
        permanent: true,
      },
      {
        source: "/2015/04/zrazy",
        destination: "/przepisy/zrazy-wolowe/",
        permanent: true,
      },
      {
        source: "/2015/04/makaron-z-jarmuzowym-pesto",
        destination: "/przepisy/makaron-jarmuzowym-pesto",
        permanent: true,
      },
      {
        source: "/2015/04/szarlotka-w-szklancehtml",
        destination: "/przepisy/szarlotka-w-szklance",
        permanent: true,
      },
      {
        source: "/2015/04/zupa-meksykanska",
        destination: "/przepisy/zupa-meksykanska/",
        permanent: true,
      },
      {
        source: "/2015/04/koktajl-z-jarmuzu",
        destination: "/przepisy/koktajl-z-jarmuzu/",
        permanent: true,
      },
      {
        source: "/2015/03/babka-drozdzowa-z-rodzynkami",
        destination: "/przepisy/babka-drozdzowa-rodzynkami/",
        permanent: true,
      },
      {
        source: "/2015/03/kawa-mrozona",
        destination: "/przepisy/kawa-mrozona",
        permanent: true,
      },
      {
        source: "/2015/03/makaron-ze-szpinakiem",
        destination: "/przepisy/makaron-ze-szpinakiem",
        permanent: true,
      },
      {
        source: "/2015/03/salatka-obiadowa",
        destination: "/przepisy/salatka-obiadowa/",
        permanent: true,
      },
      {
        source: "/2015/03/drozdzowki-z-makiem",
        destination: "/przepisy/drozdzowki-z-makiem/",
        permanent: true,
      },
      {
        source: "/2015/03/panna-cotta-z-owocowymi-musami",
        destination: "/przepisy/panna-cotta-owocowymi-musami",
        permanent: true,
      },
      {
        source: "/2015/03/sernik-a-la-tiramisu-bez-pieczenia",
        destination: "/przepisy/sernik-a-la-tiramisu-bez-pieczenia",
        permanent: true,
      },
      {
        source: "/2015/03/kotlet-de-volaille",
        destination: "/przepisy/kotlet-de-volaille/",
        permanent: true,
      },
      {
        source: "/2015/02/leniwe",
        destination: "/przepisy/leniwe/",
        permanent: true,
      },
      {
        source: "/2015/02/kanapka-z-feta-i-awokado",
        destination: "/przepisy/kanapka-feta-awokado/",
        permanent: true,
      },
      {
        source: "/2015/02/pieczone-bataty",
        destination: "/przepisy/pieczone-bataty/",
        permanent: true,
      },
      {
        source: "/2014/12/swiateczna-salatka-z-selerem-konserwowym",
        destination: "/przepisy/swiateczna-salatka-z-selerem-konserwowym",
        permanent: true,
      },
      {
        source: "/2014/12/swiateczna-salatka-z-selerem-konserwowym",
        destination: "/przepisy/swiateczna-salatka-z-selerem-konserwowym",
        permanent: true,
      },
      {
        source: "/2015/07/crumble-truskawkowe",
        destination: "/przepisy/crumble-truskawkowe",
        permanent: true,
      },
      {
        source: "/2017/05/sernik-zimno-galaretka/",
        destination: "/przepisy/sernik-zimno-galaretka",
        permanent: true,
      },
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
        source: '/przepis/:slug',
        destination: '/przepisy/:slug',
        permanent: true,
      },
      {
        source: '/:slug*\.html\\',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
}
