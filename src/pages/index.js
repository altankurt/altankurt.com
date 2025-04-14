/* eslint-disable @next/next/no-sync-scripts */
import Image from 'next/image'
import { useState } from 'react'

export default function Homepage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Bülten aboneliği sırasında bir hata oluştu')
      }

      setStatus('success')
      setEmail('')
    } catch (error) {
      console.error('Subscription error:', error)
      setError(error.message)
      setStatus('error')
    }
  }

  const getButtonContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )
      case 'success':
        return 'Abone Ol'
      case 'error':
        return 'Tekrar Dene'
      default:
        return 'Abone Ol'
    }
  }

  return (
    <section id="homepage" className="py-12 px-6">
      <article className="max-w-4xl mx-auto space-y-6">
        <section className="max-w-5xl space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Hi, I&apos;m Altan!</h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a product manager who focuses on understanding real user needs, aligning
              business goals, and delivering measurable outcomes.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy learning about new technologies and tools, writing articles, and working on
              open-source projects.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My motivation for this website is to showcase my professional journey and, over time,
              to display a reflection of my life and hobbies, such as photography and travel.
            </p>
          </div>

          <div className="pt-4">
            <form onSubmit={handleSubmit} className="space-y-2 max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full sm:w-64 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 placeholder-gray-500 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary transition-colors duration-200 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full sm:w-32 px-4 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 active:bg-primary transition-all duration-200 disabled:opacity-90 disabled:cursor-not-allowed"
                >
                  {getButtonContent()}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-sm text-primary pl-2">
                  Başarıyla abone oldunuz! Bültenimizi takip ettiğiniz için teşekkürler.
                </p>
              )}
              {status === 'error' && <p className="text-sm text-red-500 pl-2">{error}</p>}
            </form>
          </div>
        </section>
      </article>
    </section>
  )
}
