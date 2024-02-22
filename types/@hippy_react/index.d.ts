declare module '@hippy/react' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  import * as React from 'react'
  import * as ReactReconciler from 'react-reconciler'

  // Hippy
  export interface HippyOption {
    appName: string
    entryPage: any
    ver?: string
    renderConfig?: {
      closeMessageQueue: boolean
      messageQueueFlushTime: number
    }
    silent?: boolean
    callback?: Function
  }

  export class Hippy {
    regist: () => void
    constructor(option: HippyOption)
  }

  // AppRegistry
  export namespace AppRegistry {
    function registerComponent(name: string, callback: () => any): void

    function runApplication(
      name: string,
      option: { rootTag: HTMLElement },
    ): void
  }

  // Dimensions
  export namespace Dimensions {
    function get(
      window: 'window' | 'screen',
    ): {
      width: number
      height: number
      scale: number
      fontScale: number
      statusBarHeight: number
      // android 特有
      navigatorBarHeight?: number
    }
  }

  // Platform
  export namespace Platform {
    const OS: 'ios' | 'android'
    const Localization:
      | {
          country: string
          language: string
          direction: 0 | 1
        }
      | undefined
  }

  // callNativeWithPromise
  export function callNativeWithPromise<T>(
    module: string,
    bridge: string,
    data?: any,
  ): Promise<T>

  export function callNativeWithPromise<T, D>(
    module: string,
    bridge: string,
    data: D,
  ): Promise<T>

  // StyleSheet
  export namespace StyleSheet {
    type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

    type Style = ViewStyle | TextStyle | ImageStyle

    function create<T extends NamedStyles<T> | NamedStyles<any>>(
      styles: T | NamedStyles<T>,
    ): T

    /**
     * @desc 只在 android/ios 有效，web 平台不支持；这一常量定义了当前平台上的最细的宽度。可以用作边框或是两个元素间的分隔线。然而，你不应该信任它作为一个衡量长度的单位，因为在不同机器与不同分辨率，hairlineWidth 可能会表现不同。
     * @link https://hippyjs.org/#/hippy-react/modules?id=stylesheet
     */
    const hairlineWidth: number
  }

  type Falsy = undefined | null | false
  export type RecursiveArray<T> = Array<T | RecursiveArray<T>>

  export type StyleProp<T> = T | RecursiveArray<T | Falsy> | Falsy

  type FlexAlignType =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'

  export interface FlexStyle {
    alignContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'stretch'
      | 'space-between'
      | 'space-around'
    alignItems?: FlexAlignType
    alignSelf?: 'auto' | FlexAlignType
    aspectRatio?: number
    borderBottomWidth?: number
    borderEndWidth?: number | string
    borderLeftWidth?: number
    borderRightWidth?: number
    borderStartWidth?: number | string
    borderTopWidth?: number
    borderWidth?: number
    bottom?: number | string | AnimationType
    display?: 'none' | 'flex' | 'block' | 'inline-block' | 'inline' // TODO
    end?: number | string
    flex?: number
    flexBasis?: number | string
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
    flexGrow?: number
    flexShrink?: number
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
    height?: number | string
    justifyContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
    left?: number | string | AnimationType
    margin?: number | string
    marginBottom?: number | string
    marginEnd?: number | string
    marginHorizontal?: number | string
    marginLeft?: number | string
    marginRight?: number | string
    marginStart?: number | string
    marginTop?: number | string
    marginVertical?: number | string
    maxHeight?: number | string
    maxWidth?: number | string
    minHeight?: number | string
    minWidth?: number | string
    overflow?: 'visible' | 'hidden' | 'scroll'
    padding?: number | string
    paddingBottom?: number | string
    paddingEnd?: number | string
    paddingHorizontal?: number | string
    paddingLeft?: number | string
    paddingRight?: number | string
    paddingStart?: number | string
    paddingTop?: number | string
    paddingVertical?: number | string
    position?: 'absolute' | 'relative' | 'fixed' // TODO
    right?: number | string | AnimationType
    start?: number | string
    top?: number | string | AnimationType
    width?: number | string
    zIndex?: number
  }

  interface PerpectiveTransform {
    perspective: number | AnimationType
  }

  interface RotateTransform {
    rotate: string | AnimationType
  }

  interface RotateXTransform {
    rotateX: string | AnimationType
  }

  interface RotateYTransform {
    rotateY: string | AnimationType
  }

  interface RotateZTransform {
    rotateZ: string | AnimationType
  }

  interface ScaleTransform {
    scale: number | AnimationType
  }

  interface ScaleXTransform {
    scaleX: number | AnimationType
  }

  interface ScaleYTransform {
    scaleY: number | AnimationType
  }

  interface TranslateXTransform {
    translateX: number | AnimationType
  }

  interface TranslateYTransform {
    translateY: number | AnimationType
  }

  interface SkewXTransform {
    skewX: string | AnimationType
  }

  interface SkewYTransform {
    skewY: string | AnimationType
  }

  export interface TransformsStyle {
    transform?:
      | (
          | PerpectiveTransform
          | RotateTransform
          | RotateXTransform
          | RotateYTransform
          | RotateZTransform
          | ScaleTransform
          | ScaleXTransform
          | ScaleYTransform
          | TranslateXTransform
          | TranslateYTransform
          | SkewXTransform
          | SkewYTransform
        )[]
      | string
    transformMatrix?: Array<number>
    rotation?: number
    scaleX?: number
    scaleY?: number
    translateX?: number
    translateY?: number
  }

  export interface ViewStyle extends FlexStyle, TransformsStyle {
    backfaceVisibility?: 'visible' | 'hidden'
    backgroundColor?: string
    borderBottomColor?: string
    borderBottomEndRadius?: number
    borderBottomLeftRadius?: number
    borderBottomRightRadius?: number
    borderBottomStartRadius?: number
    borderBottomWidth?: number
    borderColor?: string
    borderEndColor?: string
    borderLeftColor?: string
    borderLeftWidth?: number
    borderRadius?: number
    borderRightColor?: string
    borderRightWidth?: number
    borderStartColor?: string
    borderStyle?: 'solid' | 'dotted' | 'dashed'
    borderTopColor?: string
    borderTopEndRadius?: number
    borderTopLeftRadius?: number
    borderTopRightRadius?: number
    borderTopStartRadius?: number
    borderTopWidth?: number
    borderWidth?: number
    opacity?: number | AnimationType
    testID?: string
    background?: string
    direction?: 'ltr' | 'rtl'
    backgroundImage?: string
    backgroundSize?: 'cover' | 'contain'
    cursor?: string // web only
    transition?: string // web only
  }

  export interface ImageStyle extends FlexStyle, TransformsStyle {
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
    backfaceVisibility?: 'visible' | 'hidden'
    borderBottomLeftRadius?: number
    borderBottomRightRadius?: number
    backgroundColor?: string
    borderColor?: string
    borderWidth?: number
    borderRadius?: number
    borderTopLeftRadius?: number
    borderTopRightRadius?: number
    overflow?: 'visible' | 'hidden'
    overlayColor?: string
    tintColor?: string
    opacity?: number | AnimationType
  }

  export interface TextStyle extends ViewStyle {
    color?: string
    fontFamily?: string
    fontSize?: number
    fontStyle?: 'normal' | 'italic'
    fontWeight?:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900'
    letterSpacing?: number
    lineHeight?: number
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
    // @FIXME: 可选值待核实
    textAlignVertical?: 'top' | 'middle' | 'bottom' | 'center'
    textDecorationLine?:
      | 'none'
      | 'underline'
      | 'line-through'
      | 'underline line-through'
    textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed'
    textDecorationColor?: string
    textShadowColor?: string
    textShadowOffset?: { x: number; y: number }
    textShadowRadius?: number
    testID?: string
  }

  // 点击事件和触发事件返回值，决定是否继续冒泡
  export type TouchableReturn = void | boolean | Promise<void>

  export interface TouchableEvent<T> {
    name: T
    id: number
    page_x: number
    page_y: number
  }

  export interface Touchable {
    // 点击事件
    onClick?: (event: any) => TouchableReturn
    onPressIn?: (event: any) => TouchableReturn
    onPressOut?: (event: any) => TouchableReturn
    onLongClick?: (event: any) => TouchableReturn

    // 触模事件
    onTouchDown?: (event: TouchableEvent<'onTouchDown'>) => TouchableReturn
    onTouchMove?: (event: TouchableEvent<'onTouchMove'>) => TouchableReturn
    onTouchEnd?: (event: TouchableEvent<'onTouchEnd'>) => TouchableReturn
    onTouchCancel?: (event: TouchableEvent<'onTouchCancel'>) => TouchableReturn

    // h5触摸事件
    onResponderGrant?: (event: any) => void
    onResponderMove?: (event: any) => void
    onResponderRelease?: (event: any) => void
    onResponderTerminate?: (event: any) => void
  }

  // 通用hippy事件
  export interface HippyEvent<T> {
    nativeEvent: T
  }

  export interface HippyBridgeEvent<T = any> {
    code: number
    event: string
    data: T
  }

  export interface LayoutChangeEvent {
    layout: {
      x: number
      y: number
      width: number
      height: number
    }
  }

  export interface ScrollEvent {
    contentOffset: {
      x: number
      y: number
    }
  }

  export interface DisplayEvent {
    index: number
    frame: {
      x: number
      y: number
      width: number
      height: number
    }
  }
  export interface Layout {
    // web专用，用于添加css动画类
    className?: string

    onLayout?: (event: LayoutChangeEvent) => void

    // web 专用
    role?: string
  }

  // View

  // Android特有属性
  export interface ViewPropsAndroid {
    collapsable?: boolean
  }

  // IOS特有属性
  export interface ViewPropsIOS {}

  // 公共属性
  export interface ViewProps
    extends ViewPropsAndroid,
      ViewPropsIOS,
      Touchable,
      Layout {
    style?: StyleProp<ViewStyle>

    onInterceptPullUpEvent?: boolean
    onInterceptTouchEvent?: boolean

    className?: string

    accessibilityLabel?: string

    activeOpacity?: number

    accessible?: boolean

    opacity?: number

    overflow?: 'visible' | 'hidden'

    nativeName?: string

    onAttachedToWindow?: (...params: any[]) => any

    ignoreRTL?: boolean

    id?: string
  }

  class ViewComponent extends React.Component<ViewProps> {}
  // 组件API
  export class View extends ViewComponent {}

  // Image
  export interface ImagePropsAndroid {}

  export interface ImagePropsIOS {}

  export interface ImageProps
    extends ImagePropsAndroid,
      ImagePropsIOS,
      Touchable,
      Layout {
    style?: StyleProp<ImageStyle>

    onLoad?: () => void

    onLoadEnd?: () => void

    onLoadStart?: () => void

    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'

    source: {
      uri: string
    }

    defaultSource?: string

    onError?: (event: HippyEvent<{ error: string }>) => void

    capInsets?: { top: number; left: number; bottom: number; right: number }

    onProgress?: (event: HippyEvent<{ loaded: number; total: number }>) => void

    tintColor?: string | number

    ignoreRTL?: boolean
  }

  class ImageComponent extends React.Component<ImageProps> {}
  export class Image extends ImageComponent {
    static resizeMode: {
      cover: 'cover'
      contain: 'contain'
      stretch: 'stretch'
      repeat: 'repeat'
      center: 'center'
    }
    static getSize: (
      uri: string,
      success?: (width: number, height: number) => void,
      failure?: () => void,
    ) => Promise<{ width: number; height: number }>

    static prefetch: (url: string) => void
  }

  // Text
  export interface TextPropsAndroid {}

  export interface TextPropsIOS {}

  export interface TextProps
    extends TextPropsAndroid,
      TextPropsIOS,
      Touchable,
      Layout {
    style?: StyleProp<TextStyle>

    numberOfLines?: number

    onPress?: () => void

    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'

    opacity?: number

    dangerouslySetInnerHTML?: { __html: string }

    enableScale?: boolean

    // Web 专属，使用 <span/> 标签
    inline?: boolean
  }

  class TextComponent extends React.Component<TextProps> {}
  export class Text extends TextComponent {}

  // TextInput
  export interface TextInputPropsAndroid {
    underlineColorAndroid?: string
  }

  export interface TextInputPropsIOS {}

  export interface TextInputProps
    extends TextInputPropsAndroid,
      TextInputPropsIOS,
      Touchable,
      Layout {
    style?: StyleProp<TextStyle>

    autoFocus?: boolean

    defaultValue?: string

    editable?: boolean

    keyboardType?: 'default' | 'numeric' | 'password' | 'email' | 'phone-pad'

    maxLength?: number

    multiline?: boolean

    numberOfLines?: boolean

    caretColor?: string

    onFocus?: () => void

    onBlur?: () => void

    onChangeText?: (value: string) => void

    onKeyboardWillShow?: (event: { keyboardHeight: number }) => void

    onKeyboardWillHide?: () => void

    onEndEditing?: (event: { text: string }) => void

    onSelectionChange?: (
      event: HippyEvent<{ selection: { start: number; end: number } }>,
    ) => void

    placeholder?: string

    placeholderTextColor?: string

    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'

    value?: string

    // Keyboard Events
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLInputElement>
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLInputElement>
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLInputElement>
  }

  class TextInputComponent extends React.Component<TextInputProps> {}
  export class TextInput extends TextInputComponent {
    clear: () => void

    focus: () => void

    blur: () => void

    setValue: (value: string) => void
  }

  // ScrollView
  export interface ScrollViewPropsAndroid {}

  export interface ScrollViewPropsIOS {}

  export interface ScrollViewProps
    extends ScrollViewPropsAndroid,
      ScrollViewPropsIOS,
      Layout,
      Touchable {
    style?: StyleProp<ViewStyle>

    contentContainerStyle?: StyleProp<ViewStyle>

    onMomentumScrollBegin?: (event: ScrollEvent) => void

    onMomentumScrollEnd?: (event: ScrollEvent) => void

    onScroll?: (event: ScrollEvent) => void

    onScrollBeginDrag?: (event: ScrollEvent) => void

    onScrollEndDrag?: (event: ScrollEvent) => void

    scrollEventThrottle?: number

    scrollIndicatorInsets?: {
      top: number
      left: number
      bottom: number
      right: number
    }

    pagingEnabled?: boolean

    scrollEnabled?: boolean

    horizontal?: boolean

    showsHorizontalScrollIndicator?: boolean

    showsVerticalScrollIndicator?: boolean

    bounces?: boolean

    nestedScrollPriority?: 'self' | 'parent' | 'none'
  }

  class ScrollViewComponent extends React.Component<ScrollViewProps> {}
  export class ScrollView extends ScrollViewComponent {
    scrollTo: (
      option: number | { x?: number; y?: number; animated: boolean },
      y?: number,
      animated?: boolean,
    ) => void
  }

  // ListView
  export interface ListViewPropsAndroid {}

  export interface ListViewPropsIOS {}

  interface PullingEvent {
    /**
     * Dragging gap
     */
    contentOffset: number
  }

  export interface ListViewProps
    extends ListViewPropsAndroid,
      ListViewPropsIOS,
      Layout,
      Touchable {
    style: StyleProp<ViewStyle>

    dataSource?: any

    overflow?: 'scroll' | 'hidden'

    initialListSize?: number

    onEndReachedThreshold?: number

    numberOfRows: number

    bounces?: boolean

    initialContentOffset?: number

    nestedScrollPriority?: 'self' | 'parent' | 'none'

    // 此处rowData可能为数据也可能为序号，取决于是否传入dataSource属性
    renderRow: (
      rowData: any,
      sectionID: string | number,
      rowID: string | number,
      highlightRow?: boolean,
    ) => React.ReactNode

    renderPullHeader?: () => React.ReactNode
    renderPullFooter?: () => React.ReactNode
    onHeaderReleased?: () => void
    onHeaderPulling?: (evt: PullingEvent) => void

    onEndReached?: () => void
    onLoadMore?: () => void

    getRowType?: (index: number) => number

    getRowKey?: (index: number) => string | number

    onMomentumScrollBegin?: (event: ScrollEvent) => void

    onMomentumScrollEnd?: (event: ScrollEvent) => void

    onScroll?: (event: ScrollEvent) => void

    onScrollBeginDrag?: (event: ScrollEvent) => void

    onScrollEndDrag?: (event: ScrollEvent) => void

    onRowWillDisplay?: (event: DisplayEvent) => void

    /**
     * Called when a whole new list item appears
     */
    onAppear?: (index: number) => void

    /**
     * Called when a whole list item disappears
     */
    onDisappear?: (index: number) => void

    /**
     * Called when a new list item will appear(1 px)
     */
    onWillAppear?: (index: number) => void

    /**
     * Called when a new list item will disappear(1 px)
     */
    onWillDisappear?: (index: number) => void

    scrollEventThrottle?: number

    rowShouldSticky?: (index: number) => boolean

    showScrollIndicator?: boolean
    preloadItemNumber?: number
  }

  class ListViewComponent extends React.Component<ListViewProps> {}
  export class ListView extends ListViewComponent {
    scrollToIndex: (xIndex: number, yIndex: number, animated: boolean) => void

    scrollToContentOffset: (
      xOffset: number,
      yOffset: number,
      animated: boolean,
    ) => void

    collapsePullHeader: () => void
  }

  // TouchableOpacity
  export interface TouchableOpacityPropsAndroid {}

  export interface TouchableOpacityPropsIOS {}

  export interface TouchableOpacityProps
    extends ViewProps,
      TouchableOpacityPropsAndroid,
      TouchableOpacityPropsIOS {
    onPress?: (event: React.MouseEvent) => void
  }

  class TouchableOpacityComponent extends React.Component<TouchableOpacityProps> {}
  export class TouchableOpacity extends TouchableOpacityComponent {}

  export interface AnimationOption {
    mode: 'timing'
    delay?: number
    startValue: number | Animation
    toValue: number
    valueType?: '' | 'rad' | 'deg'
    duration?: number
    timingFunction?:
      | 'linear'
      | 'ease-in'
      | 'ease-out'
      | 'ease-in-out'
      | 'ease_bezier'
    repeatCount?: number | 'loop'
  }

  export namespace AsyncStorage {
    const getItem: (
      key: string,
      callback?: (error: Error, result: string) => void,
    ) => Promise<any>

    const setItem: (
      key: string,
      value: string,
      callback?: (error: Error) => void,
    ) => Promise<void>

    const removeItem: (
      key: string,
      callback?: (error: Error) => void,
    ) => Promise<null>

    const getAllKeys: (
      callback?: (error: Error, keys: string[]) => void,
    ) => Promise<string[]>

    const multiGet: (
      keys: string[],
      callback?: (errors: Array<Error>, result: string[][]) => void,
    ) => Promise<any>

    const multiSet: (
      keyValuePairs: string[][],
      callback?: (errors: Array<Error>) => void,
    ) => Promise<any>

    const multiRemove: (
      keys: string[],
      callback?: (errors: Array<Error>) => void,
    ) => Promise<any>
  }

  export class Animation {
    setRef: (containerRef: any) => void

    start: () => void

    destroy: () => void

    resume: () => void

    pause: () => void

    updateAnimation: (option: Partial<AnimationOption>) => void

    onHippyAnimationStart: (callback: () => void) => void

    onHippyAnimationEnd: (callback: () => void) => void

    onHippyAnimationCancel: (callback: () => void) => void

    onHippyAnimationRepeat: (callback: () => void) => void

    removeEventListener: () => void

    onAnimationEnd: (callback: () => void) => void

    onAnimationCancel: (callback: () => void) => void

    constructor(option: AnimationOption)
  }

  export interface AnimationSetChildren {
    animation: Animation
    follow?: boolean
  }

  export interface AnimationSetOption {
    children: AnimationSetChildren[]
    repeatCount?: number | 'loop'
  }

  export class AnimationSet extends Animation {
    constructor(option: AnimationSetOption)
  }

  type AnimationType = Animation | AnimationSet

  // ViewPager
  export interface ViewPagerPropsAndroid {}

  export interface ViewPagerPropsIOS {
    keyboardDismissMode?: 'none' | 'on-drag' | 'interactive'
  }

  export interface ViewPagerProps
    extends ViewPagerPropsAndroid,
      ViewPagerPropsIOS,
      Touchable,
      Layout {
    style?: StyleProp<ViewStyle>

    initialPage?: number

    scrollEnabled?: boolean

    onPageSelected?: (event: { position: number }) => void

    onPageScroll?: (event: { position: number; offset: number }) => void

    onPageScrollStateChanged?:
      | ((event: { pageScrollState: string }) => void)
      | ((event: string) => void)

    bounces?: boolean
  }

  class ViewPagerComponent extends React.Component<ViewPagerProps> {}
  export class ViewPager extends ViewPagerComponent {
    setPage: (index: number) => void

    setPageWithoutAnimation: (index: number) => void
  }

  // Navigator
  export interface NavigatorPropsAndroid {}

  export interface NavigatorPropsIOS {}

  export interface Route {
    routeName: string
    component: any
    initProps: any
  }

  export type NavigatorDireaction = 'left' | 'right' | 'top' | 'bottom'

  export interface NavigatorProps
    extends NavigatorPropsAndroid,
      NavigatorPropsIOS,
      Touchable,
      Layout {
    style?: StyleProp<ViewStyle>

    initialRoute: Partial<Route & { animated?: boolean }>
  }

  class NavigatorComponent extends React.Component<NavigatorProps> {}
  export class Navigator extends NavigatorComponent {
    clear: () => void

    getCurrentPage: () => Route

    pop: (option?: { toDirection?: NavigatorDireaction }) => void

    push: (
      route: Route & {
        fromDirection?: NavigatorDireaction
        animated?: boolean
      },
    ) => void
  }

  // RefreshWrapper
  export interface RefreshWrapperPropsAndroid {}

  export interface RefreshWrapperPropsIOS {}

  export interface RefreshWrapperProps
    extends RefreshWrapperPropsAndroid,
      RefreshWrapperPropsIOS,
      Touchable,
      Layout {
    style?: StyleProp<ViewStyle>

    // hippy-react-web中独有的属性
    displayInWeb?: boolean

    onRefresh?: () => void

    getRefresh?: (status: any) => any

    bounceTime?: number
  }

  class RefreshWrapperComponent extends React.Component<RefreshWrapperProps> {}
  export class RefreshWrapper extends RefreshWrapperComponent {
    refreshCompleted: () => void

    startRefresh: () => void
  }

  // Modal
  export interface ModalPropsAndroid {}

  export interface ModalPropsIOS {
    primaryKey?: string

    onDismiss?: () => void
  }

  export interface ModalProps
    extends ModalPropsAndroid,
      ModalPropsIOS,
      Touchable,
      Layout {
    style?: StyleProp<ViewStyle>

    animated?: boolean

    animationType?: 'none' | 'slide' | 'fade' | 'slide_fade'

    supportedOrientations?: (
      | 'portrait'
      | 'portrait-upside-down'
      | 'landscape'
      | 'landscape-left'
      | 'landscape-right'
    )[]

    immersionStatusBar?: boolean

    darkStatusBarText?: boolean

    onShow?: () => void

    onOrientationChange?: () => void

    onRequestClose?: () => void

    transparent?: boolean

    visible?: boolean

    children?: React.ReactNode
  }

  class ModalComponent extends React.Component<ModalProps> {}
  export class Modal extends ModalComponent {}

  // BackAndroid
  export namespace BackAndroid {
    const addListener: (callback: () => boolean) => { remove: () => void }

    const exitApp: () => void

    const removeListener: (callback: () => boolean) => void
  }

  // Clipboard
  export namespace Clipboard {
    const getString: () => Promise<string>

    const setString: (text: string) => void
  }

  // NetworkModule
  export namespace NetworkModule {
    const getCookies: (url: string) => Promise<string>

    const setCookie: (
      url: string,
      keyValue: string,
      expires?: string,
    ) => Promise<void>
  }

  // NetInfo
  export namespace NetInfo {
    const addEventListener: (
      eventName: 'change',
      callback: (info: any) => void,
    ) => void

    const fetch: () => any // TODO

    const removeEventListener: (
      eventName: 'change',
      callback: () => void,
    ) => void
  }

  // PixelRatio
  export namespace PixelRatio {
    const get: () => number

    const set: (dims: number) => void
  }

  // export default
  export namespace HippyReact {
    const version: string
  }

  /**
   * ------------------------------------------------
   * --- 基于 @tencent/types-hippy-react 的类型补充 ---
   * ------------------------------------------------
   */

  export function callNative(
    moduleName: string,
    methodName: string,
    ...args: any[]
  ): void

  /**
   * -------------------
   * HippyEventEmitter
   * -------------------
   */

  class HippyEventListener {
    eventName: string
    listenerIds: number[]
    constructor(event: string)
    addCallback(handleFunc: Function, callContext?: any): number
    removeCallback(callbackId: number): void
    unregister(): void
    getSize(): number
  }
  interface EventEmitterRevoker {
    callback: number
    bindListener: HippyEventListener
    constructor(id: number, listener: HippyEventListener)
    remove(): void
  }
  class EventEmitterRevoker implements EventEmitterRevoker {}
  interface EventListeners {
    [eventName: string]: HippyEventListener
  }
  export class HippyEventEmitter {
    hippyEventListeners: EventListeners
    constructor(sharedListeners?: EventListeners)
    sharedListeners(): EventListeners
    addListener(
      event: string,
      callback: (data?: any) => void,
      context?: any,
    ): EventEmitterRevoker
    removeAllListeners(event: string): void
    /* eslint-disable-next-line class-methods-use-this */
    emit(event: string, param: any): boolean
    listenerSize(event: string): number
  }

  /**
   * -------------------
   * Focusable
   * -------------------
   */

  interface FocusableProps {
    requestFocus?: boolean
    style?: StyleProp<ViewStyle>
    focusStyle?: StyleProp<ViewStyle>
    noFocusStyle?: StyleProp<ViewStyle>
    nextFocusDownId?: string
    nextFocusUpId?: string
    nextFocusLeftId?: string
    nextFocusRightId?: string
    onClick?: Touchable['onClick']
    onFocus?(evt: FocusEvent): void
  }
  interface FocusableState {
    isFocus: boolean
  }

  export class Focusable extends React.Component<
    FocusableProps,
    FocusableState
  > {}

  /**
   * -------------------
   * UIManagerModule
   * -------------------
   */

  export interface LayoutContent {
    /**
     * The position X of component
     */
    x: number
    /**
     * The position Y of component
     */
    y: number
    /**
     * The width of component
     */
    width: number
    /**
     * The height of component
     */
    height: number
  }

  interface NodeMeta {
    skipAddToDom?: boolean
    component: {
      name?: string
      skipAddToDom?: boolean
    }
  }

  export interface ViewNode {
    nodeId: number

    // Component meta information, such as native component will use.
    meta: NodeMeta

    // Will change to be true after insert into Native dom.
    _isMounted: boolean

    // Index number in children, will update at traverseChildren method.
    index: number

    // Relation nodes.
    childNodes: ViewNode[]

    parentNode: ViewNode | null

    prevSibling: ViewNode | null

    nextSibling: ViewNode | null
  }
  interface Attributes {
    [key: string]: string | number | true | undefined
  }

  export interface HippyElement extends ViewNode {
    tagName: string

    id: string

    style: StyleSheet

    attributes: Attributes
  }

  export interface Element extends HippyElement {}

  export class UIManagerModule {
    /**
     * Get the nodeId from FiberNode ref.
     *
     * @param {Fiber} ref - ref instance.
     */
    static getElementFromFiberRef(
      ref: ReactReconciler.Fiber,
    ): HippyElement | null
    /**
     * Get the nodeId number by ref
     * Most use in the module access components.
     *
     * @param {string | Fiber | Fiber} ref - ref instance, reference to the class is recommend
     */
    static getNodeIdByRef(
      ref: string | ReactReconciler.Fiber | HippyElement,
    ): number
    /**
     * Component access UI functions
     *
     * @param {ViewNode} ref - Element ref that have nodeId.
     * @param {string} funcName - static name.
     * @param {Array} option - fucntion options.
     * @param {function} callback - get result from callUIFunction.
     */
    static callUIFunction(
      ref: Element | ReactReconciler.Fiber,
      funcName: string,
      ...options: any[]
    ): void
    /**
     * Get the ref position and size in the visible window.
     * > For the position and size in the layout, use onLayout event.
     *
     * @param {Fiber | Element} ref - ref that need to measure.
     * @param {function} callBack
     */
    static measureInWindow(
      ref: ReactReconciler.Fiber,
      callback?: (layout: LayoutContent) => void,
    ): Promise<LayoutContent>
    /**
     * Get the ref position and size in the visible window.
     * > For the position and size in the layout, use onLayout event.
     *
     * @param {Fiber | Element} ref - ref that need to measure.
     * @param {function} callBack
     */
    static measureInAppWindow(
      ref: ReactReconciler.Fiber,
      callback?: (layout: LayoutContent) => void,
    ): Promise<LayoutContent>
  }

  /**
   * -------------------
   * WebView
   * -------------------
   */

  interface LoadEvent {
    url: string
  }
  interface WebViewProps {
    /**
     * WebView loads url
     */
    source?: {
      uri: string
      /**
       * Custom user agent.
       */
      userAgent?: string
      /**
       * Request method
       */
      method?: 'get' | 'post'
    }

    style?: StyleProp<ViewStyle>

    /**
     * Invoke when web page loaded.
     *
     * @param {Object} evt - Load event data
     * @param {string} evt.url - Web page url
     */
    onLoad?(evt: LoadEvent): void
    /**
     * Invoke when web page start to load.
     *
     * @param {Object} evt - Load event data
     * @param {string} evt.url - Web page url
     */
    onLoadStart?(evt: LoadEvent): void
    /**
     * Invoke when web page load completed
     *
     * @param {Object} evt - Load event data
     * @param {string} evt.url - Web page url
     */
    onLoadEnd?(evt: LoadEvent): void
  }
  /**
   * System built-in WebView
   *
   * For iOS it uses WKWebView, for Android it uses Webkit built-in.
   */
  export function WebView(props: WebViewProps): JSX.Element

  type DataItem = any
  export interface WaterfallViewProps {
    // Specific number of waterfall column
    numberOfColumns: number

    // Number of total items
    numberOfItems: number

    // Inner content padding
    contentInset?: {
      top?: number
      left?: number
      bottom?: number
      right?: number
    }
    style?: StyleProp<ViewStyle>

    // Horizontal space between columns
    columnSpacing: number

    // Vertical margin between items
    interItemSpacing: number

    // Number of items to preload on reaching the listview end
    preloadItemNumber?: number

    // Declare whether PullHeader view exists
    containPullHeader?: boolean

    // Declare whether PullFooter view exists
    containPullFooter?: boolean

    // Scroll to offset after WaterfallView with data rendered
    initialContentOffset?: number

    // Declare whether banner view exists
    containBannerView?: boolean

    scrollEventThrottle?: number

    // Return banner view element
    renderBanner?(): React.ReactElement

    /**
     * Passing the data and returns the row component.
     *
     * @param {Object} data - Data for row rendering
     * @returns {(React.Component | undefined)}
     */
    renderItem?(data: DataItem): React.ReactElement

    renderPullHeader?(): React.ReactElement

    renderPullFooter?(): React.ReactElement

    /**
     * Each row have different type, it will be using at render recycle.
     *
     * @param {number} index - Index Of data.
     * @returns {string}
     */
    getItemType?(index: number): number

    /**
     * Returns the style for specific index of row.
     *
     * @param {number} index - Index Of data.
     * @returns {Object}
     */
    getItemStyle?(index: number): StyleProp<ViewStyle>

    /**
     * Specific the key of row, for better data diff
     * More info: https://reactjs.org/docs/lists-and-keys.html
     *
     * @param {number} index - Index Of data.
     * @returns {string}
     */
    getItemKey?(index: number): string

    // Called when the WaterfallView is scrolling to bottom.
    onEndReached?(): void

    /**
     *  Called when the row first layout or layout changed.
     *
     * @param {Object} evt - Layout event data
     * @param {number} evt.nativeEvent.x - The position X of component
     * @param {number} evt.nativeEvent.y - The position Y of component
     * @param {number} evt.nativeEvent.width - The width of component
     * @param {number} evt.nativeEvent.hegiht - The height of component
     * @param {number} index - Index of data.
     */
    onItemLayout?(evt: LayoutChangeEvent, index: number): void

    /**
     * Called when user scrolls WaterfallView
     *
     * @param {Object} evt - onScroll event
     * @param {number} evt.startEdgePos - Scrolled offset of List top edge
     * @param {number} evt.endEdgePos - Scrolled offset of List end edge
     * @param {number} evt.firstVisibleRowIndex - Index of the first list item at current visible screen
     * @param {number} evt.lastVisibleRowIndex - Index of the last list item at current visible screen
     * @param {Object[]} evt.visibleRowFrames - Frame info of current screen visible items
     * @param {number} evt.visibleRowFrames[].x - Current item's horizontal offset relative to ListView
     * @param {number} evt.visibleRowFrames[].y - Current item's vertical offset relative to ListView
     * @param {number} evt.visibleRowFrames[].width - Current item's width
     * @param {number} evt.visibleRowFrames[].height - Current item's height
     */
    onScroll?(evt: {
      startEdgePos: number
      endEdgePos: number
      firstVisibleRowIndex: number
      lastVisibleRowIndex: number
      visibleRowFrames: Object
    }): void

    // Called when user pulls the ListView down
    onHeaderPulling?(): void

    // Called when user release the pulling WaterfallView
    onHeaderReleased?(): void

    // Called when user swipe up WaterfallView to get more data on reaching the footer
    onFooterPulling?(): void

    // Called when user release the getting-more-data WaterfallView
    onFooterReleased?(): void

    // Called on items exposed
    onExposureReport?(): void

    // Called on waterfall ready
    onInitialListReady?(): void
  }

  export interface WaterfallViewItemProps {
    onLayout?: (e: any) => void
    type?: number | void | undefined
    key: string
    style: object
  }

  class WaterfallViewComponent extends React.Component<WaterfallViewProps> {}
  export class WaterfallView extends WaterfallViewComponent {
    public scrollToIndex({
      index,
      animated,
    }: {
      index: number
      animated: boolean
    }): void
    public scrollToContentOffset({
      xOffset,
      yOffset,
      animated,
    }: {
      xOffset: number
      yOffset: number
      animated: boolean
    }): void
    expandPullHeader(): void
    collapsePullHeader(options: object): void
    expandPullFooter(): void
    collapsePullFooter(): void
    handleInitialListReady(): void
  }
  type logFn = (...value: string[]) => void
  interface ConsoleModule {
    log: logFn
    info: logFn
    warn: logFn
    error: logFn
  }
  export const ConsoleModule: ConsoleModule

  export default HippyReact
}
