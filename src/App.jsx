import Paint from "./topics/Paint"

import HOC from "./topics/HOC"

import { PureExample1, PureExample2, PureExample3, PureExample4 } from "./topics/Pure"

import RenderProp from "./topics/RenderProp"

import ClassProps from "./topics/props/ClassProps"
import FunctionProps from "./topics/props/FunctionProps"

import ReactPortal from "./topics/Portal"

import ClassCallbackRef from "./topics/ref/ClassCallbackRef"
import ClassStringRef from "./topics/ref/ClassStringRef"
import FunctionalRef from "./topics/ref/FunctionRef"

import ForwardRef from "./topics/ForwardRef"

import Memo from "./topics/Memo"

import ErrorBoundary from "./topics/ErrorBoundary"

import SuspenseAndLazy from "./topics/suspenseANdLazy/SuspenseAndLazy"

import ContextApi from "./topics/Context"

function App() {

  return (
    <>
      {/* paint DOM */}
      {/* <Paint /> */}


      {/* HOC */}
      {/* <HOC /> */}

      {/* Pure component */}
      {/* <PureExample1 />
      <PureExample2 />
      <PureExample3 /> */}
      {/* <PureExample4 /> */}
      

      {/* render prop */}
      {/* <RenderProp /> */}

      {/* props */}
      {/* <ClassProps /> */}
      {/* <FunctionProps /> */}

      {/* react portal */}
      {/* <ReactPortal /> */}

      {/* ref */}
      {/* <ClassStringRef /> */}
      {/* <ClassCallbackRef /> */}
      {/* <FunctionalRef /> */}

      {/* forward ref */}
      {/* <ForwardRef /> */}

      {/* memo */}
      <Memo />

      {/* Error Boundary */}
      {/* <ErrorBoundary /> */}

      {/* Suspense and lazy */}
      {/* <SuspenseAndLazy />  */}

      {/* context */}
      {/* <ContextApi /> */}
    </>
  )
}

export default App
