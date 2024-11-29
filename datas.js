const recentActivities = [
    { 
      id: 1, 
      type: 'Déclaration', 
      amount: '1.5 kg', 
      date: '24/11/2024',
      location: 'Mine de Bibemi',
      status: 'Validée',
      quality: 'Or 24 carats',
      declarationId: 'DECL-2024-0045',
      estimatedValue: '85,200 €'
    },
    { 
      id: 2, 
      type: 'Vente', 
      amount: '0.8 kg', 
      date: '23/11/2024',
      buyer: 'Société Aurifère Nationale',
      status: 'En cours',
      quality: 'Or 22 carats',
      saleId: 'VENTE-2024-0032',
      totalPrice: '42,560 €'
    },
    { 
      id: 3, 
      type: 'Déclaration', 
      amount: '2.1 kg', 
      date: '22/11/2024',
      location: 'Site minier du Centre',
      status: 'En attente',
      quality: 'Or 18 carats',
      declarationId: 'DECL-2024-0044',
      estimatedValue: '112,560 €'
    },
    { 
        id: 4, 
        type: 'Déclaration', 
        amount: '1.5 kg', 
        date: '24/11/2024',
        location: 'Mine de Bibemi',
        status: 'Validée',
        quality: 'Or 24 carats',
        declarationId: 'DECL-2024-0045',
        estimatedValue: '85,200 €'
      },
      { 
        id: 5, 
        type: 'Vente', 
        amount: '0.8 kg', 
        date: '23/11/2024',
        buyer: 'Société Aurifère Nationale',
        status: 'En cours',
        quality: 'Or 22 carats',
        saleId: 'VENTE-2024-0032',
        totalPrice: '42,560 €'
      },
      { 
        id: 6, 
        type: 'Déclaration', 
        amount: '2.1 kg', 
        date: '22/11/2024',
        location: 'Site minier du Centre',
        status: 'En attente',
        quality: 'Or 18 carats',
        declarationId: 'DECL-2024-0044',
        estimatedValue: '112,560 €'
      }
  ];

const exploitantsData = [
    {
      id: 1,
      entreprise: "Or Industries SA",
      numeroAutorisation: "EXP-2024-001",
      localite: "Région Nord",
      typeExploitation: "Industrielle",
      status: "Actif"
    },
    {
      id: 2,
      entreprise: "Mining Gold Corp",
      numeroAutorisation: "EXP-2024-002",
      localite: "Région Sud",
      typeExploitation: "Semi-industrielle",
      status: "Actif"
    },
    {
      id: 3,
      entreprise: "Golden Extract SARL",
      numeroAutorisation: "EXP-2024-003",
      localite: "Région Est",
      typeExploitation: "Artisanale",
      status: "Inactif"
    }
  ];

  const buyersData = [
    {
      id: 1,
      nom: "Gold Trade SARL",
      numeroAutorisation: "ACH-2024-001",
      localite: "Région Nord",
      natureAutorisation: "Bureau",
      numeroArrete: "ARR-2024-123",
      lieuArrete: "Ministère des Mines"
    },
    {
      id: 2,
      nom: "Precious Metals Corp",
      numeroAutorisation: "ACH-2024-002",
      localite: "Région Sud",
      natureAutorisation: "Achat et vente",
      numeroArrete: "ARR-2024-124",
      lieuArrete: "Direction Régionale"
    },
    {
      id: 3,
      nom: "Golden Market Express",
      numeroAutorisation: "ACH-2024-003",
      localite: "Région Est",
      natureAutorisation: "Bureau",
      numeroArrete: "ARR-2024-125",
      lieuArrete: "Ministère des Mines"
    }
  ];

export {recentActivities, exploitantsData, buyersData}