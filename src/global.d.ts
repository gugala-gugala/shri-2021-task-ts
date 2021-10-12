interface StyleOptions {
    font?: string,
    background?: string,
    effects?: string[]
}

interface FontOptions {
    bold?: boolean,
    italic?: boolean,
    mono?: boolean,
    link?: string
}

interface ColorPull {
    black: string,
    red: string,
    green: string,
    yellow: string,
    blue: string,
    magenta: string,
    cyan: string,
    white: string
}

type ColorPull2 = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
