# Konfiguration für pazpar2 in vifanord
# fügt CSS und JS hinzu
# Konfiguriert die pazpar2 Extension und die pazpar2 Services
# für die jeweiligen Seiten
#
# Einbindung in die relevanten Seiten durch Folgendes in root.t3s:
# [globalVar = TSFE:id = 16, TSFE:id = 125, TSFE:id = 126, TSFE:id = 70]
# <INCLUDE_TYPOSCRIPT:source="FILE:fileadmin/pazpar2/pazpar2-conf.ts">
# [globalVar]
#

temp.right >

page.includeJS.pazpar2-vifanord = fileadmin/pazpar2/pazpar2-vifanord.js
page.includeCSS.pazpar2-vifanord = fileadmin/pazpar2/pazpar2-vifanord.css


plugin.tx_pazpar2.settings {
	useKeywords = 1

	usePazpar2Facets = 1

	termLists >
	termLists {
		region {
			maxFetch = 5
			minDisplay = 1
		}
		xtargets {
			maxFetch = 6
			minDisplay = 1
		}
		gbv-library {
			maxFetch = 6
			minDisplay = 1
		}
		se-kb-collection {
			maxFetch = 6
			minDisplay = 1
		}
		medium {
			maxFetch = 20
			minDisplay = 1
		}
		language {
			maxFetch = 5
			minDisplay = 1
		}
		date {
			maxFetch = 6
			minDisplay = 5
		}
	}

	exportFormats {
		ris = 1
		bibtex = 1
	}

	showKVKLink = 1
	showOpenURLLink = 1

	addHistoryLink = 1
	useClipboard = 1
	addClipboardLink = 1

	highlightSearchTerms = 1
}



# Von TYPO3 im Formular genutzte Strings konfigurieren.
plugin.tx_pazpar2 {
	_LOCAL_LANG {
		# Hack! TYPO3 seems unable to recognise the 'en' language code
		default {
			form-main-placeholder = e.g. Lithuania or Swed?
			form-extended-placeholder-person = e.g. Ibsen, Henrik
		}
		de {
			form-main-placeholder = z.B. Litauen oder Schwed?
			form-extended-placeholder-person = z.B. Ibsen, Henrik
		}
	}
}



# Name des pazpar2 Service aufbauen:
# vifanord[-suchart]
plugin.tx_pazpar2.settings.flexformOverride.serviceID = vifanord

# Suche »Thematisch« (125)
[globalVar = TSFE:id = 125, TSFE:id = 159]
plugin.tx_pazpar2.settings {
	flexformOverride.serviceID := appendString(-themen)
	highlightSearchTerms = 0
	showSearchForm = 0
	useMaps = 0
	useGoogleBooks = 0
	addHistoryLink = 0
}
plugin.tx_nkwgok_pi1.menuInlineThreshold = 3

plugin.tx_pazpar2_pazpar2neuerwerbungen.settings {
	neuerwerbungen-subjects = vn-geo
	useAtomFeed = 0
	numberOfMonths = 0
	updateAndDisplay = 1
	noHeaderContributions = 1
}

page.bodyTag >
page.bodyTagCObject = TEXT
page.bodyTagCObject.value = subjectSearch
page.bodyTagCObject.wrap = <body class="|">
[global]

# <link> Element für Suchplugin einfügen
page.headerData {
	9004 = TEXT
	9004.value = <link rel="search" type="application/opensearchdescription+xml" title="vifanord" href="http://vifanord.de/?id=16&type=9004">
}
