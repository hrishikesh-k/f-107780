export const state = () => ({
  pages: [
    {
      name: 'De service',
      url: '/#service'
    },
    {
      name: 'Even voorstellen',
      url: '/#voorstellen'
    },
    {
      name: 'Tarieven',
      url: '/#tarieven'
    },
    {
      name: 'Partners',
      url: '/#partners'
    },
    {
      name: 'Contact',
      url: '/#contact'
    }
  ],
  companyDetails: {
    company: 'Butter Uitvaartservice',
    name: 'Jos Butter',
    address: 'Robijn 18',
    postcode: '1625 RW',
    city: 'Hoorn',
    phone: '06-249 990 96',
    phoneLink: '+31624999096',
    email: 'jos@butteruitvaart.nl',
    socialMedia: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/butteruitvaartservice/',
        icon: 'linkedin'
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/Butter-Uitvaartservice-Post-Mortem-Support-108482781491035',
        icon: 'facebook-square'
      }
    ]
  },
  services: [
    'Een verzorging en opbaring die met aandacht en professionele uitrusting wordt uitgevoerd;',
    'Specialistische overledenen verzorging, gas- en vochtbehandeling;',
    'Advies over Thanatopraxie, uitgevoerd door een professionele partner;',
    'Overbrenging van de overledene in een luxe, maar niet opvallende, rouwauto;',
    'De laatste rit naar afscheidslocatie kan hierin ook verzorgt worden, of ieder ander gewenst voertuig;',
    'Aandacht met empathie die persoonlijk, creatief en meedenkend is;',
    'Uitvaartassistentie tijdens de week van afscheid voor iedere ondernemer.'
  ],
  partners: [
    {
      name: 'Memorial Book',
      description: 'Iedereen rouwt op zijn of haar eigen manier en ook op een door hem of haar gekozen moment. Het is fijn om dan nog is door middel van het lezen van berichten of het bekijken van foto’s stil te staan bij het leven van een overleden dierbare. Memorial Book is hét hedendaagse online platform om die herinneringen aan dierbaren te digitaliseren. Het is daarmee een alternatief voor het bekende papieren gedenkboek.',
      imageName: 'memorial-book.gif',
      url: 'https://www.memorial-book.nl/'
    },
    {
      name: 'Uitvaartbegeleiding Rianne de Vries',
      description: 'De dood is onlosmakelijk verbonden met het leven. Definitief afscheid nemen vraagt om een goede uitvaart. En dit regel ik graag samen met jou. Iedereen verdient een uitvaart, die recht doet aan wie hij of zij was. Afscheid nemen doet iedereen anders en daar ligt precies mijn kracht. Geen 13 in dozen, standaard draaiboeken. Iedere uitvaart is voor mij maatwerk, omdat ik werk vanuit mijn intuïtie kan ik goed luisteren naar jou om te horen wat nodig is.',
      imageName: 'uitvaartbegeleiding-rianne-de-vries.gif',
      url: 'https://uitvaartbegeleidingriannedevries.nl/'
    },
    {
      name: 'Rouwdoeken',
      description: 'Wij voeren een collectie rouwdoeken en uitvaartaccessoires die één karakteristiek geheel vormen. Dessins en combinaties die vernieuwend zijn en gewaardeerd worden door vooraanstaande uitvaartondernemers. Een creatieve zorgvuldig samengestelde collectie waarmee we de Funeral Award 2020 hebben ontvangen.',
      imageName: 'rouwdoeken.gif',
      url: 'https://www.rouwdoeken.nl/'
    }
  ]
})
