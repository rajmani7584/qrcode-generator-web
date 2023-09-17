import { useState } from "react";

export default function WifiComponent(props) {
    const setData = props.options.setData;
    const [ssid, setSsid] = useState();
    const [security, setSecurity] = useState("nopass");
    const [password, setPassword] = useState();
    const [hidden, setHidden] = useState(false);
    return (
        <>
            <section className="DataType">
                <label htmlFor="ssid">SSID: </label>
                <input type="text" id="ssid" onChange={(el) => setSsid(el.target.value)} />
                <br /><br />
                <label htmlFor="security">Security Type:</label>
                <select id="security" value={security} onChange={(el) => setSecurity(el.target.value)}>
                    <option value="nopass">None</option>
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WPA3">WPA3</option>
                </select>
                <br /><br />
                <label htmlFor="hidden">Hidden:</label>
                <input type="checkbox" id="hidden" checked={hidden} onChange={(el) => setHidden(el.target.checked)} />
                <br /><br />
                {
                    security === "nopass" ? <></> :
                        <>
                            <label htmlFor="password">Password:</label>
                            <input type="text" id="password" onChange={(el) => setPassword(el.target.value)} />
                        </>
                }
            </section><br />
            <section>
                <button onClick={() => {
                    if (!ssid || ssid.length < 2) {
                        console.error("ssid error");
                        return;
                    }
                    if (security !== "nopass") {
                        if (!password || password.length < 8) {
                            console.error("password error");
                            return;
                        }
                    }
                    let data = `WIFI:S:${ssid};T:${security};${security === "nopass" ? "" : "P:" + password + ";"}${hidden ? "H:Y;" : ""};`;
                    setData(data);
                }}>Generate</button>
            </section>
        </>
    );
}