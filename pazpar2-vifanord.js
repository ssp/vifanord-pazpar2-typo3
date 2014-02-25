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
      'facet-medium': {
        'en': {
          'electronic': 'Full text'
        },
        'de': {
          'electronic': 'Volltext'
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
          'balt': 'Baltikum',
          'nord': 'Nordeuropa',
          'ostsee': 'Ostseeraum',
          'osteuropa': 'Osteuropa'
        }
      }
    });
});
