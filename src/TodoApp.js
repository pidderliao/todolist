import React from 'react'
import { view as Todo } from './todo'
import { view as Filter } from './filter'

export default function TodoApp() {

    return (

        <div>
            <Todo />
            <Filter />
        </div>
    )
}
