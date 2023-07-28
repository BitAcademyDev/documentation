---
title: Gamification
sidebar_position: 3
---

# Gamification

|                       |                          |
|-----------------------|--------------------------|
| **Optioneel**         | Ja                       |
| **Standaard**         | FULL                     |
| **Feature Toggle**    | Gamification             |
| **Ingeschakeld door** | Locatie Administrator    |
| **Instellingen**      | Uit, FULL, LEVEL_XP_ONLY |
|                       |                          |

### Beschrijving

We hebben een aantal gamification-functies om gebruikers te inspireren meer met de inhoud bezig te zijn.

## Level & XP

![Level- en XP-balk](/img/docs/gamification/xp-bar.png)

Gebruikers kunnen experience points (XP) verzamelen van verschillende [acties](#welke-acties-xp-opleveren).
Zodra de gebruiker genoeg XP heeft bereikt om een level omhoog te gaan, wordt er een level-up scherm getoond en heeft de
gebruiker een extra level behaald.
Hierna wordt de hoeveelheid XP die nodig is voor een level-up verhoogd.

![Level-up scherm](/img/docs/gamification/level-up.png)

### Welke acties XP opleveren

We berekenen de hoeveelheid XP intern, we specificeren hier niet de exacte hoeveelheid XP, alleen een weergave.

| Actie                      | XP-opbrengst |
|----------------------------|--------------|
| Reviews                    | Laag         |
| Theorie-oefening afgerond  | Laag         |
| Praktijk-oefening afgerond | Middel       |
| Selfdiagnostic voltooid    | Middel       |
| Project afgerond           | Hoog         |

**Goed om te weten:**

- De XP-opbrengst van theorie- en praktijkoefeningen verandert met hun moeilijkheidsgraad. Een hogere moeilijkheidsgraad
  en tijdsindicatie leidt tot meer XP.
- Als een oefening is heropend of herstart, wordt dezelfde hoeveelheid XP die de oefening opleverde, verwijderd uit het
  studentenprofiel.

## Leaderboard

Het leaderboard toont de huidige studenten met het hoogste level en XP.

![Leaderboard](/img/docs/gamification/leaderboard.png)

**Goed om te weten:**

- Als een student de status *'stage'*, *'afgestudeerd'* of *'geblokkeerd'* heeft, verschijnen ze niet op het
  leaderboard.
- Het leaderboard kan worden gefilterd om alleen een bepaalde groep weer te geven.

## Level gates

In het universum hebben we een aantal modules bewaakt achter een level gate, deze level gate worden ontgrendeld
wanneer het vereiste level is bereikt.

Hier kan de gebruiker zich bijvoorbeeld inschrijven voor de module "Python" wanneer hij level 25 heeft bereikt.

![Level gate](/img/docs/gamification/level-gate.png)

## Streaks

De Streaks feature motiveerd een student om elke dag iets te doen.
Een Streak geeft aan hoeveel opeenvolgende dagen je hebt gewerkt aan een [exercise](exercises/introduction) binnen Jarvis.

Hier heeft de student bijvoorbeeld een Streak van 3 dagen.

![Streak van 3 dagen](/img/docs/gamification/streak.png)

### Een Streak verlengen

De Streak kan worden verlengd door een [exercise](exercises/introduction) te voltooien of door een commit naar een exercise op Bitlab
te pushen met Git.

Als je je Streak niet verlengt en geen [Streak bevriezingen](#streak-bevriezing) meer hebt, word je Streak beëindigd.

### Streak bevriezing

Soms heb je geen tijd om je Streak te verlengen. Voor deze gevallen hebben we Streak bevriezingen geïmplementeerd.

Om te zien hoeveel bevriezingen je nog hebt, kun je de muis over het Streak-pictogram plaatsen. De rode vlam
geeft je huidige Streak aan.
En de blauwe sneeuwvlok geeft aan hoeveel bevriezingen je nog hebt.

![Streak bevriezing](/img/docs/gamification/streak-freeze-hover.png)

#### Streak bevriezingen krijgen

Streak bevriezingen worden uitgedeeld bij verschillende Streak lengtes.

| Streak lengte | Bevriezingen |
|---------------|--------------|
| 5             | 1            |
| 10            | 2            |
| 25            | 3            |

**Goed om te weten:**

- Na een Streak van 25 krijg je elke 25 dagen 3 bevriezingen. U krijgt bijvoorbeeld 3 bevriezingen op 50, 75, 100,
  enzovoort.
- U kunt maximaal 5 Streak bevriezingen hebben

#### Een Streak bevriezing gebruiken

Streak bevriezingen worden automatisch gebruikt. Als u een bevriezing beschikbaar heeft, wordt deze gebruikt wanneer u
uw Streak niet heeft [verlengt](#een-streak-verlengen).
De volgende dag kun je je Streak nog steeds zoals normaal [verlengen](#een-streak-verlengen).

Hier zie je dat de Streak donderdag bevroren was, aangegeven door de blauwe dag.

![Bevroren streak](/img/docs/gamification/streak-frozen.png)

## Badges

Badges zijn een andere gamification-functie. Hiermee kunnen studenten een badge verdienen.
Alle badges zijn anders en hebben verschillende vereisten om ze te verdienen.

![Badge](/img/docs/gamification/badge.png)

**Goed om te weten:**

- Als een student een badge heeft verdiend, wordt deze weergegeven in een melding
- Je kan de badges van een student inzien door naar een student te gaan en het tabblad *'Badges'* te
  selecteren.
- Je kunt een student ook handmatig een badge toekennen door naar het tabblad *'Badges'* te gaan, het menu rechtsonder
  te openen en *'Badge uitgeven'* te selecteren.
- Sommige badges worden niet automatisch gegeven, maar moeten handmatig worden gegeven.