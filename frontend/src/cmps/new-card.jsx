export function NewCard() {

    return (
        <div className="new-card">
            <div className="card-info-container">
                <div className="card-info">
                    <span>
                        CREDIT / DEBIT
                    </span>

                    <div className="card-number">
                        <label htmlFor="card-number">Card number</label>
                        <input id="card-number" type="number" placeholder="1234 5678 9012 3456" />
                    </div>

                    <div className="card-info-wrapper">
                        <div className="card-expiration">
                            <label htmlFor="card-expiration">Expiration</label>
                            <input id="card-expiration" type="txt" placeholder="MM/YY" />
                        </div>

                        <div className="card-code">
                            <label htmlFor="card-code">Security code</label>
                            <input id="card-code" type="number" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}