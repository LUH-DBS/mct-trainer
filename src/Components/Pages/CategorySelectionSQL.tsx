import React from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../UI/PrimaryButton'
import TrainerHeader from '../UI/TrainerHeader'
import { Category } from '../../Types/Category'

interface Props {
  categories: Category[]
  selectedCategories: number[]
  setSelectedCategories: (selectedCategories: number[]) => void
  resetQuestions: () => void
}

export default function CategorySelectionSQL({
  categories,
  selectedCategories,
  setSelectedCategories,
  resetQuestions,
}: Props) {
  const navigate = useNavigate()

  function handleStart() {
    if (!selectedCategories) return

    // Reset the selected questions upon starting another quiz
    resetQuestions()

    navigate('/quiz/questions')
  }

  return (
    <div className="space-y-4">
      <TrainerHeader>SQL</TrainerHeader>
      <p>Starten Sie das Quiz:</p>

      <PrimaryButton
        onClick={handleStart}
        disabled={
          !selectedCategories || selectedCategories.length === 0 || !categories
        }
      >
        Test starten
      </PrimaryButton>
    </div>
  )
}
