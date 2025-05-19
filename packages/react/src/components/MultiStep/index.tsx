import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep: number
}

export function MultiStep({ size, currentStep }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {/* Esse array gera: [1, 2, 3, 4...] */}
        {/* o step tem o valor da posição atual do array [step=1, step=2, step=3, step=4...] */}
        {/* Se o usuário estiver no "currentStep 3", o step=1, step=2 e step=3 serão preenchidos. Somente os passos que forem igual ou abaixo do passo atual, os passos maiores ficarão sem preenchimento */}
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
