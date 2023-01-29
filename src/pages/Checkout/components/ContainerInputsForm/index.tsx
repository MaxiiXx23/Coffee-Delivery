import { ContainerMainInput, Input, WrapperInputs } from './styles'

// user o FormProvider (react-hook-form)

export function ContainerInputsForm() {
  return (
    <ContainerMainInput>
      <Input placeholder="CEP" />
      <Input placeholder="RUA" gridColumn="1 / 4" />
      <WrapperInputs>
        <Input placeholder="NÚMERO" />
        <Input placeholder="COMPLEMENTO" />
      </WrapperInputs>
      <Input placeholder="BAIRRO" />
      <Input placeholder="CIDADE" />
      <Input placeholder="UF" />
    </ContainerMainInput>
  )
}
