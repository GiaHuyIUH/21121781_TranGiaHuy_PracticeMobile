// App.js
import React from 'react';
import { RecoilRoot } from 'recoil';
import RootNavigator from './navigator/RootNavigator';

export default function App() {
  return (
    <RecoilRoot>
      <RootNavigator />
    </RecoilRoot>
  );
}
