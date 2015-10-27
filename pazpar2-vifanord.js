/**
 * JavaScript Anpassungen für die pazpar2 Extension in vifanord.
 *
 * 2014-2015: Sven-S. Porst <ssp-web@earthlingsoft.net>
 */


/**
 * Eingabehilfe hinzufügen.
 */
jQuery(function () {
	var focusedField;

	//'ÆæÅåØøþð'
	var addEingabehilfe = function (lettersString) {
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

		jQuery('.pazpar2').prepend(div);

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
		});
	};

	if (jQuery('body').data('eingabehilfe') === 'ja') {
		addEingabehilfe('ÆæÅåØøþð');
	}
});



/**
 * Anpassungen von jQuery ausführen lassen, wenn das Dokument geladen ist.
 */
jQuery(function () {
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
				'library.fes.de': 'Friedrich-Ebert-Stiftung',
				'ssgfi/finnug': 'Internet Resources Finland, Estonia'
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
				'library.fes.de': 'Friedrich-Ebert-Stiftung',
				'ssgfi/finnug': 'Internetquellen Finnland, Estland'
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

});


/*
 * Abfragen für thematische Suche.
 *
 * Der folgende Abschnitt baut aus den Daten an den verschiedenen
 * Formularelementen der thematischen Suche die Abfragen zusammen.
 *
 * Die Länderauswahl wird aus den markierten Checkboxen festgestellt, die
 * Themenauswahl aus dem ausgewählten Menüpunkt des untersten Themenmenüs.
 *
 * In der Themenauswahl sind Informationen unter den Schlüsseln »kiel« und
 * »goe« hinterlegt:
 *
 * Für Kiel eine Liste von Abfragen, die mit dem Präfix »8 «
 * auf dem Index lsg verodert gestellt werden. Diese Abfragen werden zusätzlich
 * mit einer Veroderung der Kieler Regionalabfragen verundet.
 *
 * Für Göttingen ein Objekt mit den Regionen als Schlüssel und den zugehörigen
 * Abfragen als Werte.
 */

var kielRegionSearch = {
	'fi': ['reg 25.3?'],
	'se': ['reg 25.6?'],
	'no': ['reg 25.5?'],
	'dk': ['reg 25.2', 'reg 25.21?', 'reg 25.22?', 'reg 25.23?'],
	'ic': ['reg 25.4?'],
	'gro': ['reg 25.25?'],
	'fae': ['reg 25.24?']
};


var createPazpar2Query = function (queries) {
	var queryParts = [];

	var regionsToSearch = jQuery('.pz2-neuerwerbungen input:checked')
		.map(function() { return jQuery(this).val().replace('region=', ''); });

	if (queries.goe) {
		for (var region in kielRegionSearch) {
			var query = queries.goe[region];
			if (query) {
				queryParts.push(query);
			}
		}
		jQuery.map(regionsToSearch, function(region) { return queries ? queries[region] : null; });
	}

	var kqs = queries.kiel;
	var kielQueriesToFilter = [];
	for (var kqsi in kqs) {
		var kielQuery = kqs[kqsi];
		if (kielQuery.match(/^nor/g)) {
			queryParts.push('lsg="8 ' + kielQuery + '"');
		} else {
			kielQueriesToFilter.push('lsg="8 ' + kielQuery + '")');
		}
	}
	var regionQueries = [];
	for (var regionIndex in regionsToSearch) {
		var regionName = regionsToSearch[regionIndex];
		for (var queryIndex in kielRegionSearch[regionName]) {
			regionQueries.push('lsg="8 ' + kielRegionSearch[regionName][queryIndex] + '"');
		}
	}
	if (kielQueriesToFilter.length > 0) {
		queryParts.push('(' + kielQueriesToFilter.join(' or ') + ') and (' + regionQueries.join(' or ') + ')');
	}

	return queryParts.length > 0 ? '(' + queryParts.join(') or (') + ')' : '';
}


var selectedRegions = function (jForm) {
	return jQuery('.pz2-neuerwerbungen input:checked').map(function() {
		return jQuery(this).val().replace('region=', '');
	}).toArray();
};

var selectedSubject = function () {
	var queryJSON = jQuery('.gokContainer option[query]:selected').last().attr('query');
	return queryJSON ? JSON.parse(queryJSON) : {};
};

var makeKielSubjectQuery = function (subjectQueries) {
	var kielSubjectQuery = subjectQueries.kiel;
	if (!kielSubjectQuery || kielSubjectQuery.length === 0) return '';
	var result = {
		withRegion:[],
		withoutRegion:[]
	};
	for (var queryIndex in kielSubjectQuery) {
		var kielQuery = kielSubjectQuery[queryIndex];
		var queryString = 'lsg="8 ' + kielQuery + '"';
		// Abfragen mit nor so übernehmen,
		// alle anderen Abfragen müssen mit den Regionalabfragen kombiniert werden.
		if (kielQuery.indexOf('nor') !== -1) {
			result.withoutRegion.push(queryString);
		}
		else {
			result.withRegion.push(queryString);
		}
	}

	return result;
}

var makeKielRegionQuery = function (regions) {
	var regionQueries = [];
	for (var regionIndex in regions) {
		var region = regions[regionIndex];
		var regionQuery = kielRegionSearch[region];
		if (regionQuery) {
			jQuery.merge(regionQueries, regionQuery);
		}
	}
	var finalRegionQueries = jQuery.map(regionQueries, function (value) {
		return 'lsg="8 ' + value + '"';
	});
	return finalRegionQueries.length > 0
		? '(' + finalRegionQueries.join(' or ') + ')'
		: '';
};

var makeKielQueries = function (regions, subjectQueries) {
	var subjectQuery = makeKielSubjectQuery(subjectQueries);
	var queries = [];
	if (subjectQuery.withRegion && subjectQuery.withRegion.length > 0) {
		queries.push('((' + subjectQuery.withRegion.join(' or ') + ')'
												+ ' and ' + makeKielRegionQuery(regions) + ')');
	}
	if (subjectQuery.withoutRegion && subjectQuery.withoutRegion.length > 0) {
		queries.push('(' + subjectQuery.withoutRegion.join(' or ') + ')');
	}
	return queries;
};

var makeGoeQuery = function (regions, subjectQueries) {
	var goeQueries = subjectQueries.goe;
	if (goeQueries) {
		var relevantGoeQueries = [];
		for (var region in goeQueries) {
			if (regions.indexOf(region) !== -1) {
				relevantGoeQueries.push(jQuery.trim(goeQueries[region]).replace(/'/g, '"'));
			}
		}
		if (relevantGoeQueries.length > 0) {
			return ['(' + relevantGoeQueries.join(') or (') + ')'];
		}
	}
	return [];
};

var queryForForm = function (jForm) {
	var regions = selectedRegions();
	var subjectQueries = selectedSubject();

	var queries = makeKielQueries(regions, subjectQueries)
									.concat(makeGoeQuery(regions, subjectQueries));

	return queries.join(' or ');
};

var startVifanordSubjectSearch = function () {
	var displayQuery = function (query) {
		jQuery('#queryString').remove();
		var container = document.createElement('div');
		container.id = 'queryString';
		container.appendChild(document.createTextNode('Abfrage: ' + query));
		jQuery('.gokContainer').append(container);
	};

	if (pz2client.isReady()) {
		var jForm = jQuery('.pz2-neuerwerbungenForm');
		if (jForm.length > 0) {
			var query = queryForForm(jForm);
			if (jQuery.trim(query).length > 0) {
				pz2client.currentView.query = query;
				pz2client.currentView.recPerPage = 100;
				pz2client.currentView.sort = 'date:0,author:1,title:1';
				pz2client.search();
				// TODO: wegmachen
				displayQuery(query);
			}
		}
	}
	else {
		pz2client.initialisePazpar2();
	}
};

/**
 * Funktion zum Starten der thematischen Suche.
 */
var nkwgokItemSelected = function (event) {
	startVifanordSubjectSearch();
};

/**
 * Anpassungen für die thematische Suche.
 */
jQuery(function () {
	// Wir haben technische 2 pazpar2 Extensions in der Seite, eine nur pro-forma,
	// da sie die Checkboxen für die Regionsauswahl erzeugt, eine für die
	// eigentliche Suche. Den nicht-benötigten Suchergebnisteil entfernen, damit
	// die Erebnisse an der richtigen Stelle erscheinen.
	var jPz2neuerwerbungen = jQuery('.pz2-neuerwerbungen');
	if (jPz2neuerwerbungen.length > 0) {
		jPz2neuerwerbungen.find('.pz2-recordView').detach();

		// Submit-Knopf entfernen, wir reagieren (nur) auf change Events der selects.
		jPz2neuerwerbungen.find('.pz2-neuerwerbungenForm input[type="submit"]').hide();

		restoreCookieState();
		pz2client.config.triggerSearchFunction = startVifanordSubjectSearch;

		// Standard Event-Handler für Checkboxen entfernen.
		jQuery(document).off('click', '.pz2-neuerwerbungenForm input[type="checkbox"]');
		// … dann eigenen Event-Handler hinzufügen.
		jPz2neuerwerbungen.find('input').on('click', checkboxClicked);
	}
});
