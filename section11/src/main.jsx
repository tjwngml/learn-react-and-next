import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// BrowserRouter 컴포넌트는 브라우저의 현재주소를 저장 및 감지하는 역할을 함
// App의 모든 자식 컴퍼넌트들이 다 현재의 주소를 불러와서 이용 가능, 주소 변경 감지도 가능.
// BrowserRouter의 모든 데이터들은 Context 객체의 프로바이더 컴퍼넌트를 이용해서 우리가 만드는 모든 컴포넌트에 공급
// 페이지 라우팅과 관련된 모든 데이터를 손쉽게 공급받아서 사용 가능
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
