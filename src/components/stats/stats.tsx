import "./stats.css"

function Stats() {
  return (
    <div className="icon-area">
      <div className="circle-1">
        <div className="circle-2">
          <i className="ri-mail-open-line"></i>
        </div>
        <div className="small-icon">
          <i className="ri-bar-chart-fill"></i>
        </div>
      </div>
      <p className="p1">7.4%</p>
      <p className="p2">Property Return Rate</p>
    </div>
  );
}

export default Stats;
