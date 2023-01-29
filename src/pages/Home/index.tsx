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
        {/* Info */}

        <ContainerInfo>
          <WrapperTitleAndSubtitle>
            {/* Title */}
            <Title>
              Encontre o café perfeito{'\n'}para qualquer hora do dia
            </Title>

            {/* SubTitle */}
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>
          </WrapperTitleAndSubtitle>

          {/* Container InfosList  */}

          <WrapperInfoList>
            {/* Wrapper One  */}
            <WrapperColumn>
              {/* Info */}
              <Info>
                {/* Wrapper Icon  */}
                <CircleIcon IconName="ShoppingCart" variantColor="yellowDark" />
                <span>Compra simples e segura</span>
              </Info>
              <Info>
                {/* Wrapper Icon  */}
                <CircleIcon IconName="Timer" variantColor="yellow" />
                <span>Entrega rápida e rastreada</span>
              </Info>
            </WrapperColumn>
            <WrapperColumn>
              {/* Info */}
              <Info>
                {/* Wrapper Icon  */}
                <CircleIcon IconName="Package" variantColor="gray" />
                <span>Embalagem mantém o café intacto</span>
              </Info>
              <Info>
                {/* Wrapper Icon  */}
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
