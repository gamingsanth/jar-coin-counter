import "./styles/jar.css";

export default ({ counter }) => {
    return (
        <div>
            <div className="animation-container">
                <div className="y-axis-container">
                    <div className="container">
                        <div className="flash"></div>
                        <div className="coin side">

                            <div className="shine" style={{transform : "rotate(-30deg)"}}></div>
                        </div>
                        {/* <div className="side-coin"></div> */}
                        <div className="coin">
                            <div><h1 className=".counter">{counter}</h1></div>
                            <div className="shine"></div>
                        </div>

                    </div>
                </div>
                <div className="shadow"></div>
            </div>
        </div>
    );
}