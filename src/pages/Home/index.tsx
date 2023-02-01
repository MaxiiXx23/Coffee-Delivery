import ImageInfo from '../../assets/images/ImageInfo.svg'

import {
  ContainerMain,
  ContainerHeader,
  ContainerInfo,
  WrapperTitleAndSubtitle,
  Title,
  Subtitle,
  WrapperInfoList,
  WrapperColumn,
  Info,
  ContainerBanner,
} from './styles'
import { MenuCoffees } from './components/MenuCoffees'
import { CircleIcon } from '../../components/CircleIcon'

export function Home() {
  return (
    <ContainerMain>
      <ContainerHeader>
        <ContainerInfo>
          <WrapperTitleAndSubtitle>
            <Title>
              Encontre o café perfeito{'\n'}para qualquer hora do dia
            </Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>
          </WrapperTitleAndSubtitle>
          <WrapperInfoList>
            <WrapperColumn>
              <Info>
                <CircleIcon IconName="ShoppingCart" variantColor="yellowDark" />
                <span>Compra simples e segura</span>
              </Info>
              <Info>
                <CircleIcon IconName="Timer" variantColor="yellow" />
                <span>Entrega rápida e rastreada</span>
              </Info>
            </WrapperColumn>
            <WrapperColumn>
              <Info>
                <CircleIcon IconName="Package" variantColor="gray" />
                <span>Embalagem mantém o café intacto</span>
              </Info>
              <Info>
                <CircleIcon IconName="Coffee" variantColor="purple" />
                <span>O café chega fresquinho até você</span>
              </Info>
            </WrapperColumn>
          </WrapperInfoList>
        </ContainerInfo>
        <ContainerBanner>
          <img src={ImageInfo} alt="" title="Coffee-Delivery-Image-Info" />
        </ContainerBanner>
      </ContainerHeader>
      <MenuCoffees />
    </ContainerMain>
  )
}
