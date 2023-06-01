
export const barang: namaBarang[] = [
    { id: '1',
      date: "21-12-2022",
      namaBarang: "elvicto skincare cuci muka  ",
      jumlah : 100,
      tipe :"masuk",
      checked :'fas fa-check'
    },
    {
      id: '2',
      date: "21-12-2022",
      namaBarang: "elvicto skincare moustirizer ",
      jumlah : 50,
      tipe : "keluar",
      checked :'fas fa-check'

    },
    {id: '3',
      date: "01-01-2023",
      namaBarang: "elvicto skincare sunscreen ",
      jumlah : 50,
      tipe : "masuk",
      checked :'fas fa-question'

    },
    { id: '4',
      date: "05-12-2023",
      namaBarang: "elvicto skincare sunscreen",
      jumlah : 50,
      tipe : "keluar",
      checked :'fas fa-question'

    },
    
  ];

  export interface namaBarang{
    id: string;
    date?: string;
    namaBarang?: string;
    jumlah?: number;
    tipe? : string;
    checked? : string;
  }
