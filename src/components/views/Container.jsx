import React, { Component } from 'react'
import MainStyle from '../../styles/main.module.scss'

export default class Container extends Component {
    render() {
        return (
            <div>
                <h1 className={MainStyle.center_header}>Todo container</h1>
            </div>
        )
    }
}
