---
slug: 2021-02-22-created-blog
title: Docusaurusでブログを作成しました
author: nossa
author_title: web application devlopper
author_url: https://github.com/sugu-sano
author_image_url: https://avatars.githubusercontent.com/u/70303693?s=60&v=4
tags: [Docusaurus, React, volta, Node.js, yarn, Markdown]
---

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
  // 略...
}
```
