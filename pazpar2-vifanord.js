/**
 * JavaScript Anpassungen für die pazpar2 Extension in vifanord.
 *
 * 2014: Sven-S. Porst <ssp-web@earthlingsoft.net>
 */



/**
 * Anpassungen von jQuery ausführen lassen, wenn das Dokument geladen ist.
 * Es ist wichtig, daß diese Datei _nach_ dem Script der pazpar2 Extension
 * eingebunden wird, damit das pz_client Objekt bereits vorhanden ist.
 */
jQuery().ready( function () {
  /**
   * Standard Sonderzeichenentfernung für ø modifizieren.
   */
  // ø nicht durch o ersetzen, da sonst keine Ergebnisse in DK
  var charmap = pz2_client.prototype.defaultDiacriticsRemovalMap;
  for(var i = 0; i < charmap.length; i++) {
    if (charmap[i].base = 'o') {
      charmap[i].letters = /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u01FF\u0254\uA74B\uA74D\u0275]/g;
     }
  }
  
  
  /**
   * pazpar2 Lokalisierungen anpassen.
   */
  jQuery.extend(
    true,
    pz2_client.prototype.localisations, 
    {
      'facet': {
        'en': {
          'gbv-library': 'GBV Library',
          'se-kb-collection': 'NB Sweden Collection',
          'region': 'Region'
        },
        'de': {
          'gbv-library': 'GBV Bibliothek',
          'se-kb-collection': 'NB Schweden Sammlung',
          'region': 'Region'
        }
      },
      'facet-se-kb-collection': {
        'en': {
          'NB': 'Nationalbibliografin',
          'COL': 'Bibliografi 1600-talet (Collijn)',
          'SB17': 'Bibliografi 1700-1829',
          'SOT': 'Swedish Public Print -1833',
          'SHB': 'Historisk bibliografi',
          'SLB': 'Litteraturvetenskaplig bibliografi',
          'BIRB': 'Birgittabibliografin',
          'BULB': 'BULB - Barn- och ungdomslitteraturbibliografin',
          'KVIN': 'KVINNSAM - Kvinno-, mans- och genusforskning',
          'SAMB': 'Samisk bibliografi',
          'SWAM': 'Svenskamerikansk bibliografi',
          'NLT': 'Nya Lundstedt - Tidskrifter',
          'LOB': 'Bohusbibliografien',
          'DALA': 'Dalabibliografien',
          'GOTL': 'Gothlandica',
          'OSGO': 'Småland, Öland, Blekinge',
          'SAH': 'Sueica Antiqua et Hodierna',
          'SARB': 'Arkivbibliografi',
          'SFBB': 'Folkbildningsbibliografi',
          'SNUB': 'Numismatisk Bibliografi',
          'VSTM': 'Västmanlandsbibliografi',
          'VIMO': 'Vilhelm Mobergs Bibliografi',
          'LITT': 'Litteraturbanken'
        }
      },
      'facet-region': {
        'en': {
          'balt': 'Baltic Countries',
          'nord': 'Nordic Countries',
          'ostsee': 'Ostseeraum',
          'osteuropa': 'Eastern Europe'
        },
        'de': {
          'balt': 'Baltische Länder',
          'nord': 'Nordische Länder',
          'ostsee': 'Ostseeraum',
          'osteuropa': 'Osteuropa'
        }
      }
    });
});
