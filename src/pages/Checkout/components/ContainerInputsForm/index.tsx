import { useEffect } from 'react'

import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'

import { useMediaQuery } from '../../../../hooks/useMediaQueries'

import { ContainerMainInput, Input, WrapperInputs } from './styles'

interface IResponseFetchCEP {
  bairro: string
  localidade: string
  logradouro: string
  uf: string
}

export function ContainerInputsForm() {
  const { register, watch, setValue } = useFormContext()
  const theme = useTheme()

  const isAboveMediumScreen = useMediaQuery(theme.device.tabletS)

  const varifyGridInput = isAboveMediumScreen ? 'gridColumn1Slash4' : 'gridAuto'

  const cep: string = watch('cep')

  useEffect(() => {
    async function FecthCEP(cep: string) {
      const result: IResponseFetchCEP = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`,
      )
        .then((response) => {
          const resultJson = response
          return resultJson.json()
        })
        .catch(() => console.log('Error fecth CEP'))

      const { logradouro, bairro, localidade, uf } = result

      setValue('street', logradouro)
      setValue('district', bairro)
      setValue('city', localidade)
      setValue('state', uf)
    }
    if (cep && cep.length === 8) {
      FecthCEP(cep)
    }
  }, [cep, setValue])

  return (
    <ContainerMainInput>
      <Input
        type="text"
        {...register('cep')}
        min={8}
        max={8}
        placeholder="CEP"
        autoComplete="none"
      />
      <Input
        type="text"
        {...register('street')}
        placeholder="RUA"
        disabled
        gridColumn="gridColumn1Slash4"
      />
      <WrapperInputs>
        <Input
          type="text"
          {...register('number')}
          placeholder="NÚMERO"
          autoComplete="none"
        />
        <Input
          type="text"
          {...register('complement')}
          max={50}
          placeholder="COMPLEMENTO"
          autoComplete="none"
          gridColumn={varifyGridInput}
        />
      </WrapperInputs>
      <Input
        type="text"
        {...register('district')}
        placeholder="BAIRRO"
        disabled
        gridColumn={varifyGridInput}
      />
      <Input
        type="text"
        {...register('city')}
        placeholder="CIDADE"
        disabled
        gridColumn={varifyGridInput}
      />
      <Input type="text" {...register('state')} placeholder="UF" disabled />
    </ContainerMainInput>
  )
}
