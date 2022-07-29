import React, {useState} from "react";
import PropTypes from "prop-types";

import {useSubscription} from "@apollo/client";
import {RamQueryTemplate} from "../../utils/queries";
import RamPanel from "../ram_panel";


const Ram = (props) => {
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(undefined);
	const [ramUsage, setRamUsage] = useState({});

	useSubscription(RamQueryTemplate, {
		variables: {
			units: "GB"
		},
		onSubscriptionData: ({subscriptionData}) => {
			if(subscriptionData.error) {
				setError(error);
			}
			else {
				const ramUsage = subscriptionData.data.ramUsage;
				setRamUsage(ramUsage);
				setLoading(subscriptionData.loading);
			}
		}

	});

	if (error) {
		console.error(error);
		return <div>Error</div>;
	}

	return (
		isLoading
			? <div>Loading ...</div>
			:<RamPanel {...ramUsage}/>
	);

};

export {Ram as RamUnstyled};
