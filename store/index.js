export const state = () => ({
  pages: [
    {
      name: "De service",
      url: "/#service"
    },
    {
      name: "Even voorstellen",
      url: "/#voorstellen"
    },
    {
      name: "Tarieven",
      url: "/#tarieven"
    },
    {
      name: "Contact",
      url: "/#contact"
    }
  ],
  companyDetails: {
    company: "Butter Uitvaartservice",
    name: "Jos Butter",
    address: "Robijn 18",
    postcode: "1625 RW",
    city: "Hoorn",
    phone: "06-249 990 96",
    phone_link: "+31624999096",
    email: "jos@butteruitvaart.nl"
  },
  services: [
    {
      name: "Basisverzorging door 1 persoon",
      description: "Samen met ondernemer/familie verzorgen en opbaren",
      price: "175,00"
    },
    {
      name: "Basisverzorging door 2 personen",
      description: "",
      price: "220,00"
    },
    {
      name: "Reiskosten per kilometer",
      description: "",
      price: "0,27"
    }
  ]
})
