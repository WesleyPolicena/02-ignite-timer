import { useContext } from "react";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { CyclesContext } from "../..";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { useForm } from 'react-hook-form'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmountInput: zod
    .number()
    .min(5, 'O ciclo pode ter no mínimo 5 minutos.')
    .max(60, 'O ciclo pode ter no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder='Dê um nome para o seu projeto'
        list='task-sugestion'
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-sugestion">
        <option value="Projeto 01" />
        <option value="Projeto 02" />
        <option value="Projeto 03" />
        <option value="Projeto 04" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder='00'
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}

        {...register('minutesAmountInput', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}