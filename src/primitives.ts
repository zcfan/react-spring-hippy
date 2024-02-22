import {
  Image,
  ImageProps,
  Text,
  TextProps,
  View,
  ViewProps,
} from '@hippy/react'
import { ComponentClass, ReactNode } from 'react'

export const primitives = {
  View: View as ComponentClass<ViewProps & { children?: ReactNode }>,
  Text: Text as ComponentClass<TextProps & { children?: ReactNode }>,
  Image: Image as ComponentClass<ImageProps>,
}
