---
title: Universum
sidebar_position: 2
---

# Universum

Het universum is waar modules worden weergegeven zodat leerlingen een bepaalde richting of een bepaald traject kunnen
volgen.

## Het universum bekijken

Bij het bekijken van het universum zijn er een paar snelkoppelingen en bedieningen die je moet onthouden.

| Actie         | Resultaat          |
|---------------|--------------------|
| R             | Weergave resetten  |
| CTRL + F      | Zoek voor exercise |
| Scroll        | In en uitzoomen    |
| Klik en sleep | Rond kijken        |

### Module attributen

In het universum kan een module bepaalde attributen hebben.

| Attribuut                  | Beschrijving                                                                                                                                                                                                                                                                                                                                                            | Voorbeeld                                                                                    |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Certificaat                | Als er een certificaat beschikbaar is voor de module, wordt dit weergegeven door een kleine gele cirkel met een certificaatpictogram linksboven in een module.                                                                                                                                                                                                          | ![Module certificaat](/img/staff/editor/universe/module-certificate.png)                     |
| Opleidingsniveau           | Als het opleidingsniveau van een module *'Intermediate'* of *'Advanced'* is, wordt dit weergegeven door een kleine rode cirkel met respectievelijk een *'+'* of *'++'* rechtsboven een module.                                                                                                                                                                          | ![Module opleidingsniveau](/img/staff/editor/universe/module-education-level.png)            |
| Studenten momenteel actief | Als er leerlingen actief aan de module werken, wordt dit getoond door een kleine lichtblauwe cirkel links onderaan de module.<br />Als er leerlingen zijn die de module hebben afgerond, wordt dit getoond door een kleine groene cirkel rechts onderaan de module.                                                                                                     | ![Module studenten momenteel actief](/img/staff/editor/universe/module-student-progress.png) |
| Track baan manen           | Wanneer een [track](#tracks) kan worden gestart vanaf een module, krijgt deze een maan in een baan eromheen. Deze maan vertegenwoordigt de track die vanuit de module kan worden gestart.<br />Je kunt op een van de manen klikken om te zien welke tracks vanuit de module gestart kunnen worden. Vanaf deze module kunnen er bijvoorbeeld drie tracks worden gestart. | ![Module track baan manen](/img/staff/editor/universe/module-track-moons.png)                |

## Een universum klonen

Als u momenteel een universum van een andere locatie gebruikt, betekent dit dat u niet de eigenaar van het universum
bent.
En het universum dus niet kunt bewerken. Het universum wordt namelijk bijgewerkt als de andere locatie het bewerkt.

Als je er wijzigingen in wilt aanbrengen, kun je het klonen. Dit betekent dat Jarvis een kopie maakt van het huidige
universum en het de jouwe maakt.

:::caution
Je ontvangt niet langer automatische updates van het oude universum,
en je zult zelf verantwoordelijk zijn voor het bijwerken/onderhouden van de flows.
:::
<div className="flex space-between margin-bottom-small">
Je kunt een universum klonen door eerst de bewerkingsmodus aan te zetten.

<img alt="Schakelaar bewerkingsmodus" className="margin-left-small" src="/nl/img/staff/editor/universe/edit-mode-switch.png"/>
</div>

Hierdoor krijg je een melding dat je niet de eigenaar bent van het universum. Zorg ervoor dat u begrijpt wat het
waarschuwingsbericht betekent en dat u akkoord gaat met deze voorwaarden.
Als je akkoord gaat, kun je op de groene `Universum aanmaken` knop klikken. Nadat je op deze knop hebt geklikt, zal het
kloonproces start, dit kan ongeveer 10-30 seconden duren, afhankelijk van hoe groot het universum is.

![Niet de eigenaar van het universum bericht](/img/staff/editor/universe/not-the-owner-message.png)

## Het universum bewerken

<img alt="Schakelaar bewerkingsmodus" className="float-right" src="/nl/img/staff/editor/universe/edit-mode-switch.png"/>

Als u de eigenaar bent van uw universum, kunt u het bewerken. U kunt het universum bewerken door de bewerkingsmodus
schakelaar op
aan te zetten.

Hierna kunt u klikken en slepen op modules of andere cellen om ze te verplaatsen. Om de huidige lay-out op te slaan,
kunt u
linksboven op de knop Opslaan drukken.

Je kunt ook bijna alle cellen vergroten of verkleinen. Dit doe je door eerst op de cel te klikken, deze te selecteren en
de kleine grijze cirkel rechtsonder te verslepen.

Om een cel te verwijderen, klik je op de cell, en klik je op de rode `X`.

![Een module verplaatsen](/img/staff/editor/universe/move-module.gif)

### Cellen toevoegen aan het universum

#### Modules

Om een module aan het universum toe te voegen, open je het menu rechtsonder door op het rode cirkelmenu te klikken.
Klik op `Koppel module`, dit opent een dialoogvenster waarin je een module kunt zoeken om aan je universum te koppelen.

#### Level gates

Om een level gate aan het universum toe te voegen, open je het menu rechtsonder door op het rode cirkelmenu te klikken.
Klik op `Nieuwe level gate`, dit opent een dialoogvenster waar je het level voor de level gate kunt instellen.

#### Groepen

<div className="flex space-between margin-bottom-small">
Groepen kunnen worden gebruikt om bepaalde modules visueel te groeperen. We hebben 2 soorten groepen, een rechthoek en een cirkel.
Deze kunnen worden toegevoegd aan het universum door erop te klikken.

<img alt="Gereedschap groepen" className="margin-left-small" src="/nl/img/staff/editor/universe/tools-groups.png"/>
</div>

Groepen bewegen ook een beetje anders, omdat ze elkaar kunnen overlappen.
Om een groep te verplaatsen, moet je deze eerst selecteren en vervolgens ontgrendelen door op het slotje rechtsboven te
klikken.
Hierna kun je de groep verplaatsen.

![Een groep verplaatsen](/img/staff/editor/universe/move-group.gif)

#### Labels

<div className="flex space-between">
Labels kunnen worden gebruikt om tekst toe te voegen aan het universum, deze worden vaak gebruikt in combinatie met een [groep](#groups).
U kunt een label toevoegen door op het pictogram `Tt` te klikken.

<img alt="Gereedschap labels" className="margin-left-small" src="/nl/img/staff/editor/universe/tools-label.png"/>
</div>

### Lijnen en flow

Om een flow in je universum te creëren die de studenten zullen volgen, moet je modules met elkaar verbinden lijnen.
Hierdoor wordt de geselecteerde module een vereiste voor de module waarop deze is aangesloten. Dit betekent dat de
geselecteerde module
moet worden voltooid voordat de student verder kan gaan met de module waarop hij is aangesloten.

Hier moet de student bijvoorbeeld eerst de module `HTML/CSS - Beginner` doorlopen voordat de cursist kan starten
op `HTML / CSS - Advanced`

![Verbind module](/img/staff/editor/universe/connect-module.gif)

Om een lijn tussen 2 modules te verwijderen, moet u over de lijn bewegen en op de rode `X`-knop drukken.

### Start module

De startmodule kan worden geselecteerd via het dropdown-menu rechtsboven. Deze wordt niet alleen gebruikt voor de
studenten rondleiding.
De student wordt aan het einde van de rondeleiding ook automatisch ingeschreven in de startmodule. Het is dus zeer
waarschijnlijk dat de
student hier start. Er kunnen in het universum meerdere startpunten zijn, elke module die
geen [vereiste lijnen](#lijnen-en-flow) hebben worden als startpunt beschouwd.

### Snappen

Om modules, groepen, labels en lijnen uit te lijnen, hebben we een snapfunctie geïntroduceerd. Deze functie zal
automatisch de cel die u verplaatst uitlijnen naar de aangrenzende cellen.

<div className="flex space-between">
<img alt="Modules die snappen" style={{width: '49%'}} src="/nl/img/staff/editor/universe/snapping-modules.gif"/>
<img alt="Lijnen die snappen" style={{width: '49%'}} src="/nl/img/staff/editor/universe/snapping-lines.gif"/>
</div>

## Tracks

Als je meerdere opleidingen of richtingen in je universum hebt, kun je deze markeren voor de student.

Het begin van een track wordt gemarkeerd met een witte gloed. De vereiste modules om de track te voltooien, zijn
gemarkeerd in geel.

![Frontend track](/img/staff/editor/universe/track.png)

### Track editor

<div class="flex space-between">
Om de track-editor te starten, moet u eerst de bewerkingsmodus inschakelen. Hierna moet u een track selecteren/maken uit de
dropdown-menu rechtsboven.
Dit toont een nieuwe universe werkbalk aan de linkerkant genaamd `Track`, hier vindt u alle bedieningselementen voor het bewerken van een
track.
Om modules aan een track toe te voegen, kunt u het potlood selecteren en op de vereiste modules klikken, zodra u tevreden bent kun je op de gloeiende opslaan knop drukken om de track op te slaan.

<img alt="Track potlood gereedschap" className="margin-left-small" src="/nl/img/staff/editor/universe/tools-track-edit-track.png"/>
</div>

![Track-editor](/img/staff/editor/universe/track-editor.gif)

<div className="flex space-between">
Om de startmodule, naam of afbeelding van de track te bewerken, kun je op het potlood met lijnen drukken. Dit opent een dialoogvenster waar
je kunt de trackinstellingen en details kunt wijzigen.

<img alt="Track potlood met lijnen werkbalk" className="margin-left-small" src="/nl/img/staff/editor/universe/tools-track-edit-details.png"/>
</div>

<div className="flex space-between margin-top-small">
Om een track te verwijderen, kunt u op het verwijderpictogram drukken. Dit zal je eerst vragen of je zeker weet dat je het wilt verwijderen.

<img alt="Track verwijder werkbalk" className="margin-left-small" src="/nl/img/staff/editor/universe/tools-track-delete.png"/>
</div>