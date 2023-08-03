export default function useStaggerAnimation(position: -1 | 1) {
    const variant = {
        visible: {
            transition: { staggerChildren: 0.2 },
        },
        hidden: {},
    }

    const childVariant = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 * position },
    }

    return { variant, childVariant }
}
