import { useState } from "react";

export default function WhatsAppComponent(props) {

    const [ mnumber, setmNumber] = useState();
    const [ msg, setMsg ] = useState("");
    const setData = props.options.setData;

    return (
        <>
            <section className="DataType">
                <label htmlFor="num">Number:</label>
                <input id="num" maxLength={16} type="text" onChange={(el) => setmNumber(el.target.value)} placeholder="Number with country code" />
                <br /><br />
                <label htmlFor="msg">Message (Optional)</label><br />
                <textarea id="msg" rows="5" onChange={(el) => setMsg(el.target.value)}></textarea>
            </section>
            <br />
            <section>
                <button onClick={() => {
                    if (!/^[0-9]+$/.test(mnumber)) {
                        alert("Please enter a valid number");
                        return;
                    }
                    setData(`http://wa.me/${mnumber}?text=${msg}`);
                }}>Generate</button>
            </section>
        </>
    );
}