import { useState } from "react";
import TextComponent from "./TextComponent";
import WifiComponent from "./WifiComponent";
import NotAvailable from "./NotAvailable";
import WhatsAppComponent from "./WhatsAppComponent";
import UpiComponent from "./UpiComponent";

export default function DataSection(props) {
    const setData = props.options.setData;
    const [dataType, setDataType] = useState(props.options.dataTypes[0]);
    return (
        <section className="DataSection">
            <h2>Enter Details:</h2>
            <label htmlFor="data-type">Data Type:</label>
            <select value={dataType} id="data-type" onChange={(el) => {
                setDataType(el.target.value);
                props.options.setData(undefined);
            }}>
                {
                    props.options.dataTypes.map((d, i) => <option value={d} key={i} >{d}</option>)
                }
            </select><br /><br />

            {
                dataType === "Text" ?
                    <TextComponent options={{ setData: setData, dataType: dataType }} /> :
                dataType === "Wifi" ?
                    <WifiComponent options={{ setData: setData }} /> :
                dataType === "URL" ?
                    <TextComponent options={{ setData: setData, dataType: dataType }} /> :
                dataType === "WhatsApp" ?
                    <WhatsAppComponent options={{ setData: setData }} /> :
                dataType === "UPI" ?
                    <UpiComponent options={{ setData: setData }} /> :
                <NotAvailable />
            }

        </section>
    );
}