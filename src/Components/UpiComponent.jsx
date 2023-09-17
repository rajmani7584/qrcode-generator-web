import { useState } from "react";

export default function UpiComponent(props) {

    const [upi, setUpi] = useState();
    const [name, setName] = useState("");
    const setData = props.options.setData;

    return (
        <>
            <section className="DataType">
                <label htmlFor="upi">Upi id:</label>
                <input id="upi" type="text" onChange={(el) => setUpi(el.target.value)} placeholder="example@upi" /><br /><br />
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Optional" onChange={(el) => setName(el.target.value)} />
            </section>
            <br />
            <section>
                <button onClick={() => {
                    if (!/^[_A-Za-z0-9.-]{2,256}@[_A-Za-z0-9._]{2,256}$/.test(upi)) {
                        alert("Please enter valid Upi id");
                        return;
                    }
                    setData(`upi://pay?pa=${upi}&pn=${name}`);
                }}>Generate</button>
            </section>
        </>
    );
}