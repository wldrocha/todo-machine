import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TodoCounter } from '../../src/components/TodoCounter'

describe('TodoCounter', () => {
  it('should render component', () => {
    render(<TodoCounter completedTodos={0} totalTodos={0} />)

    expect(screen.queryByText('Has completado '))
  })
  it('should render completed todos and total todos', () => {
    render(<TodoCounter completedTodos={1} totalTodos={3} />)

    expect(screen.queryByText('Has completado 1 de 3 TODOS'))
  })
})
