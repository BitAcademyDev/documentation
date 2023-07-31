---
title: Een exercise maken
sidebar_position: 2
---

## Soorten exercises

We hebben 3 verschillende soorten exercises:

- [Theorie](introduction)
- [Praktijk](introduction)
- [Self diagnostic](introduction#self-diagnostic)

Deze pagina is alleen van toepassing op de [praktijk](introduction) oefeningen, aangezien dit niet van toepassing is op
de [theorie](introduction) oefeningen en [Self diagnostics](introduction#self-diagnostic).

## Een exercise inleveren

Het inleveren van een exercise kan op een van de volgende manieren: [file upload](#file-upload) of [Git](#git). Welke
van
deze wordt gebruikt, wordt gedefinieerd in de oefening.

### File upload

Bij het inleveren van een opgave via file upload wordt er gevraagd om de benodigde bestanden aan te leveren.

:::caution
Zorg ervoor dat de bestandsnamen van de vereiste bestanden en de bestanden die u aanlevert hetzelfde zijn.

Ook hoofdletters en niet-hoofdletters, spaties, onderstrepingstekens, regels en bestandsextensies.

Als het gewenste bestand niet is gevonden, wordt het weergegeven onder het gedeelte 'Extra bestanden'. Als dit gebeurt,
controleer dan nogmaals
de bestandsnaam en bestandsextensie en upload het opnieuw.
:::

:::info Let op
Voor Windows worden bestandsextensies niet standaard weergegeven. Maar deze kun je wel handmatig
[aanzetten](https://www.google.com/search?channel=fs&client=ubuntu-sn&q=windows+enable+file+extensions).
:::

![File upload zonder bestanden](/img/docs/exercises/flow/file-upload-no-files.png)

### Git

Deze sectie is slechts een kleine verwijzing naar het gebruik van [Git](https://git-scm.com/). Wil je hier meer
informatie over,
overweeg om de Git-module in het universum te bekijken.

Als je [Git](https://git-scm.com/) gebruikt, moet je eerst [Git](https://git-scm.com/) op je systeem hebben
geïnstalleerd.
Hierna kunt u de repository klonen. De stappen voor het klonen staan bovenaan
de oefening met de titel 'Hoe begin ik aan deze oefening?'.

Kortom, u kloont de repository van de oefening door de kloon-URL te kopiëren en de volgende opdracht uit te voeren in
een
directory waar u het wilt klonen.

```shell
git clone <REPLACE_THIS_WITH_YOUR_CLONE_URL>
```

Na het klonen van de repository heb je een nieuwe map met de exercise naam en kun je beginnen met het maken van de
exercise.

#### Inleveren van de exercise

Als je klaar bent en de exercise in wilt leveren, moet je eerst alle gewijzigde bestanden stagen, hierna kun je de
gestagede wijzigingen committen, als laatste push je de commit. Jarvis zal het commando laten zien als dit
instelling is ingeschakeld voor uw locatie.

Hierna kun je op de inleverknop op Jarvis drukken.

## Exercise flow

Dit is de flow die een exercise doorloopt om te worden voltooid. Onder het flow schema staat een beschrijving van
elke
stap.

![Exercise flow schema](/img/docs/exercises/flow/exercise-flow-nl.drawio.png)

#### Inleveren van de exercise

Als er een review nodig is bij de oefening, wordt daar een review voor gemaakt die zowel een student of een coach kan
oppakken.

**Goed om te weten:**

- Soms is een review gemarkeerd als een review die alleen voor de coach is, in dit geval kan het alleen door een coach
  worden gereviewd.

#### Review

Als een [review](reviews) wordt geaccepteerd dan wordt de exercise voltooid, als hij geweigerd wordt, wordt de exercise
heropend.

![Exercise wacht op review](/img/docs/exercises/flow/waiting-for-review.png)

#### Exercise heropend

Als de exercise is heropend vanwege een [geweigerde review](reviews) of een [geweigerde review steekproef](reviews#review-samples), worden de problemen van de reviewer boven de exercise
weergegeven.
U kunt deze problemen dan oplossen en de exercise opnieuw inleveren.

![Exercise open voor verbeteringen](/img/docs/exercises/flow/open-for-improvements.png)

## Vooruit werken

Je kunt standaard 7 exercises in een module in review hebben staan. De beheerder van de module kan dit echter wel
verander.

Als je bijvoorbeeld net een exercise hebt [ingeleverd](#inleveren-van-de-exercise), wordt deze gemarkeerd
als '[Wachten op review](#review)'. Je kunt hierna nog door naar de volgende exercise en deze ook inleveren. Standaard kan je dit maximaal 7 keer doen, tenzij de
beheerder van de module dit heeft gewijzigd.