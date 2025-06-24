"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"

const MathJaxContext = dynamic(
    () => import('nextjs-mathjax').then(mod => mod.MathJaxContext),
    { ssr: false }
)
const MathJax = dynamic(
    () => import('nextjs-mathjax').then(mod => mod.MathJax),
    { ssr: false }
)

export default function MathJaxDemoClient({ html }) {
    const containerRef = useRef(null)

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null

        function tryTypeset() {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([containerRef.current])
            } else {
                // Thử lại sau 100ms nếu MathJax chưa sẵn sàng
                timeout = setTimeout(tryTypeset, 100)
            }
        }

        tryTypeset()
        return () => {
            if (timeout) clearTimeout(timeout)
        }
    }, [html])

    return (
        <MathJaxContext>
            <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
        </MathJaxContext>
    )
}
