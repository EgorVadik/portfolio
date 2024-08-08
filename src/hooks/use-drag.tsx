import { useWindowEvent } from '@mantine/hooks'
import { MouseEvent, Touch, useRef } from 'react'

export const useDrag = () => {
    const track = useRef<HTMLDivElement>(null)

    useWindowEvent('resize', () => {
        if (track.current == null) return
        console.log('resize')

        track.current.dataset.mouseDownAt = '0'
        track.current.dataset.prevPercentage = '0'
        track.current.dataset.percentage = '0'
        track.current.animate(
            {
                transform: `translate(0, 0)`,
            },
            { duration: 1200, fill: 'forwards' },
        )
    })

    const handleOnDown = (e: MouseEvent | Touch) =>
        track.current != null
            ? (track.current.dataset.mouseDownAt = e.clientX.toString())
            : null

    const handleOnUp = () => {
        if (track.current == null) return
        track.current.dataset.mouseDownAt = '0'
        track.current.dataset.prevPercentage = track.current.dataset.percentage
    }

    const handleOnMove = (e: MouseEvent | Touch) => {
        if (track.current == null) return
        if (track.current.dataset.mouseDownAt === '0') return

        const mouseDelta =
                parseFloat(track.current.dataset.mouseDownAt || '0') -
                e.clientX,
            maxDelta = window.innerWidth / 2

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = isNaN(
                parseFloat(track.current.dataset.prevPercentage || '0'),
            )
                ? 0
                : parseFloat(track.current.dataset.prevPercentage || '0') +
                  percentage,
            nextPercentage = Math.max(
                Math.min(nextPercentageUnconstrained, 0),
                -(
                    (track.current.scrollWidth - track.current.clientWidth) /
                    track.current.clientWidth
                ) * 103,
            )

        track.current.dataset.percentage = nextPercentage.toString()

        track.current.animate(
            {
                transform: `translate(${nextPercentage}%, 0%)`,
            },
            { duration: 1200, fill: 'forwards' },
        )

        Array.from(track.current.getElementsByClassName('image')).forEach(
            (image) => {
                image.animate(
                    {
                        objectPosition: `${nextPercentage}% center`,
                    },
                    { duration: 1200, fill: 'forwards' },
                )
            },
        )
    }

    useWindowEvent('mouseleave', handleOnUp)

    return { track, handleOnDown, handleOnUp, handleOnMove }
}
