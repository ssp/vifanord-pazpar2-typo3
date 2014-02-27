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
	 * Das Objekt pz2_client.prototype.localisations enthält die verschiedenen
	 * Wörterbücher für die Lokalisierung. Sie werden zunächst von pz2_client.js
	 * gefüllt und dann zu dom Ready von uns ergänzt/überschrieben.
	 */
	jQuery.extend( true, pz2_client.prototype.localisations, {
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
		'facet-xtargets': {
			'en': {
				'vifanord-zsql/irall': 'Internet Resources vifanord',
				'vifanord-zsql/irall-balt': 'Internet Resources Baltic States',
				'vifanord-zsql/irall-nord': 'Internet Resources Nordic States',
				'vifanord-zsql/FES': 'Friedrich-Ebert-Stiftung',
				'vifanord-zsql/BMEB': 'Baltic Marine Environment',
				'vifanord-zsql/LETTNB-MON': 'NB Latvia Books',
				'vifanord-zsql/LETTNB-ANA': 'NB Latvia Essays',
				'sru.gbv.de/fachopac-vifanord': 'Special Subject Catalogue vifanord',
				'sru.gbv.de/fachopac-vifanord-balt': 'Special Subject Catalogue Baltic States',
				'sru.gbv.de/fachopac-vifanord-nord': 'Special Subject Catalogue Nordic States',
				'sru.gbv.de/olc-vifanord': 'Essays Baltic and Nordic States',
				'sru.gbv.de/olc-vifanord-balt': 'Essays Baltic States',
				'sru.gbv.de/olc-vifanord-nord': 'Essays Nordic States',
				'sru.gbv.de/olcssg-oeu': 'Essays Eastern Europe',
				'sru.gbv.de/gvk-stabikat': 'State Library Berlin',
				'swb/wao-vifanord': 'World Affairs Online',
				'swb/wao-vifanord-balt': 'World Affairs Online Baltic States',
				'swb/wao-vifanord-nord': 'World Affairs Online Nordic States',
				'dk-kb/KGL01_BDANICA': 'Bibliotheca Danica',
				'dk-kb/BGF01_DHB': 'Dansk Historisk Bibliografi',
				'dk-kb/BGF01_DSB': 'Dansk Sociologisk Bibliografi 1996-2004',
				'dk-kb/MUS01': 'Hele Musiksamlingen',
				'dk-kb/KGL01_DAPF': 'Dansk Periodikafortegnelse',
				'se-kb/libris-vifanord': 'NB Sweden LIBRIS',
				'no-bibsys/NBO': 'NB Norway BIBSYS',
				'fi-helka': 'Helka',
				'dk-sdu/BONIS': 'BONIS',
				'ee-ester/tallinn': 'NB Estonia',
				'ee-ester/tartu': 'UB Tartu',
				'lt-libis/KNYGOS': 'NB Lithuania',
				'hu-berlin/TB_SKANDINAVISTIK': 'HU Berlin Scandinavian Studies',
				'hebis/hebis-herder': 'Herder-Institute Catalogue',
				'herder-institut/litdok': 'Herder-Institute Litdok'
			},
			'de': {
				'vifanord-zsql/irall': 'Internetquellen vifanord',
				'vifanord-zsql/irall-balt': 'Internetquellen Baltikum',
				'vifanord-zsql/irall-nord': 'Internetquellen Nordeuropa',
				'vifanord-zsql/FES': 'Katalogauszug FES',
				'vifanord-zsql/BMEB': 'Baltic Marine Environment',
				'vifanord-zsql/LETTNB-MON': 'NB Lettland Bücher',
				'vifanord-zsql/LETTNB-ANA': 'NB Lettland Aufsätze',
				'sru.gbv.de/fachopac-vifanord': 'Fachkatalog vifanord',
				'sru.gbv.de/fachopac-vifanord-balt': 'Fachkatalog Baltikum',
				'sru.gbv.de/fachopac-vifanord-nord': 'Fachkatalog Nordeuropa',
				'sru.gbv.de/olc-vifanord': 'Aufsätze Baltikum und Nordeuropa',
				'sru.gbv.de/olc-vifanord-balt': 'Aufsätze Baltikum',
				'sru.gbv.de/olc-vifanord-nord': 'Aufsätze Nordeuropa',
				'sru.gbv.de/olcssg-oeu': 'Aufsätze Osteuropa',
				'sru.gbv.de/gvk-stabikat': 'Staatsbibliothek zu Berlin',
				'swb/wao-vifanord': 'World Affairs Online',
				'swb/wao-vifanord-balt': 'World Affairs Online Baltikum',
				'swb/wao-vifanord-nord': 'World Affairs Online Nordeuropa',
				'dk-kb/KGL01_BDANICA': 'Bibliotheca Danica',
				'dk-kb/BGF01_DHB': 'Dansk Historisk Bibliografi',
				'dk-kb/BGF01_DSB': 'Dansk Sociologisk Bibliografi 1996-2004',
				'dk-kb/MUS01': 'Hele Musiksamlingen',
				'dk-kb/KGL01_DAPF': 'Dansk Periodikafortegnelse',
				'se-kb/libris-vifanord': 'NB Schweden LIBRIS',
				'no-bibsys/NBO': 'NB Norwegen BIBSYS',
				'fi-helka': 'Helka',
				'dk-sdu/BONIS': 'BONIS',
				'ee-ester/tallinn': 'NB Estland',
				'ee-ester/tartu': 'UB Tartu',
				'lt-libis/KNYGOS': 'NB Litauen',
				'hu-berlin/TB_SKANDINAVISTIK': 'HU Berlin Skandinavistik',
				'hebis/hebis-herder': 'Herder-Institut Katalog',
				'herder-institut/litdok': 'Herder-Institut Litdok'
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
	}); // Ende jQuery.extend()
}); // Ende jQuery.ready()
