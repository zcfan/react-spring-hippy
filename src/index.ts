import './setup'

import { AnimatedObject, createHost } from '@react-spring/animated'
import {
  colors,
  createStringInterpolator,
  Globals,
  is,
} from '@react-spring/shared'

import { WithAnimated } from './animated'
import { AnimatedStyle } from './AnimatedStyle'
import flattenStyle from './flattenStyle'
import { primitives } from './primitives'

Globals.assign({
  createStringInterpolator,
  colors,
})

const host = createHost(primitives, {
  applyAnimatedValues(instance, props) {
    if (is.und(props.children) && instance.setNativeProps) {
      instance.setNativeProps(props)
      return true
    }
    return false
  },
  createAnimatedStyle(styles) {
    styles = flattenStyle(styles)
    if (is.obj(styles.shadowOffset)) {
      styles.shadowOffset = new AnimatedObject(styles.shadowOffset)
    }
    return new AnimatedStyle(styles)
  },
})

export const animated = host.animated as WithAnimated
export { animated as a }

export * from './animated'
export * from '@react-spring/core'
