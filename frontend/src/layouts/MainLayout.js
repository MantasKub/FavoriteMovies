

function MainLayout(props) {
  return (
    <>
      <div className="container">
        {props.children}
      </div>
    </>
  )
}

export default MainLayout;