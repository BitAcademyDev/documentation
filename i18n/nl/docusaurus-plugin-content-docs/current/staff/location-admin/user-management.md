---
sidebar_position: 2
description: Studenten en medewekers opzetten
---

# Gebruikersadministratie

## Studenten

In Jarvis zitten studenten in groepen, wat een manier is om studenten te organiseren.
[En de toegang van personeelsleden tot studenten op schaal te beheren](#coach).

[Hoe Jarvis voor studenten werkt, wordt in detail beschreven in de eigen hoofdstuk.](../../students)

## Medewerkers

Medewerkersaccounts kunnen verschillende rollen hebben binnen Jarvis, u kunt elk medewerker elke combinatie van rollen toekennen.
Over het algemeen wordt het als een goed idee gezien om medewerkers 
alleen toegang te geven tot wat ze werkelijk nodig hebben.
We zullen de rollen hier afzonderlijk bespreken,
houd er rekening mee dat u ook andere medewerkers locatiebeheerdersrechten kunt verlenen.
Wat handig kan zijn om de verantwoordelijkheid voor het managen van anderen te delen.

### Coach

Een coach (sommige instellingen noemen dit misschien leraar) is de meest voorkomende rol om uit te delen.
Coaches geven lessen en/of begeleiden studenten bij hun voortgang.
Hierdoor hebben ze toegang tot informatie van studenten, zoals de voortgang en notities.
Ze kunnen acties ondernemen zoals Jarvis negeren bij het ontgrendelen van modules of oefeningen voor een student.

Standaard kan een coach geen studenten zien, jij als locatiebeheerder moet coaches koppelen aan een groep studenten.
Waarna de coach de studenten in die groep kan zien en met hen kan werken.

Vergeleken met locatiebeheerder is een coach iets beperkter in de acties die hij kan doen, hij kan een student niet blokkeren
Jarvis. Evenmin kunnen ze studenten tussen groepen verplaatsen of nieuwe studenten maken, dat blijft de locatiebeheerders
verantwoordelijkheid.

[Deze rol wordt in detail beschreven in zijn eigen hoofdstuk.](../coaches/)

### Locatie-editor

Met de rol Editor kan een medewerker uw locatie-universum en de inhoud waarvan u de eigenaar bent (of waartoe u bewerkingstoegang hebt) bewerken.

[Deze rol wordt in detail beschreven in zijn eigen hoofdstuk.](../editor)

### Intaker

Jarvis heeft een functie genaamd de benchmark, die wordt gebruikt voor intakes met studenten voordat ze aan hun studie beginnen.
Door de rol van intaker kan een medewerker hier gebruik van maken.

```info
Mis je een van deze mogelijkheden voor jezelf?

U kunt uw eigen rollen bewerken als locatiebeheerder,
waarmee u mogelijkheden voor uw eigen account kunt toevoegen en verwijderen.

Ziet u de wijzigingen niet nadat u uw eigen rollen hebt gewijzigd? 
Log uit en weer opnieuw in bij Jarvis.
```

### Twee factoren

Jarvis vereist standaard dat alle medewerkers 2-factor-authenticatie hebben ingeschakeld op hun account.

Dit wordt gedaan om extra bescherming toe te voegen aan de accounts van de medewerkers,
omdat ze vaak toegang hebben tot gevoelige informatie over studenten.

Als uw organisatie echt niet met 2-factor-authenticatie wil werken, is dit uw risico om te nemen.
Het kan voor alle medewerkers worden uitgeschakeld via de [feature toggles](feature-toggles).
