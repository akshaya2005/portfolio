import { useState} from 'react'

const CORRECT_PASSWORD = import.meta.env.VITE_PASSWORD || 'mibombo'

export default function PasswordGate( { onAuthenticate}) {
    const [input, setInput] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input === CORRECT_PASSWORD) {
            onAuthenticate()
        } else {
            setError('Incorrect password')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-paper">
            <div className="flex flex-col items-center gap-8 max-w-sm px-4">
                <div className="text-center">
                    <h1 className="font-display text-4xl font-bold mb-2 text-ink">Welcome, Dylan</h1>
                    <p className="font-body text-sm text-ink/60">Enter the password to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <input
                        type="password"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                            setError('')
                        }}
                        placeholder="Enter password"
                        className="w-full px-4 py-2 border-2 border-rule rounded-sm font-sans text-sm focus:outline-none focus:border-ink transition-colors"
                        autoFocus
                    />
                    {error && <p className="text-sm text-ink font-sans">{error}</p>}
                    <button
                        type="submit"
                        className="nav-link active"
                    >
                        Enter
                    </button>
                </form>
            </div>
        </div>
    )
}