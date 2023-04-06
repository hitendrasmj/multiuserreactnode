import React from 'react';
import { useSelector } from 'react-redux';

const DashboardSub = () => {
 
  return (
    <div id="content">
		{/* BEGIN BLANK SECTION */}
		<section>
			<div className="section-header">
				<ol className="breadcrumb">
					<li><a href="/dashboard">Home</a></li>
					<li className="active">Dashboard</li>
				</ol>
			</div>{/*end .section-header */}
			<div className="section-body">
			</div>{/*end .section-body */}
		</section>
		{/* BEGIN BLANK SECTION */}
	</div>
  )
}

export default DashboardSub;