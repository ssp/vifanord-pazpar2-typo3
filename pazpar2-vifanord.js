/**
 * JavaScript Anpassungen für die pazpar2 Extension in vifanord.
 *
 * 2014-2015: Sven-S. Porst <ssp-web@earthlingsoft.net>
 */

var focusedField;
//'ÆæÅåØøþð'
function addEingabehilfe (lettersString) {
	var div = document.createElement('div');
	div.setAttribute('class', 'Eingabehilfe');

	var h4 = document.createElement('h4');
	div.appendChild(h4);
	h4.appendChild(document.createTextNode(pz2client.localise('Einfügen')));
	h4.appendChild(document.createTextNode(':'));

	div.appendChild(document.createTextNode(' '));

	var ul = document.createElement('ul');
	div.appendChild(ul);
	var letters = lettersString.split('');
	for (var letterIndex in letters) {
		var li = document.createElement('li');
		ul.appendChild(li);
		var a = document.createElement('a');
		li.appendChild(a);
		a.setAttribute('href', '#');
		a.appendChild(document.createTextNode(letters[letterIndex]));
	}
	
	jQuery('#pazpar2').prepend(div);
	
	// Click handling
	jQuery(ul).on('click', 'a', function () {
		var letter = jQuery(this).text();
		if (focusedField) {
			focusedField.value =
				focusedField.value.substr(0, focusedField.selectionStart) +
				letter +
				focusedField.value.substr(focusedField.selectionEnd);
			focusedField.selectionStart = focusedField.selectionStart + 1;
			focusedField.selectionEnd = focusedField.selectionStart + 1;
		}
	});
	
	// Aktives Feld verfolgen
	jQuery('.pz2-mainForm').on('focus', 'input:text', function () {
		focusedField = this;
	})
}



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
				'se-kb-collection': 'NB Sweden Collection'
			},
			'de': {
				'gbv-library': 'GBV Bibliothek',
				'se-kb-collection': 'NB Schweden Sammlung'
			}
		},
		'facet-xtargets': {
			'en': {
				'sru.gbv.de/fachopac-vifanord-nord': 'Special Subject Catalogue Nordic States',
				'sru.gbv.de/olc-vifanord-nord': 'Essays Nordic States',
				'swb/wao-vifanord-nord': 'World Affairs Online Nordic States',
				'dk-kb/KGL01_BDANICA': 'Bibliotheca Danica',
				'dk-kb/BGF01_DHB': 'Dansk Historisk Bibliografi',
				'dk-kb/BGF01_DSB': 'Dansk Sociologisk Bibliografi 1996-2004',
				'dk-kb/MUS01': 'Hele Musiksamlingen',
				'dk-kb/KGL01_DAPF': 'Dansk Periodikafortegnelse',
				'se-kb/libris-vifanord': 'NB Sweden LIBRIS',
				'no-bibsys/NBO': 'NB Norway BIBSYS',
				'fi-helka': 'Helsinki Union Catalogue',
				'dk-sdu/BONIS': 'BONIS',
				'hu-berlin/TB_SKANDINAVISTIK': 'HU Berlin Scandinavian Studies',
				'hebis/hebis-herder': 'Herder-Institute Catalogue',
				'library.fes.de': 'Friedrich-Ebert-Stiftung'
			},
			'de': {
				'sru.gbv.de/fachopac-vifanord-nord': 'Fachkatalog Nordeuropa',
				'sru.gbv.de/olc-vifanord-nord': 'Aufsätze Nordeuropa',
				'swb/wao-vifanord-nord': 'World Affairs Online Nordeuropa',
				'dk-kb/KGL01_BDANICA': 'Bibliotheca Danica',
				'dk-kb/BGF01_DHB': 'Dansk Historisk Bibliografi',
				'dk-kb/BGF01_DSB': 'Dansk Sociologisk Bibliografi 1996-2004',
				'dk-kb/MUS01': 'Hele Musiksamlingen',
				'dk-kb/KGL01_DAPF': 'Dansk Periodikafortegnelse',
				'se-kb/libris-vifanord': 'NB Schweden LIBRIS',
				'no-bibsys/NBO': 'NB Norwegen BIBSYS',
				'fi-helka': 'Helsinki Verbundkatalog',
				'dk-sdu/BONIS': 'BONIS',
				'hu-berlin/TB_SKANDINAVISTIK': 'HU Berlin Skandinavistik',
				'hebis/hebis-herder': 'Herder-Institut Katalog',
				'library.fes.de': 'Friedrich-Ebert-Stiftung'
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
		'general': {
			'en': {
				'Einfügen': 'Insert'
			},
			'de': {
				'Einfügen': 'Einfügen'
			}
		}
	}); // Ende jQuery.extend()
	
	/**
	 * Eingabehilfe hinzufügen für:
	 * suchtyp: standard, ir
	 * und region: all, skandinavien
	 */
	var region = jQuery('body').data('region');
	var eingabehilfe = jQuery('body').data('eingabehilfe');
	if ((region === 'all' || region === 'Skandinavien') && (eingabehilfe == 'ja')) {
		addEingabehilfe('ÆæÅåØøþð');
	}
}); // Ende jQuery.ready()
