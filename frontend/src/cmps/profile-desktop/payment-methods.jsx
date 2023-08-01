import { useState } from "react"
import { NewCard } from "../new-card"

export function PaymentMethods() {
    const [isAddCardOpen, setIsAddCardOpen] = useState(false)

    return (
        <div className="payment-methods">
            <div className="payment-methods-content">
                {isAddCardOpen ?
                    <NewCard />
                    :
                    <button onClick={() => setIsAddCardOpen(true)} className="btn-add-card">
                        <svg viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M0 12a1.5 1.5 0 001.5 1.5h8.75a.25.25 0 01.25.25v8.75a1.5 1.5 0 003 0v-8.75a.25.25 0 01.25-.25h8.75a1.5 1.5 0 000-3h-8.75a.25.25 0 01-.25-.25V1.5a1.5 1.5 0 00-3 0v8.75a.25.25 0 01-.25.25H1.5A1.5 1.5 0 000 12z"></path>
                        </svg>
                        <span>
                            Add new card
                        </span>
                    </button>
                }

            </div>
        </div>
    )
}