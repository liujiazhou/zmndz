declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '~icons/*' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

// 添加全局变量声明
declare const REACT_APP_DEPLOY_ENV: string
declare const LATEST_COMMIT_HASH: string
