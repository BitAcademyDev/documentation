---
title: Tracks
sidebar_position: 7
---

# Tracks

|                       |                       |
|-----------------------|-----------------------|
| **Optioneel**         | Ja                    |
| **Standaard**         | Aan                   |
| **Feature Toggle**    | Tracks                |
| **Ingeschakeld door** | Locatie Administrator |
| **Instelling**        | Uit, Aan              |
|                       |                       |

### Beschrijving

Een track is een reeks van modules die kan worden gestart bij de eerste module en wanneer de hele reeks is voltooid, is de
track ook voltooid.

Tracks worden gebruikt om een bepaalde cursus of opleiding te benadrukken.

In dit universum moet je bijvoorbeeld eerst `PHP - Beginner` voltooien om de track te starten. 
Hierna moet je de modules: `HTML / CSS - Beginner`, `HTML / CSS - Geavanceerd`, `JavaScript - Beginner` en `JavaScript - Geavanceerd` afronden om de track te voltooien.

![Frontend track](/img/docs/tracks/track.png)

## Track manen in een baan om de module

Om aan te geven waar een track begint in het universum, draaien er manen rond de module waar de track gestart kan worden.

U kunt bijvoorbeeld vanuit deze module `PHP - Beginner` 3 tracks starten.

![Module met track manen](/img/docs/tracks/module-track-moons.png)

U kunt op een van de manen klikken om te zien welke tracks vanuit die module gestart kunnen worden.

![Tracks die gestart kunnen worden vanuit module](/img/docs/tracks/track-picker-dialog.png)

## Een track selecteren

Als je eenmaal een module hebt afgerond waar een track gestart kan worden, wordt je gevraagd een traject te kiezen (dit kun je later altijd wijzigen).
Nadat je een track hebt gekozen, lichten de benodigde modules op met een gele kleur.

![Een track kiezen](/img/docs/tracks/track-picker-dialog-2.png)

**Goed om te weten:**

- Je kunt de track waaraan je werkt altijd wijzigen door een track te selecteren met behulp van het drop down menu rechtsboven in het universum.

## Rolspecifieke details

### Coach

Als coach zie je de track waar de student op dat moment mee bezig is. Deze vind je door naar de student te gaan en naar het tabblad `Voortgang` te gaan.
Hier zie je het universum dat de leerling ziet, hiermee wordt ook de track weergegeven.

![Actieve track voor student](/img/docs/tracks/student-track-coach-showcase.png)

### Editor

Als editor kun je tracks aanmaken en aanpassen.

<div class="flex space-between">
Om de track-editor te starten, moet u eerst de bewerkingsmodus inschakelen. Hierna moet u een track selecteren/maken uit de
drop-down menu rechtsboven.
Dit toont een nieuwe universe-werkbalk aan de linkerkant genaamd `Track`, hier vindt u alle bedieningselementen voor het bewerken van een
track.
Om modules aan een track toe te voegen, moet u het potlood selecteren en op de vereiste modules klikken, zodra u tevreden bent
kan op de gloeiende knop opslaan drukken om de track op te slaan.

<img alt="Track pencil toolbar" className="margin-left-small" src="/nl/img/docs/universe/tools-track-edit-track.png"/>
</div>

![Track editor](/img/docs/tracks/track-editor.gif)

<div className="flex space-between">
Om de startmodule, naam of afbeelding van de track te bewerken, kun je op het potlood met lijnen drukken. Dit opent een dialoogvenster waar
je de trackinstellingen en details kunt wijzigen.

<img alt="Track potlood met lijnen werkbalk" className="margin-left-small" src="/nl/img/docs/universe/tools-track-edit-details.png"/>
</div>

<div className="flex space-between margin-top-small">
Om een track te verwijderen, kunt u op het verwijderpictogram drukken. Dit zal je eerst vragen of je het zeker weet dat je het wilt verwijderen.

<img alt="Track potlood met lijnen werkbalk" className="margin-left-small" src="/nl/img/docs/universe/tools-track-delete.png"/>
</div>

