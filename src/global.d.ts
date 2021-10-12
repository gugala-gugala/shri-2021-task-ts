export type Palette = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
export type Effects = 'bright' | 'dim' | 'italic' | 'underscore' | 'blink';
export type BlackOrWhite = 'black' | 'white';

interface FontOptions {
    bold?: boolean,
    italic?: boolean,
    mono?: boolean,
    link?: string,
    font?: Palette,
    background?: Palette,
    effects?: [Effects]
}
