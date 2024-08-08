import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { Switch } from '@/components/ui/switch'
import { useMounted } from '@mantine/hooks'
import { Label } from './ui/label'

export const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const mounted = useMounted()

    if (!mounted) return null
    return (
        <>
            <Label htmlFor='theme-switch'>
                <Moon
                    size={20}
                    className={cn(
                        'duration-300 ease-in-out',
                        resolvedTheme === 'dark'
                            ? 'text-primary'
                            : 'text-muted-foreground/50',
                    )}
                />
                <span className='sr-only'>Dark Mode</span>
            </Label>
            <Switch
                id='theme-switch'
                onCheckedChange={() =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
            />
            <Label htmlFor='theme-switch'>
                <Sun
                    size={20}
                    className={cn(
                        'duration-300 ease-in-out',
                        resolvedTheme === 'light'
                            ? 'text-primary'
                            : 'text-muted-foreground/50',
                    )}
                />
                <span className='sr-only'>Light Mode</span>
            </Label>
        </>
    )
}
