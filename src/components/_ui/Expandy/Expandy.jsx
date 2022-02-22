import React, { useState, useRef } from 'react'
import Icon from "components/_ui/Icon/Icon";
import Tooltip from "components/_ui/Tooltip/Tooltip";
import { scrollTo } from "utils.js"

import './Expandy.scss';

const Expandy = ({ trigger, triggerExpandText, doHideIfCollapsed=false, className, children, ...props }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const ref = useRef()

    // const onToggleExpanded = () => {
    //     setIsExpanded(!isExpanded)

    //     if (isExpanded) {
    //         const top = ref.current.getBoundingClientRect().top
    //         if (top > window.innerHeight * 0.3) return
    //         const y = top
    //             + window.scrollY
    //             - window.innerHeight * 0.3
    //         scrollTo(y, 600)
    //     }
    // }

    return (
        <details className={`Expandy Expandy--is-${isExpanded ? "expanded" : "collapsed"} ${className}`} {...props} ref={ref}
            onToggle={e => {
                const isExpanded = e.target.open
                setIsExpanded(isExpanded)
        }}>
            <summary>
            <div className="Expandy__trigger button-no-appearance" >
                <div className="Expandy__trigger__text">
                    <b>{ trigger }</b>
                    <div className="Expandy__trigger__info">
                        { triggerExpandText || `tap me ${isExpanded ? "to hide" : "for more" } details` }
                    </div>
                </div>
                <div className="Expandy__trigger__mark">ἰ</div>
            </div>

            <Tooltip
                className="Expandy__toggle"
                contents={<button className="button-no-appearance">{isExpanded ? "Collapse me" : "Expand me"}</button>}
                >
                <div className="Expandy__toggle__arrow Expandy__toggle__arrow--up">
                    <Icon name="arrow" direction="n" size="s" />
                </div>
                <div className="Expandy__toggle__arrow Expandy__toggle__arrow--down">
                    <Icon name="arrow" direction="s" size="s" />
                </div>
                </Tooltip>
                </summary>
            <div className="Expandy__contents">
                {children }
            </div>
        </details>
    )
}

export default Expandy
