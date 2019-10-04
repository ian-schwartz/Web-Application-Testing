import React from 'react';

// provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.

const Dashboard = (props) => {
    
    return (
        <div className="buttons">
          <button onClick={ props.addStrike }>Strike</button>
          <button onClick={ props.addBall }>Ball</button>
          <button onClick={ props.foulBall }>Foul</button>
          <button onClick={ props.hit }>Hit</button>
        </div>
  );
}

export default Dashboard;