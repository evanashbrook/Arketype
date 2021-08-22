import React from 'react'
import Philosophy from '../Philosophy'
import { Route, Router } from 'react-router'
import PA1 from '../PhilosophyArticles/PA1'
import PA2 from '../PhilosophyArticles/PA2'
import PA3 from '../PhilosophyArticles/PA3'
import PA4 from '../PhilosophyArticles/PA4'

/**
* @author
* @function PhilosophyRouter
**/

const PhilosophyRouter = (props) => {
  return(
    <section>
        <div className='philosophy-routes'>
            <Route path='/philosophy/' exact component={Philosophy} />
            <Route path='/philosophy/A1' component={PA1} />
            <Route path='/philosophy/A2' component={PA2} />
            <Route path='/philosophy/A3' component={PA3} />
            <Route path='/philosophy/A4' component={PA4} />
        </div>
    </section>
   )

 }

export default PhilosophyRouter