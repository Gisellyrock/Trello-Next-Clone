'use client'

import { useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
function Board = () => {
  const getBoard = useBoardStore
  useEffect(() => {
// getBoard()
  }, [])

  return (
    <h1>Hello</h1>
    // <DragDropContext>
    //   <Droppable droppableId='board' direction='horizontal' type='column'>
    //     {(provided) => (
    //       <div>
    //         {/* rendering all the columns */}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  )
}

export default Board