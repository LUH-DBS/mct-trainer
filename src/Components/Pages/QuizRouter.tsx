import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import CategorySelection from './CategorySelectionPages/CategorySelection'
import CategorySelectionSQL from './CategorySelectionPages/CategorySelectionSQL'
import CategorySelectionArchitektur from './CategorySelectionPages/CategorySelectionArchitektur'
import CategorySelectionEinfuehrung from './CategorySelectionPages/CategorySelectionEinfuehrung'
import CategorySelectionERModellierung from './CategorySelectionPages/CategorySelectionERModellierung'
import CategorySelectionHistorie from './CategorySelectionPages/CategorySelectionHistorie'
import CategorySelectionIntegritaetUndTrigger from './CategorySelectionPages/CategorySelectionIntegritaetUndTrigger'
import CategorySelectionNormalisierung from './CategorySelectionPages/CategorySelectionNormalisierung'
import CategorySelectionPhasenmodell from './CategorySelectionPages/CategorySelectionPhasenmodell'
import CategorySelectionRelationaleAlgebra from './CategorySelectionPages/CategorySelectionRelationaleAlgebra'
import CategorySelectionRelationalerEntwurf from './CategorySelectionPages/CategorySelectionRelationalerEntwurf'
import CategorySelectionTransaktionsmanagement from './CategorySelectionPages/CategorySelectionTransaktionsmanagement'
import Evaluation from './Evaluation'
import QuestionsContainer from './QuestionsContainer'
import _ from 'lodash'
import Question from '../../Types/Question'
import { useFetch } from '../../Helper/useFetch'
import { Category } from '../../Types/Category'

export default function QuizRouter() {
  const { response: questions } = useFetch<Question[]>('./data/Questions.json')
  const { response: categories } = useFetch<Category[]>(
    './data/Categories.json'
  )

  const [selectedCategories, setSelectedCategories] = useState<number[]>([])
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])
  const [selectedAnswersArrays, setSelectedAnswersArrays] = useState<
    string[][]
  >(new Array(15).fill([]))

  function resetQuestions() {
    if (!questions) return

    const filteredQuestions = questions.filter(
      // Check whether the questions category is true in the selected Categories
      (question) => selectedCategories.includes(question.category)
    )

    // Draw sample from filteredQuestions
    const newSelectedQuestions = _.sampleSize(filteredQuestions, 15)
    setSelectedQuestions(newSelectedQuestions)
  }

  // Prepare questions once categories are selected
  useEffect(() => {
    resetQuestions()
  }, [selectedCategories])

  // Recall resetQuestions once the questions are loaded in case they are delayed
  useEffect(() => {
    if (!questions || !categories) return

    resetQuestions()
  }, [questions])

  useEffect(() => {
    setSelectedAnswersArrays(
      selectedQuestions.map((question) =>
        // Fill answer strings depending on question type
        // Multiple Choice Answers have a default of "false" while text have empty strings
        new Array(question.answers.length).fill(
          question.type === 'multiple-choice' ? 'false' : ''
        )
      )
    )
  }, [selectedQuestions])

  return (
    <Routes>
      <Route
        path="categories"
        element={
          <CategorySelection
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/architektur"
        element={
          <CategorySelectionArchitektur
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/sql"
        element={
          <CategorySelectionSQL
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/einfuehrung"
        element={
          <CategorySelectionEinfuehrung
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/ermodellierung"
        element={
          <CategorySelectionERModellierung
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/historie"
        element={
          <CategorySelectionHistorie
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/integritaetundtrigger"
        element={
          <CategorySelectionIntegritaetUndTrigger
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/normalisierung"
        element={
          <CategorySelectionNormalisierung
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/phasenmodell"
        element={
          <CategorySelectionPhasenmodell
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/relationalealgebra"
        element={
          <CategorySelectionRelationaleAlgebra
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/relationalerentwurf"
        element={
          <CategorySelectionRelationalerEntwurf
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="categories/transaktionsmanagement"
        element={
          <CategorySelectionTransaktionsmanagement
            categories={categories || []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="questions"
        element={
          <QuestionsContainer
            selectedQuestions={selectedQuestions}
            selectedAnswers={selectedAnswersArrays}
            setSelectedAnswers={setSelectedAnswersArrays}
          />
        }
      />
      <Route
        path="evaluation"
        element={
          <Evaluation
            selectedQuestions={selectedQuestions}
            selectedAnswers={selectedAnswersArrays}
          />
        }
      />
    </Routes>
  )
}
