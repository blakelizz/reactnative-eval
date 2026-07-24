// react-native-vector-icons v10 ne fournit pas de types TypeScript (types Flow uniquement).
// On déclare ici les modules d'icônes utilisés dans l'app.
declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import { Component } from 'react';
  import { TextProps } from 'react-native';

  export interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  export default class Icon extends Component<IconProps> {}
}
