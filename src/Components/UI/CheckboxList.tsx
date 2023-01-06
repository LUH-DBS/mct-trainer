import React from 'react'
import { Category } from '../../Types/Category'

interface PropTypes {
  entries: Category[]
  selected: number[]
  setSelected: (newState: number[]) => void
  grayOutCheckboxes: number[]
  setGrayOutCheckboxes: (grayOutCheckboxes: number[]) => void
}

export default function CheckboxList({
  entries,
  selected,
  setSelected,
  grayOutCheckboxes,
}: PropTypes) {
  function handleOnChange(value: number) {
    const updatedEntries = selected.includes(value)
      ? selected.filter((entry) => entry !== value)
      : [...selected, value]

    setSelected(updatedEntries)
  }

  return (
    <ul className="select-none">
      {/* Category Checkboxes */}
      {entries.map((entry, index) => {
        return (
          <li key={index}>
            <div>
              <input
                type="checkbox"
                name={entry.name}
                id={`checkbox-${index}`}
                checked={selected.includes(entry.id)}
                onChange={() => handleOnChange(entry.id)}
                disabled={grayOutCheckboxes.includes(entry.id)}
              />
              <label className="ml-2" htmlFor={`checkbox-${index}`}>
                {entry.name}
              </label>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
