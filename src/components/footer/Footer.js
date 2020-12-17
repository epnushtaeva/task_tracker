import React from "react";
import "./Footer.css";

export class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <footer className="page-footer indigo lighten-1">
                <div className="container">
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2020 Copyright Text
                    </div>
                </div>
            </footer>
        );
    }
}