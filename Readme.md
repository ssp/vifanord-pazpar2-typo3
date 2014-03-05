# vifanord Konfiguration für pazpar2 TYPO3 Extension

Auf dem Server unter `/var/www/typo/fileadmin/pazpar2`.


## pazpar2-conf.ts

TypoScript Konfiguration, die die pazpar2 Extension konfiguriert und die richtigen Services für die jeweiligen Seiten und Regionseinstellungen einstellt.

Sie fügt außerdem die CSS und JavaScript Datei aus diesem Repository zu den Seiten hinzu.

Die TypoScript Datei wird durch eine Zeile in `/var/www/typo3/fileadmin/Template/Private/Configuration/TypoScript/root.t3s` in die Konfiguration eingebunden.



## pazpar2-vifanord.css

Anpassungen der pazpar2 Darstellung für das Design von vifanord.

Alle Designänderungen für die pazpar2 Extension sollten in dieser Datei stattfinden. Hierzu im DOM die Klasse (`.pz2-`) des relevanten Elements heraussuchen und den CSS Selector mit voranstehendem `#pazpar2` schreiben, damit die Voreinstellung aus `pz2.css` überschrieben wird.

Enthält einen Hack, der die rechte Spalte ausblendet und sich ihren Teil der Breite für pazpar2 nimmt.


## pazpar2-vifanord.js

* Ergänzen / Ändern der Lokalisierung mit vifanord spezifischen Begriffen
* Einfügen der Eingabehilfe
