let calculatePopoverPosition = (popoverPos, editableTextPos) => {
  let { top, left, width, height } = editableTextPos

  let pageOffsetX = document.documentElement.scrollLeft
  let pageOffsetY = document.documentElement.scrollTop

  let textPosition = {
    top: top + pageOffsetY + (height / 2) - (popoverPos.height / 2),
    left: left + pageOffsetX + width
  }

  return {
    ...textPosition,
    left: textPosition.left + 10
  }
}


export default calculatePopoverPosition;
