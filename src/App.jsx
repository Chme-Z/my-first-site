import { useState } from 'react'
import './App.css'

function App() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="container">
      <div className="card">
        <h1>我是靓仔 😎</h1>

        <p>一个正在学习前端开发的大学生</p>

        {showMore && (
          <p>我喜欢打篮球、健身，还在努力学技术 💪</p>
        )}

        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "收起介绍" : "了解更多"}
        </button>
      </div>
    </div>
  )
}

export default App