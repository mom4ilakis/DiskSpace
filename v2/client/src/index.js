import React from "react";
import ReactDOM from "react-dom/client";
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split} from "@apollo/client";

import "./index.css";
import App from "./components/main_page/index";
import {baseURL} from "./utils/api";
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";
import {getMainDefinition} from "@apollo/client/utilities";

const graphqlULR = "//localhost:8081" + "/graphql";

const wslink = new GraphQLWsLink(createClient({url: "ws:" + graphqlULR}));
const httpLink = new HttpLink({
	uri: graphqlULR
});
const root = ReactDOM.createRoot(document.getElementById("root"));

const splitLink = split(
	({query}) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wslink,
	httpLink
);

const apolloClient = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache({
		addTypename: false
	})
});

root.render(
	<React.Fragment>
		<ApolloProvider client={apolloClient}>
			<App/>
		</ApolloProvider>
	</React.Fragment>
);

