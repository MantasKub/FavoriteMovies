
function Loading({ loading }) {


  return loading &&
    <div className="loading">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
}

export default Loading;