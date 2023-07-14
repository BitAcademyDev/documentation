---
title: Exercises
sidebar_position: 2
description: Wat u MOET weten over exercises
---

|                       |     |
|-----------------------|-----|
| **Optioneel**         | Nee |
|                       |     |

## Exercise weergave 🪟

[Kijk voor een introductie van een exercises hier in de studentengids](../../students/exercises)

In Jarvis zal je weergave van een exercise er iets anders uitzien dan die van de student. Op de afbeelding hieronder
zie je links hoe jarvis er voor jou uitziet en rechts hoe het er voor de student uitziet. Het belangrijkste verschil is de extra informatie waartoe u toegang heeft via de tabbladen bovenaan het scherm.

![voorbeeld van studentenvoortgang](/img/staff/coaches/exercises/coach-exercise-view-details.png)


Het tabblad *voorbeelden* stelt je in staat om een voorbeeld te bekijken van hoe de exercise moet worden uitgevoerd.
Dit kan een goede manier zijn om snel te begrijpen welke richting je de student op moet sturen wanneer ze een vraag stellen.
Wanneer een voorbeeld wordt vermeld met het volgende pictogram en de relevante featuretoggle is ingeschakeld, kan de student de uitwerking zien nadat hij de exercise heeft voltooid.
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<span class="material-symbols-outlined">
visibility
</span>

Het tabblad *BLAST-tests* stelt je in staat om de exacte code te bekijken die BLAST zal uitvoeren voor de testscenario's.
[Voor meer informatie daarover kun je hier kijken](../editor/blast)

## Omgaan met de voortgang van studenten 📈

Bij het bekijken van een enkele student in Jarvis, kun je naar het tabblad "voortgang" gaan om het universum te zien dat de voortgang van de student weerspiegelt. Dit is ook hoe de student het ziet wanneer ze Jarvis openen.

![voorbeeld van studentenvoortgang](/img/staff/coaches/exercises/student-progress.png)

Vanaf hier kun je de volgorde van modules voor een student overschrijven door hen bijvoorbeeld in te schrijven voor een module waar ze nog geen toegang toe zouden moeten hebben.

Door op een module te klikken waar een student al voor is ingeschreven, kun je de voortgang van die student binnen die module bekijken.

![voorbeeld van voortgang module van student](/img/staff/coaches/exercises/student-progress-module.png)

Afhankelijk van de status van een exercise is er een menu aan de rechterkant van de exercise waarmee je het volgende kunt doen:

* Bekijk de exercise zoals de student (om bijvoorbeeld hun BLAST-resultaten te zien)
* Ontgrendel een vergrendelde exercise
* [Bekijk een selfdiagnostic met een student](#selfdiagnostic)
* Laat een student een exercise opnieuw doen

### Teamexercises 👥

Als de exercise een team vereist, zie je extra opties om deze teams handmatig te beheren.

In het geval van een teamexercise die 4 studenten vereist,
zal Jarvis standaard een team starten met de eerste student die arriveert.
De tweede student die arriveert, wordt aan dit team toegevoegd,
en de exercise begint zodra het vereiste aantal is bereikt.

Je kunt handmatig de vereisten voor teamleden overschrijven door een team te ontbinden en vervolgens handmatig elk gewenst team in te schrijven. Dit team hoeft niet te voldoen aan het vereiste aantal teamleden.
Dit kan ook worden gebruikt om met oneven groepsgroottes om te gaan.
Stel dat je 21 studenten in een groep hebt en de exercise teams van 4 vereist, dan wil je niet dat de laatste 3 vastlopen,
dus je kunt ze handmatig starten als een groep van 3.

Let op dat bij het ontbinden van een team, ook de repository wordt verwijderd waarin dat team werkte. 

## selfdiagnostic

Selfdiagnostics zijn een speciaal soort exercise waarbij studenten individueel een kleine quiz afleggen om hun begrip van een specifiek onderwerp te verifiëren.

Dit wordt vaak gebruikt voor meer theoretische onderwerpen en/of onderwerpen die niet goed worden geverifieerd door praktische exercises.

Als de student deze selfdiagnostic niet haalt, afhankelijk van de locatie-instellingen,
zijn ze verplicht om een coach te raadplegen om hen te helpen begrijpen waar ze de mist in zijn gegaan.

![voorbeeld van selfdiagnostic van studentenvoortgang](/img/staff/coaches/exercises/student-progress-self-diagnostic.png)

Er zijn twee manieren om een selfdiagnostic van een student te bekijken. De eerste is om naar de module te gaan via de voortgangspagina van de student. De tweede optie is om de dashboard-widget *"Mislukte selfdiagnostics"* te gebruiken.
Je kunt de juiste antwoorden zien (en ze verbergen tijdens het doorlopen van de quiz met de student).

![voorbeeld van selfdiagnosticbeoordeling](/img/staff/coaches/exercises/self-diagnostic.png)

Na het doorlopen van de quiz met de student kun je de selfdiagnostic opnieuw openen vanuit het moduleoverzicht.
Daarna kan de student de quiz opnieuw maken. De student kan verschillende vragen krijgen over dezelfde onderwerpen.

## Instellingen

De meeste instellingen van een exercise/module maken deel uit van de exercise zelf.

De module bevat zaken zoals:
* Kan een student een certificaat downloaden?
* Hoeveel open reviews kan een student hebben binnen deze module? (standaard is 7)

De instellingen van de exercise bevatten zaken zoals:
* Welke bestanden moet een student inleveren?
* Hoe moet een student die bestanden inleveren? (Git of bestandsupload)
* Controleert [BLAST](../editor/blast) het werk van de student?
* Wie moet de beoordeling doen? (Niemand, andere studenten of coaches)

Voor meer mogelijke instellingen kun je kijken naar de [editor documentatie](../editor).