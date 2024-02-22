import { Animated, AnimatedObject, AnimatedValue } from '@react-spring/animated'
import { each, eachProp, getFluidValue } from '@react-spring/shared'

type Transform = { [key: string]: string | number | Animated }

type Source = Transform[]

export class AnimatedTransform extends AnimatedObject {
  getValue() {
    return this.source
      ? this.source.map((source: Source) => {
          const transform: any = {}
          eachProp(source, (source, key) => {
            transform[key] = getFluidValue(source)
          })
          return transform
        })
      : []
  }

  setValue(source: Source) {
    this.source = source
    this.payload = this._makePayload(source)
  }

  protected _makePayload(source: Source) {
    if (!source) return []
    const payload = new Set<AnimatedValue>()
    each(source, (transform) =>
      eachProp(transform, this._addToPayload, payload),
    )
    return Array.from(payload)
  }
}
