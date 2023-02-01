import ImgTypeExpresso from '../assets/coffees/TypeExpresso.svg'
import ImgTypeAmericano from '../assets/coffees/TypeAmericano.svg'
import ImgTypeExpressoCremoso from '../assets/coffees/TypeExpressoCremoso.svg'
import ImgTypeExpressoGelado from '../assets/coffees/TypeExpressoGelado.svg'
import ImgTypeCafeComLeite from '../assets/coffees/TypeCafeComLeite.svg'
import ImgTypeLatte from '../assets/coffees/TypeLatte.svg'
import ImgTypeCapuccino from '../assets/coffees/TypeCapuccino.svg'
import ImgTypeMacchiato from '../assets/coffees/TypeMacchiato.svg'
import ImgTypeMochaccino from '../assets/coffees/TypeMochaccino.svg'
import ImgTypeChocolateQuente from '../assets/coffees/TypeChocolateQuente.svg'
import ImgTypeCubano from '../assets/coffees/TypeCubano.svg'
import ImgTypeHavaiano from '../assets/coffees/TypeHavaiano.svg'
import ImgTypeArabe from '../assets/coffees/TypeArabe.svg'
import ImgTypeIrlandes from '../assets/coffees/TypeIrlandes.svg'

interface ICoffee {
  id: string
  imgUrl: string
  expecification: string[]
  name: string
  details: string
  price: number
}

export const coffees: ICoffee[] = [
  {
    id: '56a98b43-7ac3-45d9-bddb-b9b06a46d0aa',
    imgUrl: ImgTypeExpresso,
    expecification: ['Tradicional'],
    name: 'Expresso Americano',
    details: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 'a3c7c8e9-6e64-4a87-86f3-6a2c58fd0cae',
    imgUrl: ImgTypeAmericano,
    expecification: ['Tradicional'],
    name: 'Expresso Tradicional',
    details: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '34ba3273-9ebe-43c5-8744-e1cfbbc2074b',
    imgUrl: ImgTypeExpressoCremoso,
    expecification: ['Tradicional'],
    name: 'Expresso Cremoso',
    details: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '344cbffd-cf19-44e7-ac39-2d8c9a468761',
    imgUrl: ImgTypeExpressoGelado,
    expecification: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    details: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '1382321b-e661-41db-8469-3f85f9a914f2',
    imgUrl: ImgTypeCafeComLeite,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    details: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '1f131fc3-e25f-443e-94af-537db0ad2229',
    imgUrl: ImgTypeLatte,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Latte',
    details: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '9b79d584-16d5-4969-b2a3-1227d3ce6774',
    imgUrl: ImgTypeCapuccino,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Capuccino',
    details: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '494704e3-890e-4401-aa7a-34bf6cc145bc',
    imgUrl: ImgTypeMacchiato,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Macchiato',
    details: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 'c32b04e7-4853-4365-a168-2a8df4bfd5a5',
    imgUrl: ImgTypeMochaccino,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Mocaccino',
    details: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '26a2dd7e-0c06-4d5a-8b7a-a93932a2e52f',
    imgUrl: ImgTypeChocolateQuente,
    expecification: ['Especial', 'Com leite'],
    name: 'Chocolate Quente',
    details: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '0a786379-031a-4892-89b7-d5b6698c016b',
    imgUrl: ImgTypeCubano,
    expecification: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    details: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '6439eb0d-6bc5-47df-ae00-b971fe488886',
    imgUrl: ImgTypeHavaiano,
    expecification: ['Especial'],
    name: 'Havaiano',
    details: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '70790292-1fe1-4718-a53f-d2d291e4c8ad',
    imgUrl: ImgTypeArabe,
    expecification: ['Especial'],
    name: 'Árabe',
    details: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 'b9467df1-173e-4218-9b11-006e42d06ab5',
    imgUrl: ImgTypeIrlandes,
    expecification: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    details: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
