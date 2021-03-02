---
slug: 2021-02-22-created-blog
title: Docusaurusでブログを作成しました
author: nossa
author_title: web application devlopper
author_url: https://github.com/sugu-sano
author_image_url: https://avatars.githubusercontent.com/u/70303693?s=60&v=4
tags: [Docusaurus, React, volta, Node.js, yarn, Markdown]
---

<svg id="Capa_1" enable-background="new 0 0 512 512" height="256" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m512 45c0-24.853-20.147-45-45-45h-422c-24.853 0-45 20.147-45 45v90c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15z" fill="#7d81e7"/><path d="m467 0h-211v150h241c8.284 0 15-6.716 15-15v-90c0-24.853-20.147-45-45-45z" fill="#5e69e2"/><g><g><path d="m81 82.5h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#fff79f"/></g><g><path d="m161 82.5h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#90e36a"/></g><g><path d="m241 82.5h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#ff80a7"/></g></g><g><path d="m0 135v332c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-332z" fill="#f9f9f9"/></g><path d="m256 512h211c24.813 0 45-20.187 45-45v-332h-256z" fill="#e2dff4"/></g><g><g><g><path d="m173.078 377.005c-10.979 0-11.626-.111-12.339-.233-4.801-.823-8.311-4.985-8.311-9.856v-99.916c0-5.523 4.478-10 10-10s10 4.477 10 10v90c6.774-.001 16.206-.036 24.962-.084h.057c5.497 0 9.968 4.44 9.999 9.944.03 5.522-4.421 10.024-9.944 10.056-11.356.063-19.104.089-24.424.089z" fill="#0a789b"/></g><path d="m116.811 309.839c4.165-5.525 6.638-12.393 6.638-19.829 0-18.202-14.809-33.01-33.01-33.01h-29.047c-5.522 0-10 4.477-10 10v100c0 2.66 1.06 5.21 2.944 7.087 1.875 1.866 4.412 2.913 7.056 2.913h.044c.268-.001 26.811-.119 34.076-.119 20.356 0 36.917-16.561 36.917-36.917 0-12.427-6.179-23.431-15.618-30.125zm-26.372-32.839c7.174 0 13.01 5.836 13.01 13.01s-5.836 13.01-13.01 13.01c-2.139 0-19.048.027-19.048.027v-26.047zm5.073 79.881c-4.385 0-15.704.042-24.12.076v-33.877c2.708-.011 24.12-.032 24.12-.032 9.328 0 16.917 7.589 16.917 16.917s-7.589 16.916-16.917 16.916z" fill="#0a789b"/><g><path d="m407.446 377c-33.084 0-60-26.916-60-60s26.916-60 60-60c12.021 0 23.624 3.545 33.553 10.252 4.576 3.092 5.78 9.308 2.688 13.884-3.091 4.577-9.31 5.779-13.884 2.689-6.61-4.465-14.341-6.826-22.357-6.826-22.056 0-40 17.944-40 40s17.944 40 40 40c20.124 0 29.573-14.565 32.298-30h-19.051c-5.522 0-10-4.477-10-10s4.478-10 10-10h29.915c5.522 0 10 4.477 10 10 0 35.328-21.861 60.001-53.162 60.001z" fill="#08475e"/></g><g><path d="m267.446 377c-33.084 0-60-26.916-60-60s26.916-60 60-60 60 26.916 60 60-26.916 60-60 60zm0-100c-22.056 0-40 17.944-40 40s17.944 40 40 40 40-17.944 40-40-17.944-40-40-40z" fill="#0a789b"/></g><path d="m267.446 257c-3.915 0-7.739.389-11.446 1.108v20.569c3.629-1.086 7.469-1.677 11.446-1.677 22.056 0 40 17.944 40 40s-17.944 40-40 40c-3.977 0-7.818-.592-11.446-1.677v20.569c3.708.719 7.532 1.108 11.446 1.108 33.084 0 60-26.916 60-60s-26.916-60-60-60z" fill="#08475e"/></g></g></g></svg>

## 前書き

前から開発用の個人ブログを作りたいと思っていて、`React`でブログを作成しました。

`React`製の静的サイトジェネレータといえば`Gatsby`が思い浮かびますが、`Docusaurus`を使用しました。

`Gatsby`は以前に使ってみて、ただマークダウンで書けるブログを作るだけならオーバースペックかなと感じていました。

> 他のツールとの比較
> <https://v2.docusaurus.io/docs/#gatsby>

同じ用にマークダウンで書ける物がいいなと考えていたところ、下記の記事を拝見して`Docusaurus`でブログを作成することに決めました。

> ドキュメント作成ツールの決定版！Markdown + React の体験を Docusaurus で
> <https://zenn.dev/ningensei848/articles/docusaurus_intro>

<!--truncate-->

## 作成した手順

プロジェクトを初期化します。

<https://v2.docusaurus.io/docs/installation#scaffold-project-website>

```sh
npx @docusaurus/init@latest init dev-blog classic
```

忘れないうちに`git`管理下に置きます。

```sh
cd dev-blog
git init
```

`.gitignore`は最初から作成されていました。

```.gitignore
# Dependencies
/node_modules

# Production
/build

# Generated files
.docusaurus
.cache-loader

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

必須ではありませんが、型がないと不安なので`TypeScript`サポートを有効にします。

<https://v2.docusaurus.io/docs/typescript-support>

`yarn`で必要なパッケージを追加します。

```sh
yarn add --dev typescript @docusaurus/module-type-aliases @types/react @types/react-router-dom @types/react-helmet @tsconfig/docusaurus
```

`tsconfig.json`を新規作成します。

CIでのTypeScriptコンパイラによる型チェックに使用したり、vscodeのサポートを得られたりするようです。

（`Docusaurus`自身は`tsconfig.json`を使用しないようです。）

```json
{
  "extends": "@tsconfig/docusaurus/tsconfig.json",
  "include": ["src/"]
}
```

プロジェクトで使用する`Node.js`と`yarn`のバージョンを固定しておきます。

<https://dev.classmethod.jp/articles/node-version-volta/>

```sh
volta pin node@14.15.5
volta pin yarn@1.22.5
```

Node.jsのバージョン管理には`volta`を使用しています。

Rust製で高速に動作することが特徴です。

<https://docs.volta.sh/guide/getting-started>

準備ができたのでこの記事をプレビューしてみます。

```sh
yarn start
```

![image](https://user-images.githubusercontent.com/70303693/108722327-5f3ed780-7566-11eb-9777-71971dbbe8ae.png)

`npm scripts`を確認すると`yarn start`で`docusaurus start`が呼ばれているようです。

```json
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "serve": "docusaurus serve",
    "clear": "docusaurus clear"
  },
```

`Lighthouse`でパフォーマンスも確認してみたいと思います。

`yarn start`のプロセスを止めて下記コマンドを入力します。

```sh
yarn build
yarn serve
```

ポート未指定では`http://localhost:3000`でホストされるようです。

パフォーマンスは申し分ないようです。

![image](https://user-images.githubusercontent.com/70303693/108724140-5b13b980-7568-11eb-83df-2da4738e5195.png)

## 次回の予定

デプロイ設定からやっていきたいと思います。

`docusaurus.config.js`にデプロイ設定を書くだけで簡単にデプロイできるようです。

```js
module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
}
```
