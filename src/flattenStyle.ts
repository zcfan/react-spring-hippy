/**
 * Copy from https://github.com/facebook/react-native/blob/a1171f79f81cd924237570a456974b17c67c3ade/packages/react-native/Libraries/StyleSheet/flattenStyle.js
 */

export default function flattenStyle(style: any) {
  if (style === null || typeof style !== 'object') {
    return undefined
  }

  if (!Array.isArray(style)) {
    return style
  }

  const result = {} as any
  for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
    const computedStyle = flattenStyle(style[i])
    if (computedStyle) {
      for (const key in computedStyle) {
        result[key] = computedStyle[key]
      }
    }
  }
  return result
}
