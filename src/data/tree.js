export default {
  ID: 0,
  NAME: "ООО \"Ромашка\"",
  children: [
    {
      ID: 1,
      NAME: "Бухгалтерия",
      children: [
        {
          ID: 2,
          NAME: "Расчетный отдел"
        },
        {
          ID: 3,
          NAME: "Налоговый департамент",
          children: [
            {
              ID: 4,
              NAME: "Учет НДС"
            },
            {
              ID: 5,
              NAME: "Налог на прибыль"
            }
          ]
        },
        {
          ID: 6,
          NAME: "Материалы"
        },
        {
          ID: 7,
          NAME: "Основные средства"
        }
      ]
    },
    {
      ID: 8,
      NAME: "Администрация"
    },
    {
      ID: 9,
      NAME: "АХО",
      children: [
        {
          ID: 10,
          NAME: "Склад лопат"
        },
        {
          ID: 11,
          NAME: "Грабли и вилы"
        }
      ]
    }
  ]
};