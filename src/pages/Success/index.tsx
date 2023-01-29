import IllustrationImg from '../../assets/images/Illustration.svg'
import { CircleIcon } from '../../components/CircleIcon'

import {
  ContainerMain,
  ContainerInfoSuccess,
  Title,
  Subtitle,
  ContainerTitleAndSubtitle,
  ContainerInfosFinal,
  List,
  ItemInfo,
  WrapperInfos,
  Text,
  TextBold,
  ContainerIllustration,
} from './styles'

export function Success() {
  return (
    <ContainerMain>
      <ContainerInfoSuccess>
        <ContainerTitleAndSubtitle>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </ContainerTitleAndSubtitle>
        <ContainerInfosFinal>
          <List>
            <ItemInfo>
              <CircleIcon IconName="MapPin" variantColor="purple" />
              <WrapperInfos>
                <Text>
                  Entrega em{' '}
                  <TextBold>Rua João Daniel Martinelli, 102</TextBold>
                </Text>
                <Text>Farrapos - Porto Alegre, RS</Text>
              </WrapperInfos>
            </ItemInfo>
            <ItemInfo>
              <CircleIcon IconName="Timer" variantColor="yellow" />
              <WrapperInfos>
                <Text>Previsão de entrega</Text>
                <TextBold>20 min - 30 min</TextBold>
              </WrapperInfos>
            </ItemInfo>
            <ItemInfo>
              {/* Colocar o CircleIcon */}
              <CircleIcon IconName="CurrencyDollar" variantColor="yellowDark" />
              <WrapperInfos>
                <Text>Pagamento na entrega</Text>
                <TextBold>Cartão de Crédito</TextBold>
              </WrapperInfos>
            </ItemInfo>
          </List>
        </ContainerInfosFinal>
      </ContainerInfoSuccess>
      <ContainerIllustration>
        <img src={IllustrationImg} alt="" title="Illustration-success" />
      </ContainerIllustration>
    </ContainerMain>
  )
}
