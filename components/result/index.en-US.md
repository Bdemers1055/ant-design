---
type: Feedback
category: Components
title: Result
cols: 1
subtitle:
---

Used to feed back the results of a series of operational tasks.

## When To Use

Use when important operations need to inform the user to process the results and the feedback is more complicated.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| title | title string | ReactNode | - |
| subTitle | subTitle string | ReactNode | - |
| status | result status,decide icons and colors | `'success' | 'error' | 'info' | 'warning'` | 'info' |
| icon | custom back icon  | string \| ReactNode | info |
| extra | operating area | ReactNode | - |