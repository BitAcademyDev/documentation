---
title: Universum
sidebar_position: 1
---

# Universum

|               |     |
|---------------|-----|
| **Optioneel** | Nee |
|               |     |

### Beschrijving

In het universum worden modules zo weergegeven dat studenten een bepaalde richting of track kunnen volgen.

![Universum](/img/docs/universe/universe.png)

## Het universum bekijken

We hebben een aantal snelkoppelingen en bedieningselementen geïmplementeerd om het universum te bekijken en te
navigeren.
Deze bedieningselementen zijn te vinden in de tabel linksonder met de naam *'Snelkoppelingen'* bij het bekijken van het
universum.

### Module attributen

In het universum kan een module bepaalde attributen hebben.

| Attribuut        | Beschrijving                                                                                                                                                                                                                                                                                                                                                          | Voorbeeld                                                                 |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Certificaat      | Als er een certificaat beschikbaar is voor de module, wordt dit weergegeven door een kleine gele cirkel met een certificaatpictogram linksboven in een module.                                                                                                                                                                                                        | ![Module certificate](/img/docs/universe/module-certificate.png)          |
| Opleidingsniveau | Als het opleidingsniveau van een module *'Intermediate'* of *'Advanced'* is, wordt dit weergegeven door een kleine rode cirkel, met een *'+'* of *'++'* rechtsboven van een module.                                                                                                                                                                                   | ![Module education level](/img/docs/universe/module-education-level.png)  |
| Track manen      | Wanneer een [track](#tracks) gestart kan worden vanuit een module, zal het een maan in een baan eromheen krijgen. Deze maan stelt de track voor die gestart kan worden vanuit de module.<br />Je kunt op een van de manen klikken om te zien welke tracks gestart kunnen worden vanuit de module. Vanuit deze module kan de student bijvoorbeeld drie tracks starten. | ![Module orbiting track moons](/img/docs/universe/module-track-moons.png) |

## Rolspecifieke details

### Coach

Als coach heb je een extra attribuut op de module. U kunt de huidige voortgang van een module zien.

<div className="flex">
<div>
Wanneer er studenten actief aan de module werken, wordt dit aangegeven door een kleine lichtblauwe cirkel, linksonder op de module.

Als er studenten zijn die de module hebben voltooid, wordt dit weergegeven door een kleine groene cirkel, rechtsonder op
de module.
</div>

![Modulestudenten momenteel actief](/img/docs/universe/module-student-progress.png)
</div>

### Editor

#### Een universum klonen

Als u momenteel een universe vanaf een andere locatie gebruikt, betekent dit dat u niet de eigenaar van de universe
bent.
En kan het universum niet bewerken. Het universum wordt in feite bijgewerkt als de andere locatie het bewerkt.

Als u er wijzigingen in wilt aanbrengen, kunt u deze klonen. Dit betekent dat Jarvis een kopie van het huidige universum
zal maken en
is het daarna van jou.

:::caution
Je ontvangt geen automatische updates meer van het oude universum,
en ben je verantwoordelijk voor het updaten/onderhouden van de flows.
:::
<div className="flex space-between margin-bottom-small">
U kunt een universe klonen door eerst de bewerkingsmodus schakelaar op aan te zetten.

<img alt="Wijzig modusschakelaar" className="margin-left-small" src="/nl/img/docs/universe/edit-mode-switch.png"/>
</div>

Dit toont je een bericht dat je niet de eigenaar van het universum bent. Zorg ervoor dat u begrijpt wat het
waarschuwings bericht betekent, en u akkoord gaat met deze voorwaarden.
Als je akkoord gaat, kun je op de groene `Universum aanmaken` knop klikken. Nadat u op deze knop hebt geklikt, wordt het
kloonproces gestart, dit duurt ongeveer 10-30 seconden, afhankelijk van hoe groot het universum is.

![Niet de eigenaar van het universe-bericht](/img/docs/universe/not-the-owner-message.png)

#### Het universum bewerken

<img alt="Bewerk modusschakelaar" className="float-right" src="/nl/img/docs/universe/edit-mode-switch.png"/>

Als u de eigenaar bent van uw universe, kunt u deze bewerken. U kunt het universum bewerken door de bewerkingsmodus
schakelaar op aan te zetten.

Hierna kunt u modules of andere cellen verslepen om ze te verplaatsen. Om de huidige lay-out op te slaan, kunt u
op de opslaan knop linksboven klikken.

Ook kun je bijna alle cellen verkleinen, dit doe je door eerst op de cel te klikken, deze te selecteren, en de kleine
grijze cirkel rechtsonder te slepen.

Om een cel te verwijderen, klikt u op de cel, selecteert u deze en klikt u op de rode 'X'.

![Een module verplaatsen](/img/docs/universe/move-module.gif)

#### Cellen toevoegen aan het universum

##### Modules

Om een module aan het universum toe te voegen, opent u het menu rechtsonder door op het rode cirkelmenu te klikken.
Klik op `Module verbinden`, dit opent een dialoogvenster waarin u kunt zoeken naar een module om verbinding te maken met
uw universum.

##### Level gate

Om een level gate aan het universum toe te voegen, open je het menu rechtsonder door op het rode cirkelmenu te klikken.
Klik op `Nieuwe level gate`, dit opent een dialoogvenster waarin u het level voor de level gate kunt instellen.

##### Groepen

<div className="flex space-between margin-bottom-small">
Groepen kunnen worden gebruikt om bepaalde modules visueel te groeperen. We hebben 2 soorten groepen, een rechthoek en een cirkel.
Deze kunnen aan het universum worden toegevoegd door erop te klikken.

<img alt="Tools-groepen" className="margin-left-small" src="/nl/img/docs/universe/tools-groups.png"/>
</div>

Groepen bewegen ook wat anders, omdat ze op elkaar kunnen stapelen.
Om een groep te verplaatsen, moet je deze eerst selecteren, vervolgens ontgrendelen door op het slotje rechtsboven te
klikken, hierna
kan de groep verplaatsen.

![Een groep verplaatsen](/img/docs/universe/move-group.gif)

##### Labels

<div className="flex space-between">
Labels kunnen worden gebruikt om tekst aan in het universum toe te voegen, deze worden vaak samen met een [groep](#groepen) gebruikt. U kunt een toevoegen
label door op het pictogram `Tt` te klikken.

<img alt="Tools label" className="margin-left-small" src="/nl/img/docs/universe/tools-label.png"/>
</div>

#### Lijnen en flow

Om een flow in je universum te creëren die de studenten zullen volgen, moet je modules met elkaar verbinden door middel
van lijnen.
Hierdoor wordt de geselecteerde module een vereiste voor de module waarop deze is aangesloten. Dit betekent dat de
geselecteerde module
moet worden voltooid voordat de student verder kan gaan met de module waarop hij is aangesloten.

Hier moet de student bijvoorbeeld eerst de module `HTML/CSS - Beginner` afronden voordat de student verder kan
met `HTML / CSS - Advanced`

![Verbind-module](/img/docs/universe/connect-module.gif)

Om een lijn tussen 2 modules te verwijderen, moet u over de lijn bewegen en op de rode 'X'-knop drukken.

#### Start module

De startmodule kan worden geselecteerd via het dropdown-menu rechtsboven. Deze wordt niet alleen gebruikt voor de
studenten rondleiding.
De student wordt aan het einde van de rondleiding ook automatisch ingeschreven in de startmodule. Het is dus zeer
waarschijnlijk dat de
student hier start. Er kunnen meerdere mogelijke startpunten in het universum zijn, elke module die
geen [vereiste lijn](#lijnen-en-stroom) heeft, wordt als beginpunt beschouwd.

#### Snapping

Om modules, groepen, labels en lijnen uit te lijnen, hebben we een snapfunctie geïntroduceerd. Deze functie lijnt
automatisch de cel die u verplaatst uit met de aangrenzende cellen.

<div className="flex space-between">
<img alt="Snapping modules" style={{width: '49%'}} src="/nl/img/docs/universe/snapping-modules.gif"/>
<img alt="Snapping lines" style={{width: '49%'}} src="/nl/img/docs/universe/snapping-lines.gif"/>
</div>

#### Tracks

Als je meerdere tracks in het universum hebt, kun je deze markeren voor de student.

Het begin van een track wordt gemarkeerd met een witte gloed. De vereiste modules om de track te voltooien, zijn gemarkeerd in
geel.

![Frontend-track](/img/docs/universe/track.png)

##### Track editor

<div class="flex space-between">
Om de track-editor te starten, moet u eerst de bewerkingsmodus inschakelen. Hierna moet u een track selecteren/maken uit de
drop-down menu rechtsboven.
Dit toont een nieuwe universe-werkbalk aan de linkerkant genaamd `Track`, hier vindt u alle bedieningselementen voor het bewerken van een
track.
Om modules aan een track toe te voegen, moet u het potlood selecteren en op de vereiste modules klikken, zodra u tevreden bent
kan op de gloeiende knop opslaan drukken om de track op te slaan.

<img alt="Track pencil toolbar" className="margin-left-small" src="/nl/img/docs/universe/tools-track-edit-track.png"/>
</div>

![Track-editor](/img/docs/universe/track-editor.gif)

<div className="flex space-between">
Om de startmodule, naam of afbeelding van de track te bewerken, kun je op het potlood met lijnen drukken. Dit opent een dialoogvenster waar
je de trackinstellingen en details kunt wijzigen.

<img alt="Track potlood met lijnen werkbalk" className="margin-left-small" src="/nl/img/docs/universe/tools-track-edit-details.png"/>
</div>

<div className="flex space-between margin-top-small">
Om een track te verwijderen, kunt u op het verwijderpictogram drukken. Dit zal je eerst vragen of je het zeker weet dat je het wilt verwijderen.

<img alt="Track potlood met lijnen werkbalk" className="margin-left-small" src="/nl/img/docs/universe/tools-track-delete.png"/>
</div>
