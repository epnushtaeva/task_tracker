import React from "react";
import "./Header.css";

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo lighten-1">
                    <ul className="right">
                        <li><a href="/tasks">Список задач</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}