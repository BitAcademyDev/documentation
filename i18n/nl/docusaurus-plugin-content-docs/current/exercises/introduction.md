---
title: Exercise
sidebar_position: 1
---

|              |    |
|--------------|----|
| **Optional** | No |
|              |    |

## Exercise

Exercises is waar je veel van je tijd zal besteden in Jarvis

![Voorbeeld van leerlingvoortgang](/img/staff/coaches/exercises/exercise-view-details.png)

Exercises komen in 3 typen

* Theorie
* Praktijk
* [Self diagnostic](#self-diagnostic)

Theorie & praktijk exercise bestaan uit verschillende onderdelen. Niet elke exercise heeft al deze onderdelen.
| Onderdeel | Beschrijving |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Omschrijving | Beschrijft het scenario waarin je gaat werken |
| Leerdoelen | Wat je na deze exercise kunt en kent |
| Technieken | Dit zijn kleine stukjes informatie over technieken die je in de exercise tegen kan komen. <br/> Dezen
kunnen nieuw zijn, een herhaling, of verboden voor deze exercise. |
| Video | Niet iedereen leert op dezelfde manier, daarom zijn er videos voor mensen die dat liever hebben |
| Verwachtte uitkomst | Voor praktijkopdrachten laat dit de verwachte uitkomst van je code zien |
| Nakijkcriteria | Wanneer je iets maakt moet ook iemand het reviewen. Dit zijn de punten waar de reviewer op zal
letten. |

Daarnaast staat er aan de linkerkant nog wat meer informatie.

| Part                             | Description                                                                                                              |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Minimaal in te leveren bestanden | Je moet minstens deze files uploaden om de exercise te kunnen inleveren                                                  |
| Upload type                      | Gaat deze exercise via Git of File upload                                                                                |
| Vereiste credits                 | Hoeveel credits je nodig hebt om deze exercise in te leveren                                                             |
| Team                             | Hier staat met wie je in een team zit voor deze exercise. Vaak doe je exercises alleen, maar teamwork is ook belangrijk! |
| Online bitters                   | Als chat aanstaat laat dit zien welke bitters je kan benaderen                                                           |

Bij een theorie opdracht lees je de aangeleverde stof, en ga je naar externe webpagina's voor meer info.

Bij praktijk opdrachten staat in de omschrijving welke stappen je gaat doorlopen.
Deze stappen zouden je naar de verwachtte uitkomst moeten leiden.
Nadat je deze stappen af hebt, en je implementatie goed hebt getest, kan je inleveren.
Nadat je hebt ingeleverd kan je implementatie door [BLAST](blast) getest worden.
Als BLAST de exercise goedkeurt, kan hij nagekeken worden door een reviewer,
totdat de review gedaan is kan jij door met de volgende exercises.

## Self diagnostic

Self diagnostics zijn speciale exercises,
waarbij je individueel een kleine quiz doen om te laten zien dat je een bepaald onderwerp echt snapt.

![self diagnostic review example](/img/staff/coaches/exercises/student-self-diagnostic.png)

Dit wordt vaak gebruikt bij meer theoretische onderwerpen, of onderwerpen die zich niet goed in de praktijk laten
toetsen.

Self diagnostics starten vaak met een scenario en resultaat, waarna verschillende soorten vragen gesteld kunnen worden.

| Type              | Description                                                                                                                                                                                                    |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple choice   | Je zoekt het *meest* correcte antwoord bij een vraag.<br/>Het scenario kan ook een leeg veld bevatten, bijvoorbeeld `BLANK1`. <br/>Jij kan hier bepalen wat in het veld moet om bij het resultaat uit te komen |
| Connect the dots  | Links staan een aantal items, met rechts open plekken. <br/>Sleep de items boven naar de goede plek, bijvoorbeeld Koe -> Melk                                                                                  |
| Fill in the blank | Je krijgt een zin met missende onderdelen. <br/>Vul deze gaten in om een goede zin te krijgen. Zorg ervoor dat je ook de goede termen uit voorgaande exercises gebruikt.                                       | 

# Medewerker rollen

Coaches en editors krijgen dezelfde extra opties. Het grootste verschil is dat editors exercises kunnen veranderen, waar
coaches dat niet kunnen.

![coach exercise view](/img/staff/coaches/exercises/coach-exercise-view.png)

De tabs bovenaan laten alle extra opties zien.

## Example

Links zien we verschillende voorbeelden voor hoe de opdracht opgelost kan worden.
In de *Example* tab kan je voorbeelden zien van hoe de exercise opgelost kan worden.
![coach example view](/img/staff/coaches/exercises/coach-example-view.png)
Hier kan je snel een voorbeeld vinden van hoe je je student kan helpen bij een vraag.
Als een voorbeeld het volgende icoon heeft, en de feature toggle staat aan, kan een student dit voorbeeld zien wanneer
de opdracht ingeleverd is.
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<span class="material-symbols-outlined">
visibility
</span>

## BLAST-tests

In het *BLAST-Tests* tab kan je de tests zien die gerund worden wanneer een student de opdracht inlevert.
[Voor meer info, kijk hier](blast.md)

## Ratings

Students worden na elke opdracht gevraagd om een rating achter te laten. Dit kan op 2 manieren:

* Een simpele duim omhoog of omlaag
* Uitgebreidere rating met verschillende categorieën

## Instellingen

De meeste instellingen van een exercise/module staan in de content.
In de module staan dingen als:

* Kan een student een certificaat downloaden?
* Hoeveel open reviews kan een student hebben? (default is 7)

Exercise settings bevatten:

* Welke bestanden moet een student inleveren?
* Hoe moet een student de bestanden inleveren? (Git of file upload)
* Wordt [BLAST](blast.md) gebruikt om het werk van de student te valideren?
* Wie doet de review? (Niemand, medestudenten of coaches)

## Voortgang van studenten beheren 📈

Wanneer je naar een student gaat, kan je in het voortgang tab zien hoe ver de student is in het universum.
Dit is ook hoe de student het universum in Jarvis ziet.
![student progress example](/img/staff/coaches/exercises/student-progress.png)

Hier kan je ook een student inschrijven in een module waar ze volgens Jarvis nog geen toegang toe zouden hebben.

Door op een module te klikken waar een student voortgang heeft, kan je de voortgang in de module zien.

![student progress module example](/img/staff/coaches/exercises/student-progress-module.png)

Afhankelijk van de state van de exercise staat er recht een menu met de volgende opties:

* De exercise als student bekijken (bijvoorbeeld om de BLAST resultaten te bekijken)
* Een locked exercise unlocken.
* [Een self diagnostic met de student reviewen](#helping-with-self-diagnostic)
* De student een opdracht opnieuw laten maken

### Team exercises 👥

Bij team exercises zijn er controls om handmatig het team te controleren.

Bij een exercise die 4 mensen nodig heeft start Jarvis automatisch een team wanneer de eerste persoon de exercise
begint,
wanneer een tweede persoon de exercise begint wordt die er aan toegevoegd, dan de derde, en bij de vierde begint de
exercise.

Je kan handmatig een team samenstellen door een team te ontmantelen en dan een exercise te beginnen met het team
dat je ingedachte hebt. Dit hoeft niet uit hetzelfde aantal mensen te bestaan als de exercise voorschrijft.
Dit kan ook gebruikt worden wanneer de hele groep niet netjes op te delen is in exercise groepjes.
Als je bijvoorbeeld een exercise hebt voor 4 mensen, en de hele groep is 23 mensen, kunnen de laatste 3 nooit de
exercise beginnen.
In dit geval kan je handmatig een groepje van 3 vormen zodat alle studenten verder kunnen.

Wanneer een team ontbonden wordt, wordt ook de repo van dit team verwijdert.

## Helpen met Self diagnostics

Wanneer een student een self diagnostic faalt kan het zijn dat, afhankelijk van de locatie settings,
de student naar een coach moet om te zien wat er fout gegaan is.

![student progress self diagnostic example](/img/staff/coaches/exercises/student-progress-self-diagnostic.png)

Er zijn twee manieren om de self diagnostic van een student te bekijken. De eerste is om naar de self diagnostic te gaan
via de student's voortgang pagina. De tweede optie is via de dashboard widget *"Gefaalde self diagnostics"*.
Je kan hier de goede antwoorden zien, die je via de toggle rechtsboven kan verbergen wanneer je met de student naar
de resultaten kijkt.

![self diagnostic review example](/img/staff/coaches/exercises/self-diagnostic.png)

Nadat je de quiz met de student hebt bekeken kan je de self diagnostic via het module overzicht heropenen.
Hierna kan de student de self diagnostic opnieuw maken. Hierbij is het mogelijk dat de student andere vragen krijgt dan
de eerste keer.

## Self diagnostics editten

[Self diagnostics](#self-diagnostic) zijn ontworpen om kennis op een specifiek onderdeel te checken.
Voor elk onderwerp kunnen verschillende checks geschreven worden, die allemaal de kennis van de student testen.

:::info
Wanneer een student een self diagnostic start wordt er willekeurig 1 check per onderwerp gekozen.
:::info

Elke check bestaat uit verschillende vragen van de [beschikbare types](#self-diagnostic).

### Multiple choice questions

![self diagnostic multiple choice](/img/staff/coaches/exercises/self-diagnostic-multiple-choice.png)
Hier kan de student 1 antwoord kiezen uit meerdere opties. Meerdere antwoorden kunnen goed zijn.

### Connect the dots questions

![self diagnostic connect the dots](/img/staff/coaches/exercises/self-diagnostic-connect-the-dots.png)  
Hier moet een student bij elkaar horende concepten naar elkaar slepen.

### Fill in the blank

![self diagnostic fill in the blank](/img/staff/coaches/exercises/self-diagnostic-fill-in-the-blank.png)   
Hier moet de student een zin afmaken

Hier kan je de zin met placeholders schrijven, waar de placeholders de antwoorden per positie zijn.

:::info
Je krijgt een waarschuwing wanneer er niet hetzelfde aantal gaten en antwoorden zijn.
:::
