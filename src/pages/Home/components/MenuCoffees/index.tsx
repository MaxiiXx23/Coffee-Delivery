import { ContainerSection, Title, MenuList } from './styles'

import { coffees } from '../../../../database/coffeesData'
import { CardCoffee } from '../../../../components/CardCoffee'

export function MenuCoffees() {
  return (
    <ContainerSection>
      {/* title */}
      <Title>Nossos cafés</Title>
      {/* Card */}
      <MenuList>
        {coffees.map((coffee) => {
          return (
            <CardCoffee
              key={coffee.id}
              imgUrl={coffee.imgUrl}
              expecifications={coffee.expecification}
              name={coffee.name}
              details={coffee.details}
              price={coffee.price}
            />
          )
        })}
      </MenuList>
    </ContainerSection>
  )
}
