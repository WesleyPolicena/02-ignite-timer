import { useContext } from "react";
import { FormContainer, MinutesAmount, TaskInput } from "./styles";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CycleContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

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
      <MinutesAmount
        type="number"
        id="minutesAmount"
        placeholder='00'
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}

        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}