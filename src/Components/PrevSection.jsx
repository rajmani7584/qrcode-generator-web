export default function PrevSection(props) {
    return (
        <section className="PrevSection">
            <section id="prev" className="Prev">
                {props.options.data ? <img alt="QR Code" src={props.options.data} /> : "Generate to view"}
            </section>
            {
                props.options.data ?
                    <div className="Download" onClick={() => {
                         const el = document.createElement('a')
                         el.href = props.options.data;
                         el.download = 'QRCode.png';
                         el.click();
                         }}>
                        <svg viewBox="0 0 100 100">
                            <polygon points="50 10,50 80" strokeWidth="20px" stroke="black" />
                            <polygon points="10 50,90 50,50 90" fill="black" />
                        </svg>
                    </div> : ""
            }
        </section>
    );
}