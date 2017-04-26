import * as React from "react";
import * as ReactDOM from "react-dom";

import { Modal } from 'carbon-components'
Modal.init();


import { Layout } from "./components/Layout";

ReactDOM.render(
    <Layout />,
    document.getElementById("example")

);