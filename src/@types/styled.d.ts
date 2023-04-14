import { darkTheme } from '@/styles/Theme';
import 'styled-components';

type CustomTheme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
