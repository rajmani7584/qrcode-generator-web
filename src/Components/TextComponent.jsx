import { useState } from "react";

export default function TextComponent(props) {

    const [str, setStr] = useState("");
    const setData = props.options.setData;
    const dataType = props.options.dataType;

    return (
        <>
            <section className="DataType">
                <label htmlFor="txt">{dataType==="URL"?"URL:":"Text:"}</label><br />
                {
                    dataType==="Text"?
                        <textarea onChange={(el) => setStr(el.target.value)} id="txt" rows={4} maxLength={32} style={{ resize: "none", padding: "8px" }}></textarea>:
                        <input id="txt" type="text" onChange={(el) => setStr(el.target.value)} placeholder="https://google.com" />
                }
            </section>
            <br />
            <section>
                <button onClick={() => {
                    if (str.length === 0) {
                        alert("Please enter some text");
                        return;
                    }
                    setData(str);
                }}>Generate</button>
            </section>
        </>
    );
}