import { v4 as UuidV4 } from 'uuid'

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
    id: UuidV4(),
    imgUrl: ImgTypeExpresso,
    expecification: ['Tradicional'],
    name: 'Expresso Americano',
    details: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeAmericano,
    expecification: ['Tradicional'],
    name: 'Expresso Tradicional',
    details: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeExpressoCremoso,
    expecification: ['Tradicional'],
    name: 'Expresso Cremoso',
    details: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeExpressoGelado,
    expecification: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    details: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeCafeComLeite,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    details: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeLatte,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Latte',
    details: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeCapuccino,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Capuccino',
    details: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeMacchiato,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Macchiato',
    details: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeMochaccino,
    expecification: ['Tradicional', 'Com leite'],
    name: 'Mocaccino',
    details: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeChocolateQuente,
    expecification: ['Especial', 'Com leite'],
    name: 'Chocolate Quente',
    details: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeCubano,
    expecification: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    details: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeHavaiano,
    expecification: ['Especial'],
    name: 'Havaiano',
    details: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeArabe,
    expecification: ['Especial'],
    name: 'Árabe',
    details: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: UuidV4(),
    imgUrl: ImgTypeIrlandes,
    expecification: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    details: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
