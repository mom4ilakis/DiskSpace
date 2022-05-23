import React from "react";
import ReactDOM from "react-dom/client";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

import "./index.css";
import App from "./components/main_page/index";


const root = ReactDOM.createRoot(document.getElementById("root"));

const apolloClient = new ApolloClient({
	uri: "localhost:8081/graphql",
	cache: new InMemoryCache()
});

root.render(
	<React.Fragment>
		<ApolloProvider client={apolloClient}>
			<App/>
		</ApolloProvider>
	</React.Fragment>
);

