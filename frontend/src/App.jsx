import Routers from "./Routes"

function App() {
  return (
    <>
      <div className="dark">
        <div className="bg-light-bg dark:bg-dark-bg ">
          <Routers/>
        </div>
      </div>
    </>
  )
}

export default App