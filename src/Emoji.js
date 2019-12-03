import React from 'react'
import EmojiSpan from './EmojiSpan'

const Emoji = props => (
  <EmojiSpan
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? false : true}
  >
    {props.symbol}
  </EmojiSpan>
)

export default Emoji