---
title: Aanwezigheid
sidebar_position: 4
---

# Aanwezigheid

|                       |                        |
|-----------------------|------------------------|
| **Optioneel**         | Ja                     |
| **Standaard**         | Uit                    |
| **Feature toggle**    | Aanwezigheid          |
| **Ingeschakeld door** | Locatiebeheerder       |
| **Instellingen**      | Uit, Groep, Rooster    |
|                       |                        |

## Beschrijving
De aanwezigheidsfeature stelt coaches in staat om de aanwezigheid van studenten bij te houden. Aanwezigheid kan worden geregistreerd voor een hele dag, niet voor delen van de dag.
De aanwezigheid wordt geregistreerd in een scherm zoals hieronder weergegeven. Voor elke student kan je de volgende informatie invullen:
- de aanwezigheid
- een opmerking

Bovenaan de pagina kan je navigeren naar toekomstige datums en de aanwezigheid/opmerking van een student vooraf invullen. Bijvoorbeeld om op te merken dat ze op een bepaalde datum te laat zullen zijn.

![dashboardwidget voor studentenaanwezigheid](/img/staff/coaches/attendance/attendance-coach.png)

Nadat de aanwezigheid is ingevuld, wordt dit weergegeven op het dashboard van de student. De aanwezigheid van de laatste 30 registraties wordt weergegeven in een grafiek op hun dashboard.

![dashboardwidget voor studentenaanwezigheid](/img/staff/coaches/attendance/student-dashboard.png)

**Goed om te weten:**
- Als een student de status *'stage'* heeft, wordt hun aanwezigheid vooraf ingevuld met deze informatie en de status *'geoorloofd afwezig'*.
- Als een student de status *'afgestudeerd'* of *'geblokkeerd'* heeft, worden ze niet weergegeven in het overzicht van aanwezigheid.
- Aanwezigheid kan onbeperkt worden gewijzigd en is nooit 'vergrendeld'.
- Als de aanwezigheid is ingeschakeld, wordt deze weergegeven in de 'locatiegezondheidsmonitor' op het dashboard van de coaches.
- Aanwezigheid wordt direct opgeslagen (en zichtbaar voor de student) nadat de waarde van een veld is gewijzigd. Er is geen aparte opslaan actie vereist.
- Je kan alleen de aanwezigheid per dag invullen. Per uur wordt niet ondersteund.
- Het invullen van de aanwezigheid met meerdere gebruikers tegelijk is niet ondersteund en kan resulteren in het overschrijven van waardes.

## Verband met andere functies
**Ziekteoverdrachtsmodus**

Als je wilt dat de status *'ziek'* automatisch wordt overgedragen naar de volgende dag, moet de functie 'ziekteoverdrachtsmodus' hiervoor ingeschakeld worden.

**Coach-pilot**

Voor veel van de meldingen van de coach-pilot is het inschakelen van de aanwezigheid vereist. Lees hier meer over op de pagina voor de functie-schakelaar voor aanwezigheid.

**Chat**

Als de Chat-functie is ingeschakeld, ontvangt de student automatisch een chatbericht telkens wanneer ze als ziek, te laat of ongeoorloofd afwezig worden geregistreerd.

## Instellingen
### Groep

In de groepmodus kan je een groep selecteren en hun aanwezigheid voor een specifieke dag invullen.

Deze modus werkt goed als er slechts 1 groep studenten tegelijk gecoached wordt en de studenten ergens anders het lesrooster krijgen.

### Rooster

De roostermodus bouwt voort op de groepmodus door een rooster toe te voegen voor studenten binnen Jarvis.

De student ziet een widget zoals hieronder weergegeven waarin wordt aangegeven wanneer ze in de les worden verwacht.

![dashboardwidget voor studentenrooster](/img/staff/coaches/attendance/student-dashboard-schedule.png)

Bij het registreren van aanwezigheid ga je niet langer groep per groep, maar kan je alle studenten van verschillende groepen registreren vanuit één overzicht. Dit werkt het beste als u meerdere groepen studenten tegelijk heeft.

**Goed om te weten**:
- Een rooster kan worden gekoppeld aan één of meer groepen.
- Je kan uitzonderingen op het rooster toevoegen op het niveau van de student.
- Uitzonderingen kunnen betekenen dat een student wordt uitgezonderd van de aanwezigheid of dat een student specifiek aanwezig moet zijn.
- Vakanties worden automatisch uit het rooster gefilterd als ze aanwezig zijn binnen Jarvis.