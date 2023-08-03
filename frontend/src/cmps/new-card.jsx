import { SvgCreditProvider } from "./svg-credit-providers";
import { ToggleBtn } from "./toggle-btn";

export function NewCard({ setIsAddCardOpen }) {

    return (
        <div className="new-card">
            <div className="new-card-content-wrapper">
                <div className="card-info-container">
                    <div className="card-info">
                        <span>
                            CREDIT / DEBIT
                        </span>

                        <div className="card-number">
                            <label htmlFor="card-number">Card number</label>
                            <input id="card-number" type="text" placeholder="1234 5678 9012 3456" autoFocus />
                        </div>

                        <div className="card-info-wrapper">
                            <div className="card-expiration">
                                <label htmlFor="card-expiration">Expiration</label>
                                <input id="card-expiration" type="txt" placeholder="MM/YY" />
                            </div>

                            <div className="card-code">
                                <label htmlFor="card-code">Security code</label>
                                <input id="card-code" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <SvgCreditProvider />

                <div className="card-name">
                    <label htmlFor="card-name-input">Card name(optional)</label>
                    <input type="text" id="card-name-input" placeholder="e.g. Company Visa" />
                </div>


                <div className="use-as-default">
                    <label htmlFor="">Use as default</label>
                    <ToggleBtn initState={false} onToggle={() => console.log('toggle')} />
                </div>

                <div className="company-card">
                    <label htmlFor="">Company card</label>
                    <ToggleBtn initState={false} onToggle={() => console.log('toggle')} />
                </div>

                <div className="action-btns">
                    <button className="btn-cancel" onClick={() => setIsAddCardOpen(false)}>
                        Cancel
                    </button>
                    <button className="btn-send">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M9 10a.99.99 0 01-.5.847v.653a.5.5 0 01-1 0v-.653A.99.99 0 017 10a1.001 1.001 0 012 0zM5 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H5V5zm8.5 1H12V5c0-2.206-1.794-4-4-4S4 2.794 4 5v1H2.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5z"></path></svg>
                        <span>Add card</span>
                    </button>
                </div>

                <p className="new-card-info">
                    You can use your debit or credit cards to order with Wolt. Your card will be charged only after an order has been successfully delivered.
                </p>
            </div>
        </div>
    )
}