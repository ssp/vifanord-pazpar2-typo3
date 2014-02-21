# Konfiguration für pazpar2 in vifanord
# fügt CSS und JS hinzu
# Konfiguriert die pazpar2 Extension und die pazpar2 Services
# für die jeweiligen Seiten
#
# Einbindung in die relevanten Seiten durch folgendes in root.t3s:
# [globalVar = TSFE:id = 16, TSFE:id = 15, TSFE:id = 25, TSFE:id = 33]
# <INCLUDE_TYPOSCRIPT:source="FILE:fileadmin/pazpar2/pazpar2-conf.ts">
# [globalVar]
#

temp.right >

page.includeJS.pazpar2-vifanord = fileadmin/pazpar2/pazpar2-vifanord.js
page.includeCSS.pazpar2-vifanord = fileadmin/pazpar2/pazpar2-vifanord.css


plugin.tx_pazpar2.settings {
	termLists >
	
	serviceID = baltikum
	
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
		filterDate {
			maxFetch = 1000
			minDisplay = 5
		}
		subject {
			maxFetch = 6
			minDisplay = 1
		}
	}
	
	exportFormats {
		ris = 1
		bibtex = 1
	}
	
	showKVKLink = 1
	
	addHistoryLink = 1
	useClipboard = 1
	addClipboardLink = 1
	
	removeDiacriticsBeforeSearch = 1
}


# Suche »Standard« (16)
[globalVar = TSFE:id = 16]
<INCLUDE_TYPOSCRIPT:source="FILE: fileadmin/pazpar2/pazpar2-conf-standard.ts">
[global]
# Suche »Thematisch« (15)
[globalVar = TSFE:id = 15]
<INCLUDE_TYPOSCRIPT:source="FILE: fileadmin/pazpar2/pazpar2-conf-thematisch.ts">
[global]
# Suche »Geographisch« (25)
[globalVar = TSFE:id = 25]
<INCLUDE_TYPOSCRIPT:source="FILE: fileadmin/pazpar2/pazpar2-conf-geo.ts">
[global]
# Suche »Internetquellen« (33)
[globalVar = TSFE:id = 33]
<INCLUDE_TYPOSCRIPT:source="FILE: fileadmin/pazpar2/pazpar2-conf-ir.ts">
[global]