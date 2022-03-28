import { RootStackParamList } from '../routes/root.routes';

declare module '*.svg?inline' {
    const content: any
    export default content
}
  
declare module '*.svg' {
    const content: any
    export default content
}

declare module '*.png' {
    const content: any
    export default content
}

declare module '*.jpg' {
    const content: any
    export default content
}


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}