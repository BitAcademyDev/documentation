---
title: User administratie
sidebar_position: 2
---

# Gebruikersadministratie

## Studenten
In Jarvis worden studenten georganiseerd in groepen. Een student maakt altijd deel uit van één enkele groep.

Bij het aanmaken van een student wordt er een e-mail naar hen verzonden met een link om hun wachtwoord opnieuw in te stellen. Ze kunnen deze link gebruiken om hun wachtwoord te resetten.
Let op: deze link is slechts 2 dagen geldig. Als een gebruiker (student of medewerker) er niet in slaagt om hun account op tijd te activeren,
kunnen ze een nieuwe link aanvragen via de 'wachtwoord vergeten'-functie op het inlogscherm.

### Na het aanmaken
Niet alle eigenschappen van een student kunnen worden ingesteld bij het aanmaken. De volgende eigenschappen zijn alleen beschikbaar nadat een student is aangemaakt:

- Mentor
- Status

## Het gelijktijdig aanmaken van meerdere studenten
Studenten kunnen worden geïmporteerd via een CSV-bestand.

Om studenten te importeren via CSV, ga naar het dialoogvenster voor het aanmaken van studenten en klik op de knop 'studenten importeren' rechtsboven.

Het CSV-bestand moet de volgende velden bevatten: *email*, *voornaam*, *tussenvoegsel\**, *achternaam*.

\** = tussenvoegsel kan leeg worden gelaten.*

Meerdere locaties
In tegenstelling tot medewerkers kunnen studenten niet tegelijkertijd op meerdere locaties bestaan. Als een student de locatie verlaat
en naar een andere Jarvis-locatie moet worden verplaatst, moet je contact opnemen met de Bit Academy om dit op te lossen.

## Medewerkers

:::info Mis je een van deze mogelijkheden voor jezelf?

Je kunt je eigen rollen bewerken als locatiebeheerder, waardoor je
mogelijkheden kunt toevoegen en verwijderen voor je eigen account.

Zie je de wijzigingen niet nadat je je eigen rollen hebt gewijzigd? Log dan uit en weer in bij Jarvis.
:::

Medewerkersaccounts kunnen verschillende rollen hebben binnen Jarvis en elke combinatie van rollen bezitten.
Het wordt aangeraden om het principe van het minste privilege te volgen: geef medewerkers alleen toegang tot wat ze echt nodig hebben.

Hieronder zullen we de rollen individueel bespreken.
Houd er rekening mee dat u ook andere medewerkers beheerdersrechten voor de locatie kunt geven, wat handig kan zijn om de verantwoordelijkheid voor het beheer van de locatie te delen.

### Coach
Een coach (sommige instellingen noemen deze rol docent) is de meest voorkomende rol om toe te wijzen.
Coaches geven les en/of begeleiden de voortgang van studenten.
Coaches hebben toegang tot informatie van studenten, zoals de voortgang, notities, doelen en individuele gesprekken.
Ze kunnen ook acties ondernemen met betrekking tot de student. Bijvoorbeeld: modules of exercises ontgrendelen voor een student of een student dwingen bepaalde exercises opnieuw te doen.

Standaard kan een coach geen studenten zien. Hij/zij kan alleen de studenten zien die zich in de groepen bevinden waaraan de coach is gekoppeld. Dus u als locatiebeheerder moet coaches eerst koppelen aan een groep studenten.

### Locatiebewerker
De rol van locatiebewerker stelt een medewerker in staat om het universum en de modules binnenin te bewerken.

### Intaker
Jarvis heeft een functie genaamd de benchmark, die wordt gebruikt voor intakegesprekken met studenten voordat ze aan hun studie beginnen.
De rol van intaker stelt een medewerker in staat om deze functie te gebruiken.

## Twee-factor authenticatie
Standaard vereist Jarvis dat alle medewerkers tweefactorauthenticatie hebben ingeschakeld voor hun accounts.

Dit is bedoeld om extra bescherming toe te voegen aan de accounts van medewerkers,
omdat ze toegang hebben tot gevoelige informatie over studenten.

Als uw organisatie echt niet wilt werken met tweefactorauthenticatie, is dit uw eigen risico.
Het kan worden uitgeschakeld voor alle medewerkers via de feature toggles.

Opmerking: als een medewerker deel uitmaakt van meerdere locaties en een van die locaties tweefactorauthenticatie vereist, dan moet de medewerker
tweefactorauthenticatie gebruiken. Ongeacht de instelling van uw locatie.