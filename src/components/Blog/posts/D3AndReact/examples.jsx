import React, { useState } from "react"
import { kebabCase } from "lodash"

import CreatingSVGElements from "./CreatingSVGElements"
import CreatingManySVGElements from "./CreatingManySVGElements"
import Sizing from "./Sizing"
import Axes from "./Axes"
import Maps from "./Maps"
import Complex from "./Complex"

import Code from "components/_ui/Code/Code"

// sharing state across charts
// maps
// animated maps
// animations
// force-directed diagrams
// for me stuff gets complicated when there are multiple groups of svg elements (nodes and links)
// animating lines
// animating a timeline
// staggered animations
// hooks
// responsive charts

// references
// ? d4 https://github.com/joelburget/d4

const sectionLabels = [
  ["Creating SVG elements", CreatingSVGElements],
  ["Creating many SVG elements", CreatingManySVGElements],
  ["Axes", Axes],
  ["Sizing & Responsivity", Sizing],
  // [
  //   "Animations",
  //   () => <></>,
  // ],
  [
    "Maps",
    // () => <></>,
    Maps,
  ],
  ["Complex visualization layouts", Complex],
  // ["Linking multiple charts", () => <></>],
]
export const sections = sectionLabels.map(
  ([label, Component = () => <></>]) => ({
    label,
    Component,
    slug: kebabCase(label),
  })
)

export const P = ({ children, ...props }) => (
  <code className="P" {...props}>
    {children}
  </code>
)

export const CodeAndExample = ({
  code,
  markers,
  example,
  fileName,
  theme,
  size,
  highlightedLines,
  hasLineNumbers = true,
}) => {
  const [highlightedMarker, setHighlightedMarker] = useState(null)
  const [hoveredMarker, setHoveredMarker] = useState(null)

  const getHighlightedMarkerProps = (index) => ({
    onMouseEnter: () => setHoveredMarker(index),
    onMouseLeave: () => {
      setHoveredMarker(null)
      setHighlightedMarker(null)
    },
    onClick: () => setHighlightedMarker(index),
    style: {
      cursor: "zoom-in",
    },
  })

  return (
    <div className="CodeAndExample D3AndReact__side-by-side">
      <div
        className={`D3AndReact__side-by-side__section CodeAndExample__code--marker-${highlightedMarker}`}
      >
        <Code
          {...{
            markers,
            highlightedMarker,
            fileName,
            theme,
            size,
            highlightedLines,
            hasLineNumbers,
          }}
          className={`Code--highlighted-marker-${hoveredMarker}`}
          doWrap={false}
          doScrollWrapper={false}
          size={window.innerWidth < 600 && "s"}
        >
          {code}
        </Code>
      </div>
      <div className="D3AndReact__side-by-side__section">
        {example(getHighlightedMarkerProps)}
      </div>
    </div>
  )
}
