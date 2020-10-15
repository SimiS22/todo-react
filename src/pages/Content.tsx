import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import All from './All'
import Active from './Active'
import Completed from './Completed'

const ContentWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    min-height: 600px;
    justify-content: center;
    z-index: -1;
`
const Content: React.FC = () => {
    return (
        <ContentWrapper>
            <Switch>
                <Route path='/' exact={true}><All /></Route>
                <Route path='/active'><Active /></Route>
                <Route path='/completed'><Completed /></Route>
            </Switch>
        </ContentWrapper>
    )
}
export default Content