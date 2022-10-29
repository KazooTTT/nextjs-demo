# nextjs-portal

跟着掘金小册【SSR 实战：官网开发指南】实践的代码

（小册地址：<https://juejin.cn/book/7137945369635192836>）

内容：使用next实现公司官网
另一部分：
[ssr-server-study](https://github.com/KazooTTT/ssr-server-study)

## module css hint

using the ts plugin typescript-plugin-css-modules ↓

`pnpm install typescript-plugin-css-modules --save-dev`
add the vscode settings:

``` json
{
    "typescript.tsserver.pluginPaths": ["typescript-plugin-css-modules"],
    "typescript.tsdk": "node_modules/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## inspect the server side(node)

refs:
<https://nextjs.org/docs/advanced-features/debugging>
<https://nodejs.org/en/docs/guides/debugging-getting-started/>

```json
// package.json
{   
    ...
    "debugger": "cross-env NODE_OPTIONS='--inspect' next dev"
}
```
