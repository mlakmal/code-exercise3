import { ReactNode } from 'react';

export function Tab(props: { children?: ReactNode; title: string }) {
  return <div>{props.children}</div>;
}

export function Tabs(props: { children?: ReactNode }) {
  return <div>{props.children}</div>;
}
