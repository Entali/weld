import React from 'react';
import './VerticalSpinner.scss';

function VerticalSpinner() {
  return (
      <div className="VerticalSpinner">
        <span className="VerticalSpinner__el" />
        <span className="VerticalSpinner__el" />
        <span className="VerticalSpinner__el" />
        <span className="VerticalSpinner__el" />
      </div>
  );
}

export {VerticalSpinner};
