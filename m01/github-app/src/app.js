'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>
    {/* all in components */}
    <Search />
    <UserInfo />
    <Actions />

    <Repos
      className='repos'
      title='Repositórios:'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}
    />

    <Repos
      className='starred'
      title='Favoritos:'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}
    />

  </div>
)

export default App
