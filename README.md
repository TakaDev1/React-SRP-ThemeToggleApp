# React-SRP-ThemeToggleApp

Reactのカスタムフックを使用して、テーマ切り替え機能を実装した練習用アプリです。

テーマの状態管理・切り替えロジックとUIコンポーネントを分離し、**SRP（Single Responsibility Principle：単一責任の原則）**を意識して設計しています。

## 概要

ライトモードとダークモードを切り替えられるシンプルなテーマ切り替えアプリです。

テーマの状態管理と切り替え処理はカスタムフック `useTheme` に切り出し、`ThemeToggle` コンポーネントはUIの表示に集中させています。

## 使用技術

* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Vite

## 機能

* ライトモード / ダークモードの切り替え
* 現在のテーマの表示
* shadcn/uiのButtonを使用したUI

## プロジェクト構成

```text
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   └── ThemeToggle.tsx
│
├── hooks/
│   └── useTheme.ts
│
├── types/
│   └── Theme.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## SRPによる責務分離

### useTheme.ts

テーマの状態と切り替えロジックを担当します。

```text
theme
  ↓
現在のテーマを管理

handleToggleTheme()
  ↓
light ⇔ dark を切り替える
```

### ThemeToggle.tsx

UIの表示を担当します。

```text
ThemeToggle
├── 現在のテーマを表示
└── テーマ切り替えボタンを表示
```

### Theme.ts

テーマの型を定義します。

```ts
export type Theme = "light" | "dark";
```

## データフロー

```text
User
 ↓
Change Theme Button
 ↓
handleToggleTheme()
 ↓
useTheme
 ↓
setTheme()
 ↓
theme
 ↓
ThemeToggle
 ↓
UI更新
```

## UI

テーマに応じてTailwind CSSのクラスを切り替えます。

```text
light
↓
明るい背景 + 暗い文字

dark
↓
暗い背景 + 明るい文字
```

## 学習ポイント

* カスタムフックによるロジックの分離
* `useState` による状態管理
* `"light" | "dark"` によるUnion型
* Tailwind CSSによる条件付きスタイリング
* shadcn/uiによるUIコンポーネントの利用
* SRPを意識したコンポーネント設計

## SRPの設計イメージ

```text
useTheme
  ↓
状態・ロジック

ThemeToggle
  ↓
UI

Theme
  ↓
型定義
```

それぞれの責務を分離することで、コンポーネント側のコードをシンプルにし、状態管理ロジックを再利用しやすい構成にしています。

## まとめ

このアプリでは、テーマ切り替えというシンプルな機能を題材に、**状態管理ロジックとUIを分離する設計**を実践しました。

特にカスタムフック `useTheme` にテーマの状態と切り替え処理をまとめることで、`ThemeToggle` はUIの責務に集中できる構成になっています。
