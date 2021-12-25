import { MessageEmbedOptions } from "discord.js"
import React from "react"
import { ReacordElement } from "../element.jsx"
import { EmbedChildNode } from "./embed-child.js"

export type EmbedFieldProps = {
  name: string
  inline?: boolean
  children: string
}

export function EmbedField(props: EmbedFieldProps) {
  return (
    <ReacordElement
      props={props}
      createNode={() => new EmbedFieldNode(props)}
    />
  )
}

class EmbedFieldNode extends EmbedChildNode<EmbedFieldProps> {
  override modifyEmbedOptions(options: MessageEmbedOptions): void {
    options.fields ??= []
    options.fields.push({
      name: this.props.name,
      value: this.props.children,
      inline: this.props.inline,
    })
  }
}
